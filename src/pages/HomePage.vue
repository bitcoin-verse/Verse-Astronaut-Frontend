<script>
import { getAccount, waitForTransaction, signMessage, switchNetwork, readContract, writeContract, watchAccount, watchNetwork } from '@wagmi/core'
import { useWeb3Modal, createWeb3Modal } from '@web3modal/wagmi/vue'
import { ref } from 'vue';
import ERC20ABI from '../abi/ERC20.json'
import ContractABI from '../abi/contract.json'
import axios from 'axios'
import Web3 from 'web3'
import { copyText } from 'vue3-clipboard'
import GLOBALS from '../globals.js'

const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-mainnet.g.alchemy.com/v2/jOIyWO860V1Ekgvo9-WGdjDgNr2nYxlh'));

  const contractAddress = GLOBALS.CONTRACT_ADDRESS

  export default {
  setup() {
    let account = getAccount()
    let currentAccountAddress = ref("")
    let modal = useWeb3Modal()
    let copyDone = ref(false)
    let reopenAfterConnection = ref(false)
    let accountActive = ref(false)
    let correctNetwork = ref(true)
    let modalActive = ref(false) // false
    let ensLoaded = ref("")
    let verseBalance = ref(0);
    let verseAllowance = ref(0)
    let giftInputLoad = ref(false)
    let giftAddress = ref("");
    let modalLoading = ref(false)
    let loadingMessage = ref("")
    let buyStep = ref(0) // 0
    let giftTicket = ref(false); // false
    let showTimer = ref(false)
    let authenticated = ref(false)
    let singleTransactionApproval = ref(false)
    
    let ticketInputAddress = ref("")
    let ticketInputValid = ref(true)

    let timeoutId;


    let buyModal = ref(false)

    function closeBuy() {
        buyModal.value = false;
    }


    function openBuy() {
        modalActive.value = false;
        buyModal.value = true;
    }


    async function requestNetworkChange() {
        await switchNetwork({ chainId: 137 })
    }

    async function onTicketInputChange() {
        ticketInputValid.value = true
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(async () => {
            ensLoaded.value = ""
            giftInputLoad.value = true
            if(ticketInputAddress.value.length != 42) {
   
                // address is invalid unless its ENS
                try {
                    const address = await web3.eth.ens.getAddress(ticketInputAddress.value);
                    if(address.length > 0) {
                        ensLoaded.value = "ens name: " + ticketInputAddress.value
                        ticketInputAddress.value = address
                        ticketInputValid.value = true
                        giftInputLoad.value = false
                    } else {
                        ticketInputValid.value = false
                        giftInputLoad.value = false
                    }
            
                } catch (e) {
                    ticketInputValid.value = false
                    giftInputLoad.value = false
                }
            } else {
                // address is probably valid
                giftInputLoad.value = false;
                ticketInputValid.value = true
            }
        }, 500); 

    }

    function toggleModal() {
        if(buyStep.value == 4 && modalActive.value == true) {
            // cleanup
            loadingMessage.value = ""
            buyStep.value = 0;
            giftTicket.value = false;
            giftAddress.value == ""
            getBalance()
            
        }

        modalActive.value = !modalActive.value;
    }



    async function approve() {
        let approvalAmount = 30000000000000000000000000000
        if(singleTransactionApproval.value == true) {
            approvalAmount = 3000000000000000000000
        }
        
        loadingMessage.value = "waiting for wallet approval.."
        modalLoading.value = true;
        const { hash } = await writeContract({
        address: '0xc708d6f2153933daa50b2d0758955be0a93a8fec',
        abi: ERC20ABI,
        functionName: 'approve',
        chainId: 137,
        args: [contractAddress, approvalAmount]
        })

        loadingMessage.value = "waiting for transaction to finish.."
        await waitForTransaction({ hash })
        getAllowance()
    }    

    function toggleModal() {
        if(buyStep.value == 4 && modalActive.value == true) {
            loadingMessage.value = ""
            buyStep.value = 0;
            giftTicket.value = false;
            giftAddress.value == ""
            getBalance()
        }
        modalActive.value = !modalActive.value;
    }

    async function purchaseTicket(_giftAddress) {
        try {
            if(_giftAddress) {
                giftAddress.value = _giftAddress
            } else {
                giftTicket.value = false;
            }
            loadingMessage.value = "waiting for wallet approval.."
            modalLoading.value = true
            let receiver = getAccount().address
            if(_giftAddress && _giftAddress.length > 0) {
                receiver = _giftAddress
            }

            if(giftTicket.value == true) {
                const { hash } = await writeContract({
                address: contractAddress,
                abi: ContractABI,
                functionName: 'giftCharacter',
                chainId: 137,
                args: [receiver]
                })
                await waitForTransaction({ hash })
            } else {
                const { hash } = await writeContract({
                address: contractAddress,
                abi: ContractABI,
                gas: 400000n,
                functionName: 'buyCharacter',
                chainId: 137,
                args: []
                })
                await waitForTransaction({ hash })
            }

            loadingMessage.value = "waiting for tx confirmation"
            let timer = 20; 
            // Create an interval to decrement the timer every second
            const countdown = setInterval(() => {
                showTimer.value = true
                timer--; // Decrement the timer
                if(giftTicket.value == true) {
                    loadingMessage.value = `${timer} seconds!`;                
                } else {
                    loadingMessage.value = `${timer} seconds!`;                
                }

                if (timer <= 0) {
                    clearInterval(countdown);
                    modalLoading.value = false;
                    buyStep.value = 4;
                    showTimer.value = false
                }
            }, 1000);

        } catch (e) {
            modalLoading.value = false
            console.log(e)
        }
    }
    async function getAllowance() {
        try {
            // step 1, check balance
            modalLoading.value = true;
            const data = await readContract({
            address: '0xc708d6f2153933daa50b2d0758955be0a93a8fec',
            abi: ERC20ABI,
            functionName: 'allowance',
            args: [getAccount().address, contractAddress]
            })
            modalLoading.value = false;

            /// step 2, check allowance 
            if(data) {
                 let dataString = data.toString()
                 verseAllowance.value= parseFloat(dataString) / Math.pow(10, 18);
                 if(verseBalance.value >= 3000 && buyStep.value < 3) {
                    buyStep.value = 3;
                }
            }
            } catch (e) {
                console.log(e)
                modalLoading.value = false;
            }
    }
    async function getBalance() {
        try {
            // step 1, check balance of Verse token
            modalLoading.value = true;
            const data = await readContract({
            address: '0xc708d6f2153933daa50b2d0758955be0a93a8fec',
            abi: ERC20ABI,
            functionName: 'balanceOf',
            args: [getAccount().address]
            })


            if(data) {
                console.log("balance data")
                console.log(data)
                 let dataString = data.toString()
                 verseBalance.value= parseFloat(dataString) / Math.pow(10, 18);
                 if(verseBalance.value >= 3000 && buyStep.value < 2) {
                    buyStep.value = 2;
                    /// step 2, check allowance       
                    getAllowance()
                 } 
                 modalLoading.value = false;
            }
            } catch (e) {
                console.log(e)
                modalLoading.value = false;
            }
    }

    // account is active, and has a token
    const continueWithAccount = () => {
        accountActive.value = true;
        
        // console.log("continue with account")
        // console.log(buyStep.value) 
        // console.log(reopenAfterConnection.value)
        // console.log('--')
        if(buyStep.value == 100) {
            console.log("GET BALANCE")
            modalLoading.value = true
            buyStep.value = 1
            getBalance();
        }

        if(buyStep.value < 1) {
            console.log("GET BALANCE")
            modalLoading.value = true
            buyStep.value = 1
            getBalance();
        }

        if(reopenAfterConnection.value == true) {
            reopenAfterConnection.value = false;
            toggleModal()
        }
    }

    // deal with user authentication
    const authChallenge = async() => {

        let resChallenge = await axios.get(`${GLOBALS.BACKEND_URL}/challenge/request/${getAccount().address}`)

        if(buyStep.value != 99) {
            // show auth modal
            buyStep.value = 99;
            modalActive.value = true;
            return
        }

        // sign request
        if(resChallenge.data.nonce) {
            const signature = await signMessage({
                message: resChallenge.data.nonce,
            })
            modalLoading.value = true
            let payload = {
                signature
            }
            
            let resComplete = await axios.post(`${GLOBALS.BACKEND_URL}/challenge/complete/${getAccount().address}`, payload)
            if(resComplete.data.token && resComplete.data.token.length > 1) {
                const now = new Date()
                const item = {
                    value: resComplete.data.token,
                    expiry: now.getTime() + 28800000 // 8 hours miliseconds
                }
                localStorage.setItem(`token/${getAccount().address}`, JSON.stringify(item))
                authenticated.value = true
                modalLoading.value = false
                buyStep.value = 100;
                continueWithAccount()
            }
            // set token
            
        } else {
            alert('cannot establish connection to login server')
        }
    }

    const search = new URLSearchParams(window.location.search);
    if(search.get("auth") == "true") {
        authChallenge()
        search.delete("auth");
      
    }
    if(search.get("purchase-intent") == "true") {
        toggleModal()
        search.delete("purchase-intent");
    }
    window.history.replaceState({}, '', `${window.location.pathname}`);



 const recognizableWalletFormat = (inputString) => {
  if (inputString.length < 6) {
    // Handle strings with less than 6 characters (3 + 3 + 3 dots)
    return "String is too short";
  }

  // Get the first 3 characters
  const firstThree = inputString.slice(0, 4);

  // Get the last 3 characters
  const lastThree = inputString.slice(-3);

  // Concatenate the first 3, ellipsis, and last 3
  const result = firstThree + "..." + lastThree;

  return result;
}
    
    watchNetwork((network) => {
        if(network.chain && network.chain.id != 137) {
            correctNetwork.value = false
        } else {
            correctNetwork.value = true
        }
    })
    watchAccount(async () => {
        
        if(!currentAccountAddress.value) {
            currentAccountAddress.value = getAccount().address
        }
        else {
            if(currentAccountAddress.value != getAccount().address) {
                // new account detected, reload page
                console.log("new acc")
                location.reload()
            }
        }

        if(getAccount().address &&  getAccount().address.length != undefined) {      
            accountActive.value = true;         
            const itemStr = localStorage.getItem(`token/${getAccount().address}`)
            if(!itemStr) {
                authenticated.value = false
            }  else {
                const item = JSON.parse(itemStr)
	            const now = new Date()
                if (now.getTime() + 1200000 > item.expiry) { // add 20 minute buffer
                    localStorage.removeItem(`token/${getAccount().address}`)
                    authenticated.value = false
                } else {
                    authenticated.value = true
                    continueWithAccount()
                }
            }
        
        } else {
            console.log("disable account")
            accountActive.value = false
            buyStep.value = 0;
        }
    })

    function copyText() {
        let text = `https://main--chipper-hotteok-85cbb2.netlify.app/tickets?gift=1&address=${giftAddress.value}`
        navigator.clipboard.writeText(text);
        copyDone.value = true;

        setTimeout(() => {
            copyDone.value = false
        }, 1400)

    }

    function connectAndClose() {
        modal.open()
        // reopen after user is connect
        reopenAfterConnection.value = false
        modalActive.value = false
    }

    function toggleGift()  {
        giftTicket.value = !giftTicket.value
    }

    return {
        getBalance,
        connectAndClose,
        account,
        buyStep,
        authenticated,
        modal,
        accountActive,
        correctNetwork,
        approve,
        authChallenge,
        openBuy,
        closeBuy,
        recognizableWalletFormat,
        buyModal,
        modalActive,
        toggleModal,
        modalLoading,
        giftAddress,
        copyDone,
        verseBalance,
        getAccount,
        showTimer,
        verseAllowance,
        loadingMessage,
        purchaseTicket,
        giftTicket,
        ticketInputAddress,
        copyText,
        toggleGift,
        onTicketInputChange,
        toggleModal,
        ticketInputValid,
        requestNetworkChange,
        ensLoaded,
        singleTransactionApproval,
        giftInputLoad
    }
  }
}
</script>

