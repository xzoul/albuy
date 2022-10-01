<template>
  <div class="c-profile-notifications-container">
    <c-header rootClassName="c-header-root-class-name10"></c-header>
    <div class="c-profile-notifications-container01">
      <div class="c-profile-notifications-container02">
        <profile-side-bar rootClassName="profile-side-bar-root-class-name4"></profile-side-bar>
        <div class="c-profile-notifications-container03">
          <div class="c-profile-notifications-container04">
            <div class="c-profile-notifications-container05">
              <button class="c-profile-notifications-button button">
                <span class="c-profile-notifications-text">
                  <span>Order Updates</span>
                </span>
              </button>
              <span class="c-profile-notifications-text02">Mark all as read</span>
            </div>
          </div>
          <div class="c-profile-notifications-purchase1">
            <div class="c-profile-notifications-container06">
              <span class="c-profile-notifications-purchasefrom">
                Product Delivered
              </span>
            </div>
            <div class="c-profile-notifications-container07">
              <div class="c-profile-notifications-container08">
                <div class="c-profile-notifications-container09">
                  <img alt="image"
                    src="https://images.unsplash.com/photo-1656533819629-2e386fafb6d5?ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY1NjU3NDQ0OA&amp;ixlib=rb-1.2.1&amp;w=200"
                    class="c-profile-notifications-inventoryimg" />
                </div>
                <div class="c-profile-notifications-container10">
                  <span class="c-profile-notifications-text03">
                    <span class="c-profile-notifications-text04">
                      Round Woven Sling Bag
                    </span>
                    <span class="c-profile-notifications-text05">
                      with
                      <span v-html="rawnrl6"></span>
                    </span>
                    <span class="c-profile-notifications-text06">
                      Order ID 12345
                    </span>
                    <span class="c-profile-notifications-text07">
                      has been delivered
                    </span>
                  </span>
                  <span class="c-profile-notifications-text08">
                    Dec. 25, 2022 17:38
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="c-profile-notifications-purchase2">
            <div class="c-profile-notifications-container11">
              <span class="c-profile-notifications-purchasefrom1">
                Product Delivered
              </span>
            </div>
            <div class="c-profile-notifications-container12">
              <div class="c-profile-notifications-container13">
                <div class="c-profile-notifications-container14">
                  <img alt="image"
                    src="https://images.unsplash.com/photo-1644982647970-e72b0397e57b?ixid=Mnw5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY1NjU3NDQ0OA&amp;ixlib=rb-1.2.1&amp;w=200"
                    class="c-profile-notifications-inventoryimg1" />
                </div>
                <div class="c-profile-notifications-container15">
                  <span class="c-profile-notifications-text09">
                    <span class="c-profile-notifications-text10">
                      Round Woven Sling Bag
                    </span>
                    <span class="c-profile-notifications-text11">
                      with
                      <span v-html="raw9my8"></span>
                    </span>
                    <span class="c-profile-notifications-text12">
                      Order ID 12345
                    </span>
                    <span class="c-profile-notifications-text13">
                      has been delivered
                    </span>
                  </span>
                  <span class="c-profile-notifications-text14">
                    Dec. 25, 2022 17:38
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="c-profile-notifications-purchase21">
            <div class="c-profile-notifications-container16">
              <span class="c-profile-notifications-purchasefrom2">
                Product Delivered
              </span>
            </div>
            <div class="c-profile-notifications-container17">
              <div class="c-profile-notifications-container18">
                <div class="c-profile-notifications-container19">
                  <img alt="image"
                    src="https://images.unsplash.com/photo-1656954261081-93c805b386b5?ixid=Mnw5MTMyMXwwfDF8YWxsfDE0fHx8fHx8Mnx8MTY1NzAxMTQ5NA&amp;ixlib=rb-1.2.1&amp;w=200"
                    class="c-profile-notifications-inventoryimg2" />
                </div>
                <div class="c-profile-notifications-container20">
                  <span class="c-profile-notifications-text15">
                    <span class="c-profile-notifications-text16">
                      Round Woven Sling Bag
                    </span>
                    <span class="c-profile-notifications-text17">
                      with
                      <span v-html="rawtx1d"></span>
                    </span>
                    <span class="c-profile-notifications-text18">
                      Order ID 12345
                    </span>
                    <span class="c-profile-notifications-text19">
                      has been delivered
                    </span>
                  </span>
                  <span class="c-profile-notifications-text20">
                    Dec. 25, 2022 17:38
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name22"></app-footer>
  </div>
