<script>
import { ref  } from 'vue'
import GLOBALS from '../globals.js'
import {
  waitForTransaction,
  readContract,
  writeContract,
} from '@wagmi/core'
import ERC721 from '../abi/ERC721.json'
import { useRoute } from 'vue-router'

export default {
  setup (props) {
    let traitReroll = ref(0)
    let initialSlots = ref([])
    let spinLoading = ref(false)
    let prepNextFrame = ref(false)
    let slots = ref([])
    let nftId = ref(0)
    let step = ref(1)
    let modalActive = ref(false)
    let startAnimation = ref(false)
    let loading = ref(true)
    let resultItems = ref([])
    let rerollLoading = ref(false)
    let rerollLoadingMessage = ref('')
    let rerollStep = ref(1)
    let rerollValue = ref(0)

    const route = useRoute()

    let collections = ref([
      'body',
      'helmets',
      'gear',
      'extra',
      'back',
      'background',
      '-',
      '-',
      '-',
      '-',
      'body',
      'helmets',
      'gear',
      'extra',
      'back',
      'background'
    ])

    function loadInitialSlots (collectionName) {
      initialSlots.value = []
      let collection = 'body'
      if (collectionName) collection = collectionName
      console.log(collection, 'collection')
      for (let i = 1; i < 11; i++) {
        initialSlots.value.push({ image: i, collection })
      }
      slots.value = initialSlots.value
    }

    async function prepReroll (trait) {
        let rerollArray = await getTraits(route.query.tokenId)
        rerollValue.value = rerollArray[trait]
        console.log("reroll value")
        console.log(rerollArray)
        console.log(trait, "trait")  
    }

    async function reroll (trait) {
      console.log("new trait request")
      console.log(trait, nftId.value)
      console.log("..")
      rerollLoadingMessage.value = ''
      const { hash } = await writeContract({
        address: GLOBALS.NFT_ADDRESS,
        abi: ERC721,
        functionName: 'reroll',
        chainId: 137,
        args: [trait, nftId.value]
      })
      rerollLoading.value = true
      await waitForTransaction({ hash })

      rerollLoading.value = false

      rerollStep.value = 2
      let timer = 35
      rerollLoadingMessage.value = `payment success! issuing respin and awaiting final confirmation. Expected arrival in 20 seconds!`
      const countdown = setInterval(() => {
        timer-- // Decrement the timer
        rerollLoadingMessage.value = `payment success! issuing respin and awaiting final confirmation. Expected arrival in ${timer} seconds!`

        if (timer <= 0) {
          clearInterval(countdown)
          rerollStep.value = 3
          rerollLoadingMessage.value = ''
          // getRerollValue
          prepReroll(trait)
          step.value = parseInt(trait) + 10
          console.log(step.value)
          loadNextFrame()
        }
      }, 1000)
    }

    function loadAllProperties () {
      step.value = 7
      // TODO: change this
      // loadNextFrame()
      for (let i = 1; i < 7; i++) {
        const resultElement = document.getElementById('result' + i)
        let url = `traits/${collections.value[i - 1]}/${
          resultItems.value[i - 1]
        }.png`
        if (i == 6) {
          // wallpapers are jpg format
          url = `traits/${collections.value[i - 1]}/${
            resultItems.value[i - 1]
          }.jpg`
        }
        resultElement.style.backgroundImage = 'url(' + url + ')'
        resultElement.style.backgroundSize = 'cover'

        const resultLabel = document.getElementById(`result${i}label`)
        resultLabel.style.display = 'none'
      }
    }

    async function run (forceLoad) {
      nftId.value = route.query.tokenId
      resultItems.value = await getTraits(route.query.tokenId)
      console.log(resultItems.value)
      loadInitialSlots()
      loading.value = false

      if (route.query.overview == 'true' || forceLoad) {
        loadAllProperties()
        let currentResultElement = document.getElementById('result1')
        currentResultElement.classList.remove('active')
      }
    }
    run()

    function returnToOverview () {
      loadAllProperties()
    }
    async function getTraits (id) {
      try {
        const data = await readContract({
          address: GLOBALS.NFT_ADDRESS,
          abi: ERC721,
          functionName: 'getTraits',
          args: [id]
        })
        if (data) {
          const traits = []
          data.forEach(dp => {
            traits.push(parseInt(dp))
          })
          return traits
        }
      } catch (e) {
        console.log(e)
      }
    }

    function resetRespin () {
      rerollStep.value = 1
      loading.value = true;
      run(true)
    }

    function toggleModal () {
      modalActive.value = !modalActive.value
    }

    function loadNextFrame () {
      let lastStep = step.value
      step.value = lastStep + 1

      if (step.value > 10) {
        lastStep = lastStep - 10;
      }

      loadInitialSlots(collections.value[step.value - 1])
      
      prepNextFrame.value = false
      startAnimation.value = false

      console.log(lastStep)

      const resultElement = document.getElementById('result' + lastStep)
      resultElement.style.animation = ''
      resultElement.classList.remove('active')

      let currentResultElement = document.getElementById('result' + step.value)
      if (step.value > 10) {
        let realStep = parseInt(step.value) - 10
        currentResultElement = document.getElementById('result' + realStep)
      }
      currentResultElement.classList.add('active')
    }

    function getRandomIndex (collectionName) {
      const numbers = []

      let collectionSizes = [
        {
          collection: 'helmets',
          size: 23
        },
        {
          collection: 'body',
          size: 15
        },
        {
          collection: 'gear',
          size: 20
        },
        {
          collection: 'extra',
          size: 15
        },
        {
          collection: 'back',
          size: 20
        },
        {
          collection: 'background',
          size: 24
        }
      ]

      let collection = collectionSizes.find(
        obj => obj.collection === collectionName
      )

      for (let i = 1; i < collection.size + 1; i++) {
        numbers.push(i.toString())
      }

      return numbers[Math.floor(Math.random() * numbers.length)]
    }

    function spinReels (collectionName, result) {
      console.log("spin reel")
      console.log(result)
      console.log(collectionName)
      spinLoading.value = true
      prepNextFrame.value = true

      // let winSlot = document.getElementById('slot28')
      // if (winSlot) {
      //   winSlot.style.border = '2px solid white'
      //   winSlot.style.animation = ''
      // }

      slots.value = [...initialSlots.value] // theres 12 prefilled

      for (let i = 0; i < 36; i++) {
        if (i === (28 - 10)) { // 28 is result wheel + 12 prefilled
          slots.value.push({ collection: collectionName, image: result })
        } else {
          slots.value.push({
            collection: collectionName,
            image: getRandomIndex(collectionName)
          })
        }
      }

      console.log(slots.value)

      // Clean up after the animation is complete
      startAnimation.value = true
      setTimeout(() => {
        // Update the result element after the animation
        updateResultElement(step.value, result)

        let winSlot = document.getElementById('slot28')
        if (winSlot) {
          winSlot.style.border = '2px solid #ff0486'
          winSlot.style.animation = 'blinker 2s linear infinite'
        }
        spinLoading.value = false
      }, 10000 + 300)
    }

    function updateResultElement (stepNumber, result) {

      if(stepNumber == 6) {
        localStorage.setItem(nftId.value + '/' + GLOBALS.NFT_ADDRESS,'true')
      }

      let resultElement = document.getElementById('result' + stepNumber)
      if (stepNumber > 10) {
        let realStep = stepNumber - 10
        resultElement = document.getElementById('result' + realStep)
      }

      let url = `traits/${collections.value[stepNumber - 1]}/${
        resultItems.value[stepNumber - 1]
      }.png`
      if (stepNumber > 10) {
        let realStep = stepNumber - 11
        url = `traits/${collections.value[realStep]}/${result}.png`
      }

      if (stepNumber === 6 || stepNumber === 16) {
        url = `traits/${collections.value[stepNumber - 1]}/${
          resultItems.value[stepNumber - 1]
        }.jpg`
      }

      if (resultElement) {
        resultElement.style.backgroundImage = 'url(' + url + ')'
        resultElement.style.backgroundSize = 'cover'
        resultElement.style.animation = 'blinker 2s linear infinite'
      }

      const resultLabel = document.getElementById(`result${stepNumber}label`)
      if (resultLabel) {
        resultLabel.style.display = 'none'
      }
    }

    return {
      resultItems,
      collections,
      loadNextFrame,
      prepNextFrame,
      slots,
      toggleModal,
      modalActive,
      spinLoading,
      spinReels,
      step,
      loading,
      returnToOverview,
      nftId,
      traitReroll,
      reroll,
      rerollLoading,
      rerollStep,
      rerollLoadingMessage,
      rerollValue,
      startAnimation,
      resetRespin
    }
  }
}
</script>

