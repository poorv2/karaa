class _walletManager {

    // status
    // null     => not connected
    // false    => trying to connect
    // true     => connect

    walletStatus = false;

    ttronWeb = false;

    contract = false;

    constructor() {

        if (window.tronWeb && (window.tronWeb.fullNode.host == "https://api.trongrid.io" || window.tronWeb.fullNode.host == "https://api.tronstack.io") && window.tronWeb.defaultAddress.base58)
            // if(window.tronWeb && window.tronWeb.defaultAddress.base58)
            this.connectToTronLInk();
        else {
            setTimeout(async () => {

                if (window.tronWeb && (window.tronWeb.fullNode.host == "https://api.trongrid.io" || window.tronWeb.fullNode.host == "https://api.tronstack.io") && window.tronWeb.defaultAddress.base58)
                    // if(window.tronWeb && window.tronWeb.defaultAddress.base58)
                    await this.connectToTronLInk();
                else
                    this.walletStatus = null;

            }, 1000);
        }

    }

    async connectToTronLInk() {
        // if(window.tronWeb && window.tronWeb.defaultAddress.base58){
        if (window.tronWeb && (window.tronWeb.fullNode.host == "https://api.trongrid.io" || window.tronWeb.fullNode.host == "https://api.tronstack.io") && window.tronWeb.defaultAddress.base58) {
            try {
                this.walletStatus = false;
                this.ttronWeb = window.tronWeb;
                await this.connectToContract();
                this.walletStatus = true;
            } catch (e) {
                console.log(e.message);
                this.walletStatus = null;
            }
        } else {
            this.walletStatus = null;
            alert('please install TronLink extension')
        }
    }

    async connectToContract() {
        if (!this.contract) {
            this.contract = await (this.ttronWeb.contract().at("TX6RRLYiEKfd4Dt8HjKiVgRhMhTEgeP3EL"));
        }
    }

    getStatus() {
        return this.walletStatus
    }
}

const walletManager = {

    install(Vue, options) {
        console.log(options);
        Vue.prototype.walletManager = new _walletManager();
    }
}

export default walletManager;