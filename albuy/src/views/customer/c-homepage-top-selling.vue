<template>
  <div class="c-homepage-top-selling-container">
    <c-header rootClassName="c-header-root-class-name24"></c-header>
    <div class="c-homepage-top-selling-container1">
      <div class="c-homepage-top-selling-container2">
        <span class="c-homepage-top-selling-top-selling">
          Top Selling Products
        </span>
        <div class="c-homepage-top-selling-container3">
          <span class="c-homepage-top-selling-text">Sort by:</span>
          <select class="c-homepage-top-selling-select">
            <option value="Option 1">Month</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
      </div>
      <select class="c-homepage-top-selling-select1">
        <option value="Option 1">All</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <div class="c-homepage-top-selling-categories">
        <button class="c-homepage-top-selling-all button">All</button>
        <button class="c-homepage-top-selling-processed-food button">
          Processed Food
        </button>
        <button class="c-homepage-top-selling-agri-based-products button">
          Agri-based Products
        </button>
        <button class="c-homepage-top-selling-arts-and-crafts button">
          Arts and Crafts
        </button>
        <button class="c-homepage-top-selling-home-and-fashion button">
          Home and Fashion
        </button>
        <button class="c-homepage-top-selling-others button">Others</button>
      </div>
      <div class="c-homepage-top-selling-gallery">
        <div class="c-homepage-top-selling-container4 button">
          <img src="https://play.teleporthq.io/static/svg/default-img.svg" class="c-homepage-top-selling-t-s-pimg1" />
          <span class="c-homepage-top-selling-text1">
            <span class="c-homepage-top-selling-text2">
              <span>Keychains</span>
              <br />
              <span></span>
            </span>
          </span>
          <span class="c-homepage-top-selling-text6">Php 20</span>
          <span class="c-homepage-top-selling-text7">23 Sold</span>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name27"></app-footer>
  </div>
</template>

<script>
import CHeader from '@/components/c-header'
import AppFooter from '@/components/footer'