<template>
  <div class="backdrop" v-if="modalActive">
    <!-- loading -->
    <div class="modal" v-if="rerollLoading == true">
      <p class="iholder"><i @click="toggleModal()" class="fa fa-times"></i></p>
      <h3>Waiting for tx to confirm</h3>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <!-- step 1 -->
    <div class="modal" v-if="rerollStep == 1 && rerollLoading == false">
      <p class="iholder"><i @click="toggleModal()" class="fa fa-times"></i></p>
      <h3>Rerolling a body part</h3>
      <p>Choose which part you want to roll again</p>
      <select v-model="traitReroll" class="trait-selector">
        <option :value="0">body</option>
        <option :value="1">helmet</option>
        <option :value="2">gear</option>
        <option :value="3">extra</option>
        <option :value="4">back</option>
        <option :value="5">background</option>
      </select>
      <button
        id="spinButton"
        @click="reroll(traitReroll)"
        style="margin-top: 2px"
      >
        Respin Now
      </button>
    </div>
    <!-- step 2 -->
    <div class="modal" v-if="rerollStep == 2 && rerollLoading == false">
      <p class="iholder"><i @click="toggleModal()" class="fa fa-times"></i></p>
      <h3>{{ rerollLoadingMessage }}</h3>
    </div>
    <!-- step 3 -->
    <div class="modal" v-if="rerollStep == 3 && rerollLoading == false">
      <p class="iholder"><i @click="toggleModal()" class="fa fa-times"></i></p>
      <h3>Transaction Finished</h3>
      <button
        id="spinButton"
        @click="toggleModal(reset)"
        style="margin-top: 2px"
      >
        Respin Now
      </button>
    </div>
  </div>

  <div class="results">
    <div class="result active" id="result1">
      <h3 id="result1label">body</h3>
    </div>
    <!-- <button v-if="!spinLoading && !prepNextFrame" id="spinButtonSmall">reroll</button> -->
    <div class="result" id="result2">
      <h3 id="result2label">helmet</h3>
    </div>
    <div class="result" id="result3">
      <h3 id="result3label">gear</h3>
    </div>
    <div class="result" id="result4">
      <h3 id="result4label">extra</h3>
    </div>
    <div class="result" id="result5">
      <h3 id="result5label">back</h3>
    </div>
    <div class="result" id="result6">
      <h3 id="result6label">backdrop</h3>
    </div>
  </div>

  <!-- loading -->
  <div class="page-holder" v-if="loading">
    <a href="/tickets"><div class="close-scratch"></div></a>
    <div class="spin">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>

  <!-- finished character -->
  <div class="page-holder" v-if="step == 7 && !loading">
    <a href="/tickets"><div class="close-scratch"></div></a>
    <button class="name-label">VOYAGER #{{ nftId }}</button>
    <div class="char">
      <img
        :src="`traits/background/${resultItems[5]}.jpg`"
        style="width: 100%; position: absolute; left: 0"
      />
      <img
        :src="`traits/back/${resultItems[4]}.png`"
        style="width: 100%; position: absolute; left: 0"
      />
      <img
        :src="`traits/body/${resultItems[0]}.png`"
        style="width: 100%; position: absolute; left: 0"
      />
      <img
        :src="`traits/helmets/${resultItems[1]}.png`"
        style="width: 100%; position: absolute; left: 0"
      />
      <img
        :src="`traits/gear/${resultItems[2]}.png`"
        style="width: 100%; position: absolute; left: 0"
      />
      <img
        :src="`traits/extra/${resultItems[3]}.png`"
        style="width: 100%; position: absolute; left: 0"
      />
    </div>
    <div>
      <button id="spinButton" @click="toggleModal()" style="position: relative">
        Respin a trait
      </button>
      <div>
        <p class="smalltext">
          <small><i class="fa-solid fa-gift"></i> first respin is free!</small>
        </p>
      </div>
    </div>
  </div>
  <!-- reel -->
  <div class="page-holder" v-if="step != 7 && !loading">
    <a href="/tickets"><div class="close-scratch"></div></a>
    <div class="reel-holder">
      <h2 v-if="step < 10" style="margin-bottom: 0; font-weight: 600;">Character Creator</h2>
      <p style="margin-top: 0px; margin-bottom: 20px;"><small>Spin the reel 6 times to complete your voyager</small></p>

      <button class="bubble" v-if="step < 10" style="margin: 0">{{ collections[step - 1] }}</button>
      <h2 v-if="step > 9">Respin: {{ collections[step - 11] }}</h2>
      <div id="reel">
        <div class="blur-top"></div>
        <div class="chev">
          <div class="squaretop"></div>
          <div class="squarebottom"></div>
        </div>

        <div id="slot-holder" :class="{ 'spin-anim': startAnimation }">
          <div
            v-for="(slot, index) in slots"
            :key="index"
            class="slot"
            :id="'slot' + index"
          >
            <!-- <img src="../assets/helmets/1.png" /> -->
            <!-- body -->
            <template v-if="step == 1">
              <img :src="`traits/${slot.collection}/${slot.image}.png`" />
            </template>

            <!-- helmets -->
            <template v-if="step == 2">
              <img :src="`traits/body/${resultItems[0]}.png`" />
              <img v-if="index != 1"
                :src="`traits/${slot.collection}/${slot.image}.png`"
                style="position: absolute; left: 0"
              />
            </template>

            <!-- gear -->
            <template v-if="step == 3">
              <img :src="`traits/body/${resultItems[0]}.png`" />
              <img
                :src="`traits/helmets/${resultItems[1]}.png`"
                style="position: absolute; left: 0"
              />
              <img v-if="index != 1"
                :src="`traits/${slot.collection}/${slot.image}.png`"
                style="position: absolute; left: 0"
              />
            </template>
            <!-- extra needs to move up -->
            <template v-if="step == 4">
              <img :src="`traits/body/${resultItems[0]}.png`" />
              <img
                :src="`traits/helmets/${resultItems[1]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/gear/${resultItems[2]}.png`"
                style="position: absolute; left: 0"
              />
              <img v-if="index != 1"
                :src="`traits/${slot.collection}/${slot.image}.png`"
                style="position: absolute; left: 0"
              />
            </template>
            <!-- back -->
            <template v-if="step == 5">
              <img v-if="index != 1"
                :src="`traits/${slot.collection}/${slot.image}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/body/${resultItems[0]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/helmets/${resultItems[1]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/gear/${resultItems[2]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/extra/${resultItems[3]}.png`"
                style="position: absolute; left: 0"
              />
            </template>
            <!-- background -->
            <template v-if="step == 6">
              <img v-if="index != 1"
                :src="`traits/${slot.collection}/${slot.image}.jpg`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/back/${resultItems[4]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/body/${resultItems[0]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/helmets/${resultItems[1]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/gear/${resultItems[2]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/extra/${resultItems[3]}.png`"
                style="position: absolute; left: 0"
              />
            </template>

            <!-- rerolls -->
            <!-- reroll body -->
            <template v-if="step == 11">
              <img
                :src="`traits/background/${resultItems[5]}.jpg`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/back/${resultItems[4]}.png`"
                style="position: absolute; left: 0"
              />
              <img v-if="index != 1"
                :src="`traits/${slot.collection}/${slot.image}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/helmets/${resultItems[1]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/gear/${resultItems[2]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/extra/${resultItems[3]}.png`"
                style="position: absolute; left: 0"
              />
            </template>
            <!-- reroll helmet -->
            <template v-if="step == 12">
              <img
                :src="`traits/background/${resultItems[5]}.jpg`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/back/${resultItems[4]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/body/${resultItems[0]}.png`"
                style="position: absolute; left: 0"
              />
              <img v-if="index != 1"
                :src="`traits/${slot.collection}/${slot.image}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/gear/${resultItems[2]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/extra/${resultItems[3]}.png`"
                style="position: absolute; left: 0"
              />
            </template>
            <!-- reroll gear -->
            <template v-if="step == 13">
              <img
                :src="`traits/background/${resultItems[5]}.jpg`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/back/${resultItems[4]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/body/${resultItems[0]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/helmets/${resultItems[1]}.png`"
                style="position: absolute; left: 0"
              />
              <img v-if="index != 1"
                :src="`traits/${slot.collection}/${slot.image}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/extra/${resultItems[3]}.png`"
                style="position: absolute; left: 0"
              />
            </template>
            <!-- reroll extra -->
            <template v-if="step == 14">
              <img
                :src="`traits/background/${resultItems[5]}.jpg`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/back/${resultItems[4]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/body/${resultItems[0]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/helmets/${resultItems[1]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/gear/${resultItems[2]}.png`"
                style="position: absolute; left: 0"
              />
              <img v-if="index != 1"
                :src="`traits/${slot.collection}/${slot.image}.png`"
                style="position: absolute; left: 0"
              />
            </template>
            <!-- reroll back -->
            <template v-if="step == 15">
              <img
                :src="`traits/background/${resultItems[5]}.jpg`"
                style="position: absolute; left: 0"
              />
              <img v-if="index != 1"
                :src="`traits/${slot.collection}/${slot.image}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/body/${resultItems[0]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/helmets/${resultItems[1]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/gear/${resultItems[2]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/extra/${resultItems[3]}.png`"
                style="position: absolute; left: 0"
              />
            </template>
            <!-- reroll background -->
            <template v-if="step == 16">
              <img v-if="index != 1"
                :src="`traits/${slot.collection}/${slot.image}.jpg`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/back/${resultItems[4]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/body/${resultItems[0]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/helmets/${resultItems[1]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/gear/${resultItems[2]}.png`"
                style="position: absolute; left: 0"
              />
              <img
                :src="`traits/extra/${resultItems[3]}.png`"
                style="position: absolute; left: 0"
              />
            </template>
          </div>
        </div> 
      </div>



      <div v-if="step > 10">
      <button
        v-if="!spinLoading && !prepNextFrame"
        id="spinButton"
        @click="spinReels(collections[step - 11], rerollValue)"
      >
        Respin {{ collections[step - 11] }}
      </button>
      <button
        v-if="prepNextFrame && !spinLoading"
        id="spinButton"
        @click="resetRespin()"
      >
        Finish
      </button>
    </div>

    <div v-if="step < 7">
      <button
        v-if="!spinLoading && !prepNextFrame"
        id="spinButton"
        @click="spinReels(collections[step - 1], resultItems[step - 1])"
      >
        Spin ({{ step }} of 6)
      </button>
      <button v-if="spinLoading" style="opacity: 0.3" id="spinButton">Spin ({{ step }} of 6)</button>
      <button
        v-if="prepNextFrame && !spinLoading && step != 6"
        id="spinButton"
        @click="loadNextFrame()"
      >
        Next
      </button>
      <button
        v-if="prepNextFrame && !spinLoading && step == 6"
        id="spinButton"
        @click="returnToOverview()"
      >
        Finish
      </button>
        </div>
    </div>


  </div>
