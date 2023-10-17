<script>
import { ref, onMounted, watch, defineProps, toRefs, toRef } from 'vue';
import GLOBALS from '../globals.js'
import { getAccount, waitForTransaction, readContract, disconnect, writeContract, watchAccount, watchNetwork } from '@wagmi/core'
import ERC721 from '../abi/ERC721.json'
import { useRoute } from 'vue-router'
import router from '@/router'

export default {

  setup(props) {

    let initialSlots = ref([]);
    let spinLoading = ref(false);
    let prepNextFrame = ref(false);
    let slots = ref([]);
    let nftId = ref(0);
    let step = ref(1);
    let anim = ref();
    let loading = ref(true);
    let resultItems = ref([])

    const route = useRoute()

    let collections = ref(["body", "helmets", "gear", "extra", "back", "background"])

    function loadInitialSlots(collectionName) {
      initialSlots.value = [];
      let collection = "body"
      if(collectionName) collection = collectionName
      console.log(collection, "collection")
      for(let i = 1; i < 11; i++) {
        initialSlots.value.push({ image: i, collection },)
      }
      slots.value = initialSlots.value;
    }

    function loadAllProperties() {
      step.value = 7;
      for(let i = 1; i < 7; i++) {
          const resultElement = document.getElementById('result' + i);
          let url = `src/assets/${collections.value[i - 1]}/${resultItems.value[i - 1]}.png`
          if(i == 6) {
            // wallpapers are jpg format
            url = `src/assets/${collections.value[i - 1]}/${resultItems.value[i - 1]}.jpg`
          }
          resultElement.style.backgroundImage = "url(" + url + ")"
          resultElement.style.backgroundSize = "cover"

          const resultLabel = document.getElementById(`result${i}label`);
          resultLabel.style.display = "none";
        }
    }

    async function run() {
      nftId.value = route.query.tokenId;
      resultItems.value = await getTraits(route.query.tokenId)
      loadInitialSlots()
      loading.value = false;

      if(route.query.overview == "true") {
        loadAllProperties();
      }

    }
    run()


  function returnToOverview() {
   step.value = 7;
   loadAllProperties()
  }
  async function getTraits(id) {
      try {
          const data = await readContract({
          address: GLOBALS.NFT_ADDRESS,
          abi: ERC721,
          functionName: 'getTraits',
          args: [id]
          })
          if(data) {
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

    function loadNextFrame() {
      let lastStep = step.value
      step.value = lastStep + 1;
      loadInitialSlots(collections.value[step.value -1])
      prepNextFrame.value = false
      anim.value.cancel();

      const resultElement = document.getElementById('result' + lastStep);
      resultElement.style.animation = '';
      resultElement.classList.remove('active');

      const currentResultElement = document.getElementById('result' + step.value);
      currentResultElement.classList.add('active')
    }

    function getRandomIndex(collectionName) {
      const numbers = [];

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

      let collection = collectionSizes.find(obj => obj.collection === collectionName)

      for (let i = 1; i < collection.size + 1; i++) {
        numbers.push(i.toString());
      }

      return numbers[Math.floor(Math.random() * numbers.length)];
    }

    // collection name is name of type eg body, helmet
    // result is the result of the spin eg 5 is id 5 (or /helmet/5.png)
    function spinReels(collectionName, result) {
      spinLoading.value = true
      prepNextFrame.value = true
      let winSlot = document.getElementById('slot42');
      if (winSlot) {
          winSlot.style.border = '2px solid white';
          winSlot.style.animation = '';
      }
      slots.value = []

      for(let i=0; i < initialSlots.value.length; i++) {
        slots.value.push({collection: initialSlots.value[i].collection, image: initialSlots.value[i].image })
      }
      
      for (let i = 0; i < 36; i++) {
        if(i == 32) {
          slots.value.push({ collection: collectionName, image: result });
        } else {
          slots.value.push({ collection: collectionName, image: getRandomIndex(collectionName) });
        }
      }

      const reelElement = document.getElementById('slot-holder');

      const oldDuration = 1;  // Old duration in seconds
      const newDuration = 10;  // New duration in seconds, change this to whatever value you want


      // min-max of needle landing
      const min = 79.52;
      const max = 81.28;
      let range =  Math.random() * (max - min) + min;

      // Calculate new TranslateX value based on the new duration
      const newTranslateXValue = (newDuration / oldDuration) * range
      
        anim.value = reelElement.animate(
        [
            { transform: 'none', filter: 'blur(0)' },
            { filter: 'blur(2px)', offset: 0.5 },
            {
                transform: `translateX(-${newTranslateXValue}%)`,
                filter: 'blur(0)',
            },
        ],
        {
            duration: newDuration * 1000,  // Update duration here
            easing: 'ease-in-out',
            fill: 'forwards' 
        },
      )

      setTimeout(() => {
        let winSlot = document.getElementById('slot42');
        winSlot.style.border = '2px solid #ff0486';
        winSlot.style.animation = 'blinker 2s linear infinite';
        spinLoading.value = false

        const resultElement = document.getElementById('result' + step.value);
        let url = `src/assets/${collections.value[step.value - 1]}/${resultItems.value[step.value - 1]}.png`
        if(step.value == 6) {
          // wallpapers are jpg format
          url = `src/assets/${collections.value[step.value - 1]}/${resultItems.value[step.value - 1]}.jpg`
          localStorage.setItem(route.query.tokenId + '/' + GLOBALS.NFT_ADDRESS, 'true')
        }

        resultElement.style.backgroundImage = "url(" + url + ")"
        resultElement.style.backgroundSize = "cover"
        resultElement.style.animation = 'blinker 2s linear infinite';

        const resultLabel = document.getElementById(`result${step.value}label`);
        resultLabel.style.display = "none";

      }, 10300)
    }

    

    return {
      resultItems,
      collections,
      loadNextFrame,
      prepNextFrame,
      slots,
      spinLoading,
      spinReels,
      step,
      loading,
      returnToOverview,
      nftId
    };
  },
};
</script>

<template>
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
    <div class="spin" >
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
         </div>
  </div>

  <!-- finished character -->
  <div class="page-holder" v-if="step == 7 && !loading">
    <h1>Character #{{nftId}}</h1>
    <div class="char">
      <img :src="`src/assets/background/${resultItems[5]}.jpg`" style="width: 100%; position: absolute; left: 0"/>
      <img :src="`src/assets/back/${resultItems[4]}.png`" style="width: 100%; position: absolute; left: 0"/> 
      <img :src="`src/assets/body/${resultItems[0]}.png`" style="width: 100%; position: absolute; left: 0"> 
      <img :src="`src/assets/helmets/${resultItems[1]}.png`" style="width: 100%; position: absolute; left: 0"/> 
      <img :src="`src/assets/gear/${resultItems[2]}.png`" style="width: 100%; position: absolute; left: 0"/> 
      <img :src="`src/assets/extra/${resultItems[3]}.png`" style="width: 100%; position: absolute; left: 0"/>  
    </div>
    <div>
      <button id="spinButton" style="position: relative;">Respin a trait</button>
      <div>
        <p class="smalltext"><small><i class="fa-solid fa-gift"></i> first respin is free!</small></p>
      </div>
    </div>

  </div>
  <!-- reel -->
  <div class="page-holder" v-if="step != 7 && !loading">
    <h1>NFT Character Creation</h1>
    <h2>Spin {{step}}: {{collections[step - 1]}}</h2>
    <div class="reel-holder">
      <div class="glass-holder"></div>
      <div id="reel">
        <div class="chev">
          <div class="squaretop"></div>
          <div class="squarebottom"></div>
        </div>
        <div id="slot-holder">
          <div
            v-for="(slot, index) in slots"
            :key="index"
            class="slot"
            :id="'slot' + index"
          >
          <!-- <img src="../assets/helmets/1.png" /> -->
          <!-- body -->
          <template v-if="step == 1">
          <img :src="`src/assets/${slot.collection}/${slot.image}.png`"/>
          </template>

          <!-- helmets -->
          <template v-if="step == 2">
            <img :src="`src/assets/body/${resultItems[0]}.png`"> 
            <img :src="`src/assets/${slot.collection}/${slot.image}.png`" style="position: absolute; left: 0"/> 
          </template>

          <!-- gear -->
          <template v-if="step == 3">
            <img :src="`src/assets/body/${resultItems[0]}.png`"> 
            <img :src="`src/assets/helmets/${resultItems[1]}.png`" style="position: absolute; left: 0"/> 
            <img :src="`src/assets/${slot.collection}/${slot.image}.png`" style="position: absolute; left: 0"/> 
          </template>
          <!-- extra needs to move up -->
          <template v-if="step == 4">
            <img :src="`src/assets/body/${resultItems[0]}.png`"> 
            <img :src="`src/assets/helmets/${resultItems[1]}.png`" style="position: absolute; left: 0"/> 
            <img :src="`src/assets/gear/${resultItems[2]}.png`" style="position: absolute; left: 0"/> 
            <img :src="`src/assets/${slot.collection}/${slot.image}.png`" style="position: absolute; left: 0"/>  
          </template>
          <!-- back -->
          <template v-if="step == 5">
            <img :src="`src/assets/${slot.collection}/${slot.image}.png`" style="position: absolute; left: 0"/> 
            <img :src="`src/assets/body/${resultItems[0]}.png`" style="position: absolute; left: 0"/> 
            <img :src="`src/assets/helmets/${resultItems[1]}.png`" style="position: absolute; left: 0"/> 
            <img :src="`src/assets/gear/${resultItems[2]}.png`" style="position: absolute; left: 0"/> 
            <img :src="`src/assets/extra/${resultItems[3]}.png`" style="position: absolute; left: 0"/> 

          </template>
          <!-- background -->
          <template v-if="step == 6">
            <img :src="`src/assets/${slot.collection}/${slot.image}.jpg`" style="position: absolute; left: 0"/>
            <img :src="`src/assets/back/${resultItems[4]}.png`" style="position: absolute; left: 0"/> 
            <img :src="`src/assets/body/${resultItems[0]}.png`" style="position: absolute; left: 0"> 
            <img :src="`src/assets/helmets/${resultItems[1]}.png`" style="position: absolute; left: 0"/> 
            <img :src="`src/assets/gear/${resultItems[2]}.png`" style="position: absolute; left: 0"/> 
            <img :src="`src/assets/extra/${resultItems[3]}.png`" style="position: absolute; left: 0"/>  
          </template>
        </div>
        </div>
      </div>
    </div>
    <button v-if="!spinLoading && !prepNextFrame" id="spinButton" @click="spinReels(collections[step - 1], resultItems[step - 1])">Spin ({{step}}/6)</button>
      <button v-if="spinLoading" id="spinButton">Spinning...</button>
      <button v-if="prepNextFrame && !spinLoading && step != 6" id="spinButton" @click="loadNextFrame()">Next</button>
      <button v-if="prepNextFrame && !spinLoading && step == 6" id="spinButton" @click="returnToOverview()" >Finish</button>

  </div>
</template>

<style lang="scss">
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
 
</style>
<style lang="scss" scoped>
.char {
    margin-top: 50px;
    margin-left: calc(50% - 150px);
    width: 300px;
    height: 300px;
    position: relative;
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
    padding-top: 100px;
    text-align: center;
    color: white;
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
    @media(max-width: 880px) {
      margin-left: 0;
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
    width: 200px;
 }
 .reel-holder {
    margin-left: calc(50% - 480px);
    margin-top: 20px;
    position: relative;

 }
 #reel {
    width: 940px;
    height: 185px;
    padding: 10px;
    border: 2px solid #313e57;
    background-color: #030c14;
    position: relative;
    overflow: hidden;
    
    .chev {
      z-index: 10;
      position: absolute;
      width: 3px;
      height: 800px;
      background-color: #ff0286;
      top: 0;
      left: 54%;
      .squaretop {
        width: 20px;
        height: 20px;
        background-color: #ff0286;
        transform: rotate(45deg);
        position: relative;
        top: -12px;
        left: -8.3px;
      }
      .squarebottom {
        width: 20px;
        height: 20px;
        background-color: #ff0286;
        transform: rotate(45deg);
        position: relative;
        top: 180px;
        left: -8.3px;
      }
    }
    #slot-holder {
      display: flex;
    }
    .slot {
        position: relative;
        border: 2px solid white;
        z-index: 2;
        width: 176px;
        margin-right: 10px;
        flex-shrink: 0;
        height: 176px;
        background-color: white;
        float: left;
        // display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
    }
 }
</style>