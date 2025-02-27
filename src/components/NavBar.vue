<script>
import { getAccount, watchAccount, disconnect } from '@wagmi/core'
import { useAppKit } from '@reown/appkit/vue'
import { ref } from 'vue';
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

import core from "../core"

export default {
    setup() {
        let account = getAccount(core.wagmiConfig)
        let modal = useAppKit()
        let isWallet = ref(false)
        let accountActive = ref(false)
        let connectedProvider = ref("")
        let ensUserName = ref("");

        sessionStorage.getItem('isWallet') === "true" ? isWallet.value = true : isWallet.value = false
        
        function openWalletModal(refresh) {            
            if(refresh) disconnect(core.wagmiConfig)
            modal.open()
        }

        const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

        function truncateEthAddress(address) {
            const match = address.match(truncateRegex);
            if (!match) return address;
            return `${match[1]}…${match[2]}`;
        };

        function handleHome(newTab) {
            const openUrl = (url, newTab) => {
                if(newTab) {
                    window.open(url,"_blank")
                } else {
                    window.open(url,"_self")
                }
            }
            console.log(window.location.search.indexOf('?tokenId=') != -1)
            if(window.location.search.indexOf('?tokenId=') != -1) {
                openUrl("/voyagers")
                return
            }
            else if(window.location.pathname == '/') {
               openUrl("https://verse.bitcoin.com" ,newTab)
               return
            } else {
               openUrl("/")
               return
            }
        }

        const initialize = async () => {
            let account = getAccount(core.wagmiConfig)
            if(account.isConnected == true) {
                accountActive.value = true;

                const publicClient = createPublicClient({ 
                    chain: mainnet,
                    transport: http()
                })

                const ensName = await publicClient.getEnsName({
                    address: getAccount(core.wagmiConfig).address
                })
                if(ensName) ensUserName.value = ensName
            } else {
                accountActive.value = false
            }
            connectedProvider.value = account.connector?.name.toLowerCase()
        }

        initialize()
        watchAccount(core.wagmiConfig, { onChange: initialize })

        return { account, isWallet, ensUserName, handleHome, openWalletModal, accountActive, truncateEthAddress, getAccount, connectedProvider, core} 
    }
    
}
</script>

<template>
    <div class="navbar-mobile">
        <a v-if="!isWallet" @click="handleHome(true)">
            <div class="nav-chev"></div>
            <div class="nav-verse"></div>
        </a>
        <a v-if="isWallet" @click="handleHome()">
            <div class="nav-chev"></div>
            <div class="nav-verse"></div>
        </a>
        <h3 class="title-nav">Verse Voyagers</h3>
        
        <button class="btn verse-nav" v-if="!accountActive" @click="openWalletModal(true)">Connect</button>
        <button class="btn verse-nav mobile connected" v-if="accountActive && !isWallet" @click="openWalletModal(false)"><div :class="'provider-logo ' + connectedProvider"></div></button>
        <button class="btn verse-nav mobile connected" v-if="accountActive && isWallet" @click="openWalletModal(false)"><div :class="'provider-logo bitcoin'"></div></button>

    </div>
    <div class="navbar">
        <a style="cursor: pointer;" href="/">
            <div class="logo">
                <a v-if="!isWallet" @click="handleHome(true)">
                    <div class="nav-chev"></div>
                    <div class="nav-verse"></div>
                </a>
                <a v-if="isWallet" @click="handleHome()">
                    <div class="nav-chev"></div>
                    <div class="nav-verse"></div>
                </a>
            </div>
        </a>
        <h3 class="title-nav-desk">Verse Voyagers</h3>
        <a href="https://t.me/GetVerse" target="_blank"><button class="btn verse-nav" style="float: right; background: #384d87; margin-top: 15px; margin-right: 10px; padding-right: 9px!important;">Join Telegram <i style="margin-left: 5px;" class="fa-brands fa-telegram"></i></button></a>

        <div class="wallet">
            <button class="btn verse-nav" v-if="!accountActive" @click="openWalletModal(true)">Connect Wallet</button>
            <div v-if="ensUserName">
                <button class="btn verse-nav connected" v-if="accountActive && !isWallet" @click="openWalletModal(false)">{{ ensUserName}} <div :class="'provider-logo ' + connectedProvider"></div></button>
                 <button class="btn verse-nav connected" v-if="accountActive && isWallet" @click="openWalletModal(false)">{{ ensUserName }} <div :class="'provider-logo bitcoin'"></div></button>
            </div>
            <div v-if="!ensUserName">
                <button class="btn verse-nav connected" v-if="accountActive && !isWallet" @click="openWalletModal(false)">{{truncateEthAddress(getAccount(core.wagmiConfig).address || "")}} <div :class="'provider-logo ' + connectedProvider"></div></button>
                 <button class="btn verse-nav connected" v-if="accountActive && isWallet" @click="openWalletModal(false)">{{truncateEthAddress(getAccount(core.wagmiConfig).address || "")}} <div :class="'provider-logo bitcoin'"></div></button>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss">
.title-nav-desk {
    color: white;
    position: absolute;
    left: calc(50% - 200px);
    top: 20px;
    text-align: center;
    width: 400px;
    font-family: Barlow, Helvetica, sans-serif;
    margin: 0 auto;
    font-size: 22px;
    font-weight: 600;
}

