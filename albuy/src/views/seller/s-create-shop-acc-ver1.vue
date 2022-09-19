<template>
  <div class="s-create-shop-acc-ver1-container">
    <div class="s-create-shop-acc-ver1-container1">
      <div class="s-create-shop-acc-ver1-container2">
        <div class="s-create-shop-acc-ver1-container3">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-ccuq-200h.png"
            class="s-create-shop-acc-ver1-pasted-image"
          />
          <svg
            viewBox="0 0 987.4285714285713 1024"
            class="s-create-shop-acc-ver1-icon"
          >
            <path
              d="M987.429 510.286c0 5.143-2.286 10.286-5.714 13.714l-219.429 202.286c-5.714 5.143-13.143 6.286-20 3.429-6.286-2.857-10.857-9.143-10.857-16.571v-128h-713.143c-10.286 0-18.286-8-18.286-18.286v-109.714c0-10.286 8-18.286 18.286-18.286h713.143v-128c0-7.429 4-13.714 10.857-16.571s14.286-1.714 20 2.857l219.429 200c3.429 3.429 5.714 8 5.714 13.143v0z"
            ></path>
          </svg>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-yrtv-200h.png"
            class="s-create-shop-acc-ver1-pasted-image1"
          />
          <svg
            viewBox="0 0 987.4285714285713 1024"
            class="s-create-shop-acc-ver1-icon2"
          >
            <path
              d="M987.429 510.286c0 5.143-2.286 10.286-5.714 13.714l-219.429 202.286c-5.714 5.143-13.143 6.286-20 3.429-6.286-2.857-10.857-9.143-10.857-16.571v-128h-713.143c-10.286 0-18.286-8-18.286-18.286v-109.714c0-10.286 8-18.286 18.286-18.286h713.143v-128c0-7.429 4-13.714 10.857-16.571s14.286-1.714 20 2.857l219.429 200c3.429 3.429 5.714 8 5.714 13.143v0z"
            ></path>
          </svg>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-8zsd-200h.png"
            class="s-create-shop-acc-ver1-pasted-image2"
          />
        </div>
        <div class="s-create-shop-acc-ver1-container4">
          <svg viewBox="0 0 1024 1024" class="s-create-shop-acc-ver1-icon4">
            <path
              d="M512 1024c282.77 0 512-229.23 512-512s-229.23-512-512-512-512 229.23-512 512 229.23 512 512 512zM512 96c229.75 0 416 186.25 416 416s-186.25 416-416 416-416-186.25-416-416 186.25-416 416-416z"
            ></path>
            <path
              d="M669.256 317.256l-90.512-90.512-285.254 285.256 285.256 285.254 90.508-90.508-194.744-194.746z"
            ></path>
          </svg>
          <span class="s-create-shop-acc-ver1-text">
            Verify Your Phone Number
          </span>
        </div>
        <span class="s-create-shop-acc-ver1-text1">
          <span class="s-create-shop-acc-ver1-text2">
            Please enter the code sent to
            <span v-html="raw3h7t"></span>
          </span>
          <span class="s-create-shop-acc-ver1-text3">09994931782</span>
          <span class="s-create-shop-acc-ver1-text4">via SMS</span>
        </span>
        <span class="s-create-shop-acc-ver1-text5">
          Please wait 49 seconds to resend.
        </span>
        <div class="s-create-shop-acc-ver1-container5">
          <div class="s-create-shop-acc-ver1-container6">
            <input
              type="text"
              placeholder="placeholder"
              class="s-create-shop-acc-ver1-textinput input"
            />
          </div>
          <div class="s-create-shop-acc-ver1-container7">
            <button class="s-create-shop-acc-ver1-button button">Back</button>
            <button class="s-create-shop-acc-ver1-button1 button">Verify</button>
          </div>
          <span class="s-create-shop-acc-ver1-text6">
            Already have a shop account? Sign In
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SCreateShopAccVer1',

  data() {
    return {
      raw3h7t: ' ',
    }
  },

  metaInfo: {
    title: 'S-CreateShopAccVer1 - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'S-CreateShopAccVer1 - exported project',
      },
    ],
  },
}
</script>

