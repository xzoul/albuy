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
              <span class="c-profile-notifications-text2">Mark all as read</span>
            </div>
          </div>
          <div class="c-profile-notifications-order1">
            <div class="c-profile-notifications-purchase1">
              <div class="c-profile-notifications-container06">
                <span class="c-profile-notifications-purchasefrom">
                  Product Delivered
                </span>
              </div>
              <div class="c-profile-notifications-container07">
                <div class="c-profile-notifications-container08">
                  <div class="c-profile-notifications-container09">
                    <img src="https://play.teleporthq.io/static/svg/default-img.svg"
                      class="c-profile-notifications-inventoryimg" />
                  </div>
                  <div class="c-profile-notifications-container10">
                    <span class="c-profile-notifications-text3">
                      <span class="c-profile-notifications-text4">
                        Round Woven Sling Bag
                      </span>
                      <span class="c-profile-notifications-text5">
                        with
                        <span v-html="rawhu6j"></span>
                      </span>
                      <span class="c-profile-notifications-text6">
                        Order ID 12345
                      </span>
                      <span class="c-profile-notifications-text7">
                        has been delivered
                      </span>
                    </span>
                    <span class="c-profile-notifications-text8">
                      Dec. 25, 2022 17:38
                    </span>
                  </div>
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
      rawhu6j: ' ',
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
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  min-height: 565px;
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
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-profile-notifications-container04 {
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
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

.c-profile-notifications-text2 {
  color: var(--dl-color-gray-500);
  padding: var(--dl-space-space-unit);
  font-size: 12px;
}

.c-profile-notifications-order1 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
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

.c-profile-notifications-text3 {
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

.c-profile-notifications-text4 {
  font-family: Roboto;
  font-weight: 500;
  text-decoration: none;
}

.c-profile-notifications-text5 {
  font-style: normal;
  font-family: Roboto;
  font-weight: 400px;
  text-decoration: none;
}

.c-profile-notifications-text6 {
  font-style: normal;
  font-family: Roboto;
  font-weight: 700;
  text-decoration: none;
}

.c-profile-notifications-text7 {
  font-style: normal;
  font-family: Roboto;
  font-weight: 400px;
  text-decoration: none;
}

.c-profile-notifications-text8 {
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

  .c-profile-notifications-text3 {
    font-size: 14px;
  }

  .c-profile-notifications-text8 {
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

  .c-profile-notifications-text2 {
    font-size: 10px;
  }

  .c-profile-notifications-inventoryimg {
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

  .c-profile-notifications-text2 {
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

  .c-profile-notifications-text3 {
    font-size: 12px;
  }

  .c-profile-notifications-text8 {
    font-size: 10px;
  }
}
</style>