.verse-nav {
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    text-wrap: nowrap;
    border-radius: 100px;
    font-family: Barlow, Helvetica, sans-serif;
    background: linear-gradient(rgb(14, 190, 240) 0%, rgb(0, 133, 255) 100%);
    font-weight: 600;
    color: rgb(255, 255, 255);
    font-size: 14px;
    height: 36px;
    padding: 0px 16px;
    position: relative;
    &.mobile {
        padding-right: 21px!important;
        background: #3f526e!important;
        background: linear-gradient(rgb(14, 190, 240) 0%, rgb(0, 133, 255) 100%);
    }
    &.connected {
        background: linear-gradient(180deg, #425472 0%, #313E57 100%);
        padding-right: 40px;
    }

    .provider-logo {
        position: absolute; 
        width: 28px;
        height: 28px;
        border-radius: 50%;
        right: 5.2px;
        top: 4.5px;
        background-size: cover;

        &.bitcoin {
            background-image: url("./../assets/icons/bitcoincom.png");
            right: 4.3px;
            top: 4.2px;
        }
        &.walletconnect {
            background-image: url("./../assets/icons/wc-logo.png");
            right: 4.3px;
            top: 4.2px;
        }

        &.metamask {
            background-image: url("./../assets/icons/mm-logo.png");
            right: 5.3px;
            top: 4.5px;
        }
        &.rabby {
            width: 26px;
            height: 22px;
            border-radius: 0;
            top: -5px;
            right: -5px;
            border-radius: 50%;
            background-image: url("./../assets/icons/rabby.png");
            background-size: cover;
            @media(max-width: 880px) {
                width: 28px;
                height: 28px;
                top: 4.5px;
                right: 4.3px;
            }
        }
    }
    &:hover {
        background: linear-gradient(rgb(49, 201, 244) 0%, rgb(44, 150, 246) 100%);
    }
    &:active {
        background:linear-gradient(rgb(1, 137, 254) 0%, rgb(44, 150, 246) 100%)
    }
}
.btn-connect {
    @media(max-width: 880px) {
    width: 100%;
    position: fixed;
    bottom: 0;
    font-weight: 600;
    font-size: 15px;
    left: 0;
    height: 50px;
    background-color: #2f2b5d;
    border-radius: 0;
    color: white;
    border: none;
    }
    margin-top: 2px;
    border: none;
    width: 140px;
    border-radius: 10px;
    font-weight: 600;
    padding: 5px 20px;
    height: 40px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    cursor: pointer;
}

    a {
        .nav-chev {
            position: absolute;
            left: 17px;
            top: 24px;
            background-image: url("./../assets/icons/chev.png");
            background-size: cover;
            width: 20px;
            height: 20px;
        }

        .nav-verse {
            position: absolute;
            left: 36px;
            top: 18px;
            background-image: url("./../assets/icons/logo-full.png");
            background-size: cover;
            width: 113px;
            height: 32px;
        }
    }

    .navbar-mobile {
        background-color: black;
        width: 100%;
        height: 56px;
        background: linear-gradient(0deg, #0F1823, #0F1823),linear-gradient(0deg, #1A2231, #1A2231);


        .verse-nav {
            position: absolute;
            right: 16px;
            top: 10px;
        }

        .title-nav {
            color:#FFFFFF;
            margin: 0;
            position: absolute;
            left: 80px;
            top: 17.5px;
            font-size:16px;
            font-family: Barlow, Helvetica, sans-serif;
            color: white;
            font-weight: 600;
        }

        a {
            .nav-chev {
                position: absolute;
                left: 8px;
                top: 18px;
                background-image: url("./../assets/icons/chev.png");
                background-size: cover;
                width: 20px;
                height: 20px;
            }

            .nav-verse {
                position: absolute;
                left: 28px;
                top: 10px;
                background-image: url("./../assets/icons/verse-mob.png");
                background-size: cover;
                width: 36px;
                height: 36px;
            }
        }

        @media(min-width: 880px) {
            display: none;
        }
       
    }

    .navbar {
        @media(max-width: 879px) {
            display: none;
        }
        position: fixed;
        z-index: 3;
        top: 0;
        display: block;
        width: 100%;
        left: 0;
        height: 70px;
        background: rgba(3, 12, 20, 1);
        div.logo {
            color: white;
            padding-left: 30px;
            width: 32%;
            position: absolute;
            margin: 0;
            float: left;
            @media(max-width: 880px) {
                width: 100%;
            }
 
        }
        div.links { 
            @media(max-width: 880px) {
            width: 100%!important;
            padding-top: 0;
            }
            margin: 0;
            padding-top: 10px;
            float: left;
            width: 32%;
            text-align: center;
            ul {
            @media(max-width: 880px) {
                padding-left: 0;
                margin-top: 0;
            }
            display: inline-block;
            margin-left: 0 auto;
            list-style-type: none;
                li {
                    
                    float: left;
                    margin-right: 20px;

                    a{
                        text-decoration: none;
                        color: #c6bfff;
                        font-weight: 500;
                    }
                }
            }
        }
        div.wallet {
            @media(max-width: 930px) {
                display: none;
            }
            margin: 0;
            margin-top: 10px;
            margin-right: 10px;
            float: right;
            padding-top: 5px;
            text-align: right;

            h5 {
                font-weight: 400;
                color: #c6bfff;
                margin-right: 20px;
            }
        }
    }
</style>