<template>
  <div class="c-profile-my-orders-container">
    <c-header rootClassName="c-header-root-class-name4"></c-header>
    <div class="c-profile-my-orders-container01">
      <div class="c-profile-my-orders-container02">
        <profile-side-bar rootClassName="profile-side-bar-root-class-name"></profile-side-bar>
        <div class="c-profile-my-orders-container03">
          <div class="c-profile-my-orders-container04">
            <div class="c-profile-my-orders-container05">
              <button class="c-profile-my-orders-button button">
                <span class="c-profile-my-orders-text">
                  <span>All</span>
                  <span></span>
                </span>
              </button>
              <button class="c-profile-my-orders-button1 button">
                <span class="c-profile-my-orders-text03">
                  <span>To Pay</span>
                </span>
              </button>
              <button class="c-profile-my-orders-button2 button">
                <span class="c-profile-my-orders-text05">
                  <span>To Ship</span>
                </span>
              </button>
              <button class="c-profile-my-orders-button3 button">
                <span class="c-profile-my-orders-text07">
                  <span>
                    To Receive
                    <span v-html="rawy7bs"></span>
                  </span>
                  <span class="c-profile-my-orders-text09">(1)</span>
                </span>
              </button>
              <button class="c-profile-my-orders-button4 button">
                <span class="c-profile-my-orders-text10">
                  <span>Completed</span>
                </span>
              </button>
              <button class="c-profile-my-orders-button5 button">
                <span class="c-profile-my-orders-text12">
                  <span>Cancelled</span>
                </span>
              </button>
            </div>
            <div class="c-profile-my-orders-search-bar">
              <input type="text" class="c-profile-my-orders-textinput input" />
              <svg viewBox="0 0 1024 1024" class="c-profile-my-orders-searchheader">
                <path
                  d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z">
                </path>
              </svg>
            </div>
          </div>
          <div class="c-profile-my-orders-purchase1">
            <div class="c-profile-my-orders-container06">
              <span class="c-profile-my-orders-purchasefrom">Purchase from</span>
              <div class="c-profile-my-orders-container07">
                <span class="c-profile-my-orders-o-t-o-p-h-u-b-a-l-b-a-y">
                  OTOP HUB ALBAY
                </span>
                <svg viewBox="0 0 1024 1024" class="c-profile-my-orders-storeicon">
                  <path
                    d="M512 768v-170h-256v170h256zM896 598h-42v256h-86v-256h-170v256h-428v-256h-42v-86l42-214h684l42 214v86zM854 170v86h-684v-86h684z">
                  </path>
                </svg>
              </div>
              <span class="c-profile-my-orders-o-n-d-a-t-e">
                on Dec. 25, 2022
              </span>
            </div>
            <div class="c-profile-my-orders-container08">
              <div class="c-profile-my-orders-container09">
                <div class="c-profile-my-orders-container10">
                  <img alt="image"
                    src="https://images.unsplash.com/photo-1656533819629-2e386fafb6d5?ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY1NjU3NDQ0OA&amp;ixlib=rb-1.2.1&amp;w=200"
                    class="c-profile-my-orders-inventoryimg" />
                </div>
                <div class="c-profile-my-orders-container11">
                  <span class="c-profile-my-orders-text14">
                    Round Woven Sling Bag
                  </span>
                  <span class="c-profile-my-orders-text15">Php 300</span>
                </div>
              </div>
              <div class="c-profile-my-orders-container12">
                <span class="c-profile-my-orders-text16">
                  <span class="c-profile-my-orders-text17">
                    Order Total:
                    <span v-html="rawr125"></span>
                  </span>
                </span>
                <span class="c-profile-my-orders-text18">
                  <span class="c-profile-my-orders-text19">P</span>
                  <span class="c-profile-my-orders-text20">hp 300</span>
                </span>
                <button class="c-profile-my-orders-buynowprofile button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div class="c-profile-my-orders-purchase2">
            <div class="c-profile-my-orders-container13">
              <span class="c-profile-my-orders-purchasefrom1">Purchase from</span>
              <div class="c-profile-my-orders-container14">
                <span class="c-profile-my-orders-o-t-o-p-h-u-b-a-l-b-a-y1">
                  OTOP HUB ALBAY
                </span>
                <svg viewBox="0 0 1024 1024" class="c-profile-my-orders-storeicon1">
                  <path
                    d="M512 768v-170h-256v170h256zM896 598h-42v256h-86v-256h-170v256h-428v-256h-42v-86l42-214h684l42 214v86zM854 170v86h-684v-86h684z">
                  </path>
                </svg>
              </div>
              <span class="c-profile-my-orders-o-n-d-a-t-e1">
                on Dec. 25, 2022
              </span>
            </div>
            <div class="c-profile-my-orders-container15">
              <div class="c-profile-my-orders-container16">
                <div class="c-profile-my-orders-container17">
                  <img alt="image"
                    src="https://images.unsplash.com/photo-1644982647970-e72b0397e57b?ixid=Mnw5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY1NjU3NDQ0OA&amp;ixlib=rb-1.2.1&amp;w=200"
                    class="c-profile-my-orders-inventoryimg1" />
                </div>
                <div class="c-profile-my-orders-container18">
                  <span class="c-profile-my-orders-text21">
                    Round Woven Sling Bag
                  </span>
                  <span class="c-profile-my-orders-text22">Php 300</span>
                </div>
              </div>
              <div class="c-profile-my-orders-container19">
                <span class="c-profile-my-orders-text23">
                  <span class="c-profile-my-orders-text24">
                    Order Total:
                    <span v-html="raw4tu7"></span>
                  </span>
                </span>
                <span class="c-profile-my-orders-text25">
                  <span class="c-profile-my-orders-text26">P</span>
                  <span class="c-profile-my-orders-text27">hp 300</span>
                </span>
                <button class="c-profile-my-orders-buynowprofile1 button">
                  Buy Now
                </button>
              </div>
            </div>
            <div class="c-profile-my-orders-container20">
              <div class="c-profile-my-orders-container21">
                <div class="c-profile-my-orders-container22">
                  <img alt="image"
                    src="https://images.unsplash.com/photo-1656510800457-6590c3edcd06?ixid=Mnw5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY1NjU3NDQ0OA&amp;ixlib=rb-1.2.1&amp;w=200"
                    class="c-profile-my-orders-inventoryimg2" />
                </div>
                <div class="c-profile-my-orders-container23">
                  <span class="c-profile-my-orders-text28">
                    Round Woven Sling Bag
                  </span>
                  <span class="c-profile-my-orders-text29">Php 300</span>
                </div>
              </div>
              <div class="c-profile-my-orders-container24">
                <span class="c-profile-my-orders-text30">
                  <span class="c-profile-my-orders-text31">
                    Order Total:
                    <span v-html="raw9u44"></span>
                  </span>
                </span>
                <span class="c-profile-my-orders-text32">
                  <span class="c-profile-my-orders-text33">P</span>
                  <span class="c-profile-my-orders-text34">hp 300</span>
                </span>
                <button class="c-profile-my-orders-buynowprofile2 button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name4"></app-footer>
  </div>