<template>
    <div class="backdrop" v-if="buyModal">
        <p class="closeBuy"><i @click="closeBuy()" class="close-btn" style="cursor: pointer;"></i></p>
        <div class="modal" style="top: 70px; padding-top: 5px;">
            <h3 style="position: absolute; top: 31px;">Buy Verse</h3>
            <div id="debridgeWidget" style="width: 50%;"></div>
        </div>
    </div>
    <!-- modals -->
    <div class="backdrop" v-if="modalActive">
       
        <!-- modal for loading -->
        <div class="modal" v-if="modalLoading">
            <div class="modal-head">
                <h3 class="title">Loading..</h3>
                <p class="iholder"><i @click="toggleModal()" class="close-btn" ></i></p>
            </div>
            <div class="modal-divider" v-if="buyStep < 3">
                <div class="modal-progress p50"></div>
            </div>  
            <div class="modal-divider" v-if="buyStep >= 3">
                <div class="modal-progress p75"></div>
            </div>  
            <div class="modal-body">
                <div class="img-spinner"></div>

                <p v-if="!showTimer" class="loadingText">{{loadingMessage}}</p>
                <h3 v-if="showTimer" class="title">Payment Successful</h3>
                <p v-if="showTimer && !giftTicket" class="subtext short">Issuing ticket to your wallet and awaiting final confirmation</p>
                <p v-if="showTimer && giftTicket" class="subtext short">Issuing ticket to the chosen wallet and awaiting final confirmation</p>
                
                <div v-if="showTimer" class="attention-footer">
                    <p>expected arrival in <strong>{{loadingMessage}}</strong></p>
                </div>
            </div>
        </div>
        <!-- modal for switching network -->
        <div class="modal" v-if="correctNetwork == false && !modalLoading">
            <div>
                <div class="modal-head">
                    <h3 class="title">Switch Network</h3>
                    <p class="iholder"><i @click="toggleModal()" class="close-btn" ></i></p>
                </div>
                <div class="modal-body">
                    <div class="change-network"></div>
                    <h3 class="title">Wrong Network Selected</h3>
                    <p class="subtext">Verse Voyager uses the Polygon network. Please change the network in your connected wallet or click the button below to switch automatically.</p>
                    <a class="" target="_blank" @click="requestNetworkChange()"><button class="btn verse-wide">Switch Wallet to Polygon</button></a>
                </div>
            </div>
        </div>

        <!-- modal for connecting account -->
        <div class="modal" v-if="buyStep == 99 && !modalLoading">
            <div>
            <div class="modal-head">
                <h3 class="title">Sign in</h3>
                <p class="iholder"><i @click="toggleModal()" class="close-btn" ></i></p>
            </div>
            <div class="modal-divider">
                <div class="modal-progress p25"></div>
            </div>  
            <div class="modal-body">
                <div class="img-wallet"></div>
                <h3 class="title">Sign in</h3>
                <p class="subtext short">Secure sign-in using your Web3 Wallet.</p>
                <a class="" target="_blank" @click="authChallenge()"><button class="btn verse-wide">Sign Message</button></a>
                <p class="modal-footer">Signing in with your wallet proves your wallet ownership. The message you sign is a random short sentence</p>
            </div>
            </div>
        </div>

                <!-- modal for connecting account -->
                <div class="modal" v-if="buyStep == 100 && !modalLoading">
            <div>
            <div class="modal-head">
                <h3 class="title">Success! </h3>
                <p class="iholder"><i @click="toggleModal()" class="close-btn" ></i></p>
            </div>
            <div class="modal-divider">
                <div class="modal-progress p100"></div>
            </div>  
            <div class="modal-body">
                <div class="img-wallet"></div>
                <h3 class="title">Sign in Success</h3>
                <p class="subtext short">Successfully signed in using Web3!</p>
                <a class="" @click="buyStep = 1" ><button class="btn verse-wide">Create New Character</button></a>
                <a class="" href="/tickets"><button class="btn verse-wide secondary" style="margin-top: 10px;">View Characters</button></a>
            </div>
            </div>
        </div>


        <!-- modal for connecting account -->
        <div class="modal" v-if="buyStep == 0 && !modalLoading && correctNetwork">
            <div>
            <div class="modal-head">
                <h3 class="title">Buy Character</h3>
                <p class="iholder"><i @click="toggleModal()" class="close-btn" ></i></p>
            </div>
            <div class="modal-divider">
                <div class="modal-progress p25"></div>
            </div>  
            <div class="modal-body">
                <div class="img-wallet"></div>
                <h3 class="title">No Wallet Connected</h3>
                <p class="subtext short">Connect your wallet below to get started. We support all major wallet providers.</p>
                <a class="" target="_blank" @click="connectAndClose()"><button class="btn verse-wide">Connect Wallet</button></a>
                <p class="modal-footer">Haven't set up a wallet yet? Get your wallet up and running with just a few clicks at <a target="_blank" href="https://wallet.bitcoin.com/">wallet.bitcoin.com </a></p>
            </div>
            </div>
        </div>
        <!-- // modal for purchasing verse -->
        <div class="modal" v-if="buyStep == 1 && !modalLoading && correctNetwork">
            <div>
                <div class="modal-head">
                    <h3 class="title">Buy Character</h3>
                    <p class="iholder"><i @click="toggleModal()" class="close-btn" ></i></p>
                </div>
                <div class="modal-divider">
                    <div class="modal-progress p50"></div>
                </div>  
                <div class="modal-body">
                    <div class="img-verse"></div>
                    <h3 class="title">Not Enough Verse</h3>
                    <p class="subtext short">You need <span>3000 VERSE</span> on Polygon in order to purchase a character</p>

                    <div class="wallet-balance">
                        <p class="balance-title">WALLET BALANCE</p>
                        <p class="balance">{{ verseBalance ? verseBalance.toFixed(2) : 0 }} VERSE</p>
                    </div>
    

                    <a class="" target="_blank" @click="openBuy"><button class="btn verse-wide half">Buy VERSE</button></a>
                    <a class="" target="_blank" href="https://wallet.polygon.technology/polygon/bridge"><button class="btn verse-wide half secondary">Bridge VERSE</button></a>
                    <p class="modal-footer">Already bought VERSE? click <a @click="getBalance()">here</a> to refresh your balance</p>
                </div>
        
            </div>
        </div>
        <!-- alllowance modal -->
        <div class="modal" v-if="buyStep == 2 && !modalLoading && correctNetwork">
            <div class="modal-head">
                <h3 class="title">Buy Ticket</h3>
                <p class="iholder"><i @click="toggleModal()" class="close-btn" ></i></p>
            </div>
            <div class="modal-divider">
                <div class="modal-progress p50"></div>
            </div>  
            <div class="modal-body">
                <div class="img-approve"></div>
                <h3 class="title">Approve the use of VERSE</h3>
                <p class="subtext">You need to enable the use of at least <span>3000 VERSE</span>. This is used to pay for your ticket. </p>
                <div class="gift-toggle-holder">
                            <h3 class="title">Allow for one transaction only</h3>
                            <label class="switch">
                            <input type="checkbox" v-on:change="toggleSingleApproval">
                                <span class="slider round"></span>
                            </label>
                        </div>
                <a class="" target="_blank" @click="approve()"><button class="btn verse-wide">Allow the use of VERSE</button></a>
                <p class="modal-footer">All tokens on the Polygon network require an approval transaction before they can be spent. <a target="blank" href="https://revoke.cash/learn/approvals/what-are-token-approvals">learn more here.</a></p>
            </div>
        </div>
        <!-- purchase modal -->
        <div class="modal" v-if="buyStep == 3 && !modalLoading && correctNetwork">
            <div class="modal-head">
                <h3 class="title">Buy Character</h3>
                <p class="iholder"><i @click="toggleModal()" class="close-btn" ></i></p>
            </div>
            <div class="modal-divider">
                <div class="modal-progress p75"></div>
            </div>  
            <div class="modal-body">
                <div class="img-purchase"></div>
                <h3 class="title">Buy Character</h3>
                <p class="subtext">It seems you have <span>3000 VERSE</span> in your wallet and contract approval has been set!</p>
                <div class="gift-toggle-holder" :class="{ opened: giftTicket }">
                    <h3 class="title">Send character as gift?</h3>
                    <label class="switch">
                    <input type="checkbox" v-on:change="toggleGift">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="gift-toggle-holder-bottom" v-if="giftTicket">
                    <p>Please provide us with the Polygon wallet address of the person who you want to gift the character to.</p>
                    <input placeholder="Polygon Address" class="giftInput" @input="onTicketInputChange" style="color: white;" v-model="ticketInputAddress" type="text" v-if="giftTicket == true">
                    <p v-if="ensLoaded.length > 0" style="color: white; text-align: center;  margin-top: 5px;  font-weight: 500"><small>{{ ensLoaded }}</small></p>
                    <p  v-if="!ticketInputValid && ticketInputAddress.length > 0" style="margin-top: 11px; color: #c6bfff; text-align: center; font-weight: 500"><small>address is not valid</small></p>
                </div>  

                <div v-if="!giftTicket">
                    <a class="" target="_blank" @click="purchaseTicket()" ><button class="btn verse-wide">Buy a Character</button></a>
                </div>

                <div v-if="giftInputLoad && giftTicket">
                    <a class="" target="_blank" ><button class="btn verse-wide disabled">Checking Address</button></a>
                </div>

                <div v-if="giftInputLoad == false && giftTicket">
                    <a class="" target="_blank" @click="purchaseTicket(ticketInputAddress)" v-if="giftTicket && ticketInputValid && ticketInputAddress.length > 0"><button class="btn verse-wide">Buy a Character</button></a>
                    <a class="" target="_blank" v-if="ticketInputAddress.length == 0 && giftTicket"><button class="btn verse-wide disabled">Submit an Address</button></a>
                    <a class="" target="_blank" v-if="giftTicket && !ticketInputValid && ticketInputAddress.length > 0"><button class="btn verse-wide disabled">Input Valid Address</button></a>
                </div>
            </div>
        </div>
        <!-- normal finish -->
        <div class="modal" v-if="buyStep == 4 && !modalLoading && correctNetwork">
            <div class="modal-head">
                <h3 class="title">Buy Character</h3>
                <p class="iholder"><i @click="toggleModal()" class="close-btn" ></i></p>
            </div>
            <div class="modal-divider">
                <div class="modal-progress p100"></div>
            </div>  
            <div class="modal-body">
                <div>
                    <div class="img-success"></div>
                    <div v-if="giftTicket">
                        <h3 class="title">Character Bought & Gifted!</h3>
                        <p class="subtext">We have sent the ticket to your specified wallet! Share this link with the recipient to let them know:

                        </p>

                        <input class="ticketlink" type="text" :value="`https://main--chipper-hotteok-85cbb2.netlify.app/tickets?gift=1&address=${giftAddress}`">
                            <button style="cursor:pointer" v-if="!copyDone" class="btn-copy" @click="() => copyText()">copy</button>
                            <button style="cursor:pointer" v-if="copyDone" class="btn-copy" @click="() => copyText()">copied</button>
                        <!-- change this text for gifted tickets -->
                        <a class="" href="/"><button class="btn verse-wide half extraTop extraTopMobile">Buy Another Character</button></a>
                        <a class="" href="/tickets"><button class="btn verse-wide half secondary extraTop">View your Characters</button></a>
                    </div>
                    <div v-if="!giftTicket">
                        <h3 class="title">Character Bought!</h3>
                        <p class="subtext short" style="margin-bottom: 0;">Time to spin the reel and create your Voyager!</p>
                        <!-- change this text for gifted tickets -->
                        <a class="" href="/tickets"><button class="btn verse-wide">View your Characters!</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="page">

        <div class="jumbo-mob"></div>

        <div class="float-holder clearfix">
            <div class="card-info">
                <h2>Verse Voyagers</h2>
                <h3 class="tit" style="margin-top: 10px; margin-bottom: 20px; ">On-Chain NFT Builder</h3>


            <p class="subtitle" style="font-weight: 300; margin-bottom: 20px; padding-left: 0;">
                Are you ready to embark on an exciting journey of creativity and chance? Spin the virtual slot machine to craft your unique character. With over 240 million possible combinations!            </p>

            <button class="btn verse-wide" v-if="authenticated" @click="toggleModal()">Create New Character</button>
            <a href="/tickets" v-if="authenticated"><button class="btn verse-wide secondary"  style="margin-top: 10px">View Characters</button></a>

            <button class="btn verse-wide" v-if="!authenticated && !accountActive" @click="toggleModal()">Create New Character</button>
            <button class="btn verse-wide secondary" style="margin-top: 10px" v-if="!authenticated && !accountActive" @click="toggleModal()">View Characters</button>
            <a v-if="!authenticated && accountActive" @click="authChallenge()"><button class="btn verse-wide secondary" style="margin-top: 10px;" >Login with Wallet {{ recognizableWalletFormat(getAccount().address) }}</button></a>
        
        </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.jumbo-mob {
    background-image: url("../assets/bg-mobile.png")!important;
    width: 100%;
    height: 500px;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    // justify-content: center;
    // display: flex;
    img {
        max-width: 100%;
        margin-top: 20px;
        background-size: cover;
    }
    @media(min-width: 500px) {
        display: none;
    }
}
.closeBuy {
    right: calc(50% - 300px);
    position: absolute; top: 25px; 
    color: white;
    @media(max-width: 880px) {
        left: unset;
        right: 15px;
    }


    @media(max-height: 600px) {
        top: 15px!important;
    }
}
iframe {
    width: 205%!important;
}
.btn-copy {
    height: 24px;
    position: absolute;

    width: 55px;
    border: none;
    right: 40px;
    top: 368px;
    font-size: 12px;
    color: white;
    background: linear-gradient(180deg, #0EBEF0 0%, #0085FF 100%);
    padding: 0px, 12px, 0px, 12px;
    border-radius: 100px;
}
.ticketlink {
    height: 46px; 
    padding-left: 10px;
    padding-right: 80px;
    position: relative;
    width: calc(100% - 90px);
    font-size: 16px;
    font-weight: 500;
    background-color: #030C14;
    border: 1px solid #313E57;
    color: white;
    margin-top: 20px;
    border-radius: 12px;
}
.tit {
    width: 100%!important;
}
.subtitle {
    color: #C5CEDB;
    width: 100%;
}
.p-gift {
    margin-bottom: 2px;
    font-size: 14px;
    margin-top: 20px;
    font-weight: 500;
}
.giftInput {
    outline: none;
    width: calc(100% - 18px);
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    height: 48px;
    padding-bottom: 2px;
    margin-top: 16px;
    color: #899BB5;
    background-color: #030C14;
    border: 1px solid #0085FF;
    padding-left: 16px;
    font-size: 16px;
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
    @media(max-width: 880px) {
        width: 100%;
    }

    &.verse {
        background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(51 249 238) 0%, rgb(19 255 179) 100.2%);
        color: #333;
        background: radial-gradient(circle farthest-corner at 10% 20%, rgb(249, 232, 51) 0%, rgb(250, 196, 59) 100.2%);

        font-weight: 600;
    }
    &.uniswap {
        background-color: white!important;
        color: #1c1b22;
    }
}