</template>

<style lang="scss" scoped>

.name-label {
  background: #030C14;
  border: none;
  color: #C5CEDB;
  border: none;
  padding: 10px 60px 10px 60px;
  border-radius: 42px;
  font-size: 14px;
  font-weight: 400;
  @media(max-width: 880px) {
    margin-top: 20px;
  }
}

.bubble {
  background: none;
  border: 1px solid white;
  border-radius: 100px;
  color: white;
  height: 32px;
  padding: 8px 20px 8px 20px;
}
@keyframes reel-spin {
  0% {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    // filter: blur(0); // todo this is buggy in IOS
  }
  50% {
    // filter: blur(2px);
  }
  100% {
    transform: translate3d(0, -5000px, 0);
    -ms-transform: translate3d(0, -5000px, 0);
    -webkit-transform: translate3d(0, -5000px, 0);
    -moz-transform: translate3d(0, -5000px, 0);
    -o-transform: translate3d(0, -5000px, 0);
    // filter: blur(0);
  }
}

.spin-anim {
  -webkit-animation: reel-spin 10s ease-in-out forwards;
  animation: reel-spin 10s ease-in-out forwards;
}

.close-scratch {
    cursor: pointer;
    width: 34px;
    height: 34px;
    background-image: url("../assets/icons/icn-close-circle.png");
    background-size: cover;
    position: absolute;
    top: 21px;
    right: 50px;
    border-radius: 50%;
}

