<template>
  <div class="c-store-container">
    <c-header rootClassName="c-header-root-class-name3"></c-header>
    <div class="c-store-cover-photo">
      <img src="https://play.teleporthq.io/static/svg/default-img.svg" class="c-store-image" />
    </div>
    <div class="c-store-container01">
      <div class="c-store-container02">
        <div class="c-store-container03">
          <div class="c-store-store-prof">
            <div class="c-store-container04">
              <div class="c-store-container05">
                <img src="https://play.teleporthq.io/static/svg/default-img.svg" class="c-store-profileimg" />
                <div class="c-store-container06">
                  <span class="c-store-shop-name">
                    <span>
                      Sumlang Lake
                      <span v-html="raw769e"></span>
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
            </div>
            <div class="c-store-aboutshop">
              <span class="c-store-shopinfo">ABOUT THIS SHOP</span>
              <div class="c-store-container07">
                <div class="c-store-p-c-r">
                  <div class="c-store-container08">
                    <span class="c-store-products">Products:</span>
                    <span class="c-store-ratingnum">69</span>
                  </div>
                  <div class="c-store-container09">
                    <span class="c-store-products1">Rating:</span>
                    <span class="c-store-ratingnum1">4.9 (2.4K Rating)</span>
                  </div>
                </div>
                <span class="c-store-aboutshop1">
                  We are located inside Sumlang Lake.
                </span>
              </div>
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
      </div>
      <div class="c-store-top-selling">
        <div class="c-store-container10">
          <span class="c-store-text04">Top Selling Products</span>
          <div class="c-store-container11">
            <span class="c-store-text05">Sort by:</span>
            <select class="c-store-select">
              <option value="Option 1">Month</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
        </div>
        <div class="c-store-gallery">
          <div class="c-store-container12 button">
            <img src="https://play.teleporthq.io/static/svg/default-img.svg" class="c-store-t-s-pimg1" />
            <span class="c-store-text06">
              <span class="c-store-text07">
                <span>Keychains</span>
                <br />
                <span></span>
              </span>
            </span>
            <span class="c-store-text11">Php 20</span>
            <span class="c-store-text12">23 Sold</span>
          </div>
        </div>
        <button class="c-store-button button">
          <span class="c-store-text13">See All</span>
          <svg viewBox="0 0 1024 1024" class="c-store-icon">
            <path
              d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z">
            </path>
          </svg>
        </button>
      </div>
      <div class="c-store-discover">
        <div class="c-store-container13">
          <span class="c-store-text14">Recommended for you</span>
        </div>
        <div class="c-store-gallery1">
          <div class="c-store-container14 button">
            <img src="https://play.teleporthq.io/static/svg/default-img.svg" class="c-store-t-s-pimg11" />
            <span class="c-store-text15">
              <span class="c-store-text16">
                <span>Keychains</span>
                <br />
                <span></span>
              </span>
            </span>
            <span class="c-store-text20">Php 20</span>
            <span class="c-store-text21">23 Sold</span>
          </div>
        </div>
        <button class="c-store-button1 button">See More</button>
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
      raw769e: ' ',
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
  height: 300px;
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

.c-store-container01 {
  flex: 1;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-graysearch);
}

.c-store-container02 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
}

.c-store-container03 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.c-store-store-prof {
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: 0px;
  padding-right: 0px;
  flex-direction: row;
  padding-bottom: var(--dl-space-space-unit);
  background-color: var(--dl-color-gray-graysearch);
}

.c-store-container04 {
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
}

.c-store-container05 {
  display: flex;
  padding: var(--dl-space-space-unit);
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius4);
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}

.c-store-profileimg {
  width: 100px;
  height: 100px;
  margin: var(--dl-space-space-unit);
  object-fit: cover;
  border-radius: 100px;
}

.c-store-container06 {
  flex: 0 0 auto;
  width: XLarge;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: space-between;
  flex-direction: column;
  justify-content: space-between;
}

