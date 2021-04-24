<template>
    <div >
    <div id="root">
        <div class="App">
            <nav style="margin-bottom: 50px;" class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a aria-current="page" style="color: black" class="nav-link active" id="logo" href="/">
                    <img alt=""
                         src="/tpunk_logo.png"
                         class="d-inline-block align-top"
                         style="margin-right: 5px;"
                         height="40">
                </a>

                    <button @click="toggleCollapse" aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation"
                            class="navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button>
                    <div  class="ml-auto navbar-collapse " v-bind:class="{ 'collapse' : showMenu }" id="responsive-navbar-nav">
                        <div class="ml-auto navbar-nav">
                            <router-link @click.native="toggleCollapse" :to="{ name : 'home'}" class="nav-link " >
                                Home
                            </router-link>
                            <router-link @click.native="toggleCollapse"  :to="{ name : 'mint'}" class="nav-link " >
                                Mint
                            </router-link>
                            <router-link @click.native="toggleCollapse"  :to="{ name : 'myPunks'}" class="nav-link " >
                                MyTpunks
                            </router-link>
<!--                            <router-link @click.native="toggleCollapse"  :to="{ name : 'marketplace'}" class="nav-link " >-->
<!--                                Marketplace-->
<!--                            </router-link>-->
                            <router-link @click.native="toggleCollapse"  :to="{ name : 'mywallet'}" class="nav-link " >
                                MyWallet
                            </router-link>
                        </div>
                    </div>
                </div>
            </nav>
            <router-view></router-view>
        </div>
    </div>

    <div class="container">
        <div class="col-md-12" align="center">

<!--            <h4><strong >Sale starts in </strong></h4>-->
<!--            <flip-countdown deadline="2021-03-16 00:00:00"></flip-countdown>-->
            <br>
            <span id="totalSupply"><h3><strong>Mint A Tpunk</strong></h3></span>
            <router-link :to="{ name : 'mint'}" class="btn btn-primary"  id="buyBtn">
                <strong> Mint </strong>
            </router-link>
            <br>
            <br>
        </div>

    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-12 text_block">
                <h3><strong>What is a Tpunk ?</strong></h3>
                <p>
                    Cryptopunks are 10,000 unique collectible characters with proof of ownership stored on the blockchain. There are a few rarer types: Apes, Zombies and even the odd Alien.
                </p>
                <p>
                    The initial Cryptopunks distribution was free to claim punks. This made it so that a few early NFT fans had all the fun and have made millions. Now people are more aware of <strong>NFTs</strong>. We want to give everyone on <strong>TRX</strong> a chance to be a part of Punks again.
                </p>
            </div>
            <strong>
            </strong></div>
        <strong>
        </strong></div>




    <strong>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text_block">
                    <h3><strong>Random Distribution</strong></h3>
                    <p>
                        In order to make the distribution of the Tpunks as fair as possible, Tpunks will be distributed randomly during the sale phase of a month. It is what the great Justin Sun calls the "Next Generation of Digital Art Collectibles" and Tpunks takes pride into adopting this uniquest of all traits.
                    </p>
                    <p>
                        Tpunks Contract: <a
                            href="https://tronscan.io/#/contract/TX6RRLYiEKfd4Dt8HjKiVgRhMhTEgeP3EL"
                            target="_blank"><strong>TX6RRLYiEKfd4Dt8HjKiVgRhMhTEgeP3EL</strong></a>
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 text_block">
                    <h3><strong>Referral rewards</strong></h3>
                    <p>Invite and win upto 1,000,000 Tron. </p>
                    <p>When the sale ends top 5 user with most invites will get</p>
                    <p>1. 1,000,000 Tron</p>
                    <p>2. 500,000 Tron</p>
                    <p>3. 250,000 Tron</p>
                    <p>4. 100,000 Tron</p>
                    <p>5. 50,000 Tron</p>
                    <p>Also, For every Tpunk mints by the invites you will get 500 Tron.</p>
                </div>
            </div>

            <div class="row" style="margin-top: 40px;margin-bottom: 40px;">
                <div class="col" >
                    <h3><strong>Top Referrer</strong></h3>
                    <table class="table">
                        <tr>
                            <th>#</th>
                            <th>address</th>
                            <th>invite</th>
                            <th>reward</th>
                        </tr>
                        <tr v-for="(win, index) in winner" v-bind:key="index">
                            <td>{{ index+1 }}</td>
                            <td>{{ win.address }}</td>
                            <td>{{ win.referral_buy_index }} Tpunks</td>
                            <td>{{ win_reward[index] }} trx</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="row mb-5 flex-row-reverse">
                <div style="">
                    <a href="https://T.me/t_punks" class="p-1">
                        <img src="/telegram.svg" style="width: 30px; height: 30px;" >
                    </a>
                    <a href="https://www.reddit.com/r/TronNFTs" class="p-1">
                        <img src="/reddit.svg" style="width: 30px; height: 30px;" >
                    </a>
                    <a href="https://twitter.com/tpunks_official" class="p-1">
                        <img src="/twitter.svg" style="width: 30px; height: 30px;" >
                    </a>
<!--                    <a href="https://github.com/Tronpunklabs/tronpunk-contract" class="p-1">-->
<!--                        <img src="/github.svg" style="width: 30px; height: 30px;" >-->
<!--                    </a>-->
                </div>
            </div>

        </div>


    </strong>




    </div>
</template>
<script>
    // import FlipCountdown from 'vue2-flip-countdown'
    export default {
        // components: { FlipCountdown },
        data() {
            return {
                showMenu : true,
                winner : [],
                win_reward : {
                    0 : '1M',
                    1 : '500K',
                    2 : '250K',
                    3 : '100K',
                    4 : '50K'
                }
            }
        },
        mounted() {
            setTimeout(()=>{
                this.showAirDropGift();
            }, 2000);
            setInterval(()=>{
                this.showAirDropGift();
            }, 10000);

        },
        methods: {
            toggleCollapse(){
                this.showMenu = !this.showMenu
            },
            async showAirDropGift(){
                let win = [];
                for(let i=0; i<5; i++){
                    let winners = await this.walletManager.contract.winners(i).call();
                    winners = this.walletManager.ttronWeb.address.fromHex(winners);
                    if(winners == this.walletManager.ttronWeb.address.fromHex('410000000000000000000000000000000000000000'))
                        break;
                    let w = await this.walletManager.contract.usersAirdrop(winners).call();
                    w.address = winners;
                    win.push(w);
                }
                this.winner = win;

            }
        },
    }
</script>

<style scoped>

</style>
