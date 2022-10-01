<template>
  <div class="c-customer-support-general-f-a-q-container">
    <c-header rootClassName="c-header-root-class-name13"></c-header>
    <div class="c-customer-support-general-f-a-q-container1">
      <span class="c-customer-support-general-f-a-q-text">Help Centre</span>
      <button class="c-customer-support-general-f-a-q-button button" @click="showTicket()">
        Submit a Ticket
      </button>
    </div>
    <div class="c-customer-support-general-f-a-q-container2">
      <span class="c-customer-support-general-f-a-q-text01">
        How can we help you?
      </span>
      <div class="c-customer-support-general-f-a-q-search-bar">
        <input type="text" class="c-customer-support-general-f-a-q-textinput input" />
        <svg viewBox="0 0 1024 1024" class="c-customer-support-general-f-a-q-searchheader">
          <path
            d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z">
          </path>
        </svg>
      </div>
      <div class="c-customer-support-general-f-a-q-container3">
        <div class="c-customer-support-general-f-a-q-container4">
          <span class="c-customer-support-general-f-a-q-text02">Categories</span>
          <div class="c-customer-support-general-f-a-q-container5">
            <span class="c-customer-support-general-f-a-q-text03">
              General FAQs
            </span>
            <span class="c-customer-support-general-f-a-q-text04">
              Account Safety and Others
            </span>
            <span class="c-customer-support-general-f-a-q-text05">
              Orders and Payments
            </span>
            <span class="c-customer-support-general-f-a-q-text06">
              Selling and Billing
            </span>
            <span class="c-customer-support-general-f-a-q-text07">
              Shipping and Delivery
            </span>
            <span class="c-customer-support-general-f-a-q-text08">
              Returns and Refunds
            </span>
          </div>
        </div>
        <div class="c-customer-support-general-f-a-q-container6">
          <span class="c-customer-support-general-f-a-q-text09">
            Frequently Asked Questions
          </span>
          <div class="c-customer-support-general-f-a-q-container7">
            <span class="c-customer-support-general-f-a-q-text10">
              How can I order?
            </span>
            <span class="c-customer-support-general-f-a-q-text11">
              When will my order arrive?
            </span>
            <span class="c-customer-support-general-f-a-q-text12">
              Can I cancel my order?
            </span>
            <span class="c-customer-support-general-f-a-q-text13">
              Can I return a product?
            </span>
            <span class="c-customer-support-general-f-a-q-text14">
              How will I be refunded when I return a product?
            </span>
            <span class="c-customer-support-general-f-a-q-text15">
              Can I still change my order details upon submitting?
            </span>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name13"></app-footer>
  </div>
</template>

<script>
import CHeader from '@/components/c-header'
import AppFooter from '@/components/footer'

export default {
  name: 'CCustomerSupportGeneralFAQ',
  components: {
    CHeader,
    AppFooter,
  },
  metaInfo: {
    title: 'C-Customer-Support-General-FAQ - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-Customer-Support-General-FAQ - exported project',
      },
    ],
  },

  methods: {
    showTicket() {
      this.$router.push({
        name: 'c-customer-create-ticket',
      })
    },
  }
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

.c-customer-support-general-f-a-q-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-customer-support-general-f-a-q-container1 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
}

.c-customer-support-general-f-a-q-text {
  padding: var(--dl-space-space-halfunit);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
}

.c-customer-support-general-f-a-q-button {
  font-size: 14px;
  border-radius: 15px;
}

.c-customer-support-general-f-a-q-container2 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  padding-bottom: 32px;
  justify-content: flex-start;
  background-color: rgba(245, 245, 245, 1);
}

.c-customer-support-general-f-a-q-text01 {
  padding: var(--dl-space-space-unit);
}

.c-customer-support-general-f-a-q-search-bar {
  width: 50%;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 15px;
  background-color: var(--dl-color-gray-white);
}

.c-customer-support-general-f-a-q-textinput {
  width: 100%;
  height: 100%;
  min-width: 400px;
  padding-top: var(--dl-space-space-halfunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unit);
  border-radius: 15px;
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}

.c-customer-support-general-f-a-q-searchheader {
  width: 3rem;
  height: 2rem;
  align-self: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  border-left-width: 1px;
}

.c-customer-support-general-f-a-q-container3 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  flex-direction: row;
}

.c-customer-support-general-f-a-q-container4 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-customer-support-general-f-a-q-text02 {
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-weight: 700;
}

.c-customer-support-general-f-a-q-container5 {
  display: flex;
  align-items: center;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: flex-start;
}

.c-customer-support-general-f-a-q-text03 {
  padding: var(--dl-space-space-halfunit);
  align-self: flex-start;
  font-style: normal;
  text-align: left;
  font-weight: 600;
}

.c-customer-support-general-f-a-q-text04 {
  padding: var(--dl-space-space-halfunit);
  align-self: flex-start;
  text-align: left;
}

.c-customer-support-general-f-a-q-text05 {
  padding: var(--dl-space-space-halfunit);
  align-self: flex-start;
  text-align: left;
}

.c-customer-support-general-f-a-q-text06 {
  padding: var(--dl-space-space-halfunit);
  align-self: flex-start;
  text-align: left;
}

.c-customer-support-general-f-a-q-text07 {
  padding: var(--dl-space-space-halfunit);
  align-self: flex-start;
  text-align: left;
}

.c-customer-support-general-f-a-q-text08 {
  padding: var(--dl-space-space-halfunit);
  align-self: flex-start;
  text-align: left;
}

