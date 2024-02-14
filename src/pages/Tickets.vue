<script>
import { getAccount, readContract, disconnect, watchAccount, watchNetwork } from '@wagmi/core'
import { ref } from 'vue'
import ERC721ABI from '../abi/ERC721.json'
import Reel from '../pages/Reel.vue'
import { useWeb3Modal } from '@web3modal/wagmi/vue'
import contract from '../abi/contract.json'
import { useRoute } from 'vue-router'
import router from '@/router'
import GLOBALS from '../globals.js'
import { getRealTrait, getImageUrl } from '../helper/traitFinder.js'

export default {
  components: {
    Reel
  },
  setup () {
    const route = useRoute()
    const nftContract = GLOBALS.NFT_ADDRESS

    let list = []
    let account = getAccount()
    let accountActive = ref(false)
    let loading = ref(false)
    let modal = useWeb3Modal()

    let giftModal = ref(false)
    let giftAccount = ref('')
    let claimNFT = ref(0)
    let step = ref(0)
    let nfts = ref([])
    let correctNetwork = ref(true)
    let claimActive = ref(false)
    let modalLoading = ref(false)

    let openDetail = ref(false)
    let detailNFT = ref({})

    if (
      route.query.gift &&
      route.query.address &&
      route.query.gift.length > 0 &&
      route.query.address.length > 0
    ) {
      disconnect()
      giftModal.value = true
      giftAccount.value = route.query.address
      const duration = 3 * 1000,
        animationEnd = Date.now() + duration,
        defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      function randomInRange (min, max) {
        return Math.random() * (max - min) + min
      }

      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)

        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
          })
        )
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
          })
        )
      }, 250)
    }

    watchAccount(async () => {
      if (getAccount().address && getAccount().address.length != undefined) {
        const itemStr = localStorage.getItem(`token/${getAccount().address}`)
        if (!itemStr) {
          // show warning and have them return to starting screen
          window.location.replace('/?auth=true')
        } else {
          const item = JSON.parse(itemStr)
          const now = new Date()
          if (now.getTime() + 1200000 > item.expiry) {
            // add 20 minute buffer
            localStorage.removeItem(`token/${getAccount().address}`)
            // show warning and have them return to starting screen
            window.location.replace('/?auth=true')
          }
        }
        accountActive.value = true
        getTicketIds()
      } else {
        accountActive.value = false
      }
    })

    function openDetailScreen (id) {
      detailNFT.value = nfts.value.find(obj => obj.id === id)
      openDetail.value = true
    }

    function closeGiftModal (connect) {
      if (connect) {
        modal.open()
      }
      giftModal.value = false
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
          const objToUpdate = nfts.value.find(obj => obj.id == id)

          if (objToUpdate) {
            objToUpdate.traits = []

            let traits = getRealTrait(data)
            traits.forEach(dp => {
              objToUpdate.traits.push(parseInt(dp))
            })
          }
          return data
        }
      } catch (e) {
        console.log(e)
      }
    }

    watchNetwork(network => {
      if (network.chain && network.chain.id != 137) {
        correctNetwork.value = false
      } else {
        correctNetwork.value = true
      }
    })

    function openReel (item, finished) {
      if (finished) {
        router.push({
          name: 'reel',
          query: { tokenId: item.id, overview: true }
        })
      } else {
        router.push({ name: 'reel', query: { tokenId: item.id } })
      }
    }

    function toggleModal (id) {
      step.value = 0
      if (id) claimNFT.value = nfts.value.find(obj => obj.id === id)
      claimActive.value = !claimActive.value
    }

    function characterList () {
      return nfts.value.toReversed()
    }

    function closeDetailScreen () {
      openDetail.value = false
    }
    async function getTicketIds () {
      try {
        // step 1, check balance
        loading.value = true
        const data = await readContract({
          address: nftContract,
          abi: ERC721ABI,
          functionName: 'ownedByAddress',
          args: [getAccount().address]
        })

        /// step 2, check allowance
        if (data) {
          let arr = []
          let promiseArray = []
          data.forEach(dat => {
            let opened = false
            if (
              localStorage.getItem(
                dat.toString() + '/' + nftContract.toString()
              ) == 'true'
            ) {
              opened = true
            }
            arr.push({ id: parseInt(dat.toString()), opened, claimed: false })
          })
          nfts.value = arr

          nfts.value.forEach(nft => {
            promiseArray.push(promiseArray.push(getTraits(nft.id)))
          })
          loading.value = false
        }
      } catch (e) {
        console.log(e)
        loading.value = false
      }
    }

    return {
      list,
      nfts,
      account,
      nftContract,
      correctNetwork,
      getImageUrl,
      closeGiftModal,
      step,
      loading,
      giftModal,
      giftAccount,
      claimNFT,
      claimActive,
      modalLoading,
      toggleModal,
      accountActive,
      getTicketIds,
      characterList,
      openDetail,
      openDetailScreen,
      closeDetailScreen,
      detailNFT,
      openReel
    }
  }
}
</script>

