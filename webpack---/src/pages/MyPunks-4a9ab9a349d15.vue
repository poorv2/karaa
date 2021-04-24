<template>
    <div class="container-fluid" style="min-height: 500px">
        <div class="row">
            <div class="col">
                <div class="">
                    <div class="" >
                        <div v-if="!this.walletStatus" class="row">

                            <div v-if="this.walletStatus==false" style="margin: 0 auto;">
                                <button  type="button" class="btn" >
                                    <div class="spinner-border" style="width: 3rem; height: 3rem;margin-bottom: 4px"   role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </button>
                            </div>
                            <div v-else class="text-center" style="margin: 0 auto;">
                                <h1> Connect your Tron Wallet </h1>
                                <div class="text-center" style="margin-bottom: 20px;">
                                </div>
                                <button v-if="this.walletStatus == null" @click="walletManager.connectToTronLInk()" type="button" class="btn btn-primary">
                                    Connect Wallet
                                </button>
                                <button v-else type="button" class="btn btn-primary">
                                    Connect Wallet
                                    <div class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px"   role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </button>
                            </div>

                        </div>
                        <div v-else-if="punks.length > 0" class="row">
                            <div v-for="(punk) in punks" v-bind:key="punk.idx" style="margin-bottom: 10px;" class="col" >
                                <div style="height: 100%; max-width: 300px; min-width: 210px;" class="card">

                                    <img v-if="justin_Tpunks.indexOf(punk.idx) > -1" class="card-img-top pixelated" :src="('/justin/' +punk.idx +'-Tpunk.png')">
                                    <img v-if="punk.idx < 10" class="card-img-top pixelated" :src="('https://www.larvalabs.com/public/images/cryptopunks/punk000'+ punk.idx +'.png')">
                                    <img v-else-if="punk.idx < 100" class="card-img-top pixelated" :src="('https://www.larvalabs.com/public/images/cryptopunks/punk00'+ punk.idx +'.png')">
                                    <img v-else-if="punk.idx < 1000" class="card-img-top pixelated" :src="('https://www.larvalabs.com/public/images/cryptopunks/punk0'+ punk.idx +'.png')">
                                    <img v-else-if="punk.idx < 10000" class="card-img-top pixelated" :src="('https://www.larvalabs.com/public/images/cryptopunks/punk'+ punk.idx +'.png')">
                                    <div  class="card-body">
                                        <div class="stretched-link card-title h5">Tpunk {{ punk.idx }}</div>
                                        <div>
                                            <div class="text-muted card-subtitle h6">{{ punk.type }}</div>
                                            <p class="card-text">
                                            <table class="table table-sm table-borderless table-hover">
                                                <tbody>
                                                <!--                          <tr>-->
                                                <!--                            <td>Price</td>-->
                                                <!--                            <td>Not Listed</td>-->
                                                <!--                          </tr>-->
                                                <!--                          <tr>-->
                                                <!--                            <td>Bid</td>-->
                                                <!--                            <td>No Bids</td>-->
                                                <!--                          </tr>-->
                                                </tbody>
                                            </table>
                                            <span v-for="(tag, index) in punk.attributes" v-bind:key="index" style="margin-right: 4px;" class="badge badge-primary">{{ tag }}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="punk_loading" class="row" >
                            <button  type="button" class="btn" style="margin: 0 auto;">
                                <div class="spinner-border" style="width: 3rem; height: 3rem;margin-bottom: 4px"   role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </button>
                        </div>
                        <div v-else class="row" >
                            <div class="col-md-4" ></div>
                            <div class="col-md-4 card" >
                                <div class="card-body" >
                                    <p class="card-title">You don't have Tpunks yet, your Tpunks will be show a moment after mint</p>
                                </div>
                            </div>
                            <div class="col-md-4" ></div>
                        </div>
                        <h4></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: "Details",
        data(){
            return {
                walletStatus : false,
                punk_loading : false,
                is_load_my_punk : false,
                punks : [],
                justin_Tpunks : [3442, 910, 846, 794, 377, 373, 300, 224, 220, 81, 57]
            }
        },
        mounted() {
            setInterval(()=>{
                this.walletStatus = this.walletManager.walletStatus;
                if(this.walletStatus && !this.is_load_my_punk){
                    this.is_load_my_punk = true;
                    this.getMyPunks();
                }
            }, 100);
        },
        methods: {
            showDetail(index){
                this.$router.push({name: "details", params : {id : index}});
            },
            async getMyPunks(){

                if(!this.punk_loading) {
                    this.punk_loading = true;

                    try {
                        // let res = await this.axios.post('/server/mywallet',
                        //     {public_key: window.tronWeb.defaultAddress.base58}
                        // );

                        let mybalance = await this.walletManager.contract.balanceOf(this.walletManager.ttronWeb.defaultAddress.base58).call();
                        mybalance = (this.walletManager.ttronWeb.BigNumber(mybalance).toNumber());

                        this.punks = [];

                        for(let i=0; i<mybalance; i++){
                            let number = await this.walletManager.contract.tokenOfOwnerByIndex(this.walletManager.ttronWeb.defaultAddress.base58, i).call();
                            this.punks.push(window.punks[(this.walletManager.ttronWeb.BigNumber(number).toNumber())]);
                        }



                        // console.log(res);
                        // this.punks = [];
                        // for (let w = 0; w < res.data.msg.length; w++) {
                        //     for (let i = 0; i < 10000; i++) {
                        //         if (res.data.msg[w].p_index == i) {
                        //             this.punks.push(window.punks[i]);
                        //         }
                        //     }
                        // }
                    }catch (e) {
                        console.log(e.message);
                    }

                    this.punk_loading = false;
                }

            },
        },
    };
</script>
