<template>
  <div class="c-check-out-pending-container">
    <c-header rootClassName="c-header-root-class-name28"></c-header>
    <div class="c-check-out-pending-container1">
      <div class="c-check-out-pending-container2">
        <div class="c-check-out-pending-container3">
          <svg viewBox="0 0 1024 1024" class="c-check-out-pending-icon">
            <path
              d="M682.667 554.667c0-23.467-19.2-42.667-42.667-42.667h-128c-23.467 0-42.667 19.2-42.667 42.667s19.2 42.667 42.667 42.667h128c23.467 0 42.667-19.2 42.667-42.667z">
            </path>
            <path
              d="M512 256c164.651 0 298.667 134.016 298.667 298.667s-134.016 298.667-298.667 298.667-298.667-134.016-298.667-298.667 134.016-298.667 298.667-298.667M512 170.667c-212.096 0-384 171.904-384 384s171.904 384 384 384 384-171.904 384-384-171.904-384-384-384z">
            </path>
            <path
              d="M554.667 426.667c0-23.467-19.2-42.667-42.667-42.667s-42.667 19.2-42.667 42.667v128c0 23.467 19.2 42.667 42.667 42.667s42.667-19.2 42.667-42.667v-128z">
            </path>
            <path
              d="M512 341.333c117.632 0 213.333 95.701 213.333 213.333s-95.701 213.333-213.333 213.333-213.333-95.701-213.333-213.333 95.701-213.333 213.333-213.333M512 298.667c-141.312 0-256 114.603-256 256 0 141.312 114.688 256 256 256s256-114.688 256-256c0-141.397-114.688-256-256-256z">
            </path>
          </svg>
          <span class="c-check-out-pending-text">Your Order is Pending</span>
        </div>
        <div class="c-check-out-pending-container4">
          <button class="c-check-out-pending-button button">Back to Home</button>
          <button class="c-check-out-pending-button1 button">My Orders</button>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name31"></app-footer>
  </div>
</template>

<script>
import CHeader from '@/components/c-header'
import AppFooter from '@/components/footer'

export default {
  name: 'CCheckOutPending',
  components: {
    CHeader,
    AppFooter,
  },
  metaInfo: {
    title: 'C-Check-Out-Pending - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-Check-Out-Pending - exported project',
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

.c-check-out-pending-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.c-check-out-pending-container1 {
  flex: 1;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(245, 245, 245, 1);
}

.c-check-out-pending-container2 {
  width: 50%;
  display: flex;
  align-items: center;
  border-color: var(--dl-color-gray-graysearch);
  border-width: 2px;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.c-check-out-pending-container3 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-gray-bg);
  border-width: 0px;
  flex-direction: column;
  border-bottom-width: 2px;
}

.c-check-out-pending-icon {
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-medium);
}

.c-check-out-pending-text {
  padding: var(--dl-space-space-unit);
  font-style: normal;
  font-weight: 700;
}

.c-check-out-pending-container4 {
  flex: 1;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
}

.c-check-out-pending-button {
  color: #000000;
  width: 100%;
  padding: var(--dl-space-space-unit);
  font-size: 12px;
  align-self: stretch;
  text-align: center;
  border-color: var(--dl-color-gray-bg);
  border-width: 0px;
  border-radius: 0px;
  padding-bottom: 16px;
  background-color: transparent;
  border-top-width: 2px;
  border-right-width: 2px;
}

.c-check-out-pending-button1 {
  color: #f27320;
  width: 100%;
  padding: var(--dl-space-space-unit);
  font-size: 12px;
  align-self: stretch;
  text-align: center;
  border-color: var(--dl-color-gray-bg);
  border-width: 0px;
  border-radius: 0px;
  padding-bottom: 16px;
  background-color: transparent;
  border-top-width: 2px;
  border-left-width: 2px;
}

@media(max-width: 991px) {
  .c-check-out-pending-container1 {
    height: auto;
  }

  .c-check-out-pending-container2 {
    width: 80%;
  }

  .c-check-out-pending-icon {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }
}

@media(max-width: 767px) {
  .c-check-out-pending-container1 {
    max-width: var(--dl-size-size-maxwidth);
  }

  .c-check-out-pending-container2 {
    width: 80%;
  }
}

@media(max-width: 470px) {
  .c-check-out-pending-container1 {
    padding: var(--dl-space-space-halfunit);
  }
}
</style>
