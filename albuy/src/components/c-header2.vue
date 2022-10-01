<template>
  <div class="c-header-container" v-bind:class="rootClassName">
    <header data-role="Accordion" class="c-header-header">
      <nav class="c-header-nav">
        <nav class="c-header-nav1">
          <span class="c-header-text">Seller Centre</span>
          <span class="c-header-text1">Become a Seller</span>
          <span class="c-header-text2">About Us</span>
          <button class="c-header-text3" @click="showCustomerSupport()">Customer Support</button>
        </nav>
      </nav>
      <nav class="c-header-nav2">
        <nav class="c-header-nav3">
          <button class="c-header-text4" @click="showNotifications()">Notification</button>
          <button class="c-header-text5">Sign Up</button>
          <button class="c-header-text6">Log In</button>
        </nav>
      </nav>
    </header>
    <div class="c-header-container1">
      <div class="c-header-container2">
        <div data-type="AccordionHeader" class="c-header-accordion-header">
          <svg viewBox="0 0 1024 1024" class="c-header-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z">
            </path>
          </svg>
        </div>
        <button @click="showIndex()">
          <img alt="Untitled652022032713280332178" src="/playground_assets/albuylogo-1500h.png"
            class="c-header-albuylogo" />
        </button>
      </div>
      <div class="c-header-container3">
        <div class="c-header-search-bar">
          <input type="text" class="c-header-textinput input" />
          <svg viewBox="0 0 1024 1024" class="c-header-searchheader">
            <path
              d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z">
            </path>
          </svg>
        </div>

        <button class="c-header-cartheader button" @click="showCart()">
          <svg viewBox="0 0 1024 1024" class="c-header-carticon">
            <path
              d="M885.589 228.053c-8.149-9.344-19.883-14.72-32.256-14.72h-589.611l-8.32-49.664c-3.413-20.565-21.205-35.669-42.069-35.669h-96c-23.595 0-42.667 19.072-42.667 42.667s19.072 42.667 42.667 42.667h59.861l79.36 476.331c0.341 1.92 1.323 3.499 1.92 5.291 0.683 2.261 1.237 4.395 2.304 6.443 1.365 2.816 3.2 5.205 5.12 7.637 1.323 1.664 2.517 3.328 4.053 4.779 2.475 2.304 5.333 3.925 8.235 5.547 1.621 0.896 3.029 2.091 4.779 2.773 4.949 2.005 10.155 3.2 15.659 3.2 0.043 0 469.376 0 469.376 0 23.595 0 42.667-19.072 42.667-42.667s-19.072-42.667-42.667-42.667h-433.195l-7.083-42.667h482.944c21.248 0 39.253-15.616 42.24-36.608l42.667-298.667c1.749-12.288-1.92-24.704-9.984-34.005zM804.139 298.667l-12.16 85.333h-151.979v-85.333h164.139zM597.333 298.667v85.333h-128v-85.333h128zM597.333 426.667v85.333h-128v-85.333h128zM426.667 298.667v85.333h-128c-2.261 0-4.309 0.64-6.315 1.28l-14.421-86.613h148.736zM299.264 426.667h127.403v85.333h-113.195l-14.208-85.333zM640 512v-85.333h145.835l-12.16 85.333h-133.675z">
            </path>
            <path
              d="M426.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z">
            </path>
            <path
              d="M810.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z">
            </path>
          </svg>
        </button>

        <button class="c-header-accheader button">
          <img alt="pastedImage" src="/playground_assets/pastedimage-516h-1500h.png" class="c-header-pasted-image" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CHeader',
  props: {
    text3: {
      type: String,
      default: 'Customer Support',
    },
    rootClassName: String,
    text1: {
      type: String,
      default: 'Become a Seller',
    },
    text2: {
      type: String,
      default: 'About Us',
    },
    text: {
      type: String,
      default: 'Seller Centre',
    },
    text4: {
      type: String,
      default: 'Notification',
    },
    text11: {
      type: String,
      default: 'Sign Up​',
    },
    text111: {
      type: String,
      default: 'Log In',
    },
  },

  methods: {
    showCart() {
      this.$router.push({
        name: 'c-cart',
      })
    },
    showNotifications() {
      this.$router.push({
        name: 'c-profile-notifications',
      })
    },
    showIndex() {
      this.$router.push({
        name: 'c-index',
      })
    },
    showCustomerSupport() {
      this.$router.push({
        name: 'c-customer-support-general-f-a-q',
      })
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  font-family: 'Roboto', sans-serif;
}

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


.c-header-container {
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.c-header-header {
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  align-items: center;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: space-between;
}

.c-header-nav {
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
}

.c-header-nav1 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-header-text {
  font-size: 14px;
}

.c-header-text1 {
  font-size: 14px;
  margin-left: var(--dl-space-space-unit);
}

.c-header-text2 {
  font-size: 14px;
  margin-left: var(--dl-space-space-unit);
}

.c-header-text3 {
  font-size: 14px;
  margin-left: var(--dl-space-space-unit);
}

.c-header-nav2 {
  padding: var(--dl-space-space-unit);
  align-self: flex-end;
}

.c-header-nav3 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-header-text4 {
  font-size: 14px;
}

.c-header-text5 {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  margin-left: var(--dl-space-space-oneandhalfunits);
}

.c-header-text6 {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  margin-left: var(--dl-space-space-unit);
}

.c-header-container1 {
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: space-between;
  border-bottom-width: 1.5px;
}

.c-header-container2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}

.c-header-accordion-header {
  display: none;
  align-items: center;
  flex-direction: column;
}

.c-header-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.c-header-albuylogo {
  height: 4rem;
  align-self: center;
}

.c-header-container3 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-header-search-bar {
  width: auto;
  display: flex;
  align-items: flex-start;
  margin-left: 0px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  margin-right: var(--dl-space-space-threeunits);
  border-radius: 15px;
  background-color: var(--dl-color-gray-white);
}

.c-header-textinput {
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

.c-header-searchheader {
  width: 3rem;
  height: 2rem;
  align-self: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  border-left-width: 1px;
}

.c-header-cartheader {
  display: flex;
  padding: 0px;
  align-self: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  border-radius: 0px;
  flex-direction: row;
  background-color: transparent;
}

.c-header-carticon {
  width: auto;
  height: 2rem;
  align-self: center;
}

.c-header-accheader {
  display: none;
  padding: 0px;
  align-self: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  border-radius: 0px;
  padding-right: 0px;
  flex-direction: row;
  background-color: transparent;
}

.c-header-pasted-image {
  height: 2rem;
}























@media(max-width: 991px) {
  .c-header-container1 {
    justify-content: space-between;
  }

  .c-header-search-bar {
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }

  .c-header-textinput {
    width: auto;
    min-width: var(--dl-size-size-xxlarge);
    border-radius: 15px;
  }

  .c-header-cartheader {
    margin-right: var(--dl-space-space-unit);
  }

  .c-header-root-class-name {
    top: -456px;
    left: 1px;
    position: static;
  }
}

@media(max-width: 767px) {
  .c-header-header {
    display: none;
    padding-top: var(--dl-space-space-halfunit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .c-header-nav {
    padding: var(--dl-space-space-halfunit);
  }

  .c-header-nav1 {
    align-items: flex-start;
    flex-direction: row;
  }

  .c-header-text {
    font-size: 11px;
    margin-right: var(--dl-space-space-unit);
  }

  .c-header-text1 {
    font-size: 11px;
    margin-left: 0;
    margin-right: var(--dl-space-space-unit);
  }

  .c-header-text2 {
    font-size: 11px;
    margin-left: 0;
    margin-right: var(--dl-space-space-unit);
  }

  .c-header-text3 {
    font-size: 11px;
    margin-left: 0;
  }

  .c-header-nav2 {
    padding: var(--dl-space-space-halfunit);
    position: static;
    margin-right: 0px;
  }

  .c-header-nav3 {
    align-items: flex-start;
    flex-direction: row;
  }

  .c-header-text4 {
    font-size: 11px;
    margin-right: var(--dl-space-space-oneandhalfunits);
  }

  .c-header-text5 {
    font-size: 11px;
    margin-left: 0;
    margin-right: var(--dl-space-space-unit);
  }

  .c-header-text6 {
    font-size: 11px;
    margin-left: 0;
  }

  .c-header-container1 {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    justify-content: space-between;
  }

  .c-header-accordion-header {
    display: flex;
  }

  .c-header-icon {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-self: center;
  }

  .c-header-albuylogo {
    height: 2rem;
    margin-left: var(--dl-space-space-unit);
  }

  .c-header-container3 {
    margin-left: var(--dl-space-space-twounits);
  }

  .c-header-search-bar {
    height: 1.5rem;
  }

  .c-header-textinput {
    width: 100%;
    min-width: auto;
    border-radius: 15px;
  }

  .c-header-searchheader {
    width: 2rem;
    height: 1.5rem;
  }

  .c-header-carticon {
    height: 1.5rem;
  }

  .c-header-accheader {
    display: flex;
    margin-right: var(--dl-space-space-oneandhalfunits);
  }

  .c-header-pasted-image {
    height: 1.5rem;
  }
}

@media(max-width: 470px) {
  .c-header-header {
    padding-top: var(--dl-space-space-halfunit);
    padding-left: var(--dl-space-space-halfunit);
    padding-right: var(--dl-space-space-halfunit);
  }

  .c-header-text {
    font-size: 8px;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: 0px;
  }

  .c-header-text1 {
    font-size: 8px;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: 0px;
  }

  .c-header-text2 {
    font-size: 8px;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: 0px;
  }

  .c-header-text3 {
    font-size: 8px;
  }

  .c-header-text4 {
    font-size: 8px;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: var(--dl-space-space-unit);
    margin-bottom: 0px;
  }

  .c-header-text5 {
    font-size: 8px;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: 0px;
  }

  .c-header-text6 {
    font-size: 8px;
  }

  .c-header-container1 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .c-header-accordion-header {
    display: flex;
  }

  .c-header-icon {
    width: 1rem;
    height: 1rem;
  }

  .c-header-albuylogo {
    width: auto;
    height: 1.5rem;
    margin-left: var(--dl-space-space-halfunit);
  }

  .c-header-search-bar {
    width: 75%;
    height: 100%;
    margin-left: 0px;
    border-color: var(--dl-color-gray-black);
    border-width: 1px;
    margin-right: 0px;
  }

  .c-header-textinput {
    width: 100%;
    height: 100%;
    padding: 0px;
    border-radius: 15px;
  }

  .c-header-searchheader {
    width: 2rem;
    height: 1rem;
  }

  .c-header-cartheader {
    margin-left: var(--dl-space-space-halfunit);
    margin-right: 0px;
    padding-right: 0px;
  }

  .c-header-carticon {
    height: 1rem;
  }

  .c-header-accheader {
    display: flex;
    margin-right: 0px;
    padding-right: 0px;
  }

  .c-header-pasted-image {
    height: 1rem;
    display: flex;
  }
}
</style>
