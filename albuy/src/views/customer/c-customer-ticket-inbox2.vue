<template>
  <div class="c-customer-ticket-inbox-container">
    <c-header rootClassName="c-header-root-class-name20"></c-header>
    <div class="c-customer-ticket-inbox-container01">
      <span class="c-customer-ticket-inbox-text">Help Centre</span>
      <button class="c-customer-ticket-inbox-button button">
        Submit a Ticket
      </button>
    </div>
    <div class="c-customer-ticket-inbox-container02">
      <span class="c-customer-ticket-inbox-text01">My Tickets</span>
      <div class="c-customer-ticket-inbox-container03">
        <span class="c-customer-ticket-inbox-text02">All</span>
      </div>
    </div>
    <div class="c-customer-ticket-inbox-container04">
      <div class="c-customer-ticket-inbox-container05">
        <span class="c-customer-ticket-inbox-text03">My Tickets</span>
        <div class="c-customer-ticket-inbox-container06">
          <span class="c-customer-ticket-inbox-text04">All</span>
          <span class="c-customer-ticket-inbox-text05">Pending</span>
          <span class="c-customer-ticket-inbox-text06">Closed</span>
        </div>
      </div>
      <div class="c-customer-ticket-inbox-container07">
        <div class="c-customer-ticket-inbox-container08">
          <img alt="image"
            src="https://images.unsplash.com/photo-1656562105231-7d34cce4f123?ixid=Mnw5MTMyMXwwfDF8YWxsfDd8fHx8fHwyfHwxNjU2NTc0NDQ4&amp;ixlib=rb-1.2.1&amp;w=200"
            class="c-customer-ticket-inbox-profileimg" />
          <div class="c-customer-ticket-inbox-container09">
            <span class="c-customer-ticket-inbox-profilename">
              Returns &amp; Refunds
            </span>
            <span class="c-customer-ticket-inbox-profilename1">Ticket #0001</span>
            <span class="c-customer-ticket-inbox-profilename2">09/21/23</span>
          </div>
        </div>
        <div class="c-customer-ticket-inbox-container10">
          <img alt="image"
            src="https://images.unsplash.com/photo-1656562105231-7d34cce4f123?ixid=Mnw5MTMyMXwwfDF8YWxsfDd8fHx8fHwyfHwxNjU2NTc0NDQ4&amp;ixlib=rb-1.2.1&amp;w=200"
            class="c-customer-ticket-inbox-profileimg1" />
          <div class="c-customer-ticket-inbox-container11">
            <span class="c-customer-ticket-inbox-profilename3">
              Returns &amp; Refunds
            </span>
            <span class="c-customer-ticket-inbox-profilename4">Ticket #0001</span>
            <span class="c-customer-ticket-inbox-profilename5">09/21/23</span>
          </div>
        </div>
        <div class="c-customer-ticket-inbox-container12">
          <img alt="image"
            src="https://images.unsplash.com/photo-1656562105231-7d34cce4f123?ixid=Mnw5MTMyMXwwfDF8YWxsfDd8fHx8fHwyfHwxNjU2NTc0NDQ4&amp;ixlib=rb-1.2.1&amp;w=200"
            class="c-customer-ticket-inbox-profileimg2" />
          <div class="c-customer-ticket-inbox-container13">
            <span class="c-customer-ticket-inbox-profilename6">
              Returns &amp; Refunds
            </span>
            <span class="c-customer-ticket-inbox-profilename7">Ticket #0001</span>
            <span class="c-customer-ticket-inbox-profilename8">09/21/23</span>
          </div>
        </div>
      </div>
      <div class="c-customer-ticket-inbox-container14">
        <div class="c-customer-ticket-inbox-container15">
          <span class="c-customer-ticket-inbox-text07">
            Returns &amp; Refunds
          </span>
          <span>09/21/23</span>
        </div>
        <span class="c-customer-ticket-inbox-text09">Ticket #0001</span>
        <span class="c-customer-ticket-inbox-text10">
          Type your concern here. Type your concern here. Type your concern here.
          Type your concern here. Type your concern here. Type your concern here.
          Type your concern here. Type your concern here. Type your concern here.
          Type your concern here. Type your concern here. Type your concern here.
          Type your concern here. Type your concern here. Type your concern here.
          Type your concern here. Type your concern here. Type your concern here.
          Type your concern here. Type your concern here. Type your concern here.
        </span>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name25"></app-footer>
  </div>
</template>

<script>
import CHeader from '@/components/c-header'
import AppFooter from '@/components/footer'

