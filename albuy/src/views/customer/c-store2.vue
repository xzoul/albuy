<template>
  <div class="c-store-container">
    <c-header rootClassName="c-header-root-class-name3"></c-header>
    <div class="c-store-cover-photo">
      <img alt="image"
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxzdG9yZXxlbnwwfHx8fDE2NTY1OTg3NTM&amp;ixlib=rb-1.2.1&amp;h=400"
        class="c-store-image" />
    </div>
    <div class="c-store-container1">
      <div class="c-store-container2">
        <div class="c-store-store-prof">
          <div class="c-store-container3">
            <div class="c-store-container4">
              <img alt="image"
                src="https://images.unsplash.com/photo-1653656120465-ae4eaa59ed33?ixid=Mnw5MTMyMXwwfDF8YWxsfDR8fHx8fHwyfHwxNjU1NzA4NzI2&amp;ixlib=rb-1.2.1&amp;w=200"
                class="c-store-profileimg" />
              <div class="c-store-container5">
                <span class="c-store-shop-name">
                  <span>
                    Sumlang Lake
                    <span v-html="raw4r92"></span>
                  </span>
                  <span>Hub</span>
                </span>
                <button class="c-store-messagebuttonstore button">
                  <span class="c-store-message">
                    <span>Message</span>
                    <span></span>
                  </span>
                </button>
              </div>
            </div>
            <div class="c-store-p-c-r">
              <div class="c-store-container6">
                <span class="c-store-products">Products:</span>
                <span class="c-store-ratingnum">69</span>
              </div>
              <div class="c-store-container7">
                <span class="c-store-products1">Rating:</span>
                <span class="c-store-ratingnum1">4.9 (2.4K Rating)</span>
              </div>
            </div>
          </div>
          <div class="c-store-aboutshop">
            <span class="c-store-shopinfo">ABOUT THIS SHOP</span>
            <span class="c-store-aboutshop1">
              <span>We are located inside Sumlang Lake</span>
            </span>
          </div>
        </div>
        <div class="c-store-categories">
          <button class="c-store-p-fstore button">Home</button>
          <button class="c-store-p-fstore1 button">All Products</button>
          <button class="c-store-p-fstore2 button">Processed Food</button>
          <button class="c-store-a-b-pstore button">Agri-based Products</button>
          <button class="c-store-h-fstore button">Home and Fashion</button>
          <button class="c-store-a-cstore button">Arts and Crafts</button>
          <button class="c-store-o-t-h-e-r-sstore button">Others</button>
        </div>
      </div>
      <div class="c-store-store-products">
        <div class="c-store-product button">
          <img alt="image"
            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJhZ3xlbnwwfHx8fDE2NTU2MzU0OTc&amp;ixlib=rb-1.2.1&amp;h=300"
            class="c-store-t-s-pimg1" />
          <span class="c-store-text05">
            <span class="c-store-text06">
              <span>Keychains</span>
              <br />
              <span></span>
            </span>
          </span>
          <span class="c-store-text10">Php 20</span>
          <span class="c-store-text11">23 Sold</span>
        </div>
        <div class="c-store-product1 button">
          <img alt="image"
            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJhZ3xlbnwwfHx8fDE2NTU2MzU0OTc&amp;ixlib=rb-1.2.1&amp;h=300"
            class="c-store-t-s-pimg11" />
          <span class="c-store-text12">
            <span class="c-store-text13">
              <span>Keychains</span>
              <br />
              <span></span>
            </span>
          </span>
          <span class="c-store-text17">Php 20</span>
          <span class="c-store-text18">23 Sold</span>
        </div>
        <div class="c-store-product2 button">
          <img alt="image"
            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJhZ3xlbnwwfHx8fDE2NTU2MzU0OTc&amp;ixlib=rb-1.2.1&amp;h=300"
            class="c-store-t-s-pimg12" />
          <span class="c-store-text19">
            <span class="c-store-text20">
              <span>Keychains</span>
              <br />
              <span></span>
            </span>
          </span>
          <span class="c-store-text24">Php 20</span>
          <span class="c-store-text25">23 Sold</span>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name3"></app-footer>
  </div>