.wrongNetworkWarning {
    @media(max-width: 880px) {
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
.instant {
    @media(max-width: 880px) {
        display: none;
    }
    width: 200px;
    text-align: center;
    font-size: 12px;
    color: #E7E7E7;
}
.clearfix {
    overflow: auto;
    max-width: 1600px;
    margin-top: 20px;
    width: 100%;
    @media(max-width: 880px) {
        width: 100%!important;
        position: unset;
    }
}
.bubble {

    @media(max-width: 880px) {
        width: 41%!important;
        margin-right: 2%!important;
    }
    margin-bottom: 20px;
    width: 150px; 
    height: 18px;
    padding: 10px;
    text-align: center;
    background-color: #f2f0fe0f;;
    border-radius: 10px;
    float: left;
    margin-right: 10px;
    p {
        @media(max-width: 880px) {
            font-size: 11px;
        }
        color: white;
        font-size: 13px;
        margin: 0;
    }
}
.float-holder{
    margin: 0 auto;
    min-height: 100vh; // remove this after
}
.btn-buy {
    @media(max-width: 880px) {
        width: 100%;
    }
    margin-right: 10px;
    width: 200px;
    margin-top: 10px;
    height: 50px;
    background-color: #ffc700;
    color: white;
    border-radius: 5px;
    font-weight: 600;
    font-size: 17px;
    border: none;
    cursor: pointer;
    background: linear-gradient(rgb(14, 190, 240) 0%, rgb(0, 133, 255) 100%);


}

.btn-view {
    @media(max-width: 880px) {
        width: 100%;
    }
    margin-right: 10px;
    width: 200px;
    margin-top: 20px;
    height: 50px;
    font-weight: 600;
    border-radius: 5px;
    font-size: 17px;
    border: none;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    cursor: pointer;
}

.blocks {
    height: 210px;
    width: 750px;
    .block {
        float: left;
        margin-right: 10px; 
        width: 205px;
        border-radius: 15px;
        height: 150px;
        background-color: #11111d;
        box-shadow: 0 0 20px rgba(17, 17, 29, 0.7);
        padding: 15px;

        h5 {
            margin-top: 0;
            text-align: center;
        }

        h3 {
            text-align: center;
            margin: 0;
            font-size: 30px;
            i {
                color: #c6bfff;
            }
        }

        p {
            text-align: center;
            font-size: 14px;
            color: #777;
            font-weight: 300;
            margin-bottom: 0;
        }
    }
}
.card-info {
    padding: 30px;
    z-index: 1;
    padding-top: 80px;
    padding-left: 0;
    float: left;
    width: 27%;
    margin-left: 15%;
    color: white;
    padding-right: 0;
    @media(max-width: 880px) {
        width: calc(100% - 40px);
        margin-left: 0;
        padding: 20px;
    }
    @media(max-width: 500px) {
        margin-top: 50vh;
        position: relative;
    }

    h2 {
        margin: 0;
        font-size: 40px;

    }
    h3 {
        margin-bottom: 40px;
    }
    p {
        font-weight: 500;
    }
}
.page {
    background-image: url("../assets/bg.png");
    text-align: center;
    @media(max-width: 880px) {
        width: 100%;
        padding-top: 80px;
        height: calc(100vh - 50px);
        height: calc(100dvh - 50px);
    }
    @media(max-width: 500px) {
        padding-top: 0;
    }
    height: unset;
    min-height: calc(100vh - 120px);
    min-height: calc(100dvh - 120px);
    width: 100%;
    padding-top: 150px;
    overflow: unset;
}

h2 {
    text-align: center;
    color: white;
}


.fa-check {
    color: rgb(35, 226, 35);
}


</style>