</template>

<script>
import CHeader from '@/components/c-header'
import ProfileSideBar from '@/components/profile-side-bar'
import AppFooter from '@/components/footer'

export default {
  name: 'CProfileNotifications',
  components: {
    CHeader,
    ProfileSideBar,
    AppFooter,
  },

  data() {
    return {
      rawnrl6: ' ',
      raw9my8: ' ',
      rawtx1d: ' ',
    }
  },

  metaInfo: {
    title: 'C-ProfileNotifications - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-ProfileNotifications - exported project',
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

.c-profile-notifications-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-profile-notifications-container01 {
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

.c-profile-notifications-container02 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}

.c-profile-notifications-container03 {
  flex: 1;
  width: auto;
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-profile-notifications-container04 {
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
}

.c-profile-notifications-container05 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-white);
}

.c-profile-notifications-button {
  flex: 1;
  width: auto;
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

.c-profile-notifications-text02 {
  color: var(--dl-color-gray-500);
  padding: var(--dl-space-space-unit);
  font-size: 12px;
}

.c-profile-notifications-purchase1 {
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

.c-profile-notifications-container06 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  border-bottom-width: 1px;
}

.c-profile-notifications-purchasefrom {
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

.c-profile-notifications-container07 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.c-profile-notifications-container08 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-profile-notifications-container09 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-profile-notifications-inventoryimg {
  width: 111px;
  height: 112px;
  object-fit: cover;
  margin-left: var(--dl-space-space-twounits);
  border-radius: 12.5px;
}

.c-profile-notifications-container10 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.c-profile-notifications-text03 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-notifications-text04 {
  font-family: Roboto;
  font-weight: 500;
  text-decoration: none;
}

.c-profile-notifications-text05 {
  font-style: normal;
  font-family: Roboto;
  font-weight: 400px;
  text-decoration: none;
}

.c-profile-notifications-text06 {
  font-style: normal;
  font-family: Roboto;
  font-weight: 700;
  text-decoration: none;
}

.c-profile-notifications-text07 {
  font-style: normal;
  font-family: Roboto;
  font-weight: 400px;
  text-decoration: none;
}

.c-profile-notifications-text08 {
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-notifications-purchase2 {
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

.c-profile-notifications-container11 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  border-bottom-width: 1px;
}

.c-profile-notifications-purchasefrom1 {
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

.c-profile-notifications-container12 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.c-profile-notifications-container13 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-profile-notifications-container14 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-profile-notifications-inventoryimg1 {
  width: 111px;
  height: 112px;
  object-fit: cover;
  margin-left: var(--dl-space-space-twounits);
  border-radius: 12.5px;
}

.c-profile-notifications-container15 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.c-profile-notifications-text09 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-notifications-text10 {
  font-family: Roboto;
  font-weight: 500;
  text-decoration: none;
}

.c-profile-notifications-text11 {
  font-style: normal;
  font-family: Roboto;
  font-weight: 400px;
  text-decoration: none;
}

.c-profile-notifications-text12 {
  font-style: normal;
  font-family: Roboto;
  font-weight: 700;
  text-decoration: none;
}

.c-profile-notifications-text13 {
  font-style: normal;
  font-family: Roboto;
  font-weight: 400px;
  text-decoration: none;
}

.c-profile-notifications-text14 {
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-notifications-purchase21 {
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

.c-profile-notifications-container16 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  border-bottom-width: 1px;
}

.c-profile-notifications-purchasefrom2 {
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

.c-profile-notifications-container17 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.c-profile-notifications-container18 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-profile-notifications-container19 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-profile-notifications-inventoryimg2 {
  width: 111px;
  height: 112px;
  object-fit: cover;
  margin-left: var(--dl-space-space-twounits);
  border-radius: 12.5px;
}

.c-profile-notifications-container20 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.c-profile-notifications-text15 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-notifications-text16 {
  font-family: Roboto;
  font-weight: 500;
  text-decoration: none;
}

.c-profile-notifications-text17 {
  font-style: normal;
  font-family: Roboto;
  font-weight: 400px;
  text-decoration: none;
}

.c-profile-notifications-text18 {
  font-style: normal;
  font-family: Roboto;
  font-weight: 700;
  text-decoration: none;
}

.c-profile-notifications-text19 {
  font-style: normal;
  font-family: Roboto;
  font-weight: 400px;
  text-decoration: none;
}

.c-profile-notifications-text20 {
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

@media(max-width: 991px) {
  .c-profile-notifications-container03 {
    padding: var(--dl-space-space-unit);
  }

  .c-profile-notifications-button {
    height: auto;
    align-self: stretch;
    padding-top: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
  }

  .c-profile-notifications-text {
    font-size: 12px;
  }

  .c-profile-notifications-text03 {
    font-size: 14px;
  }

  .c-profile-notifications-text08 {
    font-size: 12px;
  }

  .c-profile-notifications-text09 {
    font-size: 14px;
  }

  .c-profile-notifications-text14 {
    font-size: 12px;
  }

  .c-profile-notifications-text15 {
    font-size: 14px;
  }

  .c-profile-notifications-text20 {
    font-size: 12px;
  }
}

@media(max-width: 767px) {
  .c-profile-notifications-container02 {
    flex-direction: column;
  }

  .c-profile-notifications-container03 {
    flex: 1;
    width: 100%;
  }

  .c-profile-notifications-button {
    width: auto;
  }

  .c-profile-notifications-text02 {
    font-size: 10px;
  }

  .c-profile-notifications-inventoryimg {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }

  .c-profile-notifications-inventoryimg1 {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }

  .c-profile-notifications-inventoryimg2 {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }
}

@media(max-width: 470px) {
  .c-profile-notifications-container01 {
    padding: var(--dl-space-space-unit);
  }

  .c-profile-notifications-container03 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-profile-notifications-text02 {
    font-size: 10px;
  }

  .c-profile-notifications-container06 {
    padding: var(--dl-space-space-unit);
  }

  .c-profile-notifications-purchasefrom {
    width: auto;
    font-size: 10px;
    margin-left: var(--dl-space-space-halfunit);
    margin-right: var(--dl-space-space-halfunit);
  }

  .c-profile-notifications-inventoryimg {
    width: 80px;
    height: 80px;
    margin-left: var(--dl-space-space-unit);
  }

  .c-profile-notifications-container10 {
    padding-right: 0px;
  }

  .c-profile-notifications-text03 {
    font-size: 12px;
  }

  .c-profile-notifications-text08 {
    font-size: 10px;
  }

  .c-profile-notifications-purchasefrom1 {
    font-size: 10px;
    margin-left: var(--dl-space-space-halfunit);
    margin-right: var(--dl-space-space-halfunit);
  }

  .c-profile-notifications-inventoryimg1 {
    width: 80px;
    height: 80px;
    margin-left: var(--dl-space-space-unit);
  }

  .c-profile-notifications-container15 {
    padding-right: 0px;
  }

  .c-profile-notifications-text09 {
    font-size: 12px;
  }

  .c-profile-notifications-text14 {
    font-size: 10px;
  }

  .c-profile-notifications-purchasefrom2 {
    font-size: 10px;
    margin-left: var(--dl-space-space-halfunit);
    margin-right: var(--dl-space-space-halfunit);
  }

  .c-profile-notifications-inventoryimg2 {
    width: 80px;
    height: 80px;
    margin-left: var(--dl-space-space-unit);
  }

  .c-profile-notifications-container20 {
    padding-right: 0px;
  }

  .c-profile-notifications-text15 {
    font-size: 12px;
  }

  .c-profile-notifications-text20 {
    font-size: 10px;
  }
}
</style>
