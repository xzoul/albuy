<template>
  <div class="s-create-shop-acc-ver3-container">
    <div class="s-create-shop-acc-ver3-container01">
      <div class="s-create-shop-acc-ver3-container02">
        <div class="s-create-shop-acc-ver3-container03">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-ccuq-200h.png"
            class="s-create-shop-acc-ver3-pasted-image"
          />
          <svg
            viewBox="0 0 987.4285714285713 1024"
            class="s-create-shop-acc-ver3-icon"
          >
            <path
              d="M987.429 510.286c0 5.143-2.286 10.286-5.714 13.714l-219.429 202.286c-5.714 5.143-13.143 6.286-20 3.429-6.286-2.857-10.857-9.143-10.857-16.571v-128h-713.143c-10.286 0-18.286-8-18.286-18.286v-109.714c0-10.286 8-18.286 18.286-18.286h713.143v-128c0-7.429 4-13.714 10.857-16.571s14.286-1.714 20 2.857l219.429 200c3.429 3.429 5.714 8 5.714 13.143v0z"
            ></path>
          </svg>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-yrtv-200h.png"
            class="s-create-shop-acc-ver3-pasted-image1"
          />
          <svg
            viewBox="0 0 987.4285714285713 1024"
            class="s-create-shop-acc-ver3-icon2"
          >
            <path
              d="M987.429 510.286c0 5.143-2.286 10.286-5.714 13.714l-219.429 202.286c-5.714 5.143-13.143 6.286-20 3.429-6.286-2.857-10.857-9.143-10.857-16.571v-128h-713.143c-10.286 0-18.286-8-18.286-18.286v-109.714c0-10.286 8-18.286 18.286-18.286h713.143v-128c0-7.429 4-13.714 10.857-16.571s14.286-1.714 20 2.857l219.429 200c3.429 3.429 5.714 8 5.714 13.143v0z"
            ></path>
          </svg>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-8zsd-200h.png"
            class="s-create-shop-acc-ver3-pasted-image2"
          />
        </div>
        <div class="s-create-shop-acc-ver3-container04">
          <svg viewBox="0 0 1024 1024" class="s-create-shop-acc-ver3-icon4">
            <path
              d="M512 1024c282.77 0 512-229.23 512-512s-229.23-512-512-512-512 229.23-512 512 229.23 512 512 512zM512 96c229.75 0 416 186.25 416 416s-186.25 416-416 416-416-186.25-416-416 186.25-416 416-416z"
            ></path>
            <path
              d="M669.256 317.256l-90.512-90.512-285.254 285.256 285.256 285.254 90.508-90.508-194.744-194.746z"
            ></path>
          </svg>
          <span class="s-create-shop-acc-ver3-text">
            Create Your Account Details
          </span>
        </div>
        <div class="s-create-shop-acc-ver3-container05">
          <div class="s-create-shop-acc-ver3-container06">
            <span class="s-create-shop-acc-ver3-text01">
              <span class="s-create-shop-acc-ver3-text02">*</span>
              <span>Shop Username:</span>
            </span>
            <input v-model="ShopUsername"
              type="text"
              placeholder="placeholder"
              class="s-create-shop-acc-ver3-textinput input"
            />
          </div>
          <div class="s-create-shop-acc-ver3-container07">
            <span class="s-create-shop-acc-ver3-text04">
              <span class="s-create-shop-acc-ver3-text05">*</span>
              <span>Shop Name:</span>
            </span>
            <input v-model="ShopName"
              type="text"
              placeholder="placeholder"
              class="s-create-shop-acc-ver3-textinput1 input"
            />
          </div>
          <div v-if="!hasAuthData" class="s-create-shop-acc-ver3-container08">
            <div class="s-create-shop-acc-ver3-container09">
              <span class="s-create-shop-acc-ver3-text07">
                <span class="s-create-shop-acc-ver3-text08">*</span>
                <span>Password:</span>
              </span>
              <input
                type="text"
                placeholder="placeholder"
                class="s-create-shop-acc-ver3-textinput2 input"
              />
            </div>
            <div v-if="!hasAuthData" class="s-create-shop-acc-ver3-container10">
              <span class="s-create-shop-acc-ver3-text10">
                <span class="s-create-shop-acc-ver3-text11">*</span>
                <span>Confirm Password:</span>
              </span>
              <input
                type="text"
                placeholder="placeholder"
                class="s-create-shop-acc-ver3-textinput3 input"
              />
            </div>
          </div>
        </div>
        <div class="s-create-shop-acc-ver3-container11">
          <button class="s-create-shop-acc-ver3-button button">Back</button>
          <button @click="createAccount()" class="s-create-shop-acc-ver3-button1 button">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Parse from 'parse';

  export default {
    name: 'SCreateShopAccVer3',
    metaInfo: {
      title: 'S-CreateShopAccVer3 - exported project',
      meta: [
        {
          property: 'og:title',
          content: 'S-CreateShopAccVer3 - exported project',
        },
      ],
    },

    beforeMount(){
      var currentUser = Parse.User.current();
      if (currentUser) {
          this.loggedIn = true;
          if(currentUser.get("authData") != undefined){
            this.hasAuthData = true;
          }
      }
      //Assign DocumentURL
      this.ShopVerificationFile = this.$route.query.DocumentURL;
    },

    data(){
      return{
          //Account Variables
          loggedIn: false,
          hasAuthData: false,

          //Shop Variables
          ShopUsername: '',
          ShopName: '',
          ShopVerificationFile: '',
          Password: '',
          ConfirmPassword: '',
      }
    },

    methods:{
      async createAccount(){
        var params = {
          "ShopUsername" : this.ShopUsername,
          "ShopName" : this.ShopName,
          "ShopVerificationFile" : this.ShopVerificationFile,
        }
        await Parse.Cloud.run("AddShop", params).then(async ()=>{
            alert("Added Shop");
            //Update user locally
            var currentUser = Parse.User.current();
            params = {"UserID" : currentUser.id};
            var updatedData = JSON.parse(await Parse.Cloud.run("GetUpdatedUserData", params));
            await Parse.User.current().set("AccountType", updatedData.AccountType);
            await Parse.User.current().set("AccountID", updatedData.AccountID);
            await Parse.User.current().save();
            window.location.href ='https://' + window.location.host + '/s-product-all';
        });
      },
    }
  }