export default {
  name: 'CHomepageTopSelling',
  components: {
    CHeader,
    AppFooter,
  },
  metaInfo: {
    title: 'C-HomepageTop-Selling - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-HomepageTop-Selling - exported project',
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

.c-homepage-top-selling-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.c-homepage-top-selling-container1 {
  flex: 1;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  align-items: stretch;
  flex-direction: column;
  justify-content: flex-start;
}

.c-homepage-top-selling-container2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-homepage-top-selling-top-selling {
  padding: var(--dl-space-space-unit);
  font-size: 22;
  align-self: center;
  text-align: center;
  font-weight: 700;
}

.c-homepage-top-selling-container3 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-homepage-top-selling-text {
  color: rgb(0, 0, 0);
  width: auto;
  padding: var(--dl-space-space-unit);
  font-size: 18px;
  align-self: center;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-homepage-top-selling-select {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 18;
  align-self: center;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-homepage-top-selling-select1 {
  display: none;
  padding: var(--dl-space-space-unit);
  font-size: 14;
  align-self: center;
  text-align: center;
  font-weight: 500;
  background-color: transparent;
}

.c-homepage-top-selling-categories {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: grid;
  padding: var(--dl-space-space-unit);
  grid-gap: var(--dl-space-space-halfunit);
  align-items: flex-start;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.c-homepage-top-selling-all {
  flex: 1;
  height: 100%;
  padding: var(--dl-space-space-unit);
  align-self: center;
  box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
  text-align: center;
  border-color: var(--dl-color-primary-theme);
  border-width: 0px;
  background-color: transparent;
  border-bottom-width: 3px;
}

.c-homepage-top-selling-processed-food {
  flex: 1;
  height: 100%;
  padding: var(--dl-space-space-unit);
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  text-align: center;
  border-width: 0px;
  background-color: transparent;
}

.c-homepage-top-selling-agri-based-products {
  flex: 1;
  height: 100%;
  padding: var(--dl-space-space-unit);
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  text-align: center;
  border-width: 0px;
}

.c-homepage-top-selling-arts-and-crafts {
  flex: 1;
  height: 100%;
  padding: var(--dl-space-space-unit);
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  text-align: center;
  border-width: 0px;
}

.c-homepage-top-selling-home-and-fashion {
  flex: 1;
  height: 100%;
  padding: var(--dl-space-space-unit);
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  text-align: center;
  border-width: 0px;
}

.c-homepage-top-selling-others {
  flex: 1;
  height: 100%;
  padding: var(--dl-space-space-unit);
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  text-align: center;
  border-width: 0px;
}

.c-homepage-top-selling-gallery {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-unit);
  grid-gap: var(--dl-space-space-unit);
  align-self: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.c-homepage-top-selling-container4 {
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

.c-homepage-top-selling-t-s-pimg1 {
  width: 100%;
  height: 250px;
  align-self: center;
  object-fit: fill;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.c-homepage-top-selling-text1 {
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

.c-homepage-top-selling-text2 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-stretch: normal;
  text-decoration: none;
}

.c-homepage-top-selling-text6 {
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

.c-homepage-top-selling-text7 {
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
  .c-homepage-top-selling-container1 {
    align-self: stretch;
  }

  .c-homepage-top-selling-top-selling {
    font-size: 18;
  }

  .c-homepage-top-selling-text {
    font-size: 18px;
  }

  .c-homepage-top-selling-select {
    font-size: 18;
  }

  .c-homepage-top-selling-categories {
    height: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .c-homepage-top-selling-all {
    font-size: 13px;
  }

  .c-homepage-top-selling-processed-food {
    font-size: 13px;
  }

  .c-homepage-top-selling-agri-based-products {
    font-size: 13px;
  }

  .c-homepage-top-selling-arts-and-crafts {
    font-size: 13px;
  }

  .c-homepage-top-selling-home-and-fashion {
    font-size: 13px;
  }

  .c-homepage-top-selling-others {
    font-size: 13px;
  }

  .c-homepage-top-selling-gallery {
    position: relative;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .c-homepage-top-selling-t-s-pimg1 {
    width: 100%;
    height: 200px;
  }

  .c-homepage-top-selling-text1 {
    font-size: 14px;
  }

  .c-homepage-top-selling-text6 {
    font-size: 12px;
    margin-top: var(--dl-space-space-oneandhalfunits);
  }

  .c-homepage-top-selling-text7 {
    font-size: 10px;
  }
}

@media(max-width: 767px) {
  .c-homepage-top-selling-container1 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-homepage-top-selling-container2 {
    flex-direction: row;
    justify-content: space-between;
  }

  .c-homepage-top-selling-top-selling {
    font-size: 16;
  }

  .c-homepage-top-selling-text {
    font-size: 18px;
  }

  .c-homepage-top-selling-select {
    font-size: 18px;
  }

  .c-homepage-top-selling-select1 {
    display: flex;
    align-self: flex-start;
  }

  .c-homepage-top-selling-categories {
    display: none;
  }

  .c-homepage-top-selling-gallery {
    padding: var(--dl-space-space-unit);
    grid-template-columns: 1fr 1fr 1fr;
  }

  .c-homepage-top-selling-t-s-pimg1 {
    height: var(--dl-size-size-xlarge);
  }

  .c-homepage-top-selling-text6 {
    margin-top: var(--dl-space-space-unit);
  }
}

@media(max-width: 470px) {
  .c-homepage-top-selling-top-selling {
    font-size: 10px;
  }

  .c-homepage-top-selling-text {
    font-size: 10px;
  }

  .c-homepage-top-selling-select {
    font-size: 10;
  }

  .c-homepage-top-selling-select1 {
    padding: var(--dl-space-space-halfunit);
    font-size: 10;
  }

  .c-homepage-top-selling-gallery {
    padding: var(--dl-space-space-halfunit);
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
    grid-template-columns: 1fr 1fr;
  }

  .c-homepage-top-selling-t-s-pimg1 {
    height: var(--dl-size-size-large);
  }

  .c-homepage-top-selling-text6 {
    margin-top: var(--dl-space-space-halfunit);
  }
}
</style>
