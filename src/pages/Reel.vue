<script>
import { ref } from 'vue'
import GLOBALS from '../globals.js'
import { waitForTransaction, readContract, watchAccount, getAccount, writeContract } from '@wagmi/core'
import axios from 'axios'
import ERC20ABI from '../abi/ERC20.json'
import contract from '../abi/contract.json'
import { useRoute } from 'vue-router'
import SlotHolder from '../components/SlotHolder.vue'
import { getRealTrait, getImageUrl, getTraitName, getTraitRarity } from '../helper/traitFinder'

export default {
  components: {
    SlotHolder
  },
  setup () {
    let traitReroll = ref(0)
    let initialSlots = ref([])
    let spinLoading = ref(false)
    let prepNextFrame = ref(false)
    let slots = ref([])
    let nftId = ref(0)
    let step = ref(1)
    let singleTransactionApproval = ref(false)
    let modalActive = ref(false) 
    let startAnimation = ref(false)
    let loading = ref(true)
    let resultItems = ref([])
    let rerollLoading = ref(false)
    let verseAllowance = ref(0)
    let rerollLoadingMessage = ref('')
    let rerollStep = ref(1)
    let accountActive = ref(false)
    let allowanceRequestNeeded = ref(false)
    let rerollCost = ref(0)
    let rerollValue = ref(0)
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
    const route = useRoute()

    watchAccount(async () => {
      if (getAccount().address && getAccount().address.length != undefined) {
        const itemStr = localStorage.getItem(`token/${getAccount().address}`)
        if (!itemStr) {
          window.location.replace('/?auth=true')
        } else {
          const item = JSON.parse(itemStr)
          const now = new Date()
          if (now.getTime() + 1200000 > item.expiry) {
            // add 20 minute buffer
            localStorage.removeItem(`token/${getAccount().address}`)
            window.location.replace('/?auth=true')
          }
        }
        accountActive.value = true
        // getTicketIds()
      } else {
        accountActive.value = false
      }
    })

    async function updateMetaData (tokenId) {
      try {
        let url = `${GLOBALS.BACKEND_URL}/metadata/${tokenId}`
        let auth = localStorage.getItem(`token/${getAccount().address}`)
        if (auth) {
          let headerAuth = JSON.parse(auth)
          let res = await axios.post(
            url,
            {},
            {
              headers: {
                authorization: headerAuth.value
              }
            }
          )
        }
      } catch (e) {
        console.log(e)
      }
    }

    function toggleSingleApproval () {
      singleTransactionApproval.value = !singleTransactionApproval.value
    }

    function loadInitialSlots (collectionName) {
      initialSlots.value = []
      let collection = 'body'
      if (collectionName) collection = collectionName
      for (let i = 1; i < 11; i++) {
        initialSlots.value.push({ itemIndex: i, collection })
      }
      slots.value = initialSlots.value
    }

    async function prepReroll (trait) {
      let rerollArray = await getTraits(route.query.tokenId)
      updateMetaData(route.query.tokenId)
      rerollValue.value = rerollArray[trait]
    }

    async function getRerollCost (id) {
      try {
        rerollLoading.value = true
        rerollLoadingMessage.value = 'getting next reroll cost'
        const data = await readContract({
          address: GLOBALS.NFT_ADDRESS,
          abi: contract,
          functionName: 'getNextRerollPrice',
          args: [id]
        })
        if (data) {
          let dataString = data.toString()
          rerollCost.value = dataString / Math.pow(10, 18)
          rerollLoading.value = false
          rerollLoadingMessage.value = ''
        } else {
          rerollCost.value = 0
          rerollLoadingMessage.value = ''
          rerollLoading.value = false
        }

        if (rerollCost.value > verseAllowance.value) {
          allowanceRequestNeeded.value = true
        } else {
          allowanceRequestNeeded.value = false
        }
      } catch (e) {
        console.log(e)
        rerollLoading.value = false
        rerollLoadingMessage.value = ''
      }
    }

    async function getAllowance () {
      try {
        rerollLoadingMessage.value = 'getting contract allowance'
        rerollLoading.value = true
        const data = await readContract({
          address: '0xc708d6f2153933daa50b2d0758955be0a93a8fec',
          abi: ERC20ABI,
          functionName: 'allowance',
          args: [getAccount().address, GLOBALS.NFT_ADDRESS]
        })

        if (data) {
          let dataString = data.toString()
          verseAllowance.value = parseFloat(dataString) / Math.pow(10, 18)
          rerollLoading.value = false
          rerollLoadingMessage.value = ''
        }
      } catch (e) {
        rerollLoading.value = false
        rerollLoadingMessage.value = ''
        console.log(e)
      }
    }

    async function reroll (trait) {
      rerollLoadingMessage.value = ''
      const { hash } = await writeContract({
        address: GLOBALS.NFT_ADDRESS,
        abi: contract,
        functionName: 'rerollTrait',
        chainId: 137,
        args: [nftId.value, trait]
      })
      rerollLoading.value = true
      await waitForTransaction({ hash })

      rerollLoading.value = false
      rerollStep.value = 2

      let timer = 35
      rerollLoadingMessage.value = `payment success! issuing respin and awaiting final confirmation. Expected arrival in 35 seconds!`
      const countdown = setInterval(() => {
        timer-- // Decrement the timer
        rerollLoadingMessage.value = `payment success! issuing respin and awaiting final confirmation. Expected arrival in ${timer} seconds!`

        if (timer <= 0) {
          clearInterval(countdown)
          rerollStep.value = 3
          rerollLoadingMessage.value = ''

          // the order that smart contracts returns values in is different from roll flow,
          // this array modifies this, similar to getRealTrait
          const stepValue = [5, 4, 0, 2, 1, 3]

          let realTrait = stepValue[trait] // should be
          prepReroll(realTrait)
          step.value = stepValue[trait] + 10
          loadNextFrame()
        }
      }, 1000)
    }

    function loadAllProperties () {
      step.value = 7
      for (let i = 1; i < 7; i++) {
        const resultElement = document.getElementById('result' + i)

        let url = getImageUrl(
          collections.value[i - 1],
          resultItems.value[i - 1]
        )
        resultElement.style.backgroundImage = 'url(' + url + ')'
        resultElement.style.backgroundSize = 'cover'

        const resultLabel = document.getElementById(`result${i}label`)
        resultLabel.style.display = 'none'
      }
    }

    async function approve () {
      let approvalAmount = 30000000000000000000000000000
      if (singleTransactionApproval.value == true) {
        approvalAmount = rerollCost.value
      }

      rerollLoadingMessage.value = 'waiting for wallet approval..'
      rerollLoading.value = true
      const { hash } = await writeContract({
        address: '0xc708d6f2153933daa50b2d0758955be0a93a8fec',
        abi: ERC20ABI,
        functionName: 'approve',
        chainId: 137,
        args: [GLOBALS.NFT_ADDRESS, approvalAmount]
      })

      rerollLoadingMessage.value = 'waiting for wallet approval..'
      await waitForTransaction({ hash })
      rerollLoadingMessage.value =
        'approval done, approve reroll transaction in wallet'
      // need to send them to a submit transaction modal, otherwise they are still on approval modal
      reroll(traitReroll.value)
      rerollLoading.value = false
    }

    async function run (forceLoad) {
      nftId.value = route.query.tokenId
      resultItems.value = await getTraits(route.query.tokenId)
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
          abi: contract,
          functionName: 'getTraitIds',
          args: [id]
        })
        if (data) {
          let traits = getRealTrait(data)
          traits.forEach(dp => {
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
      loading.value = true
      run(true)
    }

    async function toggleModal () {
      modalActive.value = !modalActive.value
      await getAllowance()
      await getRerollCost(nftId.value)
    }

    function loadNextFrame () {
      let lastStep = step.value
      step.value = lastStep + 1

      if (step.value > 10) {
        lastStep = lastStep - 10
      }

      loadInitialSlots(collections.value[step.value - 1])

      prepNextFrame.value = false
      startAnimation.value = false

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

    function capitalize ([first, ...rest], lowerRest = false) {
      return (
        first.toUpperCase() +
        (lowerRest ? rest.join('').toLowerCase() : rest.join(''))
      )
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
          size: 21
        },
        {
          collection: 'extra',
          size: 17
        },
        {
          collection: 'back',
          size: 21
        },
        {
          collection: 'background',
          size: 31
        }
      ]

      let collection = collectionSizes.find(
        obj => obj.collection === collectionName
      )

      for (let i = 0; i < collection.size; i++) {
        numbers.push(i.toString())
      }

      return numbers[Math.floor(Math.random() * numbers.length)]
    }

    function spinReels (collectionName, result) {
      spinLoading.value = true
      prepNextFrame.value = true

      slots.value = [...initialSlots.value] // theres 12 prefilled

      for (let i = 0; i < 36; i++) {
        if (i === 28 - 10) {
          // 28 is result wheel + 12 prefilled
          slots.value.push({ collection: collectionName, itemIndex: result })
        } else {
          slots.value.push({
            collection: collectionName,
            itemIndex: getRandomIndex(collectionName)
          })
        }
      }

      // Clean up after the animation is complete
      startAnimation.value = true
      setTimeout(() => {
        // Update the result element after the animation
        updateResultElement(step.value, result)

        let winSlot = document.getElementById('slot28')
        if (winSlot) {
          winSlot.classList.add('blink')
        }
        spinLoading.value = false
      }, 10000 + 300)
    }

    function updateResultElement (stepNumber, result) {
      if (stepNumber == 6) {
        localStorage.setItem(nftId.value + '/' + GLOBALS.NFT_ADDRESS, 'true')
        updateMetaData(nftId.value)
      }

      let resultElement = document.getElementById('result' + stepNumber)
      if (stepNumber > 10) {
        let realStep = stepNumber - 10
        resultElement = document.getElementById('result' + realStep)
      }

      let url = ''

      if (stepNumber > 10) {
        let realStep = stepNumber - 11
        url = getImageUrl(collections.value[realStep], [result])
      } else {
        url = getImageUrl(
          collections.value[stepNumber - 1],
          resultItems.value[stepNumber - 1]
        )
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
      allowanceRequestNeeded,
      getTraitName,
      updateMetaData,
      spinLoading,
      spinReels,
      step,
      loading,
      returnToOverview,
      nftId,
      traitReroll,
      toggleSingleApproval,
      reroll,
      rerollLoading,
      getImageUrl,
      getTraitRarity,
      capitalize,
      rerollStep,
      approve,
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
      <h3>{{ rerollLoadingMessage }}</h3>
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
        <option :value="0">background</option>
        <option :value="1">back</option>
        <option :value="2">body</option>
        <option :value="3">gear</option>
        <option :value="4">helmets</option>
        <option :value="5">extra</option>
      </select>
      <!-- respin -->
      <button
        v-if="allowanceRequestNeeded == false"
        id="spinButton"
        @click="reroll(traitReroll)"
        style="margin-top: 2px"
      >
        Respin Now
      </button>
      <!-- set allowance and respin -->
      <button
        v-if="allowanceRequestNeeded == true"
        id="spinButton"
        @click="rerollStep = 4"
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
    <!--  reroll allowance -->
    <div class="modal" v-if="rerollStep == 4 && rerollLoading == false">
      <p class="iholder"><i @click="toggleModal()" class="fa fa-times"></i></p>
      <div class="modal-body" style="padding: 0">
        <div class="img-approve"></div>
        <h3 class="title">Approve the use of VERSE</h3>
        <p class="subtext">
          You need to enable the use of at least <span>3000 VERSE</span>. This
          is used to pay for your ticket.
        </p>
        <div class="gift-toggle-holder">
          <h3 class="title">Allow for one transaction only</h3>
          <label class="switch">
            <input type="checkbox" v-on:change="toggleSingleApproval" />
            <span class="slider round"></span>
          </label>
        </div>
        <a class="" target="_blank" @click="approve()"
          ><button class="btn verse-wide">Allow the use of VERSE</button></a
        >
        <p class="modal-footer">
          All tokens on the Polygon network require an approval transaction
          before they can be spent.
          <a
            target="blank"
            href="https://revoke.cash/learn/approvals/what-are-token-approvals"
            >learn more here.</a
          >
        </p>
      </div>
    </div>
  </div>
  <!-- side screen -->
  <div class="results">
    <div class="result active" id="result1">
      <h3 id="result1label">body</h3>
    </div>
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
    <div class="spin" style="margin-top: 100px">
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
        :src="getImageUrl('background', resultItems[5])"
        style="width: 100%; position: absolute; left: 0"
      />
      <img
        :src="getImageUrl('back', resultItems[4])"
        style="width: 100%; position: absolute; left: 0"
      />
      <img
        :src="getImageUrl('body', resultItems[0])"
        style="width: 100%; position: absolute; left: 0"
      />
      <img
        :src="getImageUrl('helmets', resultItems[1])"
        style="width: 100%; position: absolute; left: 0"
      />
      <img
        :src="getImageUrl('gear', resultItems[2])"
        style="width: 100%; position: absolute; left: 0"
      />
      <img
        :src="getImageUrl('extra', resultItems[3])"
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
      <h2 v-if="step < 10" style="margin-bottom: 5px; font-weight: 600">
        Build Your Voyager
      </h2>
      <p style="margin-top: 0px; margin-bottom: 15px">
        <small>Spin the reel to win traits</small>
      </p>

      <button class="bubble" v-if="step < 10" style="margin: 0">
        {{ capitalize(collections[step - 1]) }}
      </button>
      <h2 v-if="step > 9">Respin: {{ collections[step - 11] }}</h2>
      <div id="reel">
        <div class="blur-top"></div>
        <div class="chev">
          <div class="squaretop"></div>
          <div class="squarebottom"></div>
        </div>
        <!-- the items in the reel -->
        <SlotHolder
          :slots="slots"
          :resultItems="resultItems"
          :step="step"
          :startAnimation="startAnimation"
        />
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
        <button v-if="spinLoading" style="opacity: 0.3" id="spinButton">
          Spin ({{ step }} of 6)
        </button>
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
  background: #030c14;
  border: none;
  color: #c5cedb;
  border: none;
  padding: 10px 60px 10px 60px;
  border-radius: 42px;
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 880px) {
    margin-top: 20px;
  }
}

.bubble {
  background: none;
  border: 1px solid white;
  border-radius: 100px;
  color: white;
  height: 32px;
  padding: 8px 22px 8px 22px;
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
  background-image: url('../assets/icons/icn-close-circle.png');
  background-size: cover;
  position: absolute;
  top: 21px;
  right: 50px;
  border-radius: 50%;
  @media (max-width: 880px) {
    top: 15px;
    right: 25px;
  }
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
      top: 0;
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
    top: 100px;
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
}

.blink {
  border: 2px solid #ff0486 !important;
  animation: blinker 2s linear infinite;
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

  @media (max-width: 880px) {
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
    font-size: 20px !important;
  }
  border-radius: 20px;
  padding-top: 22px;
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
  width: 180px;
  background: linear-gradient(
    180deg,
    rgba(3, 12, 20, 0.9) 0%,
    rgba(0, 0, 0, 0) 35.84%,
    rgba(3, 12, 20, 0.9) 78.5%
  );
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
}
</style>
