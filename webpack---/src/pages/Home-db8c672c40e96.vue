<template>
  <div>
    <div class="text-center" style="margin-top: -50px;">
      <div style="height: 300px;"
           class="jumbotron">
        <div class="bg-image" ></div>
        <div class="bg-text" >
          <h1>
            <strong><em>Tpunks</em></strong>
            the First NFT on Tron Blockchain
          </h1>
          <p>We are currently minting the NFTs but are setting up for a marketplace once it is all done</p>
  <!--        <p>We are currently setting up the Marketplace</p>-->
          <p>
<!--            <router-link :to="{ name : 'marketplace'}"   class="btn btn-primary">-->
<!--              Check Out Upcoming Marketplace-->
<!--            </router-link>-->
          </p>
        </div>
      </div>
    </div>
    <div class="container"><h4 class="text-center"></h4>
      <div></div>
    </div>
    <div class="container"><h4 class="text-center"></h4>
      <div class="infinite-scroll-component__outerdiv">
        <div class="infinite-scroll-component " style="height: auto; overflow: auto;">
          <div class="row"></div>
          <h4></h4></div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Home",
  data(){
    return {
      searchById : '',
      punks : []
    }
  },
  mounted() {
    let params = this.$route.params['id']
    if(params > 0){
      window.localStorage.setItem('inviteKey', params);
    }
  },
  methods: {

  },
};
</script>
<style>
  .jumbotron{
    position: relative;
  }
  .bg-image{
    /* The image used */
    background-image: url('/punk_bg.jpg');

    /* Add the blur effect */
    filter: blur(4px);
    -webkit-filter: blur(4px);

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    width: 95%;

  }
  .bg-text {
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
    color: white;
    font-weight: bold;
    border: 3px solid #f1f1f1;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;
    position: relative;
    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translate(-50%, -50%);*/
    z-index: 2;
    width: 80%;
    /*padding: 20px;*/
    text-align: center;
  }
  @media only screen and (max-width: 600px) {
    .jumbotron {
      height: 400px !important;
    }
  }
</style>
