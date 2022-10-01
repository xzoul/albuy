<template>
  <div class="s-setup-shop-info-container">
    <c-header rootClassName="c-header-root-class-name9"></c-header>
    <div class="s-setup-shop-info-container01">
      <div class="s-setup-shop-info-container02">
        <div class="s-setup-shop-info-container03">
          <span class="s-setup-shop-info-text">Shop Name</span>
          <input v-model="ShopName"
            type="text"
            class="s-setup-shop-info-currentpassinput input"
          />
        </div>
        <div class="s-setup-shop-info-container04">
          <span class="s-setup-shop-info-text01">Pickup Address</span>
        </div>
        <div class="s-setup-shop-info-container05">
          <span class="s-setup-shop-info-text02">Full Name</span>
          <input v-model="FullName"
            type="text"
            class="s-setup-shop-info-currentpassinput01 input"
          />
        </div>
        <div class="s-setup-shop-info-container07">
          <span class="s-setup-shop-info-text04">Province</span>
          <input v-model="Province"
            type="text"
            class="s-setup-shop-info-currentpassinput03 input"
          />
        </div>
        <div class="s-setup-shop-info-container08">
          <span class="s-setup-shop-info-text05">Municipality/City</span>
          <input v-model="Municipality"
            type="text"
            class="s-setup-shop-info-currentpassinput04 input"
          />
        </div>
        <div class="s-setup-shop-info-container09">
          <span class="s-setup-shop-info-text06">Barangay</span>
          <input v-model="Barangay"
            type="text"
            class="s-setup-shop-info-currentpassinput05 input"
          />
        </div>
        <div class="s-setup-shop-info-container10">
          <span class="s-setup-shop-info-text07">Detailed Address</span>
          <input v-model="DetailedAddress"
            type="text"
            class="s-setup-shop-info-currentpassinput06 input"
          />
        </div>
        <div class="s-setup-shop-info-container11">
          <span class="s-setup-shop-info-text08">Postal Code</span>
          <input v-model="PostalCode"
            type="text"
            class="s-setup-shop-info-currentpassinput07 input"
          />
        </div>
        <div class="s-setup-shop-info-container12">
          <span class="s-setup-shop-info-text09">Email</span>
          <input v-model="Email"
            type="text"
            class="s-setup-shop-info-currentpassinput08 input"
          />
        </div>
        <div class="s-setup-shop-info-container13">
          <div class="s-setup-shop-info-container14">
            <span class="s-setup-shop-info-text10">Phone Number</span>
            <input v-model="PhoneNumber"
              type="text"
              class="s-setup-shop-info-currentpassinput09 input"
            />
          </div>
          <span class="s-setup-shop-info-text11">
            <span class="s-setup-shop-info-text12">Verify</span>
          </span>
        </div>
        <div class="s-setup-shop-info-container15">
          <button @click="cancelShopAddress()" class="button s-setup-shop-info-button">Cancel</button>
          <button v-if="!NewAddress" @click="removeShopAddress()" class="button s-setup-shop-info-button1">Remove</button>
          <button @click="saveShopAddress()" class="s-setup-shop-info-button1 button">
            <span class="s-setup-shop-info-text13">
              <span>Save</span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name9"></app-footer>
  </div>
</template>

<script>
import Parse from 'parse';
import CHeader from '@/components/c-header'
import AppFooter from '@/components/footer'