export default {
  name: 'CCustomerTicketInbox',
  components: {
    CHeader,
    AppFooter,
  },
  metaInfo: {
    title: 'C-Customer-Ticket-Inbox - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-Customer-Ticket-Inbox - exported project',
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

.c-customer-ticket-inbox-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-customer-ticket-inbox-container01 {
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

.c-customer-ticket-inbox-text {
  padding: var(--dl-space-space-halfunit);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
}

.c-customer-ticket-inbox-button {
  font-size: 14px;
  border-radius: 15px;
}

.c-customer-ticket-inbox-container02 {
  display: none;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: column;
  justify-content: flex-start;
  border-right-width: 1px;
}

.c-customer-ticket-inbox-text01 {
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
}

.c-customer-ticket-inbox-container03 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.c-customer-ticket-inbox-text02 {
  padding: var(--dl-space-space-halfunit);
  font-style: normal;
  font-weight: 600;
}

.c-customer-ticket-inbox-container04 {
  flex: 1;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-bg);
}

.c-customer-ticket-inbox-container05 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: column;
  justify-content: flex-start;
  border-right-width: 1px;
}

.c-customer-ticket-inbox-text03 {
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
}

.c-customer-ticket-inbox-container06 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.c-customer-ticket-inbox-text04 {
  padding: var(--dl-space-space-halfunit);
  font-style: normal;
  font-weight: 600;
}

.c-customer-ticket-inbox-text05 {
  padding: var(--dl-space-space-halfunit);
}

.c-customer-ticket-inbox-text06 {
  padding: var(--dl-space-space-halfunit);
}

.c-customer-ticket-inbox-container07 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.c-customer-ticket-inbox-container08 {
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  border-color: var(--dl-color-primary-theme);
  border-width: 0px;
  background-color: var(--dl-color-gray-white);
  border-bottom-width: 3px;
}

.c-customer-ticket-inbox-profileimg {
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-medium);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}

.c-customer-ticket-inbox-container09 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.c-customer-ticket-inbox-profilename {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  max-width: auto;
  text-align: left;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-customer-ticket-inbox-profilename1 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  max-width: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-customer-ticket-inbox-profilename2 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  max-width: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-customer-ticket-inbox-container10 {
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-unit);
  margin-top: 5px;
  align-items: center;
  border-color: #e6e6e6;
  border-width: 0px;
  background-color: var(--dl-color-gray-white);
  border-bottom-width: 2px;
}

.c-customer-ticket-inbox-profileimg1 {
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-medium);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}

.c-customer-ticket-inbox-container11 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.c-customer-ticket-inbox-profilename3 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  max-width: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-customer-ticket-inbox-profilename4 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  max-width: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-customer-ticket-inbox-profilename5 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  max-width: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-customer-ticket-inbox-container12 {
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-unit);
  margin-top: 3px;
  align-items: center;
  border-color: #e6e6e6;
  background-color: var(--dl-color-gray-white);
  border-bottom-width: 2px;
}

.c-customer-ticket-inbox-profileimg2 {
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-medium);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}

.c-customer-ticket-inbox-container13 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.c-customer-ticket-inbox-profilename6 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  max-width: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-customer-ticket-inbox-profilename7 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  max-width: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-customer-ticket-inbox-profilename8 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  max-width: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-customer-ticket-inbox-container14 {
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: column;
  justify-content: flex-start;
  border-left-width: 1px;
}

.c-customer-ticket-inbox-container15 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}

.c-customer-ticket-inbox-text07 {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
}

.c-customer-ticket-inbox-text09 {
  padding: var(--dl-space-space-unit);
  align-self: stretch;
}

.c-customer-ticket-inbox-text10 {
  margin: var(--dl-space-space-unit);
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 25px;
  background-color: var(--dl-color-gray-white);
}

@media(max-width: 991px) {
  .c-customer-ticket-inbox-container02 {
    padding: var(--dl-space-space-unit);
  }

  .c-customer-ticket-inbox-container05 {
    padding: var(--dl-space-space-unit);
  }

  .c-customer-ticket-inbox-container07 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-customer-ticket-inbox-profileimg {
    width: 75px;
    height: 75px;
  }

  .c-customer-ticket-inbox-profilename {
    font-size: 14px;
  }

  .c-customer-ticket-inbox-profilename1 {
    font-size: 14px;
  }

  .c-customer-ticket-inbox-profilename2 {
    font-size: 14px;
  }

  .c-customer-ticket-inbox-profileimg1 {
    width: 75px;
    height: 75px;
  }

  .c-customer-ticket-inbox-profilename3 {
    font-size: 14px;
  }

  .c-customer-ticket-inbox-profilename4 {
    font-size: 14px;
  }

  .c-customer-ticket-inbox-profilename5 {
    font-size: 14px;
  }

  .c-customer-ticket-inbox-profileimg2 {
    width: 75px;
    height: 75px;
  }

  .c-customer-ticket-inbox-profilename6 {
    font-size: 14px;
  }

  .c-customer-ticket-inbox-profilename7 {
    font-size: 14px;
  }

  .c-customer-ticket-inbox-profilename8 {
    font-size: 14px;
  }

  .c-customer-ticket-inbox-text10 {
    font-size: 14px;
  }
}

