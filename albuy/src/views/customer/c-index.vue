<template>
  <div class="c-index-container">
    <c-header rootClassName="c-header-root-class-name"></c-header>
    <div class="c-index-body">
      <div class="c-index-banner-homepage">
        <img src="https://play.teleporthq.io/static/svg/default-img.svg" class="c-index-bannerimg1" />
        <div class="c-index-container1">
          <img src="https://play.teleporthq.io/static/svg/default-img.svg" class="c-index-image" />
          <img src="https://play.teleporthq.io/static/svg/default-img.svg" class="c-index-image1" />
        </div>
      </div>
      <div class="c-index-categories">
        <div class="c-index-container2">
          <span class="c-index-text">Categories</span>
        </div>
        <div class="c-index-categories-homepage">
          <div v-for="category in Categories" :key="category">
            <div @click="showCategories(category.objectId)" class="c-index-button button">
              <img src="https://play.teleporthq.io/static/svg/default-img.svg" class="c-index-p-fimg" />
              <span class="c-index-text01">{{ category.CategoryName }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="c-index-top-selling">
        <div class="c-index-container3">
          <span class="c-index-text02">Top Selling Products</span>
          <div class="c-index-container4">
            <span class="c-index-text03">Sort by:</span>
            <select class="c-index-select">
              <option value="Option 1">Month</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
        </div>
        <div class="c-index-gallery">
          <div v-for="product in Products" :key="product">
            <button @click="showProduct(product.objectId)">
              <div class="c-index-container5 button">
                <img src="https://play.teleporthq.io/static/svg/default-img.svg" class="c-index-t-s-pimg1" />
                <span class="c-index-text04">
                  <span class="c-index-text05">
                    <span>{{ product.ProductName }}</span>
                    <br />
                    <span></span>
                  </span>
                </span>
                <span class="c-index-text09">Php {{ product.ProductPrice }}</span>
                <span class="c-index-text10">23 Sold</span>
              </div>
            </button>
          </div>
        </div>
        <button class="c-index-button1 button">
          <span class="c-index-text11">See All</span>
          <svg viewBox="0 0 1024 1024" class="c-index-icon">
            <path
              d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z">
            </path>
          </svg>
        </button>
      </div>
      <div class="c-index-discover">
        <div class="c-index-container6">
          <span class="c-index-text12">Daily Discover</span>
        </div>
        <div class="c-index-gallery1">
          <div v-for="product in Products" :key="product">
            <button @click="showProduct(product.objectId)">
              <div class="c-index-container7 button">
                <img src="https://play.teleporthq.io/static/svg/default-img.svg" class="c-index-t-s-pimg11" />
                <span class="c-index-text13">
                  <span class="c-index-text14">
                    <span>{{ product.ProductName }}</span>
                    <br />
                    <span></span>
                  </span>
                </span>
                <span class="c-index-text18">Php {{ product.ProductPrice }}</span>
                <span class="c-index-text19">23 Sold</span>
              </div>
            </button>
          </div>
        </div>
        <button class="c-index-button2 button">See More</button>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name"></app-footer>
  </div>
</template>

<script>
import CHeader from '@/components/c-header'
import AppFooter from '@/components/footer'
import Parse from 'parse';

export default {
  name: 'CIndex',
  components: {
    CHeader,
    AppFooter,
  },
  metaInfo: {
    title: 'C-Index - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-Index - exported project',
      },
    ],
  },

  beforeMount() {
    //this runs before page loads
    this.getProducts();
    this.getCategories();
  },

  data() {
    return {
      //Product Variables
      Products: [],

      //Category
      Categories: [],
    }
  },

  methods: {
    async getProducts() {
      this.Products = JSON.parse(await Parse.Cloud.run("GetProducts"));
    },

    async getCategories() {
      this.Categories = JSON.parse(await Parse.Cloud.run("GetCategories"));
    },

    showProduct(productid) {
      this.$router.push({
        name: 'c-product',
        query: {
          ProductID: productid,
        }
      })
    },
    showCategories(categoryid) {
      this.$router.push({
        name: 'c-homepage-categories',
        query: {
          CategoryID: categoryid,
        }
      })
    },
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

.c-index-container {
  width: 100%;
  display: flex;
  overflow: auto;
  max-height: 3000;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-graysearch);
}