</script>

<style scoped>
.s-create-shop-acc-ver3-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #E5E5E5;
}
.s-create-shop-acc-ver3-container01 {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.s-create-shop-acc-ver3-container02 {
  flex: 0;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.s-create-shop-acc-ver3-container03 {
  flex: 0 0 auto;
  width: 400px;
  display: flex;
  align-self: center;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
  justify-content: space-between;
}
.s-create-shop-acc-ver3-pasted-image {
  width: var(--dl-size-size-small);
}
.s-create-shop-acc-ver3-icon {
  width: 24px;
  height: 24px;
}
.s-create-shop-acc-ver3-pasted-image1 {
  width: var(--dl-size-size-small);
}
.s-create-shop-acc-ver3-icon2 {
  width: 24px;
  height: 24px;
}
.s-create-shop-acc-ver3-pasted-image2 {
  width: var(--dl-size-size-small);
}
.s-create-shop-acc-ver3-container04 {
  width: auto;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.s-create-shop-acc-ver3-icon4 {
  width: 24px;
  height: 24px;
}
.s-create-shop-acc-ver3-text {
  padding: var(--dl-space-space-unit);
  font-size: 25px;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
.s-create-shop-acc-ver3-container05 {
  flex: 1;
  width: auto;
  height: 100px;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.s-create-shop-acc-ver3-container06 {
  flex: 0 0 auto;
  width: 420px;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.s-create-shop-acc-ver3-text01 {
  padding: var(--dl-space-space-halfunit);
  font-style: normal;
  font-weight: 500;
}
.s-create-shop-acc-ver3-text02 {
  color: #ef1111;
}
.s-create-shop-acc-ver3-textinput {
  width: 100%;
}
.s-create-shop-acc-ver3-container07 {
  flex: 0 0 auto;
  width: 420px;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.s-create-shop-acc-ver3-text04 {
  padding: var(--dl-space-space-halfunit);
  font-style: normal;
  font-weight: 500;
}
.s-create-shop-acc-ver3-text05 {
  color: #ef1111;
}
.s-create-shop-acc-ver3-textinput1 {
  width: 100%;
}
.s-create-shop-acc-ver3-container08 {
  display: flex;
  align-self: center;
  align-items: center;
  padding-top: 0px;
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: row;
  padding-bottom: 0px;
}
.s-create-shop-acc-ver3-container09 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.s-create-shop-acc-ver3-text07 {
  padding: var(--dl-space-space-halfunit);
  font-style: normal;
  font-weight: 500;
}
.s-create-shop-acc-ver3-text08 {
  color: #ef1111;
}
.s-create-shop-acc-ver3-textinput2 {
  width: 100%;
  font-size: 14px;
  align-self: stretch;
  background-color: var(--dl-color-gray-white);
}
.s-create-shop-acc-ver3-container10 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.s-create-shop-acc-ver3-text10 {
  padding: var(--dl-space-space-halfunit);
  font-style: normal;
  font-weight: 500;
}
.s-create-shop-acc-ver3-text11 {
  color: #ef1111;
}
.s-create-shop-acc-ver3-textinput3 {
  width: 100%;
  font-size: 14px;
  align-self: stretch;
  background-color: var(--dl-color-gray-white);
}
.s-create-shop-acc-ver3-container11 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: center;
  align-items: center;
  flex-direction: row;
}
.s-create-shop-acc-ver3-button {
  width: 90px;
  height: 30px;
  padding: 6px;
  font-size: 15px;
  align-self: stretch;
  text-align: center;
  border-radius: 15px;
  background-color: var(--dl-color-gray-bg);
}
.s-create-shop-acc-ver3-button1 {
  width: 90px;
  height: 30px;
  font-size: 15px;
  align-self: center;
  text-align: center;
  margin-left: var(--dl-space-space-unit);
  padding-top: 6px;
  padding-left: 5px;
  border-radius: 15px;
  padding-right: 5px;
  padding-bottom: 6px;
  background-color: var(--dl-color-gray-bg);
}
@media(max-width: 991px) {
  .s-create-shop-acc-ver3-container04 {
    width: 60%;
  }
  .s-create-shop-acc-ver3-text {
    font-size: 14px;
  }
  .s-create-shop-acc-ver3-container09 {
    align-self: stretch;
    justify-content: flex-end;
  }
  .s-create-shop-acc-ver3-text07 {
    font-size: 14px;
  }
  .s-create-shop-acc-ver3-textinput2 {
    font-size: 12px;
  }
  .s-create-shop-acc-ver3-container10 {
    align-self: stretch;
    justify-content: flex-end;
  }
  .s-create-shop-acc-ver3-text10 {
    font-size: 14px;
  }
  .s-create-shop-acc-ver3-textinput3 {
    font-size: 12px;
  }
  .s-create-shop-acc-ver3-button {
    font-size: 14px;
  }
  .s-create-shop-acc-ver3-button1 {
    font-size: 14px;
  }
}
@media(max-width: 767px) {
  .s-create-shop-acc-ver3-container04 {
    width: 50%;
  }
  .s-create-shop-acc-ver3-text {
    font-size: 14px;
  }
  .s-create-shop-acc-ver3-text07 {
    font-size: 12px;
  }
  .s-create-shop-acc-ver3-textinput2 {
    width: 100%;
  }
  .s-create-shop-acc-ver3-text10 {
    font-size: 12px;
  }
  .s-create-shop-acc-ver3-textinput3 {
    width: 100%;
  }
  .s-create-shop-acc-ver3-button {
    font-size: 12px;
  }
  .s-create-shop-acc-ver3-button1 {
    font-size: 12px;
  }
}
@media(max-width: 470px) {
  .s-create-shop-acc-ver3-container04 {
    width: 100%;
  }
  .s-create-shop-acc-ver3-container08 {
    flex-direction: column;
  }
}
</style>