.trait-selector {
  appearance: none;
  height: 32px;
  margin-right: 5px;
  font-size: 15px;
  color: black;
  font-weight: 500;
  color: white;
  background-color: #2e2c3c;
  width: 250px;
  text-align: center;
  margin-bottom: 10px;
  outline: none;
  border: none;
  border-radius: 25px;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #4343438f;
  z-index: 20;

  .modal {
    position: relative;
    text-align: center;
    @media (max-width: 880px) {
      position: absolute;
      width: 90%;
      left: 0;
      padding: 5%;
    }

    @media (max-height: 800px) {
      top: 100px;
    }

    @media (max-height: 600px) {
      top: 55px !important;
    }

    box-shadow: 0 0 20px rgba(17, 17, 29, 0.7);
    width: 450px;
    position: absolute;
    left: calc(50% - 225px);
    top: 150px;

    background-color: #1c1b21;
    border-radius: 5px;
    padding: 30px;
    h3 {
      margin-top: 0;
      color: white;
    }
    p {
      color: white;
    }
    p.iholder {
      text-align: right;
      margin-top: 0;
      margin-right: 5px;
      margin-bottom: 0;
      color: white;
      i {
        cursor: pointer;
      }
    }
  }
}

.smalltext {
  margin-top: 10px;
}
.free {
  background-color: red;
  color: white;
  position: relative;
  width: 200px;
  left: 0;
}
.results {
  height: 550px;
  background-color: #0f1823;
  width: 100px;
  border: 1px solid #313e57;
  position: fixed;
  right: 50px;
  top: 100px;
  @media (max-width: 880px) {
    display: none;
  }
  h3 {
    position: absolute;
    top: 17px;
    left: 0;
    text-align: center;
    width: 80px;
    color: #294258;
    text-align: center;
    font-size: 13px;
  }
  .result {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 10px;
    background-color: #030c14;

    &.active {
      border: 1px solid #68284a;
    }
  }
}
@keyframes blinker {
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
</style>
<style lang="scss" scoped>
.char {
  margin-top: 150px;
  margin-left: calc(50% - 150px);
  width: 300px;
  height: 300px;
  position: relative;
  img {
    border-radius: 10px;
  }
}
h1 {
  margin-top: 0;
  margin-bottom: 5px;
}

h2 {
  margin-top: 0;
  font-weight: 300;
  font-size: 18px;
}
.page-holder {
  padding-top: 20px;
  text-align: center;
  color: white;
  background-image: url('../assets/bg-blur-dark.png');
  height: 100vh;
  height: 100dvh;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  
  @media(max-width: 880px) {
    padding-top: 0;
  }
}
#spinButtonSmall {
  border: none;
  outline: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  text-align: center;
  font-size: 10px;
  padding: 0px 8px;
  height: 18px;
  border-radius: 16px;
  color: rgb(255, 255, 255);
  background: linear-gradient(rgb(14, 190, 240) 0%, rgb(0, 133, 255) 100%);
  width: 80px;
  margin-top: 0;
  margin-bottom: 10px;
  margin-left: 10px;
}
#spinButton {
  margin-left: 0;
  @media (max-width: 880px) {
    margin-left: 0;
    width: 80%;
  }
  margin-top: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  text-align: center;
  font-size: 14px;
  padding: 0px 8px;
  height: 36px;
  border-radius: 16px;
  color: rgb(255, 255, 255);
  background: linear-gradient(rgb(14, 190, 240) 0%, rgb(0, 133, 255) 100%);
  width: 300px;
}
.reel-holder {
  h2 {
    font-size: 20px!important;
  }
  border-radius: 20px;
  padding-top: 30px;
  margin-top: 50px;
  background-color: black;
  margin-left: calc(50% - 200px);
  width: 400px;
  padding-bottom: 54px;
  @media (max-width: 880px) {
    width: 100%;
    min-height: 100vh;
    border-radius: 0;
    padding-bottom: 100px;
    margin: 0;
  }
}