.c-index-body {
  flex: 1;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-index-banner-homepage {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-unit);
  grid-gap: 2px;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  grid-template-columns: 1fr 1fr;
}

.c-index-bannerimg1 {
  width: 100%;
  height: 200px;
  padding: 1px;
  object-fit: cover;
}

.c-index-container1 {
  width: auto;
  display: flex;
  align-self: stretch;
  flex-direction: column;
}

.c-index-image {
  width: 100%;
  height: 100px;
  padding: 1px;
  object-fit: cover;
}

.c-index-image1 {
  width: 100%;
  height: 100px;
  padding: 1px;
  object-fit: cover;
}

.c-index-categories {
  width: 100%;
  height: auto;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  box-sizing: border-box;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}

.c-index-container2 {
  display: flex;
  align-self: stretch;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}

.c-index-text {
  color: rgba(0, 0, 0, 1);
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 22.500001907348633px;
  align-self: center;
  font-style: normal;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-index-categories-homepage {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-unit);
  grid-gap: 1px;
  align-self: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.c-index-button {
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
  align-items: center;
  border-color: var(--dl-color-gray-900);
  border-width: 0.5px;
  border-radius: 0px;
  flex-direction: column;
  justify-content: center;
}

.c-index-p-fimg {
  width: 100%;
  height: var(--dl-size-size-xlarge);
  object-fit: cover;
}

.c-index-text01 {
  width: auto;
  font-size: 15px;
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Roboto;
  border-width: 0px;
  background-color: transparent;
}

.c-index-top-selling {
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

.c-index-container3 {
  display: flex;
  align-self: stretch;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: row;
  justify-content: space-between;
}

.c-index-text02 {
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

.c-index-container4 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-index-text03 {
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

.c-index-select {
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

.c-index-gallery {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-twounits);
  grid-gap: var(--dl-space-space-unit);
  align-self: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.c-index-container5 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  transition: 0.3s;
  align-items: stretch;
  border-width: 0px;
  border-radius: 0px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}

.c-index-t-s-pimg1 {
  width: 100%;
  height: 250px;
  align-self: center;
  object-fit: fill;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-index-text04 {
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

.c-index-text05 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-index-text09 {
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

.c-index-text10 {
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

.c-index-button1 {
  display: flex;
  padding: 0px;
  align-self: center;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  background-color: transparent;
}

.c-index-text11 {
  padding: var(--dl-space-space-unit);
}

.c-index-icon {
  width: 24px;
  height: 24px;
}

.c-index-discover {
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

.c-index-container6 {
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

.c-index-text12 {
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

.c-index-gallery1 {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-twounits);
  grid-gap: var(--dl-space-space-unit);
  align-self: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.c-index-container7 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  transition: 0.3s;
  align-items: stretch;
  border-width: 0px;
  border-radius: 0px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}

.c-index-t-s-pimg11 {
  width: 100%;
  height: 250px;
  align-self: center;
  object-fit: fill;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-index-text13 {
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

.c-index-text14 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-index-text18 {
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

.c-index-text19 {
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

.c-index-button2 {
  padding: var(--dl-space-space-unit);
  align-self: center;
  padding-left: 16px;
  border-radius: var(--dl-radius-radius-radius8);
  padding-bottom: 16px;
  background-color: transparent;
}

@media(max-width: 991px) {
  .c-index-banner-homepage {
    padding: var(--dl-space-space-oneandhalfunits);
    align-self: center;
    grid-template-columns: 1fr 1fr;
  }

  .c-index-bannerimg1 {
    height: 150px;
  }

  .c-index-image {
    height: 75px;
  }

  .c-index-image1 {
    height: 75px;
  }

  .c-index-categories {
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-index-text {
    font-size: 20px;
  }

  .c-index-categories-homepage {
    position: relative;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .c-index-p-fimg {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-index-text02 {
    font-size: 20px;
  }

  .c-index-text03 {
    font-size: 20px;
  }

  .c-index-select {
    font-size: 20px;
  }

  .c-index-gallery {
    position: relative;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .c-index-t-s-pimg1 {
    width: 100%;
    height: 200px;
  }

  .c-index-text04 {
    font-size: 14px;
  }

  .c-index-text09 {
    font-size: 12px;
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-index-text10 {
    font-size: 10px;
  }

  .c-index-text12 {
    font-size: 20px;
  }

  .c-index-gallery1 {
    position: relative;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .c-index-t-s-pimg11 {
    width: 100%;
    height: 200px;
  }

  .c-index-text13 {
    font-size: 14px;
  }

  .c-index-text18 {
    font-size: 12px;
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-index-text19 {
    font-size: 10px;
  }
}

@media(max-width: 767px) {
  .c-index-banner-homepage {
    padding: var(--dl-space-space-unit);
  }

  .c-index-bannerimg1 {
    height: 150px;
  }

  .c-index-image {
    height: 75px;
  }

  .c-index-image1 {
    height: 75px;
  }

  .c-index-categories {
    margin-top: var(--dl-space-space-unit);
  }

  .c-index-text {
    font-size: 18px;
  }

  .c-index-categories-homepage {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    grid-template-columns: 1fr 1fr;
  }

  .c-index-p-fimg {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }

  .c-index-text02 {
    font-size: 18px;
  }

  .c-index-text03 {
    font-size: 18px;
  }

  .c-index-select {
    font-size: 18px;
  }

  .c-index-gallery {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    grid-template-columns: 1fr 1fr 1fr;
  }

  .c-index-t-s-pimg1 {
    height: var(--dl-size-size-xlarge);
  }

  .c-index-text09 {
    margin-top: var(--dl-space-space-unit);
  }

  .c-index-text12 {
    font-size: 18px;
  }

  .c-index-gallery1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    grid-template-columns: 1fr 1fr 1fr;
  }

  .c-index-t-s-pimg11 {
    height: var(--dl-size-size-xlarge);
  }

  .c-index-text18 {
    margin-top: var(--dl-space-space-unit);
  }
}

@media(max-width: 470px) {
  .c-index-body {
    flex: 1;
    justify-content: flex-start;
  }

  .c-index-banner-homepage {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
  }

  .c-index-bannerimg1 {
    height: 120px;
  }

  .c-index-container1 {
    flex-direction: column;
  }

  .c-index-image {
    height: 60px;
  }

  .c-index-image1 {
    height: 60px;
  }

  .c-index-text {
    font-size: 16px;
  }

  .c-index-categories-homepage {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
    grid-template-columns: 1fr 1fr;
  }

  .c-index-button {
    width: auto;
    height: auto;
  }

  .c-index-p-fimg {
    width: var(--dl-size-size-small);
    height: var(--dl-size-size-small);
  }

  .c-index-text01 {
    font-size: 12px;
  }

  .c-index-text02 {
    font-size: 16px;
  }

  .c-index-text03 {
    font-size: 16px;
  }

  .c-index-select {
    font-size: 16px;
  }

  .c-index-gallery {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
    grid-template-columns: 1fr 1fr;
  }

  .c-index-t-s-pimg1 {
    height: var(--dl-size-size-large);
  }

  .c-index-text09 {
    margin-top: var(--dl-space-space-halfunit);
  }

  .c-index-text12 {
    font-size: 16px;
  }

  .c-index-gallery1 {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
    grid-template-columns: 1fr 1fr;
  }

  .c-index-t-s-pimg11 {
    height: var(--dl-size-size-large);
  }

  .c-index-text18 {
    margin-top: var(--dl-space-space-halfunit);
  }
}
</style>
