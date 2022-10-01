<template>
  <div class="c-check-out-upload-receipt-container">
    <c-header rootClassName="c-header-root-class-name27"></c-header>
    <div class="c-check-out-upload-receipt-container1">
      <div class="c-check-out-upload-receipt-container2">
        <span class="c-check-out-upload-receipt-receipt">Upload Receipt</span>
      </div>
      <div class="c-check-out-upload-receipt-container3">
        <div class="c-check-out-upload-receipt-container4">
          <div class="c-check-out-upload-receipt-container5">
            <span class="c-check-out-upload-receipt-text">Gcash Name:</span>
            <input type="text" placeholder="placeholder" class="c-check-out-upload-receipt-textinput input" />
          </div>
          <div class="c-check-out-upload-receipt-container6">
            <span class="c-check-out-upload-receipt-text1">Gcash Number:</span>
            <input type="text" placeholder="placeholder" class="c-check-out-upload-receipt-textinput1 input" />
          </div>
          <div class="c-check-out-upload-receipt-container7">
            <span class="c-check-out-upload-receipt-text2">
              Reference Number:
            </span>
            <input type="text" placeholder="placeholder" class="c-check-out-upload-receipt-textinput2 input" />
          </div>
        </div>
        <div class="c-check-out-upload-receipt-container8">
          <svg viewBox="0 0 1024 1024" class="c-check-out-upload-receipt-icon button">
            <path
              d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z">
            </path>
          </svg>
          <span class="c-check-out-upload-receipt-text3">Upload Receipt</span>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name30"></app-footer>
  </div>
</template>

<script>
import CHeader from '@/components/c-header'
import AppFooter from '@/components/footer'

