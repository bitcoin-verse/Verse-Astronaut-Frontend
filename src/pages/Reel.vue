<script>
import { ref } from 'vue'
import GLOBALS from '../globals.js'
import { waitForTransactionReceipt, readContract, watchAccount, switchChain, getChainId, getAccount, writeContract } from '@wagmi/core'
import axios from 'axios'
import ERC20ABI from '../abi/ERC20.json'
import contract from '../abi/contract.json'
import { useRoute } from 'vue-router'
import SlotHolder from '../components/SlotHolder.vue'
import { getRealTrait, getImageUrl, getThumb, getImageUrlLarge, getTraitName, getTraitRarity } from '../helper/traitFinder'
import { useSound } from '@vueuse/sound'
import sfxSpin from '../assets/spin.wav'
import sfxTada from '../assets/tada.wav'
import core from '../core.js'

export default {
  components: {
    SlotHolder
  },

  setup () {
    
    let traitReroll = ref(2)
    let initialSlots = ref([])
    let correctNetwork = ref(true)
    let socialModal = ref(false)
    let spinLoading = ref(false)
    let prepNextFrame = ref(false)
    let slots = ref([])
    let nftId = ref(0)
    let step = ref(1)
    let animationClass = ref('spin-anim-0')
    let txHash = ref("")
    let showTimer = ref(false)
    let singleTransactionApproval = ref(false)
    let modalActive = ref(false)  // false
    let startAnimation = ref(false)
    let loading = ref(true)
    let resultItems = ref([])
    let rerollLoading = ref(false) // false
    let syncing = ref(false)
    let verseAllowance = ref(0)
    let verseBalance = ref(0)
    let rerollLoadingMessage = ref('')
    let rerollStep = ref(1)
    let accountActive = ref(false)
    let currentRespinCollection = ref(0)
    let currentRespinValue = ref(0)
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


    const initialize = async () => {
      console.log(getAccount(core.wagmiConfig).address, "initializing")
      if (getAccount(core.wagmiConfig).address && getAccount(core.wagmiConfig).address.length != undefined) {
        const itemStr = localStorage.getItem(`token/prod/${getAccount(core.wagmiConfig).address}`)
        
        if (!itemStr) {
          // show warning and have them return to starting screen
          window.location.replace('/?auth=true')
        } else {
          const item = JSON.parse(itemStr)
          const now = new Date()
          if (now.getTime() + 1200000 > item.expiry) {
            // add 20 minute buffer
            localStorage.removeItem(`token/prod/${getAccount(core.wagmiConfig).address}`)
            // show warning and have them return to starting screen
            window.location.replace('/?auth=true')
          }
        }
        accountActive.value = true
      } else {
        window.location.replace('/?auth=true')
        accountActive.value = false
      }
    }
    initialize()

    correctNetwork.value = getChainId(core.wagmiConfig) === 137;

    watchAccount(core.wagmiConfig, { async onChange(account) {
      correctNetwork.value = account.chainId === 137

      if (getAccount(core.wagmiConfig).address && getAccount(core.wagmiConfig).address.length != undefined) {
        const itemStr = localStorage.getItem(`token/prod/${getAccount(core.wagmiConfig).address}`)
        if (!itemStr) {
          window.location.replace('/?auth=true')
        } else {
          const item = JSON.parse(itemStr)
          const now = new Date()
          if (now.getTime() + 1200000 > item.expiry) {
            // add 20 minute buffer
            localStorage.removeItem(`token/prod/${getAccount(core.wagmiConfig).address}`)
            window.location.replace('/?auth=true')
          }
        }
        accountActive.value = true
        // getTicketIds()
      } else {
        accountActive.value = false
        console.log("not active")
      }
    }})

    async function updateMetaData (tokenId) {
      try {
        syncing.value = true;
        let url = `${GLOBALS.BACKEND_URL}/metadata/${tokenId}`
        let auth = localStorage.getItem(`token/prod/${getAccount(core.wagmiConfig).address}`)
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
      rerollValue.value = rerollArray[trait]
      updateMetaData(nftId.value)
    }

    function toggleSocial () {
      socialModal.value = !socialModal.value
    }

    async function getRerollCost (id) {
      try {
        rerollLoading.value = true
        rerollLoadingMessage.value = 'Retrieving next reroll cost'
        const data = await readContract(core.wagmiConfig, {
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

    async function getBalance () {
      try {
        // step 1, check balance of Verse token
        rerollLoadingMessage.value = 'Retrieving account balance'
        rerollLoading.value = true
        const data = await readContract(core.wagmiConfig, {
          address: '0xc708d6f2153933daa50b2d0758955be0a93a8fec',
          abi: ERC20ABI,
          functionName: 'balanceOf',
          args: [getAccount(core.wagmiConfig).address]
        })

        if (data) {
          let dataString = data.toString()
          verseBalance.value = parseFloat(dataString) / Math.pow(10, 18)
          rerollLoading.value = false
        } else {
          verseBalance.value = 0;
          rerollLoading.value = false

        }
      } catch (e) {
        console.log(e)
        rerollLoading.value = false
      }
    }

    async function getAllowance () {
      try {
        rerollLoadingMessage.value = 'Retrieving contract allowance'
        rerollLoading.value = true
        const data = await readContract(core.wagmiConfig, {
          address: '0xc708d6f2153933daa50b2d0758955be0a93a8fec',
          abi: ERC20ABI,
          functionName: 'allowance',
          args: [getAccount(core.wagmiConfig).address, GLOBALS.NFT_ADDRESS]
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
      txHash.value = ""
      rerollLoadingMessage.value = ''
      rerollLoadingMessage.value = "Confirm transaction in your wallet"
      const hash = await writeContract(core.wagmiConfig, {
        address: GLOBALS.NFT_ADDRESS,
        abi: contract,
        functionName: 'rerollTrait',
        chainId: 137,
        args: [nftId.value, trait]
      })
      txHash.value = hash
      rerollLoading.value = true
      rerollLoadingMessage.value = "Waiting for transaction to confirm"
      await waitForTransactionReceipt(core.wagmiConfig, { hash })

      rerollLoading.value = false
      rerollStep.value = 2

      let timer = 35
      showTimer.value = true
      rerollLoadingMessage.value = `Expected arrival in 35 seconds!`
      const countdown = setInterval(() => {
        timer-- // Decrement the timer
        rerollLoadingMessage.value = `Expected arrival in ${timer} seconds!`

        if (timer <= 0) {
          clearInterval(countdown)
          showTimer.value = false
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
        resultLabel.classList.add("done")

        const resultLock = document.getElementById(`result${i}lock`)
        resultLock.style.display = 'none'
      }
    }

    async function approve () {
      txHash.value = ""
      let approvalAmount = 100000000000000000000000000000
      if (singleTransactionApproval.value == true) {
        approvalAmount = rerollCost.value * Math.pow(10,18)
      }

      rerollLoadingMessage.value = 'waiting for wallet approval..'
      rerollLoading.value = true
      const hash = await writeContract(core.wagmiConfig, {
        address: '0xc708d6f2153933daa50b2d0758955be0a93a8fec',
        abi: ERC20ABI,
        functionName: 'approve',
        chainId: 137,
        args: [GLOBALS.NFT_ADDRESS, approvalAmount]
      })
      txHash.value = hash

      rerollLoadingMessage.value = 'waiting for wallet approval..'
      await waitForTransactionReceipt(core.wagmiConfig, { hash })
      setTimeout(async () => {
        await getAllowance()
        rerollLoadingMessage.value =
          'approval done, approve reroll transaction in wallet'
        rerollStep.value = 1
        reroll(traitReroll.value)
        rerollLoading.value = false
      }, 5000)
    }

    async function run (forceLoad) {
      nftId.value = route.query.tokenId
      resultItems.value = await getTraits(route.query.tokenId)
      loadInitialSlots()
      loading.value = false

      console.log("RUN")

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
        const data = await readContract(core.wagmiConfig, {
          address: GLOBALS.NFT_ADDRESS,
          abi: contract,
          functionName: 'getTraitIds',
          args: [id]
        })
        if (data) {
          let traits = getRealTrait(data)
          let realTraits = []
          traits.forEach(dp => {
            realTraits.push(parseInt(dp))
          })
          console.log(realTraits)
          return realTraits
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
      await getBalance()
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

      playSfxSpin();
      // generate new animation
      const randomNumber = Math.floor(Math.random() * 7); 
      animationClass.value = `spin-anim-${randomNumber}`;

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
        stopSfxSpin();
        // Update the result element after the animation
        updateResultElement(step.value, result)

        let winSlot = document.getElementById('slot28')
        if (winSlot) {
          winSlot.classList.add('blink')
        }
        spinLoading.value = false

        playSfxTada();
      }, 8000 + 300)
    }

    function goOverView (reroll, collection, value) {
      if(reroll) {
        rerollStep.value = 71
        currentRespinCollection.value = collection
        currentRespinValue.value = value
      } else {
        rerollStep.value = 70;
      }
      modalActive.value = true;
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
        url = getThumb(collections.value[realStep], [result])
      } else {
        url = getThumb(
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
        resultLabel.classList.add("done")
      }
      const resultLock = document.getElementById(`result${stepNumber}lock`)
      if (resultLock) {
        resultLock.style.display = 'none'
      }
    }

    const { play: playSfxSpin, stop: stopSfxSpin } = useSound(sfxSpin);
    const { play: playSfxTada } = useSound(sfxTada);


    async function requestNetworkChange () {
      await switchChain(core.wagmiConfig, { chainId: 137 })
    }

    return {
      playSfxSpin,
      playSfxTada,
      verseBalance, 
      stopSfxSpin,
      resultItems,
      collections,
      requestNetworkChange,
      loadNextFrame,
      goOverView,
      prepNextFrame,
      showTimer,
      animationClass,
      slots,
      toggleModal,
      modalActive,
      allowanceRequestNeeded,
      getTraitName,
      updateMetaData,
      spinLoading,
      syncing,
      spinReels,
      step,
      loading,
      returnToOverview,
      GLOBALS,
      nftId,
      traitReroll,
      toggleSingleApproval,
      reroll,
      correctNetwork,
      currentRespinCollection,
      currentRespinValue,
      rerollLoading,
      getImageUrl,
      getImageUrlLarge,
      getTraitRarity,
      capitalize,
      getThumb,
      rerollCost,
      rerollStep,
      approve,
      rerollLoadingMessage,
      rerollValue,
      startAnimation,
      txHash,
      resetRespin,
      socialModal,
      toggleSocial
    }
  }
}
</script>

<template>

  <div class="backdrop" v-if="socialModal">
    <!-- social -->
    <div class="modal" style="padding: 0" v-if="socialModal && !modalActive">
      <div class="modal-head">
        <h3 class="title" style="text-align: left;">Share your Voyager</h3>
        <div class="modal-divider">
        <div class="modal-progress p25"></div>
        </div>
        <p class="iholder">
          <i @click="toggleSocial()" class="close-btn"></i>
        </p>
      </div>
      <div class="modal-body short" style="padding-bottom: 20px!important;"> 
        <a class="" target="_blank"><button class="btn verse-wide" style="margin-top: 0; background: black; border: 1px solid white;">Share on X</button></a>
      </div>
    </div> 
  </div>
  <div class="backdrop" v-if="modalActive">


        <!-- reroll overview -->
      <div class="modal summary" v-if="rerollStep == 71 && modalActive &&  rerollLoading == false">
      <div class="char mini">
            <img v-if="currentRespinCollection != 'background'"
              :src="getImageUrl('background', resultItems[5])"
              style="width: 100%; position: absolute; left: 0"
            />
            <img v-if="currentRespinCollection == 'background'"
              :src="getImageUrl('background', currentRespinValue)"
              style="width: 100%; position: absolute; left: 0"
            />
            <img v-if="currentRespinCollection != 'back'"
              :src="getImageUrl('back', resultItems[4])"
              style="width: 100%; position: absolute; left: 0"
            />
            <img v-if="currentRespinCollection == 'back'"
              :src="getImageUrl('back', currentRespinValue)"
              style="width: 100%; position: absolute; left: 0"
            />
            <img  v-if="currentRespinCollection != 'body'"
              :src="getImageUrl('body', resultItems[0])"
              style="width: 100%; position: absolute; left: 0"
            />
            <img v-if="currentRespinCollection == 'body'"
              :src="getImageUrl('body', currentRespinValue)"
              style="width: 100%; position: absolute; left: 0"
            />
            <img  v-if="currentRespinCollection != 'gear'"
              :src="getImageUrl('gear', resultItems[2])"
              style="width: 100%; position: absolute; left: 0"
            />
            <img v-if="currentRespinCollection == 'gear'"
              :src="getImageUrl('gear', currentRespinValue)"
              style="width: 100%; position: absolute; left: 0"
            />
            <img  v-if="currentRespinCollection != 'helmets'"
              :src="getImageUrl('helmets', resultItems[1])"
              style="width: 100%; position: absolute; left: 0"
            />
            <img v-if="currentRespinCollection == 'helmets'"
              :src="getImageUrl('helmets', currentRespinValue)"
              style="width: 100%; position: absolute; left: 0"
            />
            <img v-if="currentRespinCollection != 'extra'"
              :src="getImageUrl('extra', resultItems[3])"
              style="width: 100%; position: absolute; left: 0"
            />
            <img v-if="currentRespinCollection == 'extra'"
              :src="getImageUrl('extra', currentRespinValue)"
              style="width: 100%; position: absolute; left: 0"
            />
            <img v-if="resultItems.length == 7"
              :src="getImageUrl('badge', resultItems[6])"
              style="width: 100%; position: absolute; left: 0"
            />
         </div>
         <h2>You have received a new trait</h2>
         <div class="trait-list">
          <table>
              <tr>
                <td class="key">Item Name</td>
                <td class="value" style="padding-right: 0">{{ getTraitName(currentRespinCollection, currentRespinValue)}}</td>
              </tr>
              <tr>
                <td class="key">Item Type</td>
                <td class="value" style="padding-right: 0">{{ capitalize(currentRespinCollection) }}</td>
              </tr>
              <tr>
                <td class="key">Item Rarity</td>
                <td class="value" style="padding-right: 0"><div :class="'dot left ' + getTraitRarity(currentRespinCollection, currentRespinValue)"></div> {{ capitalize(getTraitRarity(currentRespinCollection, currentRespinValue))}}</td>
              </tr>
          </table>
         </div>

         <div class="legend">
          <h4 class='trait-rarity common'><div class="spot"></div> <p>common</p></h4>
          <h4 class='trait-rarity rare'><div class="spot"></div> <p>rare</p></h4>
          <h4 class='trait-rarity epic'><div class="spot"></div> <p>epic</p></h4>
         </div>

         <div>
          <button id="spinButton" @click="resetRespin()" style="width: 100%; margin-top: 10px; position: relative">
            Re-Spin Another Trait
          </button>
          <div>
            <a :href="`/reel?tokenId=${nftId}&overview=true`"><button id="spinButton" class="opensea" style="width: 100%; position: relative">
           View My Voyager
          </button></a>
        </div>
      </div>
    </div>
    <!-- summary overview -->
    <div class="modal summary" v-if="rerollStep == 70 && rerollLoading == false">
      <div class="char mini">
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
              :src="getImageUrl('gear', resultItems[2])"
              style="width: 100%; position: absolute; left: 0"
            />
            <img
              :src="getImageUrl('helmets', resultItems[1])"
              style="width: 100%; position: absolute; left: 0"
            />
            <img
              :src="getImageUrl('extra', resultItems[3])"
              style="width: 100%; position: absolute; left: 0"
            />
            <img v-if="resultItems.length == 7"
              :src="getImageUrl('badge', resultItems[6])"
              style="width: 100%; position: absolute; left: 0"
            />
         </div>
         <h2>Your Voyager #{{ nftId }} has been assembled</h2>
         <div class="trait-list">
          <table>
              <tr>
                <td class="key">Body</td>
                <td class="value">{{ getTraitName('body', resultItems[0])}} <div :class="'dot ' + getTraitRarity('body', resultItems[0])"></div></td>
              </tr>
              <tr>
                <td class="key">Helmet</td>
                <td class="value">{{ getTraitName('helmets', resultItems[1])}} <div :class="'dot ' + getTraitRarity('helmets', resultItems[1])"></div></td>
              </tr>
              <tr>
                <td class="key">Gear</td>
                <td class="value">{{ getTraitName('gear', resultItems[2])}} <div :class="'dot ' + getTraitRarity('gear', resultItems[2])"></div></td>
              </tr>
              <tr>
                <td class="key">Extra</td>
                <td class="value">{{ getTraitName('extra', resultItems[3])}} <div :class="'dot ' + getTraitRarity('extra', resultItems[3])"></div></td>
              </tr>
              <tr>
                <td class="key">Back</td>
                <td class="value">{{ getTraitName('back', resultItems[4])}} <div :class="'dot ' + getTraitRarity('back', resultItems[4])"></div></td>
              </tr>
              <tr>
                <td class="key">Wallpaper</td>
                <td class="value">{{ getTraitName('background', resultItems[5])}} <div :class="'dot ' + getTraitRarity('background', resultItems[5])"></div></td>
              </tr>
              <tr v-if="resultItems.length == 7">
                <td class="key">Badge</td>
                <td class="value">{{ getTraitName('badge', resultItems[6])}} <div :class="'dot ' + getTraitRarity('badge', resultItems[6])"></div></td>
              </tr>
          </table>
         </div>

         <div class="legend">
          <h4 class='trait-rarity common'><div class="spot"></div> <p>common</p></h4>
          <h4 class='trait-rarity rare'><div class="spot"></div> <p>rare</p></h4>
          <h4 class='trait-rarity epic'><div class="spot"></div> <p>epic</p></h4>
         </div>

         <div class="mobile-margin-bottom">
          <button id="spinButton" @click="resetRespin()" style="width: 100%; margin-top: 10px; position: relative">
            Re-Spin a Trait
          </button>
          <div>
            <a :href="`/reel?tokenId=${nftId}&overview=true`"><button id="spinButton" class="opensea" style="width: 100%; position: relative">
           View My Voyager
          </button></a>
        </div>
      </div>
    </div>
    <!-- incorrect network -->
    <div class="modal wide" v-if="!correctNetwork && rerollStep != 70">
      <div class="modal-head">
        <h3 class="title" style="text-align: left;">Re-Spin a Trait</h3>
        <p class="iholder"><i @click="toggleModal()" class="close-btn"></i></p>
        <div class="modal-body short">
          <div class="img-wallet"></div>
          <h3 style="font-size: 18px; margin-top: 20px; font-family: 'Barlow'">Verse Voyager uses the Polygon network. Please change the network in your connected wallet or click the button below to switch automatically.
          </h3>
          <a class="" target="_blank" @click="requestNetworkChange()"
            ><button class="btn verse-wide">Switch Wallet to Polygon</button></a
          >
        </div>
      </div>
    </div>

    <!-- loading -->
    <div class="modal wide" v-if="rerollLoading == true && correctNetwork">
      <div class="modal-head">
        <h3 class="title" style="text-align: left;">Re-Spin a Trait</h3>
        <p class="iholder"><i @click="toggleModal()" class="close-btn"></i></p>
      </div>
      <div class="modal-divider" v-if="rerollStep == 1">
        <div class="modal-progress p25"></div>
      </div>
      <div class="modal-divider" v-if="rerollStep == 4">
        <div class="modal-progress p75"></div>
      </div>
      <div class="modal-body" style="height: 480px">
      <div class="img-spinner"></div>
      <h3 style="font-size: 18px; margin-top: 20px; font-family: 'Barlow'">{{ rerollLoadingMessage }}</h3>
      <p><a target="_blank" style="color: #0085FF; font-weight: 600;" :href="`https://polygonscan.com/tx/${txHash}`" v-if="txHash">View blockchain transaction</a></p>
      </div>
    </div>
    <!-- step 1 -->
    <div class="modal wide" v-if="rerollStep == 1 && rerollLoading == false && correctNetwork">
      <div class="modal-head">
        <h3 class="title" style="text-align: left;">Re-Spin a Trait</h3>
        <p class="iholder"><i @click="toggleModal()" class="close-btn"></i></p>
      </div>
      <div class="modal-divider">
        <div class="modal-progress p50"></div>
      </div>
      <div class="modal-body clearfix respinner">
        <div class="left-respin">
          <div class="char respin">
            <img
              :src="getImageUrl('background', resultItems[5])"
              style="width: 100%; position: absolute; left: 0"
              :class="traitReroll == 0 ? '' : 'greyscale' "
            />
            <img
              :src="getImageUrl('back', resultItems[4])"
              style="width: 100%; position: absolute; left: 0"
              :class="traitReroll == 1 ? '' : 'greyscale' "
            />
            <img
              :src="getImageUrl('body', resultItems[0])"
              style="width: 100%; position: absolute; left: 0"
              :class="traitReroll == 2 ? '' : 'greyscale' "
            />
            <img
              :src="getImageUrl('gear', resultItems[2])"
              style="width: 100%; position: absolute; left: 0"
              :class="traitReroll == 3 ? '' : 'greyscale' "
            />
            <img
              :src="getImageUrl('helmets', resultItems[1])"
              style="width: 100%; position: absolute; left: 0"
              :class="traitReroll == 4 ? '' : 'greyscale' "
            />
            <img
              :src="getImageUrl('extra', resultItems[3])"
              style="width: 100%; position: absolute; left: 0"
              :class="traitReroll == 5 ? '' : 'greyscale' "
            />
          </div>
        </div>
        <div class="right-respin">
          <div class="tile" :class="traitReroll == 2 ? 'active' : '' ">
            <div
              :style="`background-image: url(${getThumb('body', resultItems[0])})`"
              :class="traitReroll == 2 ? 'reroll-small' : 'reroll-small greyscale' "
              @click="traitReroll = 2"
            ></div>
            <div class="trait">Body</div>
          </div>
          <div class="tile" :class="traitReroll == 4 ? 'active' : '' ">
            <div
              :style="`background-image: url(${getThumb('helmets', resultItems[1])})`"
              :class="traitReroll == 4 ? 'reroll-small' : 'reroll-small greyscale' "
              @click="traitReroll = 4"
            ></div>
            <div class="trait">Helmet</div>
          </div>
          <div class="tile" :class="traitReroll == 3 ? 'active' : '' ">
            <div
            :style="`background-image: url(${getThumb('gear', resultItems[2])})`"  
             :class="traitReroll == 3 ? 'reroll-small' : 'reroll-small greyscale' "
              @click="traitReroll = 3"
            ></div>
            <div class="trait">Gear</div>
          </div>
          <div class="tile" :class="traitReroll == 5 ? 'active' : '' ">
            <div
            :style="`background-image: url(${getThumb('extra', resultItems[3])})`"  
             :class="traitReroll == 5 ? 'reroll-small' : 'reroll-small greyscale' "
              @click="traitReroll = 5"
            ></div>
            <div class="trait">Extra</div>
          </div>
          <div class="tile" :class="traitReroll == 1 ? 'active' : '' ">
            <div
            :style="`background-image: url(${getThumb('back', resultItems[4])})`"  
             :class="traitReroll == 1 ? 'reroll-small' : 'reroll-small greyscale' "
              @click="traitReroll = 1"
            ></div>
            <div class="trait">Back</div>
          </div>
          <div class="tile" :class="traitReroll == 0 ? 'active' : '' ">
            <div
            :style="`background-image: url(${getThumb('background', resultItems[5])})`"  
             :class="traitReroll == 0 ? 'reroll-small' : 'reroll-small greyscale' "
              @click="traitReroll = 0"
            ></div>
            <div class="trait">Wallpaper</div>
          </div>
        </div>
        <div>
          
        </div>

        <div class="clearfix" style="margin-top: 340px;">
          <p v-if="rerollCost > 0" style="text-align: center; margin-left: 0; color: white; margin-top: 15px;">Re-Spin Cost <strong>{{ parseInt(rerollCost) }} VERSE </strong></p>
          <p v-if="rerollCost == 0" style="text-align: center; margin-left: 0; color: white; margin-top: 15px;"><br/>Re-Spin Cost <strong>0 VERSE </strong></p>
          <button
          v-if="rerollCost > verseBalance"
          id="spinButton" class="disabled-bal"
          style="margin-top: 0px; width: 80%"
        >
          Not Enough Verse in Wallet
        </button>
          
          <button
          v-if="allowanceRequestNeeded == false && rerollCost <= verseBalance"
          id="spinButton"
          @click="reroll(traitReroll)"
          style="margin-top: 0px; width: 80%"
        >
          Re-Spin Now
        </button>

        <button
          v-if="allowanceRequestNeeded == true && rerollCost <= verseBalance"
          id="spinButton"
          @click="rerollStep = 4"
          style="margin-top: 0px; width: 80%"
        >
          Re-Spin Now
        </button>
        <p style="font-size: 13px;">Note: Rerolls are provably random. It is possible <br> to roll the same trait as you already have.</p>
      </div>
      </div>
    </div>

    <!-- step 2 -->
    <div class="modal expandmobile" v-if="rerollStep == 2 && rerollLoading == false && correctNetwork" style="border-radius: 10px; padding: 0;">
      <div class="modal-head">
        <p class="iholder"><i @click="toggleModal()" class="close-btn"></i></p>
      </div>

      <div class="modal-body" style="padding: 10px;">
        <div class="img-spinner"></div>

        <p v-if="!showTimer" class="loadingText">{{ loadingMessage }}</p>
        <h3 v-if="showTimer" class="title">Payment Successful</h3>
        <a target="_blank" style="color: #0085FF; font-weight: 600;" :href="`https://polygonscan.com/tx/${txHash}`" v-if="txHash && !showTimer">View blockchain transaction</a>
        <p v-if="showTimer" class="subtext short">
          Issuing re-spin for the chosen character and awaiting final confirmation
        </p>

        <div v-if="showTimer" class="attention-footer">
          <p>
           <strong>{{ rerollLoadingMessage }}</strong>
          </p>
        </div>
      </div>
    </div>


    <!-- step 3 -->
    <div class="modal" v-if="rerollStep == 3 && rerollLoading == false && correctNetwork">
      <p class="iholder"><i @click="toggleModal()" class="fa fa-times"></i></p>
      <h3 style="font-size: 18px;">Transaction Completed</h3>
      <p style="margin-bottom: 20px;">You are now ready to re-spin the <strong>{{(collections[step - 11])}}</strong> trait for your character.</p>
      <button
        id="spinButton"
        @click="toggleModal(reset)"
        style="margin-top: 2px"
      >
        Re-Spin
      </button>
    </div>
    <!--  reroll allowance -->
    <div class="modal wide" v-if="rerollStep == 4 && rerollLoading == false && correctNetwork">
      <div class="modal-head">
        <h3 class="title" style="text-align: left;">Re-Spin a Trait</h3>
        <p class="iholder"><i @click="toggleModal()" class="close-btn"></i></p>
      </div>
      <div class="modal-divider">
        <div class="modal-progress p75"></div>
      </div>
      <div class="modal-body">
        <div class="img-approve"></div>
        <h3 class="title">Approve the use of VERSE</h3>
        <p class="subtext">
          You need to enable the use of at least <span>10,000 VERSE</span>. This
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

  <!-- loading -->
  <div class="page-holder" v-if="loading">
    <a href="/voyagers"><div class="close-scratch"></div></a>
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
    <a href="/voyagers"><div class="close-scratch"></div></a>
    <button class="name-label">VOYAGER #{{ nftId }}</button>
    <div class="center-div">
    <div class="char-holder">
      <h2>VOYAGER #{{ nftId }}</h2>
      <div class="char">
        <img
          :src="getImageUrlLarge('background', resultItems[5])"
          style="width: 100%; position: absolute; left: 0"
        />
        <img
          :src="getImageUrlLarge('back', resultItems[4])"
          style="width: 100%; position: absolute; left: 0"
        />
        <img
          :src="getImageUrlLarge('body', resultItems[0])"
          style="width: 100%; position: absolute; left: 0"
        />
        <img
          :src="getImageUrlLarge('gear', resultItems[2])"
          style="width: 100%; position: absolute; left: 0"
        />
        <img
          :src="getImageUrlLarge('helmets', resultItems[1])"
          style="width: 100%; position: absolute; left: 0"
        />
        <img
          :src="getImageUrlLarge('extra', resultItems[3])"
          style="width: 100%; position: absolute; left: 0"
        />
        <img v-if="resultItems.length == 7"
          :src="getImageUrlLarge('badge', resultItems[6])"
          style="width: 100%; position: absolute; left: 0"
        />
      </div>

      <div class="social-holder" style="padding-left: 14px;">
        <!-- <a class="share" style="cursor: pointer;" @click="toggleSocial()"><i class="share-icn"></i>Share</a> -->
        <a style="margin-left: 20px" class="download" target="_blank" :href="`${GLOBALS.BUCKET_URL}/${nftId}/${GLOBALS.NFT_ADDRESS}.jpg`" download><i class="download-icn"></i>Download Image</a>
        <a v-if="!syncing" @click="updateMetaData(nftId)" class="download" target="_blank" style="margin-left: 20px; cursor: pointer;"><i class="fa fa-refresh" style="margin-right: 10px;"></i>Resync Metadata</a>
        <p v-if="!syncing" style="margin-top: 5px;"><small style="color: grey;">*OpenSea metadata might be delayed after a reroll. Updates usually resolve within 24 hours </small></p>
        <p v-if="syncing" style="color: grey; margin-top: 5px;"><small>Metadata update in progress - trait updates might take up to 24 hours to be visible everywhere.</small></p>

      </div>
    </div>
    <div class="trait-holder">
      <div class="mobile-buttons">
          <button id="spinButton" @click="toggleModal()" style="width: 100%; margin-top: 10px; position: relative">
            Re-Spin a Trait
          </button>
          <div>
            <a target="_blank" :href="`https://opensea.io/assets/matic/${GLOBALS.NFT_ADDRESS}/${nftId}`"><button id="spinButton" class="opensea" style="width: 100%; position: relative">
           OpenSea <i class="icn-link"></i>
          </button></a>
        </div>
      </div>
      <h2>VOYAGER #{{ nftId }}</h2>
      <h3>Traits</h3>

      <div class="trait large" v-if="resultItems.length == 7">
          <h3 class="trait-title">Badge</h3>
          <h4 :class="getTraitName('badge', resultItems[6]) == 'None' ? 'trait-name disabled' : 'trait-name' ">{{ getTraitName('badge', resultItems[6]) }} - Exclusive VIP Trait</h4>
          <h4 style="width: 60px; margin-left: calc(50% - 30px)"  :class="'trait-rarity ' + getTraitRarity('badge', resultItems[6]) " ><div class="spot"></div> <p>{{capitalize(getTraitRarity('badge', resultItems[6]))}}</p></h4>
      </div>
      <div class="trait">
          <h3 class="trait-title">BODY</h3>
          <h4 :class="getTraitName('body', resultItems[0]) == 'None' ? 'trait-name disabled' : 'trait-name' ">{{ getTraitName('body', resultItems[0]) }}</h4>
          <h4 :class="'trait-rarity ' + getTraitRarity('body', resultItems[0]) " ><div class="spot"></div> <p>{{capitalize(getTraitRarity('body', resultItems[0]))}}</p></h4>
      </div>
      <div class="trait">
          <h3 class="trait-title">HELMET</h3>
          <h4 :class="getTraitName('helmets', resultItems[1]) == 'None' ? 'trait-name disabled' : 'trait-name' ">{{ getTraitName('helmets', resultItems[1]) }}</h4>
          <h4 :class="'trait-rarity ' + getTraitRarity('helmets', resultItems[1]) " ><div class="spot"></div><p>{{capitalize(getTraitRarity('helmets', resultItems[1]))}}</p></h4>
      </div>
      <div class="trait no-margin-right">
          <h3 class="trait-title">GEAR</h3>
          <h4 :class="getTraitName('gear', resultItems[2]) == 'None' ? 'trait-name disabled' : 'trait-name' ">{{ getTraitName('gear', resultItems[2]) }}</h4>
          <h4 :class="'trait-rarity ' + getTraitRarity('gear', resultItems[2]) " ><div class="spot"></div><p>{{capitalize(getTraitRarity('gear', resultItems[2]))}}</p></h4>
      </div>
      <div class="trait">
          <h3 class="trait-title">EXTRA</h3>
          <h4 :class="getTraitName('extra', resultItems[3]) == 'None' ? 'trait-name disabled' : 'trait-name' ">{{ getTraitName('extra', resultItems[3]) }}</h4>
          <h4 :class="'trait-rarity ' + getTraitRarity('extra', resultItems[3]) " ><div class="spot"></div><p>{{capitalize(getTraitRarity('extra', resultItems[3]))}}</p></h4>
      </div>
      <div class="trait">
          <h3 class="trait-title">BACK</h3>
          <h4 :class="getTraitName('back', resultItems[4]) == 'None' ? 'trait-name disabled' : 'trait-name' ">{{ getTraitName('back', resultItems[4]) }}</h4>
          <h4 :class="'trait-rarity ' + getTraitRarity('back', resultItems[4]) " ><div class="spot"></div><p>{{capitalize(getTraitRarity('back', resultItems[4]))}}</p></h4>
      </div>
      <div class="trait no-margin-right">
          <h3 class="trait-title">WALLPAPER</h3>
          <h4 :class="getTraitName('background', resultItems[5]) == 'None' ? 'trait-name disabled' : 'trait-name' ">{{ getTraitName('background', resultItems[5]) }}</h4>
          <h4 :class="'trait-rarity ' + getTraitRarity('background', resultItems[5]) " ><div class="spot"></div><p>{{capitalize(getTraitRarity('background', resultItems[5]))}}</p></h4>
      </div>
      <div>
        <div class="desktop-buttons">
          <button id="spinButton" @click="toggleModal()" style="width: 100%; margin-top: 10px; position: relative">
            Re-Spin a Trait
          </button>
          <div>
            <a target="_blank" :href="`https://opensea.io/assets/matic/${GLOBALS.NFT_ADDRESS}/${nftId}`"><button id="spinButton" class="opensea" style="width: 100%; position: relative">
           OpenSea  <i class="icn-link"></i>
          </button></a>
        </div>
      </div>
      <div>
      </div>
    </div>
    </div>
  </div>
  </div>

  <!-- reel -->
  <div class="page-holder" v-if="step != 7 && !loading">
    <a href="/voyagers"><div class="close-scratch"></div></a>

    <div :class="step > 10 ? 'core respin' : 'core'">
      <!-- side screen -->
      <div :class="step > 10 ? 'results respin' : 'results'">
      <div class="result active" id="result1">
        <div id="result1lock" class="lock"></div>
        <h3 id="result1label"><div :class="'smalldot one ' + getTraitRarity('body', resultItems[0])"></div><p class="title-p">Body</p></h3>
      </div>
      <div class="result" id="result2">
        <div id="result2lock" class="lock"></div>
        <h3 id="result2label"><div :class="'smalldot two ' + getTraitRarity('helmets', resultItems[1])"></div><p class="title-p">Helmet</p></h3>
      </div>
      <div class="result" id="result3">
        <div id="result3lock" class="lock"></div>
        <h3 id="result3label"><div :class="'smalldot three ' + getTraitRarity('gear', resultItems[2])"></div><p class="title-p">Gear</p></h3>
      </div>
      <div class="result" id="result4">
        <div id="result4lock" class="lock"> </div>
        <h3 id="result4label"><div :class="'smalldot four ' + getTraitRarity('extra', resultItems[3])"></div><p class="title-p">Extra</p></h3>
      </div>
      <div class="result" id="result5">
        <div id="result5lock" class="lock"> </div>
        <h3 id="result5label"><div :class="'smalldot five ' + getTraitRarity('back', resultItems[4])"></div><p class="title-p">Back</p></h3>
      </div>
      <div class="result" id="result6">
        <div id="result6lock" class="lock"></div>
        <h3 id="result6label"><div :class="'smalldot six ' + getTraitRarity('background', resultItems[5])"></div><p class="title-p wallpaper">Backdrop</p></h3>
      </div>
    </div>

    <div class="reel-holder">
      <h2 v-if="step < 10" style="margin-bottom: 5px; font-weight: 600">
        Unlock {{ capitalize(collections[step - 1]) }}
      </h2>
      <!-- <p style="margin-top: 0px; margin-bottom: 15px">
        <small>Spin the reel to win traits</small>
      </p> -->

      <!-- <button class="bubble" v-if="step < 10" style="margin: 0;">
        {{ capitalize(collections[step - 1]) }}
      </button> -->
      <h2 v-if="step > 9">Respin: {{ collections[step - 11] }}</h2>
      <div class="chev-left"></div>
      <div class="chev-right"></div>
      <div id="reel">
        <div class="blur-top"></div>
        <!-- the items in the reel -->
        <SlotHolder
          :slots="slots"
          :resultItems="resultItems"
          :step="step"
          :animationClass="animationClass"
          :startAnimation="startAnimation"
        />
      </div>

      <div v-if="step > 10">
        <button
          v-if="!spinLoading && !prepNextFrame"
          id="spinButton"
          @click="spinReels(collections[step - 11], rerollValue)"
        >
          Re-Spin
        </button>

        <button
          v-if="prepNextFrame && !spinLoading"
          id="spinButton"
          @click="goOverView(true, collections[step - 11], rerollValue)"
        >
          Review New Trait
        </button>
      </div>

      <div v-if="step < 7">

        <button
          v-if="!spinLoading && !prepNextFrame"
          id="spinButton"
          @click="spinReels(collections[step - 1], resultItems[step - 1])"
        >
          Spin
        </button>
        <button v-if="spinLoading" style="opacity: 0.3" id="spinButton">
          Spin
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
          @click="goOverView()"
        >
          Review Traits
        </button>
        <p v-if="!spinLoading && step < 7" style="margin-bottom: 0; font-size: 14px; font-weight: 500; color: #899BB5;" >Trait <span style="color: white">{{step}}</span> out of 6 </p>
        <p class="blink no-border" v-if="spinLoading && step < 7" style="position: relative; margin-left: 20px; margin-bottom: 0; font-size: 14px; font-weight: 500; color: #D43280;"><i class="lock-mini"></i> Unlocking Trait </p>
      </div>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.disabled-bal {
  background: grey!important;
}

i.lock-mini {
  background-image: url('../assets/lock-mini.png');
  width: 11.10px;
  background-size: cover;
  height: 16px;
  position: absolute;
  left: 95px;
  @media(max-width: 880px) {
    left: 60px;
  }
}
.center-div {
  margin-left: calc(50% - 410px);
  @media(max-width: 880px) {
    margin: unset;
  }
}

.reroll-small {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
}

.respinner {
  height: 470px!important;
  @media(max-width: 880px) {
    height: calc(100dvh - 180px)!important;
  }
}

.title-p {
  margin: 0;
}
.legend {
  width: 280px;
  margin-left: calc(50% - 140px);
  height: 40px;
  .trait-rarity {
    position: relative;
    float: left;
    top: 0;
    margin-left: 10px;
    &.common {
      width: 75px;
    }
    &.rare {
      width: 75px;
    }
    &.epic {
      width: 75px;
    }
  }
}

.mobile-buttons {
  display: none;
  @media(max-width: 880px) {
    display: block;
    margin-bottom: 20px;
  }
}

.desktop-buttons {
  @media(max-width: 880px) {
    display: none;
  }
  display: block;
}

i.icn-link {
  background-image: url('../assets/icons/link-sm.png');
  width: 13px;
  height: 13px;
  background-size: cover;
  display: block;
  position: absolute;
  right: 150px;
  top: 11px;
  @media(max-width: 460px) {
    right: 80px;
  }
}
i.download-icn {
  background-image: url('../assets/icons/download-sm.png');
  width: 16px;
  height: 16px;
  background-size: cover;
  display: block;
  position: absolute;
  right: 108px;
  top: 0px;
}

.mobile-margin-bottom {
  margin-bottom: 0;
  @media(max-width: 880px) {
    margin-bottom: 100px;
  }
}

i.share-icn {
  background-image: url('../assets/icons/share-sm.png');
  width: 15px;
  height: 14px;
  background-size: cover;
  display: block;
  position: absolute;
  right: 45px;
  top: 2px;
} 

.social-holder {
  margin-top: 15px;
  font-weight: 600;
  .share {
    text-decoration: none;
    margin-left: 50px;
    position: relative;
    font-size: 14px;
    color: white;
    margin-right: 50px;
  }
  .download {
    text-decoration: none;
    color: white;
    position: relative;
    font-size: 14px;
  }
}
.char-holder {
  h2 {
    display: none;
    @media(max-width: 880px) {
      font-size: 40px;
      color: white;
      text-align: left;
      font-weight: 800;
      font-family: 'Barlow';
      margin-top: 5px;
      margin-bottom: 20px;
      display: inline-block;
    }
  }

  margin-top: 150px;
  width: 400px;
  margin-right: 20px;
  float: left;
  @media(max-width: 880px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
}
.trait-holder {
  margin-top: 150px;
  width: 405px;
  margin-left: 0.5%;
  float: left;
      // switch to rows of 2
   @media(max-width: 460px) {
    width: 276px!important;
    margin-left: calc(50% - 138px)!important;
  }

  @media(max-width: 880px) {
    margin-top: 10px;
    width: 415px;
    margin-left: calc(50% - 202px);
  }
  h2 {
    @media(max-width: 880px) {
      display: none;
    }
    font-size: 40px;
    color: white;
    text-align: left;
    font-weight: 800;
    font-family: 'Barlow';
    margin-top: 5px;
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 20px;
    text-align: left;
    font-size: 14px;
  }
  .trait {
    &.large {
      width: 100%;
      @media(max-width: 880px) {
        width: calc(100% - 10px);
      }
    }
    &.no-margin-right {
      margin-right: 0;
      @media(max-width: 880px) {
        margin-right: 10px;
      }
    }
    float: left;
    margin-bottom: 10px;
    margin-right: 10px;
    background-color: #0F1823;
    border-radius: 10px;
    width: 128px;
    height: 81px;
    position: relative;

    .trait-title {
      color: #899BB5;
      font-size: 14px;
      text-align: center;
      top: -5px;
      width: 100%;
      position : absolute;
    } 

    .trait-name {
      &.disabled {
        color: #425472;
      }
      position: absolute;
      top: 15px;
      width: 100%;
      font-weight: 300;
      font-size: 12px;
      
    }
  }
}
.core {
  &.respin {
    background: none!important;
  }
  background-color: black;
  position: absolute;
  width: 500px;
  margin-top: 50px;
  height: 670px;
  margin-left: calc(50% - 250px);
  border-radius: 10px;
  @media(max-width: 880px) {
    margin-top: 0;
    margin-left: 0;
    top: 0;
    width: 100%;
  }
}
.left-respin {
  width: 300px;
  margin: 0;
  height: 300px;
  float: left;
  border: 1px solid grey;
  border-radius: 20px;
  padding: 5px;
  @media(max-width: 880px) {
    display: none;
  }
}

.greyscale {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

.front {
  z-index: 10;
}

.right-respin {
  width: 40%;
  margin: 0;
  height: 300px;
  float: left;
  margin-left: 9.5px;
  margin-top: 3px;
  @media(max-width: 880px) {
    margin-left: calc(50% - 100px);
    width: 220px;
  }
  .tile {
    border-radius: 10px;
    cursor: pointer;
    width: 96px;
    height: 96px;
    background-color: #586F91;
    float: left;
    margin-right: 5px;
    border: 2px solid #586F91;
    &.active {
      border: 2px solid #0085ff;
    }
    margin-bottom: 5px;
    position: relative;
    img {
        border-radius: 10px;
    }

    .trait {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #1A2231;
      color: #899BB5;
      font-size: 14px;
      width: 100%;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      height: 20px;
    }

  }
}

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
@keyframes reel-spin-0 {
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
    transform: translate3d(0, -4880px, 0);
    -ms-transform: translate3d(0, -4880px, 0);
    -webkit-transform: translate3d(0, -4880px, 0);
    -moz-transform: translate3d(0, -4880px, 0);
    -o-transform: translate3d(0, -4880px, 0);
    // filter: blur(0);
  }
}

@keyframes reel-spin-1 {
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
    transform: translate3d(0, -4910px, 0);
    -ms-transform: translate3d(0, -4910px, 0);
    -webkit-transform: translate3d(0, -4910px, 0);
    -moz-transform: translate3d(0, -4910px, 0);
    -o-transform: translate3d(0, -4910px, 0);
    // filter: blur(0);
  }
}

@keyframes reel-spin-2 {
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
    transform: translate3d(0, -4940px, 0);
    -ms-transform: translate3d(0, -4940px, 0);
    -webkit-transform: translate3d(0, -4940px, 0);
    -moz-transform: translate3d(0, -4940px, 0);
    -o-transform: translate3d(0, -4940px, 0);
    // filter: blur(0);
  }
}


@keyframes reel-spin-3 {
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
    transform: translate3d(0, -4970px, 0);
    -ms-transform: translate3d(0, -4970px, 0);
    -webkit-transform: translate3d(0, -4970px, 0);
    -moz-transform: translate3d(0, -4970px, 0);
    -o-transform: translate3d(0, -4970px, 0);
    // filter: blur(0);
  }
}

@keyframes reel-spin-4 {
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
    transform: translate3d(0, -4985px, 0);
    -ms-transform: translate3d(0, -4985px, 0);
    -webkit-transform: translate3d(0, -4985px, 0);
    -moz-transform: translate3d(0, -4985px, 0);
    -o-transform: translate3d(0, -4985px, 0);
    // filter: blur(0);
  }
}


@keyframes reel-spin-5 {
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


@keyframes reel-spin-6 {
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
    transform: translate3d(0, -5030px, 0);
    -ms-transform: translate3d(0, -5030px, 0);
    -webkit-transform: translate3d(0, -5030px, 0);
    -moz-transform: translate3d(0, -5030px, 0);
    -o-transform: translate3d(0, -5030px, 0);
  }
}

.spin-anim-0 {
  -webkit-animation: reel-spin-0 8s cubic-bezier(0.32, 0.64, 0.45, 1) forwards;
  animation: reel-spin-0 8s cubic-bezier(0.32, 0.64, 0.45, 1) forwards;
}

.spin-anim-1 {
  -webkit-animation: reel-spin-1 8s cubic-bezier(0.32, 0.64, 0.45, 1) forwards;
  animation: reel-spin-1 8s cubic-bezier(0.32, 0.64, 0.45, 1) forwards;
}

.spin-anim-2 {
  -webkit-animation: reel-spin-2 8s cubic-bezier(0.32, 0.64, 0.45, 1) forwards;
  animation: reel-spin-2 8s cubic-bezier(0.32, 0.64, 0.45, 1) forwards;
}

.spin-anim-3 {
  -webkit-animation: reel-spin-3 8s cubic-bezier(0.32, 0.64, 0.45, 1) forwards;
  animation: reel-spin-3 8s cubic-bezier(0.32, 0.64, 0.45, 1) forwards;
}

.spin-anim-4 {
  -webkit-animation: reel-spin-4 8s cubic-bezier(0.32, 0.64, 0.45, 1) forwards;
  animation: reel-spin-4 8s cubic-bezier(0.32, 0.64, 0.45, 1) forwards;
}

.spin-anim-5 {
  -webkit-animation: reel-spin-5 8s cubic-bezier(0.32, 0.64, 0.45, 1) forwards;
  animation: reel-spin-5 8s cubic-bezier(0.32, 0.64, 0.45, 1) forwards;
}

.spin-anim-6 {
  -webkit-animation: reel-spin-6 8s cubic-bezier(0.32, 0.64, 0.45, 1) forwards;
  animation: reel-spin-6 8s cubic-bezier(0.32, 0.64, 0.45, 1) forwards;
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

.opensea {
  margin-top: 10px!important;
  background: linear-gradient(180deg, #425472 0%, #313E57 100%)!important;
}

.expandmobile {
  @media(max-width: 880px) {
    width: 100%!important;
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
  width: 80%;
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
    &.wide {
      border-radius: 10px;
      padding: 0;
      width: 600px!important;
      left: calc(50% - 300px)!important;
      min-height: unset;
      padding-bottom: 10px;
        @media(max-width: 880px) {
          width: 100%!important;
          left: 0!important;
          min-height: 100vh;
      }
    }
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
      top: 0px;
    }

    @media (max-height: 600px) {
      top: 0px!important;
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
  &.respin {
    display: none!important;
  }
  height: 550px;
  width: 100px;
  position: absolute;
  left: 20px;
  top: 10px;
  @media (max-width: 880px) {
    display: none;
  }
  h3 {
    &.done {
      border: 1px solid #586F9166;
      background-color: #FFFFFFCC!important;
      color: #425472;

      .title-p {
        padding-left: 14px;
        &.wallpaper {
          font-size: 11px;
          margin-top: 1px;
        }
      }

      .smalldot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: black;
      position: absolute;
      top: 7px;
      left: 14px;
      &.two {
        left: 8px;
      }
      &.six {
        top: 7px;
        left: 5px;
      }
      &.rare {
        background-color: #6C43EE;
      }
      &.common {
        background-color: #2FA9EE;
      }
      &.epic {
        background-color: #EE3772;
      }
      }
    }
    position: absolute;
    top: 45px;
    left: 7px;
    text-align: center;
    color: #294258;
    text-align: center;
    font-size: 8px;
    padding-top: 4px;
    height: 20px;
    color: white;
    background-color: #313E5780;
    width: 72px;
    font-size: 12px;
    border-radius: 15px;

  }
  .result {
    .lock {
      background-image: url('/src/assets/lock.png');
      width: 16px;
      height: 20px;
      background-size: cover;
      position: relative;
      top: 22px;
      left: 35px;
    }
    position: relative;
    width: 86px;
    height: 86px;
    margin: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: #0F1823;
    border: 1px solid #0F1823;

    background-size: contain!important;
    background-repeat: no-repeat!important;
    background-position: center center!important;

    &.active {
      border: 1px solid #D43280;
      border-radius: 10px;
      .lock {
         background-image: url('/src/assets/lock-active.png');
      }

        h3 {
          background-color: #D43280;
        }
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
  &.no-border {
    border: none!important
  }
}
</style>
<style lang="scss" scoped>
.char {
  &.mini {
    width: 120px;
    height: 120px;
    margin-left: calc(50% - 60px);
    border: 2px solid #D43280;
    border-radius: 10px;
  }
  width: 400px;
  height: 400px;
  position: relative;
  @media(max-width: 880px) {
    width: 300px;
    height: 300px;
    margin-left: calc(50% - 150px);
  }
  &.respin {
    margin: 0;
    height: 300px;
    width: 300px;
  }
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
  background: rgba(0, 0, 0, .55) url('../assets/bg.png');
  background-blend-mode: darken;
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
  position: absolute;
  border-radius: 20px;
  padding-top: 22px;
  top: 20px;
  right: 20px;
  background-color: #0F1823;
  margin-left: calc(50% - 200px);
  width: 340px;
  padding-bottom: 18px;
  @media (max-width: 880px) {
    width: 100%;
    right: 0;
    background-color: black;
    top: 0;
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
  width: 180px;
  margin-left: calc(50% - 90px)!important;
  border-radius: 20px;
  height: 435px;
  // background-color: #000000;
  position: relative;
  overflow: hidden;
  margin: 50px;
  margin-bottom: 0;
  margin-top: 30px;
}

.chev-left {
  position: absolute;
  background-image: url(/src/assets/chev-left.png);
  left: 51px;
  height: 21px;
  z-index: 1;
  width: 19px;
  background-size: cover;
  top: 248px;
}

.chev-right {
  position: absolute;
  background-image: url(/src/assets/chev-right.png);
  right: 51px;
  z-index: 1;
  height: 21px;
  width: 19px;
  background-size: cover;
  top: 248px;
}
</style>
