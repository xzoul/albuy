<template>
  <div class="c-homepage-categories-container">
    <c-header rootClassName="c-header-root-class-name25"></c-header>
    <div class="c-homepage-categories-container1">
      <div class="c-homepage-categories-categories">
        <button class="c-homepage-categories-processed-food button">
          Processed Food
        </button>
        <button class="c-homepage-categories-agri-based-products button">
          Agri-based Products
        </button>
        <button class="c-homepage-categories-arts-and-crafts button">
          Arts and Crafts
        </button>
        <button class="c-homepage-categories-home-and-fashion button">
          Home and Fashion
        </button>
        <button class="c-homepage-categories-others button">Others</button>
      </div>
      <div class="c-homepage-categories-container2">
        <div class="c-homepage-categories-container3">
          <span class="c-homepage-categories-text">{{ CategoryData.CategoryName }}</span>
          <select class="c-homepage-categories-select">
            <option value="Option 1">Processed Food</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <div class="c-homepage-categories-container4">
          <span class="c-homepage-categories-text1">Sort by:</span>
          <select class="c-homepage-categories-sort-by-dropdown">
            <option value=" 1">Latest</option>
            <option value="Option 2">Price low to high</option>
            <option value="Option 3">Price high to low</option>
          </select>
        </div>
      </div>
      <div class="c-homepage-categories-gallery">
        <div v-for="product in Products" :key="product">
          <button @click="showProduct(product.objectId)">
            <div class="c-homepage-categories-container5 button">
              <img src="https://play.teleporthq.io/static/svg/default-img.svg"
                class="c-homepage-categories-t-s-pimg1" />
              <span class="c-homepage-categories-text2">
                <span class="c-homepage-categories-text3">
                  <span>{{ product.ProductName }}</span>
                  <br />
                  <span></span>
                </span>
              </span>
              <span class="c-homepage-categories-text7">Php {{ product.ProductPrice }}</span>
              <span class="c-homepage-categories-text8">23 Sold</span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name28"></app-footer>
  </div>
</template>

<script>
import Parse from 'parse';
import CHeader from '@/components/c-header'
import AppFooter from '@/components/footer'

export default {
  name: 'CHomepageCategories',
  components: {
    CHeader,
    AppFooter,
  },

  data() {
    return {
      rawnu53: ' ',
      rawox4q: ' ',
      rawetbf: ' ',
      CategoryID: '',
      CategoryData: {},

      //Product Variables
      Products: [],

      //Category
      Categories: [],
    }
  },

  metaInfo: {
    title: 'C-HomepageCategories - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-HomepageCategories - exported project',
      },
    ],
  },

  methods: {
    async getCategoryData(CategoryID) {
      var param = { "CategoryID": CategoryID };
      this.CategoryData = JSON.parse(await Parse.Cloud.run("GetCategoryData", param));
    },
    async getProducts() {
      var param = { "CategoryID": this.CategoryID };
      this.Products = JSON.parse(await Parse.Cloud.run("GetProducts", param));
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
  },

  beforeMount() {
    this.CategoryID = this.$route.query.CategoryID;
    this.getCategoryData(this.$route.query.CategoryID);
    this.getProducts();
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

.c-homepage-categories-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.c-homepage-categories-container1 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  align-items: stretch;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-white);
}

