<template>
  <div class="c-index-container">
    <c-header rootClassName="c-header-root-class-name"></c-header>
    <div class="c-index-banner-homepage">
      <img alt="image"
        src="https://images.unsplash.com/photo-1655484704419-58277e774968?ixid=Mnw5MTMyMXwwfDF8YWxsfDE0fHx8fHx8Mnx8MTY1NTY1Mjk0MQ&amp;ixlib=rb-1.2.1&amp;w=1400"
        class="c-index-bannerimg1" />
      <img alt="image"
        src="https://images.unsplash.com/photo-1655533970927-ac5aa514d3eb?ixid=Mnw5MTMyMXwwfDF8YWxsfDM3fHx8fHx8Mnx8MTY1NTY1MTAxOA&amp;ixlib=rb-1.2.1&amp;w=1400"
        class="c-index-bannerimg2" />
    </div>
    <div class="c-index-categories">
      <span class="c-index-text">Categories</span>
      <div class="c-index-categories-homepage">
        <button v-for="category in Categories" :key="category" class="c-index-button button">
          <img alt="image"
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNjU1NjM0MzE1&amp;ixlib=rb-1.2.1&amp;w=200"
            class="c-index-p-fimg" />
          <span class="c-index-text01">{{ category.CategoryName }}</span>
        </button>
      </div>
    </div>
    <div class="c-index-top-selling">
      <span class="c-index-text11">Top Selling Products</span>
      <div class="c-index-gallery">
        <div v-for="product in Products" :key="product">
          <button @click="showProduct(product.objectId)">
            <div class=" c-index-container1 button">
              <img alt="image"
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNjU1NjM0MzE1&amp;ixlib=rb-1.2.1&amp;w=200"
                class=" c-index-t-s-pimg1" />
              <span class="c-index-text12">
                <span class="c-index-text13">
                  <span>{{ product.ProductName }}</span>
                  <br />
                  <span></span>
                </span>
              </span>
              <span class="c-index-text17">Php {{ product.ProductPrice }}</span>
              <span class="c-index-text18">23 Sold</span>
            </div>
          </button>
        </div>
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
  border-width: 1px;
  flex-direction: column;
  justify-content: center;
}

.c-index-banner-homepage {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-twounits);
  grid-gap: 2px;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  grid-template-columns: 1fr 1fr;
}

.c-index-bannerimg1 {
  width: 100%;
  height: 700px;
  object-fit: cover;
}

.c-index-bannerimg2 {
  width: 100%;
  height: 700px;
  object-fit: cover;
}

.c-index-categories {
  width: 100%;
  height: auto;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  box-sizing: border-box;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
  justify-content: space-between;
}

