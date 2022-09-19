<template>
  <div class="s-create-shop-acc-phone-num-container">
    <div class="s-create-shop-acc-phone-num-container01">
      <div class="s-create-shop-acc-phone-num-container02">
        <div class="s-create-shop-acc-phone-num-container03">
          <div class="s-create-shop-acc-phone-num-container04">
            <img
              alt="image"
              src="/playground_assets/unknown-1500h.png"
              class="s-create-shop-acc-phone-num-image"
            />
          </div>
          <div class="s-create-shop-acc-phone-num-container05">
            <span class="s-create-shop-acc-phone-num-text">
              Create a Shop Account
            </span>
            <div class="s-create-shop-acc-phone-num-container06">
              <button @click="signInWithFacebook()" class="s-create-shop-acc-phone-num-button button">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  class="s-create-shop-acc-phone-num-icon"
                >
                  <path
                    d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"
                  ></path>
                </svg>
                <span class="s-create-shop-acc-phone-num-text1">
                  Sign Up with Facebook
                </span>
              </button>
              <button @click="signInWithGoogle()" class="s-create-shop-acc-phone-num-button1 button">
                <svg
                  viewBox="0 0 1024 1024"
                  class="s-create-shop-acc-phone-num-icon2"
                >
                  <path
                    d="M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z"
                  ></path>
                </svg>
                <span class="s-create-shop-acc-phone-num-text2">
                  Sign Up with Google
                </span>
              </button>
            </div>
            <span class="s-create-shop-acc-phone-num-text3">Or</span>
            <div class="s-create-shop-acc-phone-num-container07">
              <div class="s-create-shop-acc-phone-num-container08">
                <span class="s-create-shop-acc-phone-num-text4">
                  Email Address:
                </span>
                <input
                  type="text"
                  placeholder="placeholder"
                  class="s-create-shop-acc-phone-num-textinput input"
                />
              </div>
              <div class="s-create-shop-acc-phone-num-container09">
                <button class="s-create-shop-acc-phone-num-button2 button">
                  Sign Up
                </button>
                <span class="s-create-shop-acc-phone-num-text5">
                  Already have a shop account? <a v-bind:href="signInLink">Sign In</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Parse from 'parse';
  export default {
    name: 'SCreateShopAccPhoneNum',
    metaInfo: {
      title: 'S-CreateShopAccPhoneNum - exported project',
      meta: [
        {
          property: 'og:title',
          content: 'S-CreateShopAccPhoneNum - exported project',
        },
      ],
    },
    data(){
      return{
        signInLink: 'https://' + window.location.host + '/s-sign-in',
      }
    },
    methods:{
      //Account Functions
      async signInWithEmail(){
        alert("email");
      },

      async signInWithGoogle(){
          var params = {"AccountType" : "Seller"};
          window.location.href = await Parse.Cloud.run("GoogleSignIn", params);
      },

      async signInWithFacebook() {
          await this.loadFacebookSDK(document, "script", "facebook-jssdk");
          await this.initFacebook();
          window.FB.login(function(response) {
              if (response.authResponse) {
                  const authData = {
                      "id": response.authResponse.userID,
                      "access_token": response.authResponse.accessToken,
                      "expiration_date": response.authResponse.expiresIn,
                  }
                  window.FB.api('/me', function(data) {
                      const user = new Parse.User();
                      user.set("username", data.name);
                      var names = data.name.split(' ');
                      user.set("firstname", names[0]);
                      user.set("lastname", names[names.length - 1]);
                      user.linkWith("facebook", { authData }).then(async (_obj)=>{
                          await Parse.User.logInWith('facebook', { authData });
                          window.location.href ='https://' + window.location.host + '/s-create-shop-acc-ver2';
                      });
                  });
              }
              else {
                  alert("User cancelled login or did not fully authorize.");
              }
          });
      },

      async initFacebook() {
          return new Promise((resolve, _reject) => {
              window.fbAsyncInit = function() {
                  window.FB.init({
                      appId: "490657576400793", //You will need to change this
                      cookie: true, // This is important, it's not enabled by default
                      version: "v13.0"
                  });
                  resolve();
              };
          });
      },

      async loadFacebookSDK(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {
              return;
          }
          js = d.createElement(s);
          js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
      },
    },
  }
</script>