</template>

<script>
import CHeader from '@/components/c-header'
import AppFooter from '@/components/footer'

export default {
  name: 'CStore',
  components: {
    CHeader,
    AppFooter,
  },

  data() {
    return {
      raw4r92: ' ',
    }
  },

  metaInfo: {
    title: 'C-Store - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-Store - exported project',
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

.c-store-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.c-store-cover-photo {
  width: 100%;
  height: 400px;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  align-items: center;
  justify-content: center;
}

.c-store-image {
  width: 100%;
  max-width: auto;
  align-self: stretch;
  object-fit: cover;
}

.c-store-container1 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-bg);
}

.c-store-container2 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.c-store-store-prof {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: center;
  align-items: center;
  flex-direction: row;
  background-color: var(--dl-color-gray-white);
}

.c-store-container3 {
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
}

.c-store-container4 {
  display: flex;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  justify-content: space-between;
}

.c-store-profileimg {
  width: 100px;
  height: 100px;
  margin: var(--dl-space-space-unit);
  object-fit: cover;
  border-radius: 100px;
}

.c-store-container5 {
  flex: 0 0 auto;
  width: XLarge;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: space-between;
  flex-direction: column;
  justify-content: space-between;
}

.c-store-shop-name {
  color: rgba(0, 0, 0, 1);
  width: auto;
  font-size: 22px;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-messagebuttonstore {
  width: auto;
  height: auto;
  display: flex;
  font-size: 12px;
  align-self: flex-end;
  text-align: center;
  transition: 0.3s;
  border-radius: 15px;
  flex-direction: row;
  background-color: transparent;
}

.c-store-messagebuttonstore:hover {
  border-width: 0px;
  background-color: #A6D9EF;
}

.c-store-message {
  font-family: Roboto;
}

.c-store-p-c-r {
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
}

.c-store-container6 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
}

.c-store-products {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 13.749998092651367px;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-ratingnum {
  color: rgba(1, 158, 219, 1);
  width: auto;
  height: auto;
  font-size: 13.749998092651367px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-halfunit);
  font-stretch: normal;
  text-decoration: none;
}

.c-store-container7 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
}

.c-store-products1 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 13.749998092651367px;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-ratingnum1 {
  color: rgba(1, 158, 219, 1);
  width: auto;
  height: auto;
  font-size: 13.749998092651367px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-halfunit);
  font-stretch: normal;
  text-decoration: none;
}

.c-store-aboutshop {
  flex: 1;
  width: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  box-sizing: border-box;
  align-items: stretch;
  flex-shrink: 1;
  flex-direction: column;
}