export default {
  name: 'CCheckOutUploadReceipt',
  components: {
    CHeader,
    AppFooter,
  },
  metaInfo: {
    title: 'C-Check-OutUpload-Receipt - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-Check-OutUpload-Receipt - exported project',
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

.c-check-out-upload-receipt-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.c-check-out-upload-receipt-container1 {
  flex: 1;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(245, 245, 245, 1);
}

.c-check-out-upload-receipt-container2 {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.c-check-out-upload-receipt-receipt {
  color: rgb(0, 0, 0);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 22.5px;
  align-self: center;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-check-out-upload-receipt-container3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: center;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: row;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-white);
}

.c-check-out-upload-receipt-container4 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-check-out-upload-receipt-container5 {
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: space-between;
}

.c-check-out-upload-receipt-text {
  padding: var(--dl-space-space-unit);
  min-width: 200px;
  font-weight: bold;
}

.c-check-out-upload-receipt-textinput {
  width: auto;
  height: auto;
  font-size: 14px;
  align-self: center;
  background-color: var(--dl-color-gray-bg);
}

.c-check-out-upload-receipt-container6 {
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: space-between;
}

.c-check-out-upload-receipt-text1 {
  padding: var(--dl-space-space-unit);
  min-width: 200px;
  font-weight: bold;
}

.c-check-out-upload-receipt-textinput1 {
  width: auto;
  height: auto;
  font-size: 14px;
  align-self: center;
  background-color: var(--dl-color-gray-bg);
}

.c-check-out-upload-receipt-container7 {
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-check-out-upload-receipt-text2 {
  padding: var(--dl-space-space-unit);
  min-width: 200px;
  font-weight: bold;
}

.c-check-out-upload-receipt-textinput2 {
  width: auto;
  height: auto;
  font-size: 14px;
  align-self: center;
  background-color: var(--dl-color-gray-bg);
}

.c-check-out-upload-receipt-container8 {
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-check-out-upload-receipt-icon {
  width: 400px;
  height: 400px;
  padding: 0px;
  border-color: var(--dl-color-gray-black);
  border-style: dashed;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
}

.c-check-out-upload-receipt-text3 {
  padding: var(--dl-space-space-unit);
}

@media(max-width: 991px) {
  .c-check-out-upload-receipt-container1 {
    padding-bottom: 32px;
  }

  .c-check-out-upload-receipt-container3 {
    width: 100%;
    padding: var(--dl-space-space-unit);
    border-style: solid;
    border-width: 0px;
    flex-direction: column;
    background-color: #ffffff;
  }

  .c-check-out-upload-receipt-container5 {
    justify-content: flex-start;
  }

  .c-check-out-upload-receipt-text {
    padding: var(--dl-space-space-unit);
    min-width: var(--dl-size-size-xlarge);
    font-weight: bold;
  }

  .c-check-out-upload-receipt-textinput {
    font-size: 12px;
    margin-left: 0px;
  }

  .c-check-out-upload-receipt-container6 {
    justify-content: flex-start;
  }

  .c-check-out-upload-receipt-text1 {
    padding: var(--dl-space-space-unit);
    min-width: var(--dl-size-size-xlarge);
    font-weight: bold;
  }

  .c-check-out-upload-receipt-textinput1 {
    font-size: 12px;
    margin-left: 0px;
  }

  .c-check-out-upload-receipt-container7 {
    align-self: stretch;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }

  .c-check-out-upload-receipt-text2 {
    padding: var(--dl-space-space-unit);
    font-size: 15px;
    min-width: var(--dl-size-size-xlarge);
    font-weight: bold;
  }

  .c-check-out-upload-receipt-textinput2 {
    font-size: 12px;
    margin-left: 0px;
  }

  .c-check-out-upload-receipt-icon {
    width: 350px;
    height: 350px;
  }
}

@media(max-width: 767px) {
  .c-check-out-upload-receipt-container1 {
    max-width: var(--dl-size-size-maxwidth);
  }

  .c-check-out-upload-receipt-container2 {
    padding: var(--dl-space-space-unit);
    align-self: center;
    align-items: center;
    flex-direction: row;
  }

  .c-check-out-upload-receipt-receipt {
    padding: 0px;
  }

  .c-check-out-upload-receipt-container5 {
    align-self: stretch;
  }

  .c-check-out-upload-receipt-text {
    font-size: 12px;
    min-width: var(--dl-size-size-large);
  }

  .c-check-out-upload-receipt-textinput {
    width: auto;
    font-size: 12px;
  }

  .c-check-out-upload-receipt-container6 {
    align-self: stretch;
  }

  .c-check-out-upload-receipt-text1 {
    font-size: 12px;
    min-width: var(--dl-size-size-large);
  }

  .c-check-out-upload-receipt-textinput1 {
    width: auto;
    font-size: 12px;
  }

  .c-check-out-upload-receipt-container7 {
    width: 100%;
  }

  .c-check-out-upload-receipt-text2 {
    font-size: 12px;
    min-width: var(--dl-size-size-large);
  }

  .c-check-out-upload-receipt-textinput2 {
    font-size: 12px;
  }

  .c-check-out-upload-receipt-icon {
    width: 300px;
    height: 300px;
  }

  .c-check-out-upload-receipt-text3 {
    font-size: 12px;
  }
}

@media(max-width: 470px) {
  .c-check-out-upload-receipt-container1 {
    padding: var(--dl-space-space-unit);
  }

  .c-check-out-upload-receipt-container2 {
    align-self: center;
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    flex-direction: row;
    justify-content: center;
  }

  .c-check-out-upload-receipt-receipt {
    font-size: 16px;
    align-self: flex-start;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }

  .c-check-out-upload-receipt-container3 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-check-out-upload-receipt-container4 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-check-out-upload-receipt-text {
    font-size: 10px;
  }

  .c-check-out-upload-receipt-textinput {
    font-size: 10px;
  }

  .c-check-out-upload-receipt-text1 {
    font-size: 10px;
  }

  .c-check-out-upload-receipt-textinput1 {
    font-size: 10px;
  }

  .c-check-out-upload-receipt-text2 {
    font-size: 10px;
  }

  .c-check-out-upload-receipt-textinput2 {
    font-size: 10px;
  }

  .c-check-out-upload-receipt-icon {
    width: 250px;
    height: 250px;
  }

  .c-check-out-upload-receipt-text3 {
    font-size: 10px;
  }
}
</style>