</template>

<script>
import CHeader from '@/components/c-header'
import ProfileSideBar from '@/components/profile-side-bar'
import AppFooter from '@/components/footer'

export default {
  name: 'CProfileMyOrders',
  components: {
    CHeader,
    ProfileSideBar,
    AppFooter,
  },

  data() {
    return {
      rawy7bs: ' ',
      rawr125: ' ',
      raw4tu7: ' ',
      raw9u44: ' ',
    }
  },

  metaInfo: {
    title: 'C-ProfileMyOrders - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-ProfileMyOrders - exported project',
      },
    ],
  },
}
</script>

<style>
html {
  line-height: 1.15;
}

body {
  margin: 0;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
}

p,
li,
ul,
pre,
div,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focus,
[type="button"]:-moz-focus,
[type="reset"]:-moz-focus,
[type="submit"]:-moz-focus {
  outline: 1px dotted ButtonText;
}

a {
  color: inherit;
  text-decoration: inherit;
}

input {
  padding: 2px 4px;
}

img {
  display: block;
}

html {
  scroll-behavior: smooth
}

.c-profile-my-orders-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-profile-my-orders-container01 {
  flex: 1;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(245, 245, 245, 1);
}

.c-profile-my-orders-container02 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}

.c-profile-my-orders-container03 {
  flex: 1;
  width: auto;
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-profile-my-orders-container04 {
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
}

.c-profile-my-orders-container05 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-white);
}

.c-profile-my-orders-button {
  width: 100%;
  text-align: center;
  padding-top: var(--dl-space-space-unit);
  border-color: var(--dl-color-primary-300);
  border-width: 0px;
  padding-left: 0px;
  border-radius: 0px;
  padding-right: 0px;
  padding-bottom: var(--dl-space-space-unit);
  background-color: transparent;
  border-bottom-width: 2px;
}

