<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import NavBar from './components/NavBar.vue'
import { reconnect } from '@wagmi/core'
import { createAppKit } from "@reown/appkit/vue"

import core from "./core"

reconnect(core.wagmiConfig)

createAppKit({
  adapters: [core.wagmiAdapter],
  networks: core.networks,
  tokens: {
    137: {
      address: '0xc708d6f2153933daa50b2d0758955be0a93a8fec',
      image: 'https://assets.coingecko.com/coins/images/28424/small/verselogo.png'
    }
  },
  featuredWalletIds: [
    '107bb20463699c4e614d3a2fb7b961e66f48774cb8f6d6c1aee789853280972c'
  ],
  includeWalletIds: [],
  allWallets: core.isWallet === true ? 'HIDE' : 'SHOW',
  projectId: core.projectId,
  features: {
    analytics: true,
    email: false,
    socials: false,
    onramp: false,
    swaps: false,
    send: false,
  },
})

const route = useRoute()
const showNavBar = computed(() => route.name !== 'reel');
</script>

<template >
  <body @contextmenu.prevent>
    <NavBar v-if="showNavBar" />
    <RouterView />
  </body>
</template>

<style lang="scss">
.verse-wide {
  &:hover {
    background: linear-gradient(rgb(49, 201, 244) 0%, rgb(44, 150, 246) 100%);
  }
  &:active {
    background: linear-gradient(rgb(1, 137, 254) 0%, rgb(44, 150, 246) 100%);
  }

  &.fixBottomMobile {
    @media (max-width: 880px) {
      position: fixed;
      left: 32px;
      width: calc(100% - 64px);
      bottom: 48px;
    }
  }
  // &.extraTop {
  //   margin-top: 120px;
  // }
  // &.extraTopMobile {
  //   margin-top: 120px !important;
  // }
  &.half {
    width: 222px;
    margin-left: 8px;
    margin-right: 8px;
    @media (max-width: 880px) {
      margin-left: 0;
      margin-right: 0;
      margin-top: 8px;
      width: 100%;
    }
  }
  &.secondary {
    background: linear-gradient(180deg, #425472 0%, #313e57 100%);
  }
  cursor: pointer;
  margin-top: 24px;
  background: linear-gradient(180deg, #0ebef0 0%, #0085ff 100%);
  height: 48px;
  border: none;
  width: 100%;
  border-radius: 100px;
  color: white;
  font-weight: 600;
  font-size: 17px;
  line-height: 21.6px;
  font-family: 'Barlow', sans-serif;

  &.disabled {
    color: #313e57;
    background: none;
    background-color: #1a2231;
  }
}

.global-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.flex-wrap {
  @media (min-width: 768px) {
    width: 100%;
    align-items: center;
    z-index: 1;
    max-width: 80rem;
    margin: 0px auto;
    gap: 1rem;
    grid-template-columns: min-content max-content auto;
  }
}
i.close-btn {
  background-image: url('./assets/icons/close.png');
  width: 24px;
  height: 24px;
  display: block;
  background-size: cover;
  position: absolute;
  z-index: 5;
  right: 32.5px;
  top: 26.5px;
}

.wallet-balance {
  margin-top: 24px;
  @media (max-width: 880px) {
    margin-bottom: 24px;
  }
  background-color: #1a2231;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 12px;

  .balance-title {
    font-size: 12px;
    margin-top: 0;
    color: #c5cedb !important;
    margin-bottom: 0;
    font-weight: 600px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
  .balance {
    margin-top: 2px;
    font-weight: 600;
    margin-bottom: 0;
    font-size: 24px;
  }
}

.trait-rarity {
      position: absolute;
      top: 40px;
      font-size: 12px;
      width: 70%;
      margin-left: 15%;
      height: 17px;

      p {
        margin: 0;
      }
      &.common {
        p {
          margin-left: 10px;
          color: #2FA9EE!important;
        }
        
        border: 1px solid #2FA9EE;
        border-radius: 10px;
        width: 60%;
        margin-left: 20%;
        .spot {
          width: 6px;
          height: 6px;
          background-color: #2FA9EE;
          position: absolute;
          left: 9px;
          border-radius: 50%;
          top: 5px;
        }
      }
      &.rare {
        p {
          margin-left: 10px;
          color: #6C43EE!important;
        }
        border: 1px solid #6C43EE;
        border-radius: 10px;
        width: 40%;
        margin-left: 30%;
        .spot {
          width: 6px;
          height: 6px;
          background-color: #6C43EE;
          position: absolute;
          left: 9px;
          border-radius: 50%;
          top: 5px;
        }
      }
      &.epic {
        p {
          margin-left: 10px;
          color: #EE3772!important;
        }
        
        border: 1px solid #EE3772;
        border-radius: 10px;
        width: 40%;
        margin-left: 30%;
        .spot {
          width: 6px;
          height: 6px;
          background-color: #EE3772;
          position: absolute;
          left: 9px;
          border-radius: 50%;
          top: 5px;
        }
      }
    }

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  // background-color: #030c14a6;
  backdrop-filter: blur(1px);
  z-index: 2;

  .modal {
    &.summary {
      width: 340px!important;
      left: calc(50% - 170px)!important;
      z-index: 100!important;


      h2 {
        color: white;
        font-size: 24px;
        margin-top: 10px;
        font-weight: 500;
        font-family: 'Barlow', sans-serif;
      }
      .trait-list {
        background-color: #252D40;
        width: 100%;
        border-radius: 10px;
        table {
          padding: 10px 15px;
          color: white;
          width: 100%;
          font-size: 14px;
          .key {
            text-align: left;
            color: #899BB5;
            padding-bottom: 5px;
            font-weight: 500;
          }
          .value {
            text-align: right;
            font-weight: 500;
            position: relative;
            padding-right: 20px;

            .dot {
              &.left {
                &.rare {
                  right: 35px;
                  position: absolute;
                }
                &.common {
                  right: 65px;
                  position: absolute;
                }
                &.epic {
                  right: 35px;
                  position: absolute;
                }
              }
              width: 9px;
              height: 9px; 
              background-color: black;
              border-radius: 50%;
              position: absolute;
              right: 0;
              top: 8px;
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
        }
      }
      @media(max-width: 880px) {
        width:90%!important;
        z-index: 100!important;
        left: 0!important;
        overflow: auto;
        height: 100dvh;
        height: 100vh;
      }
    }
    @media (max-width: 880px) {
      position: absolute;
      top: 0;
      width: 100%;
      min-height: 100vh;
      left: 0;
      border-radius: 0;
      padding: 0;
    }

    .modal-head {
      width: 100%;
      border-top-left-radius: 13.5px;
      border-top-right-radius: 13.5px;
      .title {
        margin-bottom: 24px;
        margin-top: 24px;
        font-size: 24px;
        margin-left: 32px;
      }
    }

    .modal-divider {
      background-color: white;
      height: 4px;
      background-color: #1a2231;
      border: 1px solid #1a2231;
      position: relative;
    }

    .modal-progress {
      &.p25 {
        width: 25%;
      }
      &.p50 {
        width: 50%;
      }
      &.p75 {
        width: 75%;
      }
      &.p100 {
        width: 100%;
      }
      background-color: #0085ff;
      position: absolute;
      left: 0;
      top: 0;
      height: 4px;
    }

    .modal-body {
      .loadingText {
        color: #ffffff;
        font-size: 18px;
        font-weight: 600;
      }
      position: relative;
      @media (max-width: 880px) {
        padding: 24px;
        height: calc(100vh - 150px);
        height: calc(100dvh - 150px);
        overflow: auto;
      }

      &.short {
        height: unset;
        padding-bottom: 47px;
      }

      .attention-footer {
        position: absolute;
        background: #0085ff;
        height: 54px;
        width: 100%;
        left: 0;
        bottom: 0;
        margin: 0;
        border-bottom-left-radius: 13.5px;
        border-bottom-right-radius: 13.5px;
        @media (max-width: 880px) {
          position: fixed;
          bottom: 0;
          left: 0;
          border-radius: 0;
        }
        p {
          margin-top: 18px !important;
          font-size: 14px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
        }
      }
      .modal-footer {
        @media (max-width: 880px) {
          position: unset;
          padding-left: 24px;
          padding-right: 24px;
          width: calc(100% - 48px);
        }
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 14px;
        font-weight: 500;
        color: #586f91;
        width: calc(100% - 80px);
        margin: 0;
        padding: 40px;
        line-height: 16.71px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        a {
          color: #0085ff;
          cursor: pointer;
          text-decoration: none;
        }
      }

      .helper {
        padding: 12px;
        background: #163756;
        position: relative;
        height: 28px;
        margin-top: 2px;
        border-radius: 12px;
        @media (max-width: 880px) {
          height: 44px;
          margin-bottom: 16px;
        }

        .bulb-icn {
          position: absolute;
          width: 16px;
          height: 16px;
          top: 17.5px;
          left: 12px;
          background-image: url('./assets/icons/bulb.png');
          background-size: cover;
        }
        p {
          position: absolute;
          width: calc(100% - 60px);
          left: 40px;
          text-align: left;
          color: #c5cedb;
          line-height: 14.32px;
          font-weight: 600;
          margin: 0;
          font-size: 12px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
        }
      }

      height: 540px;
      padding: 40px 32px 24px 32px;
      text-align: center;
      .img-spinner {
        background-image: url('./assets/icons/activity.svg');
        width: 44px;
        height: 44px;
        background-size: cover;
        margin: 0 auto;
        margin-top: 180px;
      }
      .img-success {
        background-image: url('./assets/icons/success.png');
        width: 148px;
        height: 120px;
        background-size: cover;
        margin: 0 auto;
        margin-top: 70px;
      }
      .img-gift {
        margin-top: 10px !important;
        background-image: url('./assets/icons/gift.png');
        width: 148px;
        height: 120px;
        background-size: cover;
        margin: 0 auto;
        @media (max-width: 880px) {
          margin-top: 199px !important;
        }
      }
      .img-wallet {
        background-image: url('./assets/icons/wallet.png');
        width: 148px;
        height: 120px;
        background-size: cover;
        margin: 0 auto;
      }
      .img-verse {
        background-image: url('./assets/icons/verse.png');
        width: 148px;
        height: 120px;
        background-size: cover;
        margin: 0 auto;
      }
      .img-purchase {
        background-image: url('./assets/img-char.png');
        width: 148px;
        height: 120px;
        background-size: cover;
        margin: 0 auto;
      }
      .img-approve {
        background-image: url('./assets/icons/approve.png');
        width: 148px;
        height: 120px;
        background-size: cover;
        margin: 0 auto;
      }
      .title {
        margin-top: 16px;
        font-size: 24px;
      }
      .subtext {
        &.short {
          width: 300px;
          margin-left: calc(50% - 175px);
        }
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-size: 14px;
        color: #899bb5;
        font-weight: 500;
        padding: 0 25px 0 25px;
        span {
          color: #c5cedb;
        }
      }

      .gift-toggle-holder {
        background-color: #252d40;
        height: 56px;
        width: 100%;
        position: relative;
        border-radius: 12px;
        margin-top: 24px;
        &.opened {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
        .switch {
          position: absolute;
          right: 16px;
          top: 16px;
        }
        h3.title {
          color: white;
          font-size: 16px;
          font-weight: 600;
          position: absolute;
          left: 18px;
        }
      }

      .gift-toggle-holder-bottom {
        background-color: #1a2231;
        padding: 16px;
        p {
          color: white;
          font-size: 12px;
          margin: 0;
          text-align: left;
          line-height: 14.32px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
        }
      }
    }

    box-shadow: 0 0 20px rgba(17, 17, 29, 0.7);
    width: 540px;
    position: absolute;
    left: calc(50% - 270px);
    top: 110px;

    background-color: #030c14;
    border-radius: 24px;
    box-shadow: 0px 2px 60px 0px #2fa9ee33;

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

h3 {
  font-size: 24px;
  font-weight: 600;
}

body {
  position: fixed;
  width: 100%;
  background-size: 100%;
  margin: 0;
  font-family: 'Barlow', sans-serif;
  background-color: #030c14;
  // background-image: url("./assets/bg.png")!important;
  // background-size: cover;
  // background-repeat: no-repeat;
  background-color: #37162f;
  overflow: auto;
  @media (max-width: 500px) {
    // background-image: none!important;
    // background-size: 130%!important;
    // background-repeat: no-repeat;
  }
}

#app {
  width: 100%;
}

svg {
  display: none !important;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0f1823;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #0085ff;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
