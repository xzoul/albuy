<template>
  <div class="c-profile-payment-container">
    <c-header rootClassName="c-header-root-class-name6"></c-header>
    <div class="c-profile-payment-profile-payment">
      <profile-side-bar rootClassName="profile-side-bar-root-class-name2"></profile-side-bar>
      <div class="c-profile-payment-payment-method">
        <div class="c-profile-payment-container1">
          <span class="c-profile-payment-text">Choose a Payment Method</span>
          <div class="c-profile-payment-payment">
            <div class="c-profile-payment-gcash">
              <input type="checkbox" checked="true" class="c-profile-payment-checkbox" />
              <span class="c-profile-payment-text1">Gcash</span>
            </div>
            <div class="c-profile-payment-c-o-d">
              <input type="checkbox" checked="true" class="c-profile-payment-checkbox1" />
              <span class="c-profile-payment-text2">Cash On Delivery</span>
            </div>
          </div>
        </div>
        <button class="c-profile-payment-continue button">Continue</button>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name6"></app-footer>
  </div>
</template>

<script>
import CHeader from '@/components/c-header'
import ProfileSideBar from '@/components/profile-side-bar'
import AppFooter from '@/components/footer'

export default {
  name: 'CProfilePayment',
  components: {
    CHeader,
    ProfileSideBar,
    AppFooter,
  },
  metaInfo: {
    title: 'C-ProfilePayment - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-ProfilePayment - exported project',
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

.c-profile-payment-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-profile-payment-profile-payment {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  overflow: hidden;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(245, 245, 245, 1);
}

.c-profile-payment-payment-method {
  flex: 1;
  width: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
}

.c-profile-payment-container1 {
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.c-profile-payment-text {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 20px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-payment-payment {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.c-profile-payment-gcash {
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  justify-content: flex-start;
}

.c-profile-payment-checkbox {
  width: 12px;
  height: 12px;
  min-width: 10px;
  min-height: 10px;
}

.c-profile-payment-text1 {
  font-size: 14px;
  font-family: Roboto;
  margin-left: var(--dl-space-space-oneandhalfunits);
}

.c-profile-payment-c-o-d {
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  justify-content: flex-start;
}

.c-profile-payment-checkbox1 {
  width: 12px;
  height: 12px;
  min-width: 10px;
  min-height: 10px;
}

.c-profile-payment-text2 {
  font-size: 14px;
  font-family: Roboto;
  margin-left: var(--dl-space-space-oneandhalfunits);
}

.c-profile-payment-continue {
  width: auto;
  font-size: 14px;
  align-self: flex-end;
  transition: 0.3s;
  font-family: Roboto;
  border-width: 1px;
  border-radius: 15px;
  background-color: transparent;
}

.c-profile-payment-continue:hover {
  background-color: #a6d9ef;
}

@media(max-width: 991px) {
  .c-profile-payment-profile-payment {
    width: 100%;
    height: auto;
  }

  .c-profile-payment-payment-method {
    padding: var(--dl-space-space-unit);
  }
}

@media(max-width: 767px) {
  .c-profile-payment-profile-payment {
    height: auto;
    align-self: center;
    flex-direction: column;
  }

  .c-profile-payment-payment-method {
    width: 100%;
    padding: var(--dl-space-space-unit);
    align-self: center;
    margin-left: 0px;
    margin-right: 0px;
  }

  .c-profile-payment-text {
    font-size: 18px;
  }

  .c-profile-payment-payment {
    padding: var(--dl-space-space-halfunit);
  }

  .c-profile-payment-text1 {
    font-size: 16px;
  }

  .c-profile-payment-text2 {
    font-size: 16px;
  }

  .c-profile-payment-continue {
    font-size: 16px;
  }
}

@media(max-width: 470px) {
  .c-profile-payment-profile-payment {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-unit);
    flex-direction: column;
  }

  .c-profile-payment-payment-method {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-oneandhalfunits);
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
    margin-bottom: 0px;
  }

  .c-profile-payment-text {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }

  .c-profile-payment-payment {
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }

  .c-profile-payment-gcash {
    align-items: center;
    justify-content: flex-start;
  }

  .c-profile-payment-checkbox {
    width: 12px;
    height: 12px;
    min-width: 10px;
    min-height: 10px;
  }

  .c-profile-payment-text1 {
    font-size: 16px;
  }

  .c-profile-payment-c-o-d {
    margin-top: var(--dl-space-space-halfunit);
    align-items: center;
  }

  .c-profile-payment-checkbox1 {
    width: 12px;
    height: 12px;
    min-width: 10px;
    min-height: 10px;
  }

  .c-profile-payment-text2 {
    font-size: 16px;
  }

  .c-profile-payment-continue {
    font-size: 16px;
    background-color: transparent;
  }
}
</style>