@media(max-width: 767px) {
  .c-customer-ticket-inbox-container01 {
    padding: var(--dl-space-space-halfunit);
    flex-direction: row;
  }

  .c-customer-ticket-inbox-text {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }

  .c-customer-ticket-inbox-button {
    font-size: 12px;
  }

  .c-customer-ticket-inbox-container02 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-right-width: 0px;
    border-bottom-width: 1px;
  }

  .c-customer-ticket-inbox-text02 {
    font-size: 20px;
  }

  .c-customer-ticket-inbox-container05 {
    display: none;
    flex-direction: column;
  }

  .c-customer-ticket-inbox-container07 {
    flex: 1;
    padding: var(--dl-space-space-unit);
    align-items: center;
  }

  .c-customer-ticket-inbox-container08 {
    padding: var(--dl-space-space-unit);
    align-self: stretch;
    justify-content: center;
  }

  .c-customer-ticket-inbox-profileimg {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-customer-ticket-inbox-profilename {
    font-size: 18px;
  }

  .c-customer-ticket-inbox-profilename1 {
    font-size: 18px;
  }

  .c-customer-ticket-inbox-profilename2 {
    font-size: 18px;
  }

  .c-customer-ticket-inbox-container10 {
    padding: var(--dl-space-space-unit);
    align-self: stretch;
    justify-content: center;
  }

  .c-customer-ticket-inbox-profileimg1 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-customer-ticket-inbox-profilename3 {
    font-size: 18px;
  }

  .c-customer-ticket-inbox-profilename4 {
    font-size: 18px;
  }

  .c-customer-ticket-inbox-profilename5 {
    font-size: 18px;
  }

  .c-customer-ticket-inbox-container12 {
    padding: var(--dl-space-space-unit);
    align-self: stretch;
    justify-content: center;
  }

  .c-customer-ticket-inbox-profileimg2 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-customer-ticket-inbox-profilename6 {
    font-size: 18px;
  }

  .c-customer-ticket-inbox-profilename7 {
    font-size: 18px;
  }

  .c-customer-ticket-inbox-profilename8 {
    font-size: 18px;
  }

  .c-customer-ticket-inbox-container14 {
    display: none;
  }

  .c-customer-ticket-inbox-text10 {
    padding: var(--dl-space-space-unit);
  }
}

@media(max-width: 470px) {
  .c-customer-ticket-inbox-text {
    font-size: 9px;
  }

  .c-customer-ticket-inbox-button {
    padding: var(--dl-space-space-halfunit);
    font-size: 9px;
  }

  .c-customer-ticket-inbox-container08 {
    align-self: stretch;
    justify-content: center;
  }

  .c-customer-ticket-inbox-profilename {
    width: auto;
    font-size: 14px;
    margin-left: var(--dl-space-space-unit);
  }

  .c-customer-ticket-inbox-profilename1 {
    width: auto;
    font-size: 14px;
    margin-left: var(--dl-space-space-unit);
  }

  .c-customer-ticket-inbox-profilename2 {
    width: auto;
    font-size: 14px;
    margin-left: var(--dl-space-space-unit);
  }

  .c-customer-ticket-inbox-profilename3 {
    width: auto;
    font-size: 14px;
    margin-left: var(--dl-space-space-unit);
  }

  .c-customer-ticket-inbox-profilename4 {
    width: auto;
    font-size: 14px;
    margin-left: var(--dl-space-space-unit);
  }

  .c-customer-ticket-inbox-profilename5 {
    width: auto;
    font-size: 14px;
    margin-left: var(--dl-space-space-unit);
  }

  .c-customer-ticket-inbox-profilename6 {
    width: auto;
    font-size: 14px;
    margin-left: var(--dl-space-space-unit);
  }

  .c-customer-ticket-inbox-profilename7 {
    width: auto;
    font-size: 14px;
    margin-left: var(--dl-space-space-unit);
  }

  .c-customer-ticket-inbox-profilename8 {
    width: auto;
    font-size: 14px;
    margin-left: var(--dl-space-space-unit);
  }
}
</style>