.c-profile-my-orders-button1 {
  width: 100%;
  text-align: center;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  padding-left: 0px;
  border-radius: 0px;
  padding-right: 0px;
  padding-bottom: var(--dl-space-space-unit);
  background-color: transparent;
}

.c-profile-my-orders-button2 {
  width: 100%;
  text-align: center;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  padding-left: 0px;
  border-radius: 0px;
  padding-right: 0px;
  padding-bottom: var(--dl-space-space-unit);
  background-color: transparent;
}

.c-profile-my-orders-button3 {
  width: 100%;
  text-align: center;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  padding-left: 0px;
  border-radius: 0px;
  padding-right: 0px;
  padding-bottom: var(--dl-space-space-unit);
  background-color: transparent;
}

.c-profile-my-orders-text09 {
  color: var(--dl-color-danger-300);
}

.c-profile-my-orders-button4 {
  width: 100%;
  text-align: center;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  padding-left: 0px;
  border-radius: 0px;
  padding-right: 0px;
  padding-bottom: var(--dl-space-space-unit);
  background-color: transparent;
}

.c-profile-my-orders-button5 {
  width: 100%;
  text-align: center;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  padding-left: 0px;
  border-radius: 0px;
  padding-right: 0px;
  padding-bottom: var(--dl-space-space-unit);
  background-color: transparent;
}

.c-profile-my-orders-search-bar {
  width: 100%;
  height: 3rem;
  display: flex;
  align-self: center;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  background-color: #EAEAEA;
}

.c-profile-my-orders-textinput {
  width: 100%;
  height: 100%;
  padding-top: var(--dl-space-space-halfunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unit);
  border-radius: 15px;
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  background-color: transparent;
}

.c-profile-my-orders-searchheader {
  width: 3rem;
  height: 2rem;
  align-self: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  border-left-width: 1px;
}

.c-profile-my-orders-purchase1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  border-radius: 15px;
  flex-direction: column;
  background-color: #FFFFFF;
}

.c-profile-my-orders-container06 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  border-bottom-width: 1px;
}

.c-profile-my-orders-purchasefrom {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-unit);
  font-stretch: normal;
  margin-right: var(--dl-space-space-unit);
  text-decoration: none;
}

.c-profile-my-orders-container07 {
  display: flex;
  align-items: center;
  margin-right: var(--dl-space-space-unit);
}