export default {
  name: 'SSetupShopInfo',
  components: {
    CHeader,
    AppFooter,
  },
  metaInfo: {
    title: 'S-Setup-Shop-Info - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'S-Setup-Shop-Info - exported project',
      },
    ],
  },
  beforeMount(){
    console.log(Parse.User.current().get("AccountID"));
    var id = this.$route.query.ShopAddressID;
    if(id == "new"){
      this.NewAddress = true;
    }
    else{
      this.getShopAddressData(this.$route.query.ShopAddressID);
    }
  },

  data(){
    return{
      NewAddress: false,
      ShopAddressID: "",
      ShopID: "",
      ShopName: "",
      FullName: "",
      Province: "",
      Municipality: "",
      Barangay: "",
      DetailedAddress: "",
      PostalCode: "",
      Email: "",
      PhoneNumber: "",
    }
  },
  
  methods:{
    async getShopAddressData(ShopAddressID){
      var param = {"ShopAddressID" : ShopAddressID};
      var data = JSON.parse(await Parse.Cloud.run("GetShopAddressData", param));
      this.ShopAddressID = ShopAddressID;
      this.ShopID = data.ShopID;
      this.ShopName = data.ShopName;
      this.FullName = data.FullName;
      this.Province = data.Province;
      this.Municipality = data.Municipality;
      this.Barangay = data.Barangay;
      this.DetailedAddress = data.StreetAddress;
      this.PostalCode = data.PostalCode;
      this.Email = data.Email;
      this.PhoneNumber = data.PhoneNumber;
    },

    async saveShopAddress(){
      var param = {
        "ShopID" : this.ShopID,
        "ShopName" : this.ShopName,
        "FullName" : this.FullName,
        "Province" : this.Province,
        "Municipality" : this.Municipality,
        "Barangay" : this.Barangay,
        "StreetAddress" : this.DetailedAddress,
        "PostalCode" : this.PostalCode,
        "Email" : this.Email,
        "PhoneNumber" : this.PhoneNumber,
      };

      if(!this.NewAddress){
        param["ShopAddressID"] = this.ShopAddressID,
        await Parse.Cloud.run("EditShopAddress", param).then(()=>{
          this.cancelShopAddress();
        });
      }
      else{
        param["ShopID"] = Parse.User.current().get("AccountID");
        await Parse.Cloud.run("AddShopAddress", param).then(()=>{
          this.cancelShopAddress();
        });
      }
    },

    async cancelShopAddress(){
      //go back
      this.$router.push({
        name: 's-product-all',
        query: {
          Tab: "settings_my_address",
        }
      });
    },

    async removeShopAddress(){
      var param = {"ShopAddressID" : this.ShopAddressID};
      await Parse.Cloud.run("DeleteShopAddress", param).then(()=>{
        this.cancelShopAddress();
      });
    },

  }
}
</script>

<style>
html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6 {  margin: 0;  padding: 0;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }

.s-setup-shop-info-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.s-setup-shop-info-container01 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  max-width: var(--dl-size-size-maxwidth);
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.s-setup-shop-info-container02 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  flex-direction: column;
}
.s-setup-shop-info-container03 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container04 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
  border-top-width: 1px;
}
.s-setup-shop-info-text01 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 20px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-container05 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text02 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput01 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container06 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text03 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput02 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container07 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text04 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput03 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container08 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  padding-left: 16px;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text05 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput04 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container09 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text06 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput05 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container10 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text07 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput06 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container11 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text08 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput07 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container12 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text09 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput08 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container13 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: column;
}
.s-setup-shop-info-container14 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text10 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput09 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-text11 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 12px;
  align-self: flex-end;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-text12 {
  color: var(--dl-color-primary-100);
}
.s-setup-shop-info-container15 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-end;
}
.s-setup-shop-info-button1 {
  margin-left: var(--dl-space-space-unit);
}
@media(max-width: 991px) {
  .s-setup-shop-info-container02 {
    width: 100%;
  }
  .s-setup-shop-info-currentpassinput {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput01 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput02 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput03 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput04 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput05 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput06 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput07 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput08 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput09 {
    max-width: 100%;
  }
}
@media(max-width: 767px) {
  .s-setup-shop-info-container02 {
    width: 100%;
  }
  .s-setup-shop-info-container03 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput {
    max-width: 100%;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container05 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput01 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container06 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput02 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container07 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput03 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container08 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput04 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container09 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput05 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container10 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput06 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container11 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput07 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container12 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput08 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container14 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput09 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-text11 {
    align-self: flex-end;
  }
}
@media(max-width: 470px) {
  .s-setup-shop-info-container01 {
    padding: var(--dl-space-space-unit);
  }
  .s-setup-shop-info-text {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text02 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput01 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text03 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput02 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text04 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput03 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text05 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput04 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text06 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput05 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text07 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput06 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text08 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput07 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text09 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput08 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text10 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput09 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text11 {
    font-size: 11px;
  }
  .s-setup-shop-info-button {
    font-size: 14px;
  }
  .s-setup-shop-info-text13 {
    font-size: 14px;
  }
}
</style>
