<template>
  <div class="c-check-out-confirmation-container">
    <c-header rootClassName="c-header-root-class-name11"></c-header>
    <div class="c-check-out-confirmation-container1">
      <div class="c-check-out-confirmation-container2">
        <div class="c-check-out-confirmation-container3">
          <svg viewBox="0 0 1024 1024" class="c-check-out-confirmation-icon">
            <path
              d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM708 324l60 60-342 342-212-214 60-60 152 152z">
            </path>
          </svg>
          <span class="c-check-out-confirmation-text">Purchase Success!</span>
        </div>
        <div class="c-check-out-confirmation-container4">
          <button class="c-check-out-confirmation-button button">
            Back to Home
          </button>
          <button class="c-check-out-confirmation-button1 button">
            My Orders
          </button>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name11"></app-footer>
  </div>
</template>

<script>
import CHeader from '@/components/c-header'
import AppFooter from '@/components/footer'

export default {
  name: 'CCheckOutConfirmation',
  components: {
    CHeader,
    AppFooter,
  },
  metaInfo: {
    title: 'C-Check-Out-Confirmation - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-Check-Out-Confirmation - exported project',
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

.c-check-out-confirmation-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.c-check-out-confirmation-container1 {
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

.c-check-out-confirmation-container2 {
  width: 50%;
  display: flex;
  align-items: center;
  border-color: var(--dl-color-gray-graysearch);
  border-width: 2px;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.c-check-out-confirmation-container3 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-gray-bg);
  border-width: 0px;
  flex-direction: column;
  border-bottom-width: 2px;
}

.c-check-out-confirmation-icon {
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-medium);
  margin: var(--dl-space-space-unit);
}

.c-check-out-confirmation-text {
  padding: var(--dl-space-space-unit);
  font-style: normal;
  font-weight: 700;
}

.c-check-out-confirmation-container4 {
  flex: 1;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
}

.c-check-out-confirmation-button {
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

.c-check-out-confirmation-button1 {
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
  .c-check-out-confirmation-container1 {
    height: auto;
  }

  .c-check-out-confirmation-container2 {
    width: 80%;
  }
}

@media(max-width: 767px) {
  .c-check-out-confirmation-container1 {
    max-width: var(--dl-size-size-maxwidth);
  }

  .c-check-out-confirmation-container2 {
    width: 80%;
  }
}

@media(max-width: 470px) {
  .c-check-out-confirmation-container1 {
    padding: var(--dl-space-space-halfunit);
  }
}
</style>