.c-store-shopinfo {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 19.999996185302734px;
  align-self: auto;
  font-style: normal;
  text-align: right;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-aboutshop1 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 14.99999713897705px;
  max-width: auto;
  align-self: stretch;
  font-style: normal;
  text-align: right;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-categories {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-end;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}

.c-store-p-fstore {
  flex: 1;
  width: auto;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  text-align: center;
  transition: 0.3s;
  border-color: var(--dl-color-primary-500);
  border-width: 0px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom-width: 2px;
}

.c-store-p-fstore1 {
  flex: 1;
  width: auto;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  text-align: center;
  transition: 0.3s;
  border-width: 0px;
  border-radius: 0px;
  padding-bottom: 16px;
  background-color: transparent;
}

.c-store-p-fstore2 {
  flex: 1;
  width: auto;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  text-align: center;
  transition: 0.3s;
  border-width: 0px;
  border-radius: 0px;
  background-color: transparent;
}

.c-store-a-b-pstore {
  flex: 1;
  width: auto;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  text-align: center;
  transition: 0.3s;
  border-width: 0px;
  border-radius: 0px;
  background-color: transparent;
}

.c-store-h-fstore {
  flex: 1;
  width: auto;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  text-align: center;
  transition: 0.3s;
  border-width: 0px;
  border-radius: 0px;
  background-color: transparent;
}

.c-store-a-cstore {
  flex: 1;
  width: auto;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  text-align: center;
  transition: 0.3s;
  border-width: 0px;
  border-radius: 0px;
  background-color: transparent;
}

.c-store-o-t-h-e-r-sstore {
  flex: 1;
  width: auto;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  text-align: center;
  transition: 0.3s;
  border-width: 0px;
  border-radius: 0px;
  background-color: transparent;
}

.c-store-store-products {
  width: auto;
  display: grid;
  padding: var(--dl-space-space-twounits);
  grid-gap: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.c-store-product {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  position: relative;
  align-self: flex-start;
  transition: 0.3s;
  align-items: stretch;
  border-radius: 0px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}

.c-store-t-s-pimg1 {
  height: 230px;
  object-fit: cover;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-store-text05 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-halfunit);
  font-stretch: normal;
  text-decoration: none;
}

.c-store-text06 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-text10 {
  color: rgba(1, 158, 219, 1);
  width: auto;
  height: auto;
  font-size: 14px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-twounits);
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-halfunit);
  font-stretch: normal;
  text-decoration: none;
}

.c-store-text11 {
  color: rgba(116, 104, 90, 1);
  width: auto;
  height: auto;
  font-size: 12px;
  align-self: flex-end;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  margin-right: var(--dl-space-space-halfunit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}

.c-store-product1 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  position: relative;
  align-self: flex-start;
  transition: 0.3s;
  align-items: stretch;
  border-radius: 0px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}

.c-store-t-s-pimg11 {
  height: 230px;
  object-fit: cover;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-store-text12 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-halfunit);
  font-stretch: normal;
  text-decoration: none;
}

.c-store-text13 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-text17 {
  color: rgba(1, 158, 219, 1);
  width: auto;
  height: auto;
  font-size: 14px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-twounits);
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-halfunit);
  font-stretch: normal;
  text-decoration: none;
}

.c-store-text18 {
  color: rgba(116, 104, 90, 1);
  width: auto;
  height: auto;
  font-size: 12px;
  align-self: flex-end;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  margin-right: var(--dl-space-space-halfunit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}

.c-store-product2 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  position: relative;
  align-self: flex-start;
  transition: 0.3s;
  align-items: stretch;
  border-radius: 0px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}

.c-store-t-s-pimg12 {
  height: 230px;
  object-fit: cover;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-store-text19 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-halfunit);
  font-stretch: normal;
  text-decoration: none;
}

.c-store-text20 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-text24 {
  color: rgba(1, 158, 219, 1);
  width: auto;
  height: auto;
  font-size: 14px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-twounits);
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-halfunit);
  font-stretch: normal;
  text-decoration: none;
}