.blur-top {
  height: 435px;
  width:  180px;
  background: 
  linear-gradient(
    180deg, rgba(3, 12, 20, 0.9) 0%, rgba(0, 0, 0, 0) 35.84%, rgba(3, 12, 20, 0.9) 78.5%);
  position: absolute;
  top: 0;
  left: calc(50% - 90px);
  z-index: 2;
}
#reel {
  width: calc(100% - 100px); 
  border-radius: 10px;
  height: 435px;
  background-color: #000000;
  position: relative;
  overflow: hidden;
  margin: 50px;
  margin-bottom: 0;
  margin-top: 30px;

  .chev {
    // z-index: 10;
    // position: absolute;
    // width: 3px;
    // height: 800px;
    // background-color: #ff0286;
    // top: 0;
    // left: 54%;
    .squaretop {
      width: 14px;
      height: 14px;
      background-color: #ff0286;
      transform: rotate(45deg);
      position: absolute;
      top: 160px;
      left: -9px;
     border: 2px solid #163756;
    }
    .squarebottom {
      width: 14px;
      height: 14px;
      background-color: #ff0286;
      transform: rotate(45deg);
      position: absolute;
      top: 160px;
      right: -9px;
     border: 2px solid #163756;
  

    }
  }
  #slot-holder {
    will-change: transform;
    display: flex;
    padding-left: calc(50% - 90px);
    flex-direction: column;
    margin-top: -100px;
  }
  .slot {
    position: relative;
    z-index: 2;
    width: 180px;
    flex-shrink: 0;
    height: 180px;
    background-color: #0f1823;
    margin-bottom: 4px;
    float: left;
    // display: inline-block;
    img {
      width: 100%;
      height: 100%;
      
    }
  }
}
</style>