<template>
  <div class="backdrop" v-if="claimActive || giftModal">
    <!-- gift-->
    <div class="modal" v-if="giftModal">
      <div class="modal-head">
        <p class="iholder">
          <i @click="closeGiftModal(false)" class="close-btn"></i>
        </p>
      </div>
      <div class="modal-body short">
        <div class="img-gift"></div>
        <h3 class="title">Voyager Gift Received!</h3>
        <p class="subtext">
          Somebody has sent a free voyager spin to you. Use it to roll a unique
          character <br /><br />No transaction needed to create a character.
          Connect your account (<span> {{ giftAccount.slice(0, 7) }}..</span>)
          to redeem the ticket.
        </p>

        <a @click="closeGiftModal(true)" v-if="accountActive == false"
          ><button class="btn verse-wide fixBottomMobile">
            Connect and Redeem
          </button></a
        >
        <a @click="closeGiftModal(false)" v-if="accountActive == true"
          ><button class="btn verse-wide fixBottomMobile">Redeem</button></a
        >
        <img url="/gift.png" />
      </div>
    </div>
  </div>

  <Reel v-if="openDetail" :detailNFT="detailNFT" />
  <!-- <div class="wrongNetworkWarning" v-if="!correctNetwork">Connected to wrong network. Please switch wallet to Polygon Mainnet</div> -->
  <div class="page" v-if="!openDetail">
    <div class="head">
      <h2 class="tickhead">
        My Voyagers

        <a href="/?purchase-intent=true"
          ><button class="btn verse-wide" href="">
            Create New Character
          </button></a
        >
      </h2>
      <div class="tickconnect" v-if="!accountActive">
        Connect your wallet to view your characters.
      </div>
    </div>

    <div class="tickets" v-if="accountActive && loading">
      <div class="spin">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>

    <div class="tickets" v-if="accountActive && !loading">
      <div v-if="nfts.length == 0">
        <h3 style="font-size: 18px">No characters in your connected wallet.</h3>
      </div>
      <div class="ticket" v-for="(item, index) in characterList()">
        <h3 class="title">Voyager #{{ item.id }}</h3>
        <!-- <img :src="`src/assets/gift.jpg`" v-if="!item.opened"> -->
        <div v-if="!item.opened" class="char">
          <img src="../assets/unrevealed.png" />
        </div>
        <div v-if="item.opened && item.traits" class="char">
          <img
            :src="getImageUrl('background', item.traits[5])"
            style="position: relative; left: 0"
          />
          <img
            :src="getImageUrl('back', item.traits[4])"
            style="position: absolute; left: 0"
          />
          <img
            :src="getImageUrl('body', item.traits[0])"
            style="position: absolute; left: 0"
          />
          <img
            :src="getImageUrl('helmets', item.traits[1])"
            style="position: absolute; left: 0"
          />
          <img
            :src="getImageUrl('gear', item.traits[2])"
            style="position: absolute; left: 0"
          />
          <img
            :src="getImageUrl('extra', item.traits[3])"
            style="position: absolute; left: 0"
          />
        </div>

        <button
          v-if="item.opened"
          class="btn-action main secondary"
          @click="openReel(item, true)"
        >
          View Character
        </button>
        <button
          v-if="!item.opened"
          class="btn-action main"
          @click="openReel(item)"
        >
          Create Character
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wrongNetworkWarning {
  @media (max-width: 880px) {
    font-size: 13px;
    width: calc(100% - 10px);
    padding-left: 15px;
    color: white;
    font-weight: 600;
    padding-bottom: 15px;
    padding-top: 12px;
  }
  z-index: 5;
  position: relative;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
  font-weight: 600;
  background-color: #4a42aa;
  color: #fff;
}