.c-store-text25 {
  color: rgba(116, 104, 90, 1);
  width: auto;
  height: auto;
  font-size: 12px;
  align-self: flex-end;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  margin-right: var(--dl-space-space-halfunit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}

@media(max-width: 991px) {
  .c-store-cover-photo {
    height: 300px;
  }

  .c-store-store-prof {
    padding: var(--dl-space-space-oneandhalfunits);
  }

  .c-store-container3 {
    margin-left: var(--dl-space-space-unit);
  }

  .c-store-aboutshop {
    height: 100%;
    padding: var(--dl-space-space-unit);
    align-self: stretch;
    margin-left: var(--dl-space-space-fourunits);
    margin-right: var(--dl-space-space-twounits);
  }

  .c-store-aboutshop1 {
    width: auto;
  }

  .c-store-categories {
    align-items: flex-end;
  }

  .c-store-p-fstore {
    font-size: 14px;
  }

  .c-store-p-fstore1 {
    font-size: 14px;
  }

  .c-store-p-fstore2 {
    font-size: 14px;
  }

  .c-store-a-b-pstore {
    font-size: 14px;
  }

  .c-store-h-fstore {
    font-size: 14px;
  }

  .c-store-a-cstore {
    font-size: 14px;
  }

  .c-store-o-t-h-e-r-sstore {
    font-size: 14px;
  }

  .c-store-product {
    margin-left: var(--dl-space-space-twounits);
  }

  .c-store-t-s-pimg1 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-store-text05 {
    font-size: 14px;
  }

  .c-store-text10 {
    font-size: 12px;
  }

  .c-store-text11 {
    font-size: 10px;
  }

  .c-store-product1 {
    margin-left: var(--dl-space-space-unit);
  }

  .c-store-t-s-pimg11 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-store-text12 {
    font-size: 14px;
  }

  .c-store-text17 {
    font-size: 12px;
  }

  .c-store-text18 {
    font-size: 10px;
  }

  .c-store-product2 {
    margin-left: var(--dl-space-space-unit);
  }

  .c-store-t-s-pimg12 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-store-text19 {
    font-size: 14px;
  }

  .c-store-text24 {
    font-size: 12px;
  }

  .c-store-text25 {
    font-size: 10px;
  }
}

@media(max-width: 767px) {
  .c-store-cover-photo {
    height: 200px;
  }

  .c-store-store-prof {
    padding: var(--dl-space-space-unit);
    align-self: stretch;
    flex-direction: column;
  }

  .c-store-container3 {
    width: 100%;
    align-self: stretch;
    align-items: center;
    margin-left: 0px;
    flex-direction: column;
    justify-content: flex-start;
  }

  .c-store-container4 {
    flex: 1;
    align-self: stretch;
    justify-content: center;
  }

  .c-store-container5 {
    width: auto;
  }

  .c-store-p-c-r {
    flex: 1;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  }

  .c-store-container6 {
    width: 100%;
  }

  .c-store-container7 {
    width: 100%;
  }

  .c-store-aboutshop {
    width: auto;
    height: 92px;
    padding: var(--dl-space-space-unit);
    align-self: stretch;
    margin-top: 0px;
    align-items: flex-start;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    flex-direction: column;
    justify-content: space-between;
  }

  .c-store-shopinfo {
    font-size: 16px;
  }

  .c-store-aboutshop1 {
    width: auto;
    font-size: 14px;
    max-width: 100%;
    text-align: left;
  }

  .c-store-categories {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .c-store-p-fstore {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }

  .c-store-p-fstore1 {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }

  .c-store-p-fstore2 {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }

  .c-store-a-b-pstore {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }

  .c-store-h-fstore {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }

  .c-store-a-cstore {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }

  .c-store-o-t-h-e-r-sstore {
    width: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }

  .c-store-store-products {
    width: 100%;
    align-items: flex-start;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: flex-start;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .c-store-product {
    margin-left: 0px;
  }

  .c-store-t-s-pimg1 {
    width: auto;
    height: var(--dl-size-size-xlarge);
    align-self: stretch;
  }

  .c-store-product1 {
    align-self: flex-start;
    align-items: flex-start;
    margin-left: 0px;
    justify-content: flex-start;
  }

  .c-store-t-s-pimg11 {
    width: auto;
    height: var(--dl-size-size-xlarge);
    align-self: stretch;
  }

  .c-store-product2 {
    align-self: flex-start;
    align-items: flex-start;
    margin-left: 0px;
    justify-content: flex-start;
  }

  .c-store-t-s-pimg12 {
    width: auto;
    height: var(--dl-size-size-xlarge);
    align-self: stretch;
  }
}

@media(max-width: 470px) {
  .c-store-store-prof {
    padding: var(--dl-space-space-unit);
    flex-direction: column;
  }

  .c-store-container3 {
    width: 100%;
    align-self: flex-start;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    flex-direction: column;
    justify-content: center;
  }

  .c-store-container4 {
    flex: 1;
    min-width: auto;
    align-self: stretch;
    align-items: stretch;
    justify-content: center;
  }

  .c-store-profileimg {
    margin: var(--dl-space-space-unit);
  }

  .c-store-container5 {
    width: auto;
  }

  .c-store-shop-name {
    height: auto;
  }

  .c-store-messagebuttonstore {
    align-self: flex-end;
    flex-direction: column;
    justify-content: center;
  }

  .c-store-p-c-r {
    width: auto;
    padding: var(--dl-space-space-halfunit);
    align-self: stretch;
    flex-direction: row;
    justify-content: space-between;
  }

  .c-store-container6 {
    position: relative;
    margin-left: 0px;
    margin-right: 0px;
    flex-direction: row;
  }

  .c-store-products {
    align-self: center;
  }

  .c-store-ratingnum {
    margin-top: 0px;
    text-align: center;
    margin-left: var(--dl-space-space-halfunit);
    margin-bottom: 0px;
  }

  .c-store-container7 {
    position: relative;
    margin-left: 0px;
    margin-right: 0px;
    flex-direction: row;
  }

  .c-store-products1 {
    align-self: center;
  }

  .c-store-ratingnum1 {
    margin-top: 0px;
    text-align: center;
    margin-left: var(--dl-space-space-halfunit);
    margin-bottom: 0px;
  }

  .c-store-aboutshop {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    align-self: center;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 0px;
    margin-bottom: 0px;
  }

  .c-store-shopinfo {
    font-size: 16px;
  }

  .c-store-aboutshop1 {
    width: auto;
    font-size: 12px;
  }

  .c-store-categories {
    width: auto;
    height: auto;
    align-self: center;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }

  .c-store-p-fstore {
    padding: var(--dl-space-space-halfunit);
    font-size: 10px;
  }

  .c-store-p-fstore1 {
    padding: var(--dl-space-space-halfunit);
    font-size: 10px;
  }

  .c-store-p-fstore2 {
    padding: var(--dl-space-space-halfunit);
    font-size: 10px;
  }

  .c-store-a-b-pstore {
    padding: var(--dl-space-space-halfunit);
    font-size: 10px;
  }

  .c-store-h-fstore {
    padding: var(--dl-space-space-halfunit);
    font-size: 10px;
    align-self: center;
  }

  .c-store-a-cstore {
    padding: var(--dl-space-space-halfunit);
    font-size: 10px;
  }

  .c-store-o-t-h-e-r-sstore {
    padding: var(--dl-space-space-halfunit);
    font-size: 10px;
  }

  .c-store-store-products {
    align-self: stretch;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    flex-direction: row;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: center;
    grid-template-columns: 1fr 1fr;
  }

  .c-store-product {
    align-self: flex-start;
    margin-left: 0px;
  }

  .c-store-t-s-pimg1 {
    width: auto;
    height: var(--dl-size-size-xlarge);
  }

  .c-store-text10 {
    margin-top: var(--dl-space-space-unit);
  }

  .c-store-product1 {
    align-self: flex-start;
    align-items: stretch;
    flex-direction: column;
    justify-content: center;
  }

  .c-store-t-s-pimg11 {
    width: auto;
    height: var(--dl-size-size-xlarge);
    align-self: stretch;
  }

  .c-store-text17 {
    margin-top: var(--dl-space-space-unit);
  }

  .c-store-product2 {
    align-self: flex-start;
    align-items: stretch;
    flex-direction: column;
    justify-content: center;
  }

  .c-store-t-s-pimg12 {
    width: auto;
    height: var(--dl-size-size-xlarge);
    align-self: stretch;
  }

  .c-store-text24 {
    margin-top: var(--dl-space-space-unit);
  }
}
</style>