.c-homepage-categories-categories {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: grid;
  grid-gap: var(--dl-space-space-halfunit);
  align-items: flex-start;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.c-homepage-categories-processed-food {
  flex: 1;
  height: auto;
  padding: var(--dl-space-space-unit);
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  text-align: center;
  border-color: var(--dl-color-primary-theme);
  border-width: 0px;
  border-radius: 0px;
  background-color: var(--dl-color-gray-white);
  border-bottom-width: 3px;
}

.c-homepage-categories-agri-based-products {
  flex: 1;
  height: auto;
  padding: var(--dl-space-space-unit);
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  text-align: center;
  border-width: 0px;
  border-radius: 0px;
}

.c-homepage-categories-arts-and-crafts {
  flex: 1;
  height: auto;
  padding: var(--dl-space-space-unit);
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  text-align: center;
  border-width: 0px;
  border-radius: 0px;
}

.c-homepage-categories-home-and-fashion {
  flex: 1;
  height: auto;
  padding: var(--dl-space-space-unit);
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  text-align: center;
  border-width: 0px;
  border-radius: 0px;
}

.c-homepage-categories-others {
  flex: 1;
  height: auto;
  padding: var(--dl-space-space-unit);
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  text-align: center;
  border-width: 0px;
  border-radius: 0px;
}

.c-homepage-categories-container2 {
  width: 100%;
  height: auto;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: space-between;
}

.c-homepage-categories-container3 {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.c-homepage-categories-text {
  padding: var(--dl-space-space-unit);
  font-size: 22.5px;
  font-weight: 700;
}

.c-homepage-categories-select {
  display: none;
  padding: var(--dl-space-space-unit);
  font-size: 16;
  font-weight: 700;
  background-color: transparent;
}

.c-homepage-categories-container4 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: center;
}

.c-homepage-categories-text1 {
  padding: var(--dl-space-space-unit);
  font-size: 14;
  align-self: center;
  text-align: center;
  font-weight: 400;
}

.c-homepage-categories-sort-by-dropdown {
  padding: var(--dl-space-space-halfunit);
  font-size: 14;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
}

.c-homepage-categories-gallery {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-unit);
  grid-gap: var(--dl-space-space-unit);
  align-self: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.c-homepage-categories-container5 {
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
  background-color: #FFFFFF;
}

.c-homepage-categories-t-s-pimg1 {
  width: 100%;
  height: 250px;
  align-self: center;
  object-fit: fill;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-homepage-categories-text2 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: left;
  font-family: Roboto;
  font-weight: bold;
  line-height: normal;
  margin-left: var(--dl-space-space-halfunit);
  font-stretch: normal;
  text-decoration: none;
}

.c-homepage-categories-text3 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-stretch: normal;
  text-decoration: none;
}

.c-homepage-categories-text7 {
  color: #000000;
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

.c-homepage-categories-text8 {
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
  .c-homepage-categories-categories {
    height: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .c-homepage-categories-processed-food {
    font-size: 13px;
  }

  .c-homepage-categories-agri-based-products {
    font-size: 13px;
  }

  .c-homepage-categories-arts-and-crafts {
    font-size: 13px;
  }

  .c-homepage-categories-home-and-fashion {
    font-size: 13px;
  }

  .c-homepage-categories-others {
    font-size: 13px;
  }

  .c-homepage-categories-gallery {
    position: relative;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .c-homepage-categories-t-s-pimg1 {
    width: 100%;
    height: 200px;
  }

  .c-homepage-categories-text2 {
    font-size: 14px;
  }

  .c-homepage-categories-text7 {
    font-size: 12px;
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-homepage-categories-text8 {
    font-size: 10px;
  }
}

@media(max-width: 767px) {
  .c-homepage-categories-container1 {
    align-self: stretch;
  }

  .c-homepage-categories-categories {
    display: none;
  }

  .c-homepage-categories-container2 {
    margin-top: 0px;
  }

  .c-homepage-categories-text {
    display: none;
  }

  .c-homepage-categories-select {
    display: flex;
  }

  .c-homepage-categories-gallery {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    grid-template-columns: 1fr 1fr 1fr;
  }

  .c-homepage-categories-t-s-pimg1 {
    height: var(--dl-size-size-xlarge);
  }

  .c-homepage-categories-text7 {
    margin-top: var(--dl-space-space-unit);
  }
}

@media(max-width: 470px) {
  .c-homepage-categories-container2 {
    padding: 0px;
  }

  .c-homepage-categories-select {
    font-size: 12;
  }

  .c-homepage-categories-container4 {
    align-self: stretch;
  }

  .c-homepage-categories-text1 {
    font-size: 12;
  }

  .c-homepage-categories-sort-by-dropdown {
    font-size: 12;
  }

  .c-homepage-categories-gallery {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
    grid-template-columns: 1fr 1fr;
  }

  .c-homepage-categories-t-s-pimg1 {
    height: var(--dl-size-size-large);
  }

  .c-homepage-categories-text7 {
    margin-top: var(--dl-space-space-halfunit);
  }
}
</style>