<style scoped>
.s-create-shop-acc-phone-num-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.s-create-shop-acc-phone-num-container01 {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.s-create-shop-acc-phone-num-container02 {
  flex: 1;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-bg);
}
.s-create-shop-acc-phone-num-container03 {
  width: 100%;
  display: flex;
  max-width: auto;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  flex-direction: row;
}
.s-create-shop-acc-phone-num-container04 {
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.s-create-shop-acc-phone-num-image {
  flex: 1;
  width: 100%;
  align-self: stretch;
  object-fit: fill;
}
.s-create-shop-acc-phone-num-container05 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.s-create-shop-acc-phone-num-text {
  padding: var(--dl-space-space-unit);
  font-size: 30px;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-unit);
}
.s-create-shop-acc-phone-num-container06 {
  width: 55%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.s-create-shop-acc-phone-num-button {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-bg);
}
.s-create-shop-acc-phone-num-icon {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-halfunit);
}
.s-create-shop-acc-phone-num-button1 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-bg);
}
.s-create-shop-acc-phone-num-icon2 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-halfunit);
}
.s-create-shop-acc-phone-num-text3 {
  padding: var(--dl-space-space-unit);
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 600;
}
.s-create-shop-acc-phone-num-container07 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.s-create-shop-acc-phone-num-container08 {
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.s-create-shop-acc-phone-num-text4 {
  padding: var(--dl-space-space-halfunit);
  font-style: normal;
  font-weight: 500;
}
.s-create-shop-acc-phone-num-textinput {
  width: 100%;
  font-size: 14px;
  align-self: stretch;
  background-color: var(--dl-color-gray-bg);
}
.s-create-shop-acc-phone-num-container09 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.s-create-shop-acc-phone-num-button2 {
  align-self: stretch;
  text-align: center;
  border-radius: 15px;
  background-color: var(--dl-color-gray-bg);
}
.s-create-shop-acc-phone-num-text5 {
  padding: var(--dl-space-space-halfunit);
  font-size: 12px;
}
@media(max-width: 991px) {
  .s-create-shop-acc-phone-num-image {
    flex: 1;
  }
  .s-create-shop-acc-phone-num-text {
    font-size: 25px;
  }
  .s-create-shop-acc-phone-num-container06 {
    width: 60%;
  }
  .s-create-shop-acc-phone-num-button {
    width: auto;
    align-self: stretch;
    align-items: center;
    justify-content: center;
  }
  .s-create-shop-acc-phone-num-icon {
    width: 20px;
    height: 20px;
  }
  .s-create-shop-acc-phone-num-text1 {
    font-size: 14px;
  }
  .s-create-shop-acc-phone-num-button1 {
    width: auto;
    align-self: stretch;
    align-items: center;
    justify-content: center;
  }
  .s-create-shop-acc-phone-num-icon2 {
    width: 20px;
    height: 20px;
  }
  .s-create-shop-acc-phone-num-text2 {
    font-size: 14px;
  }
  .s-create-shop-acc-phone-num-text3 {
    font-size: 14px;
  }
  .s-create-shop-acc-phone-num-text4 {
    font-size: 14px;
  }
  .s-create-shop-acc-phone-num-textinput {
    font-size: 12px;
  }
  .s-create-shop-acc-phone-num-button2 {
    font-size: 14px;
  }
  .s-create-shop-acc-phone-num-text5 {
    font-size: 10px;
  }
}
@media(max-width: 767px) {
  .s-create-shop-acc-phone-num-container02 {
    padding: var(--dl-space-space-oneandhalfunits);
  }
  .s-create-shop-acc-phone-num-container04 {
    display: none;
  }
  .s-create-shop-acc-phone-num-text {
    font-size: 22px;
  }
  .s-create-shop-acc-phone-num-container06 {
    width: 50%;
  }
  .s-create-shop-acc-phone-num-text1 {
    font-size: 12px;
  }
  .s-create-shop-acc-phone-num-text2 {
    font-size: 12px;
  }
  .s-create-shop-acc-phone-num-text3 {
    font-size: 14px;
  }
  .s-create-shop-acc-phone-num-text4 {
    font-size: 12px;
  }
  .s-create-shop-acc-phone-num-textinput {
    width: 100%;
  }
  .s-create-shop-acc-phone-num-button2 {
    font-size: 12px;
  }
  .s-create-shop-acc-phone-num-text5 {
    font-size: 9px;
  }
}
@media(max-width: 470px) {
  .s-create-shop-acc-phone-num-container02 {
    padding: var(--dl-space-space-unit);
  }
  .s-create-shop-acc-phone-num-text {
    font-size: 18px;
    text-align: center;
  }
  .s-create-shop-acc-phone-num-container06 {
    width: 100%;
  }
}
</style>