<style scoped>
.s-create-shop-acc-ver1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #E5E5E5;
}
.s-create-shop-acc-ver1-container1 {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.s-create-shop-acc-ver1-container2 {
  flex: 0;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.s-create-shop-acc-ver1-container3 {
  flex: 0 0 auto;
  width: 400px;
  display: flex;
  align-self: center;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
  justify-content: space-between;
}
.s-create-shop-acc-ver1-pasted-image {
  width: var(--dl-size-size-small);
}
.s-create-shop-acc-ver1-icon {
  width: 24px;
  height: 24px;
}
.s-create-shop-acc-ver1-pasted-image1 {
  width: var(--dl-size-size-small);
}
.s-create-shop-acc-ver1-icon2 {
  width: 24px;
  height: 24px;
}
.s-create-shop-acc-ver1-pasted-image2 {
  width: var(--dl-size-size-small);
}
.s-create-shop-acc-ver1-container4 {
  width: auto;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.s-create-shop-acc-ver1-icon4 {
  width: 24px;
  height: 24px;
}
.s-create-shop-acc-ver1-text {
  padding: var(--dl-space-space-unit);
  font-size: 25px;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
.s-create-shop-acc-ver1-text1 {
  padding: var(--dl-space-space-unit);
  font-size: 18px;
  text-align: center;
  font-weight: 700;
}
.s-create-shop-acc-ver1-text2 {
  font-weight: 400;
}
.s-create-shop-acc-ver1-text3 {
  font-style: normal;
  font-weight: 700;
}
.s-create-shop-acc-ver1-text4 {
  font-weight: 400;
}
.s-create-shop-acc-ver1-text5 {
  padding: var(--dl-space-space-unit);
  font-size: 15px;
  font-style: normal;
  text-align: center;
  font-weight: 100;
}
.s-create-shop-acc-ver1-container5 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.s-create-shop-acc-ver1-container6 {
  flex: 1;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
}
.s-create-shop-acc-ver1-textinput {
  width: var(--dl-size-size-xxlarge);
  height: auto;
  font-size: 14px;
  align-self: center;
  background-color: var(--dl-color-gray-bg);
}
.s-create-shop-acc-ver1-container7 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: center;
  align-items: center;
  flex-direction: row;
}
.s-create-shop-acc-ver1-button {
  width: 90px;
  height: 30px;
  padding: 6px;
  font-size: 15px;
  align-self: stretch;
  text-align: center;
  border-radius: 15px;
  background-color: var(--dl-color-gray-bg);
}
.s-create-shop-acc-ver1-button1 {
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
.s-create-shop-acc-ver1-text6 {
  padding: var(--dl-space-space-halfunit);
  font-size: 12px;
}
@media(max-width: 991px) {
  .s-create-shop-acc-ver1-container4 {
    width: 60%;
  }
  .s-create-shop-acc-ver1-text {
    font-size: 14px;
  }
  .s-create-shop-acc-ver1-text1 {
    font-size: 25px;
  }
  .s-create-shop-acc-ver1-text5 {
    font-size: 25px;
  }
  .s-create-shop-acc-ver1-textinput {
    font-size: 12px;
  }
  .s-create-shop-acc-ver1-button {
    font-size: 14px;
  }
  .s-create-shop-acc-ver1-button1 {
    font-size: 14px;
  }
  .s-create-shop-acc-ver1-text6 {
    font-size: 10px;
  }
}
@media(max-width: 767px) {
  .s-create-shop-acc-ver1-container4 {
    width: 50%;
  }
  .s-create-shop-acc-ver1-text {
    font-size: 14px;
  }
  .s-create-shop-acc-ver1-text1 {
    font-size: 22px;
  }
  .s-create-shop-acc-ver1-text5 {
    font-size: 22px;
  }
  .s-create-shop-acc-ver1-textinput {
    width: 100%;
  }
  .s-create-shop-acc-ver1-button {
    font-size: 12px;
  }
  .s-create-shop-acc-ver1-button1 {
    font-size: 12px;
  }
  .s-create-shop-acc-ver1-text6 {
    font-size: 9px;
  }
}
@media(max-width: 470px) {
  .s-create-shop-acc-ver1-container4 {
    width: 100%;
  }
  .s-create-shop-acc-ver1-text1 {
    font-size: 18px;
    text-align: center;
  }
  .s-create-shop-acc-ver1-text5 {
    font-size: 18px;
    text-align: center;
  }
}
</style>
