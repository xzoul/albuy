<template>
  <div class="c-customer-create-ticket-container">
    <c-header rootClassName="c-header-root-class-name22"></c-header>
    <div class="c-customer-create-ticket-container1">
      <div class="c-customer-create-ticket-container2">
        <span class="c-customer-create-ticket-text">Help Centre</span>
        <button class="c-customer-create-ticket-button button">
          Submit a Ticket
        </button>
      </div>
      <div class="c-customer-create-ticket-container3">
        <span class="c-customer-create-ticket-text1">Submit a Ticket</span>
        <div class="c-customer-create-ticket-container4">
          <div class="c-customer-create-ticket-container5">
            <span class="c-customer-create-ticket-text2">
              Category of Concern
            </span>
            <button class="c-customer-create-ticket-button1 button">
              <span class="c-customer-create-ticket-text3">Select an option</span>
              <svg viewBox="0 0 1024 1024" class="c-customer-create-ticket-icon">
                <path d="M298 426h428l-214 214z"></path>
              </svg>
            </button>
          </div>
          <div class="c-customer-create-ticket-container6">
            <span class="c-customer-create-ticket-text4">Main Concern</span>
            <textarea class="c-customer-create-ticket-textarea textarea"></textarea>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name24"></app-footer>
  </div>
</template>

<script>
import CHeader from '@/components/c-header'
import AppFooter from '@/components/footer'

export default {
  name: 'CCustomerCreateTicket',
  components: {
    CHeader,
    AppFooter,
  },
  metaInfo: {
    title: 'C-Customer-Create-Ticket - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-Customer-Create-Ticket - exported project',
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

.c-customer-create-ticket-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-customer-create-ticket-container1 {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-customer-create-ticket-container2 {
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

.c-customer-create-ticket-text {
  padding: var(--dl-space-space-halfunit);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
}

.c-customer-create-ticket-button {
  font-size: 14px;
  border-radius: 15px;
}

.c-customer-create-ticket-container3 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
  background-color: rgba(245, 245, 245, 1);
}

.c-customer-create-ticket-text1 {
  padding: var(--dl-space-space-unit);
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
}

.c-customer-create-ticket-container4 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  padding-left: 16px;
  flex-direction: column;
}

.c-customer-create-ticket-container5 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  flex-direction: row;
}

.c-customer-create-ticket-text2 {
  padding: var(--dl-space-space-unit);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
}

.c-customer-create-ticket-button1 {
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-unit);
  font-size: 18px;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-customer-create-ticket-text3 {
  width: auto;
  font-size: 16px;
  min-width: auto;
  font-style: normal;
  font-weight: 500;
}

.c-customer-create-ticket-icon {
  width: 18px;
  height: 18px;
}

.c-customer-create-ticket-container6 {
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.c-customer-create-ticket-text4 {
  padding: var(--dl-space-space-unit);
  font-size: 18px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 600;
}

.c-customer-create-ticket-textarea {
  flex: 1;
  margin: var(--dl-space-space-unit);
  align-self: stretch;
  min-height: 200px;
}

@media(max-width: 991px) {
  .c-customer-create-ticket-text3 {
    font-size: 14px;
  }
}

@media(max-width: 767px) {
  .c-customer-create-ticket-container2 {
    padding: var(--dl-space-space-halfunit);
    flex-direction: row;
  }

  .c-customer-create-ticket-text {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }

  .c-customer-create-ticket-button {
    font-size: 12px;
  }

  .c-customer-create-ticket-container3 {
    padding-top: var(--dl-space-space-unit);
  }

  .c-customer-create-ticket-text1 {
    font-size: 16px;
  }

  .c-customer-create-ticket-container4 {
    padding-top: var(--dl-space-space-halfunit);
    padding-bottom: var(--dl-space-space-halfunit);
  }

  .c-customer-create-ticket-container5 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-customer-create-ticket-text2 {
    font-size: 14px;
  }

  .c-customer-create-ticket-button1 {
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
  }

  .c-customer-create-ticket-container6 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-customer-create-ticket-text4 {
    font-size: 14px;
  }

  .c-customer-create-ticket-textarea {
    margin: var(--dl-space-space-halfunit);
    font-size: 14px;
  }
}

@media(max-width: 470px) {
  .c-customer-create-ticket-text {
    font-size: 9px;
  }

  .c-customer-create-ticket-button {
    padding: var(--dl-space-space-halfunit);
    font-size: 9px;
  }

  .c-customer-create-ticket-container3 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-customer-create-ticket-text1 {
    font-size: 12px;
  }

  .c-customer-create-ticket-container4 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-customer-create-ticket-text2 {
    font-size: 12px;
  }

  .c-customer-create-ticket-button1 {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }

  .c-customer-create-ticket-text3 {
    font-size: 12px;
  }

  .c-customer-create-ticket-text4 {
    font-size: 12px;
  }

  .c-customer-create-ticket-textarea {
    font-size: 12px;
  }
}
</style>