.c-profile-my-orders-o-t-o-p-h-u-b-a-l-b-a-y {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 12px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-storeicon {
  width: 20px;
  height: 20px;
  margin-left: var(--dl-space-space-halfunit);
}

.c-profile-my-orders-o-n-d-a-t-e {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-container08 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.c-profile-my-orders-container09 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-profile-my-orders-container10 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-profile-my-orders-inventoryimg {
  width: 111px;
  height: 112px;
  object-fit: cover;
  margin-left: var(--dl-space-space-twounits);
  border-radius: 12.5px;
}

.c-profile-my-orders-container11 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.c-profile-my-orders-text14 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text15 {
  color: rgba(1, 158, 219, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-container12 {
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-profile-my-orders-text16 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text17 {
  color: rgba(0, 0, 0, 1);
  width: 123px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text18 {
  color: rgba(1, 158, 219, 1);
  width: auto;
  height: auto;
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-halfunit);
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text19 {
  width: 123px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text20 {
  font-style: normal;
  font-weight: 400px;
  text-decoration: none;
}

.c-profile-my-orders-buynowprofile {
  width: auto;
  height: auto;
  font-size: 12px;
  transition: 0.3s;
  font-family: Roboto;
  margin-left: var(--dl-space-space-twounits);
  border-width: 0px;
  border-radius: 15px;
  background-color: #019EDB;
}

.c-profile-my-orders-buynowprofile:hover {
  background-color: #A6D9EF;
}

.c-profile-my-orders-purchase2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: flex-start;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  border-radius: 15px;
  flex-direction: column;
  background-color: #FFFFFF;
}

.c-profile-my-orders-container13 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  border-bottom-width: 1px;
}

.c-profile-my-orders-purchasefrom1 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-unit);
  font-stretch: normal;
  margin-right: var(--dl-space-space-unit);
  text-decoration: none;
}

.c-profile-my-orders-container14 {
  display: flex;
  align-items: center;
  margin-right: var(--dl-space-space-unit);
}

.c-profile-my-orders-o-t-o-p-h-u-b-a-l-b-a-y1 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 12px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-storeicon1 {
  width: 20px;
  height: 20px;
  margin-left: var(--dl-space-space-halfunit);
}

.c-profile-my-orders-o-n-d-a-t-e1 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-container15 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.c-profile-my-orders-container16 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-profile-my-orders-container17 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-profile-my-orders-inventoryimg1 {
  width: 111px;
  height: 112px;
  object-fit: cover;
  margin-left: var(--dl-space-space-twounits);
  border-radius: 12.5px;
}

.c-profile-my-orders-container18 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.c-profile-my-orders-text21 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text22 {
  color: rgba(1, 158, 219, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-container19 {
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-profile-my-orders-text23 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text24 {
  color: rgba(0, 0, 0, 1);
  width: 123px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text25 {
  color: rgba(1, 158, 219, 1);
  width: auto;
  height: auto;
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-halfunit);
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text26 {
  width: 123px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text27 {
  font-style: normal;
  font-weight: 400px;
  text-decoration: none;
}

.c-profile-my-orders-buynowprofile1 {
  width: auto;
  height: auto;
  font-size: 12px;
  transition: 0.3s;
  font-family: Roboto;
  margin-left: var(--dl-space-space-twounits);
  border-width: 0px;
  border-radius: 15px;
  background-color: #019EDB;
}

.c-profile-my-orders-buynowprofile1:hover {
  background-color: #A6D9EF;
}

.c-profile-my-orders-container20 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  border-color: var(--dl-color-gray-700);
  border-width: 0px;
  flex-direction: column;
  justify-content: space-between;
  border-top-width: 1px;
}

.c-profile-my-orders-container21 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-profile-my-orders-container22 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-profile-my-orders-inventoryimg2 {
  width: 111px;
  height: 112px;
  object-fit: cover;
  margin-left: var(--dl-space-space-twounits);
  border-radius: 12.5px;
}

.c-profile-my-orders-container23 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.c-profile-my-orders-text28 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text29 {
  color: rgba(1, 158, 219, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-container24 {
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-profile-my-orders-text30 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text31 {
  color: rgba(0, 0, 0, 1);
  width: 123px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text32 {
  color: rgba(1, 158, 219, 1);
  width: auto;
  height: auto;
  font-size: 12.5px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-halfunit);
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text33 {
  width: 123px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-my-orders-text34 {
  font-style: normal;
  font-weight: 400px;
  text-decoration: none;
}

.c-profile-my-orders-buynowprofile2 {
  width: auto;
  height: auto;
  font-size: 12px;
  transition: 0.3s;
  font-family: Roboto;
  margin-left: var(--dl-space-space-twounits);
  border-width: 0px;
  border-radius: 15px;
  background-color: #019EDB;
}

.c-profile-my-orders-buynowprofile2:hover {
  background-color: #A6D9EF;
}

@media(max-width: 991px) {
  .c-profile-my-orders-container03 {
    padding: var(--dl-space-space-unit);
  }

  .c-profile-my-orders-button {
    height: auto;
    align-self: stretch;
    padding-top: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
  }

  .c-profile-my-orders-text {
    font-size: 12px;
  }

  .c-profile-my-orders-button1 {
    height: auto;
    align-self: stretch;
    padding-top: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
  }

  .c-profile-my-orders-text03 {
    font-size: 12px;
  }

  .c-profile-my-orders-button2 {
    align-self: stretch;
    padding-top: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
  }

  .c-profile-my-orders-text05 {
    font-size: 12px;
  }

  .c-profile-my-orders-button3 {
    height: auto;
    align-self: stretch;
    padding-top: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
  }

  .c-profile-my-orders-text07 {
    font-size: 12px;
  }

  .c-profile-my-orders-button4 {
    height: auto;
    align-self: stretch;
    padding-top: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
  }

  .c-profile-my-orders-text10 {
    font-size: 12px;
  }

  .c-profile-my-orders-button5 {
    height: auto;
    align-self: stretch;
    padding-top: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
  }

  .c-profile-my-orders-text12 {
    font-size: 12px;
  }

  .c-profile-my-orders-textinput {
    width: 100%;
    border-radius: 15px;
  }
}

@media(max-width: 767px) {
  .c-profile-my-orders-container02 {
    flex-direction: column;
  }

  .c-profile-my-orders-container03 {
    flex: 1;
    width: 100%;
  }

  .c-profile-my-orders-container05 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .c-profile-my-orders-search-bar {
    height: auto;
    margin-left: 0px;
    margin-right: 0px;
    background-color: #EAEAEA;
  }

  .c-profile-my-orders-textinput {
    width: 100%;
    border-radius: 15px;
  }

  .c-profile-my-orders-searchheader {
    width: 3rem;
    height: 2rem;
  }

  .c-profile-my-orders-inventoryimg {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }

  .c-profile-my-orders-inventoryimg1 {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }

  .c-profile-my-orders-inventoryimg2 {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }
}

@media(max-width: 470px) {
  .c-profile-my-orders-container01 {
    padding: var(--dl-space-space-unit);
  }

  .c-profile-my-orders-container03 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-profile-my-orders-search-bar {
    height: 2rem;
    margin-right: 0px;
  }

  .c-profile-my-orders-textinput {
    width: 100%;
    height: 100%;
    padding: 0px;
    border-radius: 15px;
  }

  .c-profile-my-orders-searchheader {
    width: 3rem;
    height: 1.5rem;
  }

  .c-profile-my-orders-container06 {
    padding: var(--dl-space-space-unit);
  }

  .c-profile-my-orders-purchasefrom {
    width: auto;
    font-size: 10px;
    margin-left: var(--dl-space-space-halfunit);
    margin-right: var(--dl-space-space-halfunit);
  }

  .c-profile-my-orders-container07 {
    margin-left: var(--dl-space-space-halfunit);
    margin-right: var(--dl-space-space-halfunit);
  }

  .c-profile-my-orders-o-t-o-p-h-u-b-a-l-b-a-y {
    width: auto;
    font-size: 10px;
    margin-left: 0px;
    margin-right: 0px;
  }

  .c-profile-my-orders-storeicon {
    width: var(--dl-size-size-xsmall);
    height: var(--dl-size-size-xsmall);
  }

  .c-profile-my-orders-o-n-d-a-t-e {
    width: auto;
    font-size: 10px;
    margin-left: 0px;
    margin-right: 0px;
  }

  .c-profile-my-orders-inventoryimg {
    width: 80px;
    height: 80px;
    margin-left: var(--dl-space-space-unit);
  }

  .c-profile-my-orders-container11 {
    padding-right: 0px;
  }

  .c-profile-my-orders-text16 {
    font-size: 10px;
  }

  .c-profile-my-orders-text18 {
    font-size: 10px;
  }

  .c-profile-my-orders-buynowprofile {
    font-size: 10px;
  }

  .c-profile-my-orders-purchasefrom1 {
    font-size: 10px;
    margin-left: var(--dl-space-space-halfunit);
    margin-right: var(--dl-space-space-halfunit);
  }

  .c-profile-my-orders-container14 {
    margin-right: var(--dl-space-space-halfunit);
  }

  .c-profile-my-orders-o-t-o-p-h-u-b-a-l-b-a-y1 {
    font-size: 10px;
  }

  .c-profile-my-orders-storeicon1 {
    width: var(--dl-size-size-xsmall);
    height: var(--dl-size-size-xsmall);
  }

  .c-profile-my-orders-o-n-d-a-t-e1 {
    font-size: 10px;
  }

  .c-profile-my-orders-inventoryimg1 {
    width: 80px;
    height: 80px;
    margin-left: var(--dl-space-space-unit);
  }

  .c-profile-my-orders-container18 {
    padding-right: 0px;
  }

  .c-profile-my-orders-text23 {
    font-size: 10px;
  }

  .c-profile-my-orders-text25 {
    font-size: 10px;
  }

  .c-profile-my-orders-buynowprofile1 {
    font-size: 10px;
  }

  .c-profile-my-orders-container20 {
    border-color: var(--dl-color-gray-700);
    border-width: 0px;
    border-top-width: 1px;
  }

  .c-profile-my-orders-inventoryimg2 {
    width: 80px;
    height: 80px;
    margin-left: var(--dl-space-space-unit);
  }

  .c-profile-my-orders-container23 {
    padding-right: 0px;
  }

  .c-profile-my-orders-text30 {
    font-size: 10px;
  }

  .c-profile-my-orders-text32 {
    font-size: 10px;
  }

  .c-profile-my-orders-buynowprofile2 {
    font-size: 10px;
  }
}
</style>