.c-index-text {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 22.500001907348633px;
  align-self: center;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-index-categories-homepage {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-twounits);
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

.c-index-button01 {
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

.c-index-p-fimg01 {
  width: 100%;
  height: var(--dl-size-size-xlarge);
  object-fit: cover;
}

.c-index-text02 {
  width: auto;
  font-size: 15px;
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Roboto;
  border-width: 0px;
  background-color: transparent;
}

.c-index-button02 {
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

.c-index-p-fimg02 {
  width: 100%;
  height: var(--dl-size-size-xlarge);
  object-fit: cover;
}

.c-index-text03 {
  width: auto;
  font-size: 15px;
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Roboto;
  border-width: 0px;
  background-color: transparent;
}

.c-index-button03 {
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

.c-index-p-fimg03 {
  width: 100%;
  height: var(--dl-size-size-xlarge);
  object-fit: cover;
}

.c-index-text04 {
  width: auto;
  font-size: 15px;
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Roboto;
  border-width: 0px;
  background-color: transparent;
}

.c-index-button04 {
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

.c-index-p-fimg04 {
  width: 100%;
  height: var(--dl-size-size-xlarge);
  object-fit: cover;
}

.c-index-text05 {
  width: auto;
  font-size: 15px;
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Roboto;
  border-width: 0px;
  background-color: transparent;
}

.c-index-button05 {
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

.c-index-p-fimg05 {
  width: 100%;
  height: var(--dl-size-size-xlarge);
  object-fit: cover;
}

.c-index-text06 {
  width: auto;
  font-size: 15px;
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Roboto;
  border-width: 0px;
  background-color: transparent;
}

.c-index-button06 {
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

.c-index-p-fimg06 {
  width: 100%;
  height: var(--dl-size-size-xlarge);
  object-fit: cover;
}

.c-index-text07 {
  width: auto;
  font-size: 15px;
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Roboto;
  border-width: 0px;
  background-color: transparent;
}

.c-index-button07 {
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

.c-index-p-fimg07 {
  width: 100%;
  height: var(--dl-size-size-xlarge);
  object-fit: cover;
}

.c-index-text08 {
  width: auto;
  font-size: 15px;
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Roboto;
  border-width: 0px;
  background-color: transparent;
}

.c-index-button08 {
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

.c-index-p-fimg08 {
  width: 100%;
  height: var(--dl-size-size-xlarge);
  object-fit: cover;
}

.c-index-text09 {
  width: auto;
  font-size: 15px;
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Roboto;
  border-width: 0px;
  background-color: transparent;
}

.c-index-button09 {
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

.c-index-p-fimg09 {
  width: 100%;
  height: var(--dl-size-size-xlarge);
  object-fit: cover;
}

.c-index-text10 {
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
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.c-index-text11 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 22.500001907348633px;
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

.c-index-container1 {
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

.c-index-t-s-pimg1 {
  width: 100%;
  height: 250px;
  align-self: center;
  object-fit: fill;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-index-text12 {
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

.c-index-text13 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-index-text17 {
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

.c-index-text18 {
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

.c-index-container2 {
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

.c-index-t-s-pimg11 {
  width: 100%;
  height: 250px;
  align-self: center;
  object-fit: fill;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-index-text19 {
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

.c-index-text20 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-index-text24 {
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

.c-index-text25 {
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

.c-index-container3 {
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

.c-index-t-s-pimg12 {
  width: 100%;
  height: 250px;
  align-self: center;
  object-fit: fill;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-index-text26 {
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

.c-index-text27 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-index-text31 {
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

.c-index-text32 {
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

.c-index-container4 {
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

.c-index-t-s-pimg13 {
  width: 100%;
  height: 250px;
  align-self: center;
  object-fit: fill;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-index-text33 {
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

.c-index-text34 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-index-text38 {
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

.c-index-text39 {
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

.c-index-container5 {
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

.c-index-t-s-pimg14 {
  width: 100%;
  height: 250px;
  align-self: center;
  object-fit: fill;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-index-text40 {
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

.c-index-text41 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-index-text45 {
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

.c-index-text46 {
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

.c-index-container6 {
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

.c-index-t-s-pimg15 {
  width: 100%;
  height: 250px;
  align-self: center;
  object-fit: fill;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-index-text47 {
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

.c-index-text48 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-index-text52 {
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

.c-index-text53 {
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

.c-index-container7 {
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

.c-index-t-s-pimg16 {
  width: 100%;
  height: 250px;
  align-self: center;
  object-fit: fill;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-index-text54 {
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

.c-index-text55 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-index-text59 {
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

.c-index-text60 {
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

.c-index-container8 {
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

.c-index-t-s-pimg17 {
  width: 100%;
  height: 250px;
  align-self: center;
  object-fit: fill;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-index-text61 {
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

.c-index-text62 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}

.c-index-text66 {
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

.c-index-text67 {
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
  .c-index-banner-homepage {
    padding: var(--dl-space-space-oneandhalfunits);
    align-self: center;
    grid-template-columns: 1fr 1fr;
  }

  .c-index-bannerimg1 {
    height: 450px;
  }

  .c-index-bannerimg2 {
    height: 450px;
  }

  .c-index-categories {
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-index-categories-homepage {
    position: relative;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .c-index-p-fimg {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-index-p-fimg01 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-index-p-fimg02 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-index-p-fimg03 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-index-p-fimg04 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-index-p-fimg05 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-index-p-fimg06 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-index-p-fimg07 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-index-p-fimg08 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-index-p-fimg09 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-index-gallery {
    position: relative;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .c-index-t-s-pimg1 {
    width: 100%;
    height: 200px;
  }

  .c-index-text12 {
    font-size: 14px;
  }

  .c-index-text17 {
    font-size: 12px;
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-index-text18 {
    font-size: 10px;
  }

  .c-index-t-s-pimg11 {
    width: 100%;
    height: 200px;
  }

  .c-index-text19 {
    font-size: 14px;
  }

  .c-index-text24 {
    font-size: 12px;
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-index-text25 {
    font-size: 10px;
  }

  .c-index-t-s-pimg12 {
    width: 100%;
    height: 200px;
  }

  .c-index-text26 {
    font-size: 14px;
  }

  .c-index-text31 {
    font-size: 12px;
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-index-text32 {
    font-size: 10px;
  }

  .c-index-t-s-pimg13 {
    width: 100%;
    height: 200px;
  }

  .c-index-text33 {
    font-size: 14px;
  }

  .c-index-text38 {
    font-size: 12px;
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-index-text39 {
    font-size: 10px;
  }

  .c-index-t-s-pimg14 {
    width: 100%;
    height: 200px;
  }

  .c-index-text40 {
    font-size: 14px;
  }

  .c-index-text45 {
    font-size: 12px;
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-index-text46 {
    font-size: 10px;
  }

  .c-index-t-s-pimg15 {
    width: 100%;
    height: 200px;
  }

  .c-index-text47 {
    font-size: 14px;
  }

  .c-index-text52 {
    font-size: 12px;
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-index-text53 {
    font-size: 10px;
  }

  .c-index-t-s-pimg16 {
    width: 100%;
    height: 200px;
  }

  .c-index-text54 {
    font-size: 14px;
  }

  .c-index-text59 {
    font-size: 12px;
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-index-text60 {
    font-size: 10px;
  }

  .c-index-t-s-pimg17 {
    width: 100%;
    height: 200px;
  }

  .c-index-text61 {
    font-size: 14px;
  }

  .c-index-text66 {
    font-size: 12px;
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-index-text67 {
    font-size: 10px;
  }
}

@media(max-width: 767px) {
  .c-index-banner-homepage {
    padding: var(--dl-space-space-unit);
  }

  .c-index-bannerimg1 {
    height: 250px;
  }

  .c-index-bannerimg2 {
    height: 250px;
  }

  .c-index-categories {
    margin-top: var(--dl-space-space-unit);
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

  .c-index-p-fimg01 {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }

  .c-index-p-fimg02 {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }

  .c-index-p-fimg03 {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }

  .c-index-p-fimg04 {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }

  .c-index-p-fimg05 {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }

  .c-index-p-fimg06 {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }

  .c-index-p-fimg07 {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }

  .c-index-p-fimg08 {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }

  .c-index-p-fimg09 {
    width: var(--dl-size-size-medium);
    height: var(--dl-size-size-medium);
  }

  .c-index-gallery {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    grid-template-columns: 1fr 1fr 1fr;
  }

  .c-index-t-s-pimg1 {
    height: var(--dl-size-size-xlarge);
  }

  .c-index-text17 {
    margin-top: var(--dl-space-space-unit);
  }

  .c-index-t-s-pimg11 {
    height: var(--dl-size-size-xlarge);
  }

  .c-index-text24 {
    margin-top: var(--dl-space-space-unit);
  }

  .c-index-t-s-pimg12 {
    height: var(--dl-size-size-xlarge);
  }

  .c-index-text31 {
    margin-top: var(--dl-space-space-unit);
  }

  .c-index-t-s-pimg13 {
    height: var(--dl-size-size-xlarge);
  }

  .c-index-text38 {
    margin-top: var(--dl-space-space-unit);
  }

  .c-index-t-s-pimg14 {
    height: var(--dl-size-size-xlarge);
  }

  .c-index-text45 {
    margin-top: var(--dl-space-space-unit);
  }

  .c-index-t-s-pimg15 {
    height: var(--dl-size-size-xlarge);
  }

  .c-index-text52 {
    margin-top: var(--dl-space-space-unit);
  }

  .c-index-t-s-pimg16 {
    height: var(--dl-size-size-xlarge);
  }

  .c-index-text59 {
    margin-top: var(--dl-space-space-unit);
  }

  .c-index-t-s-pimg17 {
    height: var(--dl-size-size-xlarge);
  }

  .c-index-text66 {
    margin-top: var(--dl-space-space-unit);
  }
}

@media(max-width: 470px) {
  .c-index-banner-homepage {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
  }

  .c-index-bannerimg1 {
    height: 150px;
  }

  .c-index-bannerimg2 {
    height: 150px;
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

  .c-index-button01 {
    width: auto;
    height: auto;
  }

  .c-index-p-fimg01 {
    width: var(--dl-size-size-small);
    height: var(--dl-size-size-small);
  }

  .c-index-text02 {
    font-size: 12px;
  }

  .c-index-button02 {
    width: 100%;
    height: auto;
  }

  .c-index-p-fimg02 {
    width: var(--dl-size-size-small);
    height: var(--dl-size-size-small);
  }

  .c-index-text03 {
    font-size: 12px;
  }

  .c-index-p-fimg03 {
    width: var(--dl-size-size-small);
    height: var(--dl-size-size-small);
  }

  .c-index-text04 {
    font-size: 12px;
  }

  .c-index-p-fimg04 {
    width: var(--dl-size-size-small);
    height: var(--dl-size-size-small);
  }

  .c-index-text05 {
    font-size: 12px;
  }

  .c-index-p-fimg05 {
    width: var(--dl-size-size-small);
    height: var(--dl-size-size-small);
  }

  .c-index-text06 {
    font-size: 12px;
  }

  .c-index-p-fimg06 {
    width: var(--dl-size-size-small);
    height: var(--dl-size-size-small);
  }

  .c-index-text07 {
    font-size: 12px;
  }

  .c-index-p-fimg07 {
    width: var(--dl-size-size-small);
    height: var(--dl-size-size-small);
  }

  .c-index-text08 {
    font-size: 12px;
  }

  .c-index-p-fimg08 {
    width: var(--dl-size-size-small);
    height: var(--dl-size-size-small);
  }

  .c-index-text09 {
    font-size: 12px;
  }

  .c-index-p-fimg09 {
    width: var(--dl-size-size-small);
    height: var(--dl-size-size-small);
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

  .c-index-text17 {
    margin-top: var(--dl-space-space-halfunit);
  }

  .c-index-t-s-pimg11 {
    height: var(--dl-size-size-large);
  }

  .c-index-text24 {
    margin-top: var(--dl-space-space-halfunit);
  }

  .c-index-t-s-pimg12 {
    height: var(--dl-size-size-large);
  }

  .c-index-text31 {
    margin-top: var(--dl-space-space-halfunit);
  }

  .c-index-t-s-pimg13 {
    height: var(--dl-size-size-large);
  }

  .c-index-text38 {
    margin-top: var(--dl-space-space-halfunit);
  }

  .c-index-t-s-pimg14 {
    height: var(--dl-size-size-large);
  }

  .c-index-text45 {
    margin-top: var(--dl-space-space-halfunit);
  }

  .c-index-t-s-pimg15 {
    height: var(--dl-size-size-large);
  }

  .c-index-text52 {
    margin-top: var(--dl-space-space-halfunit);
  }

  .c-index-t-s-pimg16 {
    height: var(--dl-size-size-large);
  }

  .c-index-text59 {
    margin-top: var(--dl-space-space-halfunit);
  }

  .c-index-t-s-pimg17 {
    height: var(--dl-size-size-large);
  }

  .c-index-text66 {
    margin-top: var(--dl-space-space-halfunit);
  }
}
</style>