.c-customer-support-general-f-a-q-container6 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
  align-items: center;
  padding-left: 16px;
  flex-direction: column;
  justify-content: flex-start;
}

.c-customer-support-general-f-a-q-text09 {
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-weight: 700;
}

.c-customer-support-general-f-a-q-container7 {
  display: flex;
  align-items: center;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: flex-start;
}

.c-customer-support-general-f-a-q-text10 {
  padding: var(--dl-space-space-halfunit);
  align-self: flex-start;
  text-align: left;
}

.c-customer-support-general-f-a-q-text11 {
  padding: var(--dl-space-space-halfunit);
  align-self: flex-start;
  text-align: left;
}

.c-customer-support-general-f-a-q-text12 {
  padding: var(--dl-space-space-halfunit);
  align-self: flex-start;
  text-align: left;
}

.c-customer-support-general-f-a-q-text13 {
  padding: var(--dl-space-space-halfunit);
  align-self: flex-start;
  text-align: left;
}

.c-customer-support-general-f-a-q-text14 {
  padding: var(--dl-space-space-halfunit);
  align-self: flex-start;
  text-align: left;
}

.c-customer-support-general-f-a-q-text15 {
  padding: var(--dl-space-space-halfunit);
  align-self: flex-start;
  text-align: left;
}

@media(max-width: 991px) {
  .c-customer-support-general-f-a-q-search-bar {
    width: 50%;
  }

  .c-customer-support-general-f-a-q-textinput {
    width: 100%;
    min-width: auto;
    border-radius: 15px;
  }

  .c-customer-support-general-f-a-q-container4 {
    padding: var(--dl-space-space-unit);
  }

  .c-customer-support-general-f-a-q-container7 {
    align-self: stretch;
  }
}

@media(max-width: 767px) {
  .c-customer-support-general-f-a-q-container1 {
    padding: var(--dl-space-space-halfunit);
    flex-direction: row;
  }

  .c-customer-support-general-f-a-q-text {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-button {
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-container2 {
    padding-top: var(--dl-space-space-unit);
  }

  .c-customer-support-general-f-a-q-text01 {
    font-size: 14px;
  }

  .c-customer-support-general-f-a-q-search-bar {
    height: 1.5rem;
  }

  .c-customer-support-general-f-a-q-textinput {
    width: 100%;
    min-width: auto;
    border-radius: 15px;
  }

  .c-customer-support-general-f-a-q-searchheader {
    width: 2rem;
    height: 1.5rem;
  }

  .c-customer-support-general-f-a-q-text02 {
    font-size: 14px;
  }

  .c-customer-support-general-f-a-q-text03 {
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-text04 {
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-text05 {
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-text06 {
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-text07 {
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-text08 {
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-text09 {
    font-size: 14px;
  }

  .c-customer-support-general-f-a-q-text10 {
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-text11 {
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-text12 {
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-text13 {
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-text14 {
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-text15 {
    font-size: 12px;
  }
}

@media(max-width: 470px) {
  .c-customer-support-general-f-a-q-text {
    font-size: 9px;
  }

  .c-customer-support-general-f-a-q-button {
    padding: var(--dl-space-space-halfunit);
    font-size: 9px;
  }

  .c-customer-support-general-f-a-q-container2 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-customer-support-general-f-a-q-text01 {
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-search-bar {
    width: 75%;
    height: 100%;
    margin-left: 0px;
    border-color: var(--dl-color-gray-black);
    border-width: 1px;
    margin-right: 0px;
  }

  .c-customer-support-general-f-a-q-textinput {
    height: auto;
    align-self: stretch;
    padding-top: 4px;
    padding-left: var(--dl-space-space-halfunit);
    border-radius: 15px;
    padding-right: var(--dl-space-space-halfunit);
    padding-bottom: 4px;
  }

  .c-customer-support-general-f-a-q-searchheader {
    width: 3rem;
    height: 1.5rem;
  }

  .c-customer-support-general-f-a-q-container3 {
    padding: var(--dl-space-space-unit);
  }

  .c-customer-support-general-f-a-q-container4 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-customer-support-general-f-a-q-text02 {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-container5 {
    padding-left: var(--dl-space-space-halfunit);
    padding-right: var(--dl-space-space-halfunit);
  }

  .c-customer-support-general-f-a-q-text03 {
    font-size: 10px;
  }

  .c-customer-support-general-f-a-q-text04 {
    font-size: 10px;
  }

  .c-customer-support-general-f-a-q-text05 {
    font-size: 10px;
  }

  .c-customer-support-general-f-a-q-text06 {
    font-size: 10px;
  }

  .c-customer-support-general-f-a-q-text07 {
    font-size: 10px;
  }

  .c-customer-support-general-f-a-q-text08 {
    font-size: 10px;
  }

  .c-customer-support-general-f-a-q-container6 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-customer-support-general-f-a-q-text09 {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }

  .c-customer-support-general-f-a-q-container7 {
    padding-left: var(--dl-space-space-halfunit);
    padding-right: var(--dl-space-space-halfunit);
  }

  .c-customer-support-general-f-a-q-text10 {
    font-size: 10px;
  }

  .c-customer-support-general-f-a-q-text11 {
    font-size: 10px;
  }

  .c-customer-support-general-f-a-q-text12 {
    font-size: 10px;
  }

  .c-customer-support-general-f-a-q-text13 {
    font-size: 10px;
  }

  .c-customer-support-general-f-a-q-text14 {
    font-size: 10px;
  }

  .c-customer-support-general-f-a-q-text15 {
    font-size: 10px;
  }
}
</style>