.c-store-shop-name {
  color: rgba(0, 0, 0, 1);
  width: auto;
  padding: var(--dl-space-space-unit);
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
  margin: var(--dl-space-space-unit);
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

.c-store-aboutshop {
  flex: 1;
  width: auto;
  display: flex;
  align-self: stretch;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  box-sizing: border-box;
  align-items: stretch;
  flex-shrink: 1;
  margin-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.c-store-shopinfo {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 19.999996185302734px;
  align-self: auto;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  font-style: normal;
  text-align: right;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-container07 {
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}

.c-store-p-c-r {
  width: auto;
  height: auto;
  display: flex;
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
}

.c-store-container08 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.c-store-products {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
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
  padding: var(--dl-space-space-unit);
  font-size: 13.749998092651367px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-container09 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.c-store-products1 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
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
  padding: var(--dl-space-space-unit);
  font-size: 13.749998092651367px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-aboutshop1 {
  color: rgb(0, 0, 0);
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 15px;
  max-width: 700px;
  align-self: stretch;
  font-style: normal;
  min-height: var(--dl-size-size-medium);
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
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-end;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}

.c-store-p-fstore {
  flex: 1;
  width: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
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
  font-size: 14px;
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
  font-size: 14px;
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
  font-size: 14px;
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
  font-size: 14px;
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
  font-size: 14px;
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
  font-size: 14px;
  align-self: stretch;
  text-align: center;
  transition: 0.3s;
  border-width: 0px;
  border-radius: 0px;
  background-color: transparent;
}

.c-store-top-selling {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}

.c-store-container10 {
  display: flex;
  align-self: stretch;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: row;
  justify-content: space-between;
}

.c-store-text04 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 22.500001907348633px;
  align-self: center;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-container11 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-store-text05 {
  color: rgb(0, 0, 0);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 16px;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-select {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  margin: var(--dl-space-space-unit);
  font-size: 16;
  align-self: center;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-gallery {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-twounits);
  grid-gap: var(--dl-space-space-unit);
  align-self: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.c-store-container12 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  position: relative;
  transition: 0.3s;
  align-items: stretch;
  border-radius: 0px;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
}

.c-store-t-s-pimg1 {
  width: 100%;
  height: 250px;
  align-self: center;
  object-fit: fill;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-store-text06 {
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

.c-store-text07 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-text11 {
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

.c-store-text12 {
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

.c-store-button {
  display: flex;
  padding: 0px;
  align-self: center;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  background-color: transparent;
}

.c-store-text13 {
  padding: var(--dl-space-space-unit);
}

.c-store-icon {
  width: 24px;
  height: 24px;
}

.c-store-discover {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}

.c-store-container13 {
  display: flex;
  align-self: stretch;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  border-color: var(--dl-color-primary-theme);
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: row;
  justify-content: center;
  border-bottom-width: 3px;
}

.c-store-text14 {
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

.c-store-gallery1 {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-twounits);
  grid-gap: var(--dl-space-space-unit);
  align-self: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.c-store-container14 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  position: relative;
  transition: 0.3s;
  align-items: stretch;
  border-radius: 0px;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
}

.c-store-t-s-pimg11 {
  width: 100%;
  height: 250px;
  align-self: center;
  object-fit: fill;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-store-text15 {
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

.c-store-text16 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-store-text20 {
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

.c-store-text21 {
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

.c-store-button1 {
  padding: var(--dl-space-space-unit);
  align-self: center;
  padding-left: 16px;
  border-radius: var(--dl-radius-radius-radius8);
  padding-bottom: 16px;
  background-color: transparent;
}

@media(max-width: 991px) {
  .c-store-cover-photo {
    height: 300px;
  }

  .c-store-store-prof {
    padding-top: var(--dl-space-space-unit);
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: var(--dl-space-space-unit);
  }

  .c-store-aboutshop {
    align-self: stretch;
  }

  .c-store-shopinfo {
    font-size: 18px;
  }

  .c-store-aboutshop1 {
    width: auto;
    font-size: 14px;
    max-width: var(--dl-size-size-xxlarge);
  }

  .c-store-categories {
    display: grid;
    align-items: flex-end;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  .c-store-p-fstore {
    font-size: 12px;
  }

  .c-store-p-fstore1 {
    font-size: 12px;
  }

  .c-store-p-fstore2 {
    font-size: 12px;
  }

  .c-store-a-b-pstore {
    font-size: 12px;
  }

  .c-store-h-fstore {
    font-size: 12px;
  }

  .c-store-a-cstore {
    font-size: 12px;
  }

  .c-store-o-t-h-e-r-sstore {
    font-size: 12px;
  }

  .c-store-top-selling {
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: var(--dl-space-space-unit);
  }

  .c-store-text04 {
    font-size: 18px;
  }

  .c-store-text05 {
    font-size: 18px;
  }

  .c-store-select {
    font-size: 18;
  }

  .c-store-gallery {
    padding: var(--dl-space-space-unit);
    position: relative;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .c-store-t-s-pimg1 {
    width: 100%;
    height: 200px;
  }

  .c-store-text06 {
    font-size: 14px;
  }

  .c-store-text11 {
    font-size: 12px;
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-store-text12 {
    font-size: 10px;
  }

  .c-store-text14 {
    font-size: 20px;
  }

  .c-store-gallery1 {
    padding: var(--dl-space-space-unit);
    position: relative;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .c-store-t-s-pimg11 {
    width: 100%;
    height: 200px;
  }

  .c-store-text15 {
    font-size: 14px;
  }

  .c-store-text20 {
    font-size: 12px;
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-store-text21 {
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

  .c-store-container04 {
    width: 100%;
    align-self: stretch;
    align-items: center;
    margin-left: 0px;
    flex-direction: row;
    justify-content: flex-start;
  }

  .c-store-container05 {
    flex: 1;
    align-self: flex-start;
    justify-content: center;
  }

  .c-store-container06 {
    width: auto;
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

  .c-store-p-c-r {
    flex: 1;
    padding: var(--dl-space-space-unit);
    align-items: flex-start;
    flex-direction: column;
  }

  .c-store-container08 {
    width: auto;
  }

  .c-store-container09 {
    width: auto;
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
  }

  .c-store-a-cstore {
    padding: var(--dl-space-space-halfunit);
    font-size: 10px;
  }

  .c-store-o-t-h-e-r-sstore {
    width: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 10px;
  }

  .c-store-text04 {
    font-size: 18px;
  }

  .c-store-text05 {
    font-size: 18px;
  }

  .c-store-select {
    font-size: 18px;
  }

  .c-store-gallery {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    grid-template-columns: 1fr 1fr 1fr;
  }

  .c-store-t-s-pimg1 {
    height: var(--dl-size-size-xlarge);
  }

  .c-store-text11 {
    margin-top: var(--dl-space-space-unit);
  }

  .c-store-text14 {
    font-size: 18px;
  }

  .c-store-gallery1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    grid-template-columns: 1fr 1fr 1fr;
  }

  .c-store-t-s-pimg11 {
    height: var(--dl-size-size-xlarge);
  }

  .c-store-text20 {
    margin-top: var(--dl-space-space-unit);
  }
}

@media(max-width: 470px) {
  .c-store-store-prof {
    padding: var(--dl-space-space-unit);
    flex-direction: column;
  }

  .c-store-container04 {
    width: 100%;
    align-self: flex-start;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    flex-direction: column;
    justify-content: center;
  }

  .c-store-container05 {
    flex: 1;
    min-width: auto;
    align-self: stretch;
    align-items: stretch;
    justify-content: center;
  }

  .c-store-profileimg {
    margin: var(--dl-space-space-unit);
  }

  .c-store-container06 {
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

  .c-store-p-c-r {
    width: auto;
    padding: var(--dl-space-space-halfunit);
    align-self: stretch;
    flex-direction: row;
    justify-content: space-between;
  }

  .c-store-container08 {
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

  .c-store-container09 {
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

  .c-store-text04 {
    font-size: 16px;
  }

  .c-store-text05 {
    font-size: 16px;
  }

  .c-store-select {
    font-size: 16px;
  }

  .c-store-gallery {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
    grid-template-columns: 1fr 1fr;
  }

  .c-store-t-s-pimg1 {
    height: var(--dl-size-size-large);
  }

  .c-store-text11 {
    margin-top: var(--dl-space-space-halfunit);
  }

  .c-store-text14 {
    font-size: 16px;
  }

  .c-store-gallery1 {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
    grid-template-columns: 1fr 1fr;
  }

  .c-store-t-s-pimg11 {
    height: var(--dl-size-size-large);
  }

  .c-store-text20 {
    margin-top: var(--dl-space-space-halfunit);
  }
}
</style>