.char {
  width: 260px;
  height: 260px;
  position: relative;
  @media (max-width: 880px) {
    width: unset;
    height: unset;
  }
  .img {
    @media (max-width: 880px) {
      width: 100%;
      position: unset;
    }
  }
}
.mobreset {
  @media (max-width: 880px) {
    height: unset !important;
  }
}
.spin {
  width: 50px;
  padding-left: calc(50% - 50px);
  @media (max-width: 880px) {
    text-align: center !important;
  }
}
.title {
  margin-bottom: 0;
  font-size: 18px;
}
.status {
  font-size: 13px;
  margin-top: 0;
}
.btn-action {
  cursor: pointer;
  margin-top: 10px;
  border-radius: 20px;
  background-color: white;
  color: black;
  border: none;
  margin-right: 5px;
  font-weight: 500;
  font-size: 15px;
  padding: 13px 25px;
  font-weight: 600;

  &.main {
    width: 100%;
    color: white;
    font-weight: 600;

    background: linear-gradient(180deg, #425472 0%, #313e57 100%);
  }

  &.dis {
    background-color: #353535;
    background-image: none;
    color: white;
  }
}

.tickconnect {
  margin-top: 50px;
  text-align: center;
}
.tickhead {
  padding-left: 80px;
  // @media(max-width: 880px) {
  //     display: none;
  // }
  @media (max-width: 880px) {
    padding-left: 8px;
  }
  button {
    position: absolute;
    right: 85px;
    font-size: 14px;
    top: 95px;
    width: 165px;
    height: 38px;
    @media (max-width: 880px) {
      // top: -25px;
      top: 65px;
      right: 24px;
    }
  }
}

.btn-modal {
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
  background-color: white;
  color: black;
  border: none;
  margin-right: 5px;
  font-weight: 500;
  font-size: 15px;
  padding: 13px 25px;
  font-weight: 600;

  &.x {
    background-color: #222;
    color: white;
    height: 47px;
    margin-left: 5px;
  }

  &.verse {
    color: #333;
    font-weight: 600;
    background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgb(51 249 238) 0%,
      rgb(19 255 179) 100.2%
    );
    background: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgb(249, 232, 51) 0%,
      rgb(250, 196, 59) 100.2%
    );
    background: linear-gradient(rgb(14, 190, 240) 0%, rgb(0, 133, 255) 100%);
    color: white;
  }
  &.uniswap {
    background-color: white !important;
    color: #1c1b22;
  }
}

div.tickets {
  width: calc(100% - 100px);
  display: inline-block;
  margin-bottom: 500px;
  padding-left: 100px;
  overflow: auto;
  height: 75vh;
  padding-top: 20px;
  @media (max-width: 880px) {
    width: calc(100% - 10px);
    display: inline-block;
    padding-left: 10px;
    padding-top: 20px;
    margin-bottom: 200px !important;
  }
  h3 {
    font-weight: 400;
    color: white;
    margin-bottom: 20px;
  }
  .ticket {
    @media (max-width: 880px) {
      width: 90%;
      margin-left: 3%;
    }
    position: static;
    color: white;
    display: inherit;
    width: 260px;

    margin-right: 10px;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
}
.head {
  padding-left: 20px;
  color: white;
}
.page {
  background-image: url('../assets/bg-blur-dark.png');
  background-size: cover;
  width: 100%;
  padding-top: 100px;
  height: calc(100vh + 100px);
  padding-left: 0;
  overflow: hidden;
  @media (max-width: 880px) {
    padding-top: 16px;
  }
  @media (max-width: 500px) {
    padding-top: 16px;
  }
}
</style>
