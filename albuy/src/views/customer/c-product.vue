<template>
  <div class="c-product-container">
    <c-header rootClassName="c-header-root-class-name1"></c-header>
    <div class="c-product-container01">
      <div class="c-product-link">
        <button class="c-product-button button">
          <span class="c-product-text">{{ CategoryData.CategoryName }}</span>
          <img alt="pastedImage" src="/playground_assets/pastedimage-kl8d-1500h.png" class="c-product-pasted-image" />
        </button>
        <button class="c-product-button1 button">
          <span class="c-product-text01">OTOP HUB Legaspi</span>
          <img alt="pastedImage" src="/playground_assets/pastedimage-kl8d-1500h.png" class="c-product-pasted-image01" />
        </button>
        <span class="c-product-text02">Round Woven Sling Bag</span>
      </div>
      <div class="c-product-product">
        <div class="c-product-product-preview">
          <div class="c-product-smaillpreview">
            <button class="c-product-smallproductimg1 button">
              <img alt="image"
                src="https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixid=Mnw5MTMyMXwxfDF8YWxsfDM2fHx8fHx8Mnx8MTY1NTY1MzMyMQ&amp;ixlib=rb-1.2.1&amp;w=1500"
                class="c-product-smallproductimg11" />
            </button>
            <button class="c-product-smallproductimg2 button">
              <img alt="image"
                src="https://images.unsplash.com/photo-1655552360601-ee84fbaf882d?ixid=Mnw5MTMyMXwwfDF8YWxsfDl8fHx8fHwyfHwxNjU1NzA4NzI2&amp;ixlib=rb-1.2.1&amp;w=1500"
                class="c-product-smallproductimg21" />
            </button>
            <button class="c-product-smallproductimg3 button">
              <img alt="image"
                src="https://images.unsplash.com/photo-1651416766352-c992b37e7617?ixid=Mnw5MTMyMXwwfDF8YWxsfDI0fHx8fHx8Mnx8MTY1NTcwODcyNg&amp;ixlib=rb-1.2.1&amp;w=1500"
                class="c-product-smallproductimg31" />
            </button>
            <button class="c-product-smallproductimg4 button">
              <img alt="image"
                src="https://images.unsplash.com/photo-1655631123287-705886967790?ixid=Mnw5MTMyMXwwfDF8YWxsfDI1fHx8fHx8Mnx8MTY1NTY1MzMyMQ&amp;ixlib=rb-1.2.1&amp;w=1500"
                class="c-product-smallproductimg41" />
            </button>
            <button class="c-product-smallproductimg5 button">
              <img alt="image"
                src="https://images.unsplash.com/photo-1655610228291-9a9c3e55393c?ixid=Mnw5MTMyMXwwfDF8YWxsfDM3fHx8fHx8Mnx8MTY1NTY1MzMyMQ&amp;ixlib=rb-1.2.1&amp;w=1500"
                class="c-product-smallproductimg51" />
            </button>
          </div>
          <div class="c-product-bigpreview">
            <button class="c-product-img-preview button">
              <img alt="image"
                src="https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixid=Mnw5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjU1NjUxMDE2&amp;ixlib=rb-1.2.1&amp;w=1400"
                class="c-product-productimg" />
            </button>
          </div>
          <div class="c-product-smaillpreview1">
            <button class="c-product-smallproductimg12 button">
              <img alt="image"
                src="https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixid=Mnw5MTMyMXwxfDF8YWxsfDM2fHx8fHx8Mnx8MTY1NTY1MzMyMQ&amp;ixlib=rb-1.2.1&amp;w=1500"
                class="c-product-smallproductimg13" />
            </button>
            <button class="c-product-smallproductimg22 button">
              <img alt="image"
                src="https://images.unsplash.com/photo-1655552360601-ee84fbaf882d?ixid=Mnw5MTMyMXwwfDF8YWxsfDl8fHx8fHwyfHwxNjU1NzA4NzI2&amp;ixlib=rb-1.2.1&amp;w=1500"
                class="c-product-smallproductimg23" />
            </button>
            <button class="c-product-smallproductimg32 button">
              <img alt="image"
                src="https://images.unsplash.com/photo-1651416766352-c992b37e7617?ixid=Mnw5MTMyMXwwfDF8YWxsfDI0fHx8fHx8Mnx8MTY1NTcwODcyNg&amp;ixlib=rb-1.2.1&amp;w=1500"
                class="c-product-smallproductimg33" />
            </button>
            <button class="c-product-smallproductimg42 button">
              <img alt="image"
                src="https://images.unsplash.com/photo-1655631123287-705886967790?ixid=Mnw5MTMyMXwwfDF8YWxsfDI1fHx8fHx8Mnx8MTY1NTY1MzMyMQ&amp;ixlib=rb-1.2.1&amp;w=1500"
                class="c-product-smallproductimg43" />
            </button>
            <button class="c-product-smallproductimg52 button">
              <img alt="image"
                src="https://images.unsplash.com/photo-1655610228291-9a9c3e55393c?ixid=Mnw5MTMyMXwwfDF8YWxsfDM3fHx8fHx8Mnx8MTY1NTY1MzMyMQ&amp;ixlib=rb-1.2.1&amp;w=1500"
                class="c-product-smallproductimg53" />
            </button>
          </div>
        </div>
        <div class="c-product-product-specification">
          <button class="c-product-s-h-o-p-n-a-m-e button">
            <svg viewBox="0 0 1024 1024" class="c-product-icon">
              <path
                d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z">
              </path>
            </svg>
            <span class="c-product-shop">OTOP HUB LEGAZPI</span>
          </button>
          <span class="c-product-p-r-o-d-u-c-t-n-a-m-e">
            {{ ProductName }}
          </span>
          <div class="c-product-ratings-and-sales">
            <img alt="pastedImage" src="/playground_assets/pastedimage-z6o-200h.png" class="c-product-pasted-image02" />
            <span class="c-product-text03">
              <span>
                124
                <span v-html="rawnu53"></span>
              </span>
              <span class="c-product-text05">Ratings</span>
            </span>
            <span class="c-product-text06">
              <span>
                286
                <span v-html="rawox4q"></span>
              </span>
              <span class="c-product-text08">Sold</span>
            </span>
          </div>
          <span class="c-product-p-r-i-c-e">₱{{ ProductPrice }}</span>
          <div class="c-product-product-details">
            <span class="c-product-details">Product Details:</span>
            <span class="c-product-description">
              {{ ProductDescription }}
            </span>
          </div>
          <div class="c-product-shipping">
            <span class="c-product-shipping1">Shipping:</span>
            <span class="c-product-text09">Cash On Delivery (COD)</span>
          </div>
          <div class="c-product-variations">
            <span class="c-product-variations1">Variations:</span>
            <select class="c-product-variationbtn">
              <option value="Option 1" selected>Select Variation</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div class="c-product-quantity">
            <span class="c-product-quantity1">Quantity:</span>
            <div class="c-product-q-u-a-n-t-i-t-y2">
              <button class="c-product-button2 button">
                <span class="c-product-text10">
                  <span>+</span>
                  <span class="c-product-text12"></span>
                </span>
              </button>
              <span class="c-product-quantity-indicator">1</span>
              <button class="c-product-button3 button">
                <span class="c-product-text13"><span>-</span></span>
              </button>
            </div>
          </div>
          <div class="c-product-buttons">
            <button class="c-product-addtocartproduct button">
              <svg viewBox="0 0 1024 1024" class="c-product-icon02">
                <path
                  d="M885.589 228.053c-8.149-9.344-19.883-14.72-32.256-14.72h-589.611l-8.32-49.664c-3.413-20.565-21.205-35.669-42.069-35.669h-96c-23.595 0-42.667 19.072-42.667 42.667s19.072 42.667 42.667 42.667h59.861l79.36 476.331c0.341 1.92 1.323 3.499 1.92 5.291 0.683 2.261 1.237 4.395 2.304 6.443 1.365 2.816 3.2 5.205 5.12 7.637 1.323 1.664 2.517 3.328 4.053 4.779 2.475 2.304 5.333 3.925 8.235 5.547 1.621 0.896 3.029 2.091 4.779 2.773 4.949 2.005 10.155 3.2 15.659 3.2 0.043 0 469.376 0 469.376 0 23.595 0 42.667-19.072 42.667-42.667s-19.072-42.667-42.667-42.667h-433.195l-7.083-42.667h482.944c21.248 0 39.253-15.616 42.24-36.608l42.667-298.667c1.749-12.288-1.92-24.704-9.984-34.005zM804.139 298.667l-12.16 85.333h-151.979v-85.333h164.139zM597.333 298.667v85.333h-128v-85.333h128zM597.333 426.667v85.333h-128v-85.333h128zM426.667 298.667v85.333h-128c-2.261 0-4.309 0.64-6.315 1.28l-14.421-86.613h148.736zM299.264 426.667h127.403v85.333h-113.195l-14.208-85.333zM640 512v-85.333h145.835l-12.16 85.333h-133.675z">
                </path>
                <path
                  d="M426.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z">
                </path>
                <path
                  d="M810.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z">
                </path>
              </svg>
              <span class="c-product-addto-cart">Add to Cart</span>
            </button>
            <button class="c-product-addtocartproduct1 button">
              <span class="c-product-addto-cart1">Buy Now</span>
            </button>
          </div>
        </div>
        <div class="c-product-details1">
          <div class="c-product-item-details">
            <button class="button c-product-button4">
              <span class="c-product-text15">
                <span>
                  Item Details
                  <span v-html="rawetbf"></span>
                </span>
              </span>
            </button>
            <svg viewBox="0 0 1024 1024" class="c-product-icon06">
              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
            </svg>
          </div>
          <div class="c-product-shipping-details">
            <button class="button c-product-button5">
              <span class="c-product-text17">
                <span>Shipping and return policies</span>
              </span>
            </button>
            <svg viewBox="0 0 1024 1024" class="c-product-icon08">
              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
            </svg>
          </div>
          <div class="c-product-shipping-details1">
            <button class="button c-product-button6">
              <span class="c-product-text19">
                <span>Ratings &amp; Review</span>
              </span>
            </button>
            <svg viewBox="0 0 1024 1024" class="c-product-icon10">
              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="c-product-container02">
        <div class="c-product-container03">
          <span class="c-product-text21"><span>Ratings</span></span>
        </div>
        <div class="c-product-container12">
          <span class="c-product-text25"><span>Reviews</span></span>
          <div class="c-product-container13">
            <div class="c-product-container14">
              <img alt="image"
                src="https://images.unsplash.com/photo-1656516401254-b333b9f79678?ixid=Mnw5MTMyMXwwfDF8YWxsfDE0fHx8fHx8Mnx8MTY1NjU3NDQ0OA&amp;ixlib=rb-1.2.1&amp;w=200"
                class="c-product-profileimg" />
              <span class="c-product-text27"><span>Decy Abion</span></span>
            </div>
            <div class="c-product-container15">
              <img alt="pastedImage" src="/playground_assets/pastedimage-6kxu-1500h.png"
                class="c-product-pasted-image14" />
              <span class="c-product-description1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisiea commodo consequat.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name1"></app-footer>
  </div>
</template>

<script>
import Parse from 'parse';
import CHeader from '@/components/c-header'
import AppFooter from '@/components/footer'

export default {
  name: 'CProduct',
  components: {
    CHeader,
    AppFooter,
  },

  data() {
    return {
      ProductName: '',
      ProductPrice: '',
      ProductID: '',
      CategoryID: '',
      rawnu53: ' ',
      rawox4q: ' ',
      rawetbf: ' ',
      CategoryData: {},
    }
  },

  metaInfo: {
    title: 'C-Product - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-Product - exported project',
      },
    ],
  },

  methods: {
    async getProductData(ProductID) {
      var param = { "ProductID": ProductID };
      var data = JSON.parse(await Parse.Cloud.run("GetProductData", param));
      this.ProductName = data.ProductName;
      this.ProductPrice = data.ProductPrice;
      this.ProductDescription = data.ProductDescription;

      param = { "CategoryID": data.CategoryID };
      this.CategoryData = JSON.parse(await Parse.Cloud.run("GetCategoryData", param));
    },
  },
  beforeMount() {
    this.getProductData(this.$route.query.ProductID);
  }
}
</script>

<style scoped>
.c-product-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.c-product-container01 {
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  background-color: rgba(245, 245, 245, 1);
}

.c-product-link {
  width: auto;
  height: auto;
  display: flex;
  align-self: flex-start;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  padding-top: var(--dl-space-space-unit);
  border-color: transparent;
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
}

.c-product-button {
  width: auto;
  height: 2rem;
  display: flex;
  padding: 0px;
  align-self: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-halfunit);
  flex-direction: row;
  background-color: transparent;
}

.c-product-text {
  color: rgba(1, 158, 219, 1);
  width: auto;
  font-size: 15px;
  align-self: center;
}

.c-product-pasted-image {
  height: 1rem;
  align-self: center;
}

.c-product-button1 {
  width: auto;
  height: 2rem;
  display: flex;
  padding: 0px;
  align-self: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-halfunit);
  flex-direction: row;
  background-color: transparent;
}

.c-product-text01 {
  color: rgba(1, 158, 219, 1);
  font-size: 15px;
  align-self: center;
}

.c-product-pasted-image01 {
  height: 1rem;
  align-self: center;
}

.c-product-text02 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 15.000000953674316px;
  align-self: center;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-product-product {
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
  justify-content: space-between;
}

.c-product-product-preview {
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  box-sizing: border-box;
  flex-shrink: 1;
  border-color: transparent;
}

.c-product-smaillpreview {
  width: auto;
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: space-between;
}

.c-product-smallproductimg1 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  border-width: 0px;
  flex-direction: row;
  background-color: transparent;
}

.c-product-smallproductimg11 {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 15px;
}

.c-product-smallproductimg2 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  border-width: 0px;
  flex-direction: row;
  background-color: transparent;
}

.c-product-smallproductimg21 {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 15px;
}

.c-product-smallproductimg3 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  border-width: 0px;
  flex-direction: row;
  background-color: transparent;
}

.c-product-smallproductimg31 {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 15px;
}

.c-product-smallproductimg4 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  border-width: 0px;
  flex-direction: row;
  background-color: transparent;
}

.c-product-smallproductimg41 {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 15px;
}

.c-product-smallproductimg5 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  border-width: 0px;
  margin-bottom: 0px;
  flex-direction: row;
  background-color: transparent;
}

.c-product-smallproductimg51 {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 15px;
}

.c-product-bigpreview {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.c-product-img-preview {
  width: auto;
  display: flex;
  padding: 0px;
  align-self: center;
  border-width: 0px;
  flex-direction: row;
  background-color: transparent;
}

.c-product-productimg {
  width: 480px;
  height: 480px;
  object-fit: cover;
  border-radius: 15px;
}

.c-product-smaillpreview1 {
  width: auto;
  height: auto;
  display: none;
  align-items: flex-start;
  margin-right: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: flex-start;
}

.c-product-smallproductimg12 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  border-width: 0px;
  margin-bottom: 20px;
  flex-direction: row;
  background-color: transparent;
}

.c-product-smallproductimg13 {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 15px;
}

.c-product-smallproductimg22 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  border-width: 0px;
  margin-bottom: 20px;
  flex-direction: row;
  background-color: transparent;
}

.c-product-smallproductimg23 {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 15px;
}

.c-product-smallproductimg32 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  border-width: 0px;
  margin-bottom: 20px;
  flex-direction: row;
  background-color: transparent;
}

.c-product-smallproductimg33 {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 15px;
}

.c-product-smallproductimg42 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  border-width: 0px;
  margin-bottom: 20px;
  flex-direction: row;
  background-color: transparent;
}

.c-product-smallproductimg43 {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 15px;
}

.c-product-smallproductimg52 {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  border-width: 0px;
  margin-bottom: 0px;
  flex-direction: row;
  background-color: transparent;
}

.c-product-smallproductimg53 {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 15px;
}

.c-product-product-specification {
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  margin-left: var(--dl-space-space-oneandhalfunits);
  border-color: transparent;
  flex-direction: column;
}

.c-product-s-h-o-p-n-a-m-e {
  width: auto;
  height: 1rem;
  display: flex;
  padding: 0px;
  align-self: flex-start;
  border-width: 0px;
  flex-direction: row;
  background-color: transparent;
}

.c-product-icon {
  width: auto;
  height: 100%;
  object-fit: cover;
}

.c-product-shop {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: 1rem;
  font-size: 16px;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  margin-left: var(--dl-space-space-halfunit);
  font-stretch: normal;
}

.c-product-p-r-o-d-u-c-t-n-a-m-e {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 30px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  padding-top: var(--dl-space-space-unit);
  font-stretch: normal;
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}

.c-product-ratings-and-sales {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: space-between;
}

.c-product-pasted-image02 {
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-xsmall);
  object-fit: cover;
  margin-right: var(--dl-space-space-oneandhalfunits);
}

.c-product-text03 {
  font-size: 14px;
  margin-right: var(--dl-space-space-oneandhalfunits);
}

.c-product-text05 {
  color: var(--dl-color-gray-700);
}

.c-product-text06 {
  font-size: 14px;
}

.c-product-text08 {
  color: var(--dl-color-gray-700);
}

.c-product-p-r-i-c-e {
  color: rgba(1, 158, 219, 1);
  width: auto;
  height: auto;
  font-size: 25px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}

.c-product-product-details {
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  justify-content: flex-start;
}

.c-product-details {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 16px;
  align-self: flex-start;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}

.c-product-description {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 14px;
  align-self: flex-start;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  padding-left: var(--dl-space-space-twounits);
  text-decoration: none;
}

.c-product-shipping {
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  justify-content: flex-start;
}

.c-product-shipping1 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  min-width: 80px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}

.c-product-text09 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-product-variations {
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  justify-content: flex-start;
}

.c-product-variations1 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  min-width: 80px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}

.c-product-variationbtn {
  width: auto;
  height: auto;
  font-size: 14;
  background-color: transparent;
}

.c-product-quantity {
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.c-product-quantity1 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 16px;
  min-width: 80px;
  align-self: center;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}

.c-product-q-u-a-n-t-i-t-y2 {
  width: auto;
  height: auto;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
}

.c-product-button2 {
  width: 1rem;
  height: auto;
  padding: 0px;
  font-size: 14px;
  text-align: center;
  transition: 0.3s;
  border-color: #bfbfbf;
  border-radius: 0px;
}

.c-product-button2:hover {
  border-width: 0px;
  background-color: #a6d9ef;
}

.c-product-text10 {
  font-size: 13px;
}

.c-product-text12 {
  text-align: center;
}

.c-product-quantity-indicator {
  font-size: 14px;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
}

.c-product-button3 {
  width: 1rem;
  height: auto;
  padding: 0px;
  font-size: 14px;
  text-align: center;
  transition: 0.3s;
  border-color: #bfbfbf;
  border-radius: 0px;
}

.c-product-button3:hover {
  border-width: 0px;
  background-color: #a6d9ef;
}

.c-product-text13 {
  font-size: 13px;
}

.c-product-buttons {
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}

.c-product-addtocartproduct {
  width: auto;
  height: auto;
  display: flex;
  font-size: 12px;
  transition: 0.3s;
  margin-right: var(--dl-space-space-unit);
  border-radius: 15px;
  flex-direction: row;
  background-color: transparent;
}

.c-product-addtocartproduct:hover {
  border-color: #bfbfbf;
  background-color: #a6d9ef;
}

.c-product-icon02 {
  width: 1rem;
  height: auto;
  align-self: center;
  margin-right: var(--dl-space-space-halfunit);
}

.c-product-addto-cart {
  font-size: 14px;
  align-self: center;
}

.c-product-addtocartproduct1 {
  width: auto;
  height: auto;
  display: flex;
  font-size: 12px;
  align-self: stretch;
  transition: 0.3s;
  border-radius: 15px;
  flex-direction: row;
  background-color: transparent;
}

.c-product-addtocartproduct1:hover {
  border-color: #bfbfbf;
  background-color: #a6d9ef;
}

.c-product-addto-cart1 {
  font-size: 14px;
  align-self: center;
}

.c-product-details1 {
  display: none;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-product-item-details {
  display: flex;
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
}

.c-product-item-details:hover {
  background-color: #D9D9D9;
}

.c-product-icon06 {
  width: 24px;
  height: 24px;
}

.c-product-shipping-details {
  display: flex;
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
}

.c-product-shipping-details:hover {
  background-color: #D9D9D9;
}

.c-product-icon08 {
  width: 24px;
  height: 24px;
}

.c-product-shipping-details1 {
  display: flex;
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
}

.c-product-shipping-details1:hover {
  background-color: #D9D9D9;
}

.c-product-icon10 {
  width: 24px;
  height: 24px;
}

.c-product-container02 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: column;
  border-top-width: 1px;
}

.c-product-container03 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.c-product-text21 {
  padding: var(--dl-space-space-unit);
  font-size: 20px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 500;
}

.c-product-container04 {
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.c-product-container05 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.c-product-text23 {
  font-size: 50px;
  align-self: stretch;
  font-style: normal;
  text-align: center;
  font-weight: 400;
}

.c-product-pasted-image03 {
  width: 100%;
  height: 1rem;
}

.c-product-container06 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: stretch;
  flex-direction: column;
}

.c-product-container07 {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-product-pasted-image04 {
  width: var(--dl-size-size-medium);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
}

.c-product-pasted-image05 {
  width: 100%;
  height: var(--dl-size-size-xsmall);
}

.c-product-container08 {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-product-pasted-image06 {
  width: var(--dl-size-size-medium);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
}

.c-product-pasted-image07 {
  width: 100%;
  height: var(--dl-size-size-xsmall);
}

.c-product-container09 {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-product-pasted-image08 {
  width: var(--dl-size-size-medium);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
}

.c-product-pasted-image09 {
  width: 100%;
  height: var(--dl-size-size-xsmall);
}

.c-product-container10 {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-product-pasted-image10 {
  width: var(--dl-size-size-medium);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
}

.c-product-pasted-image11 {
  width: 100%;
  height: var(--dl-size-size-xsmall);
}

.c-product-container11 {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-product-pasted-image12 {
  width: var(--dl-size-size-medium);
  margin-right: var(--dl-space-space-unit);
}

.c-product-pasted-image13 {
  width: 100%;
  height: var(--dl-size-size-xsmall);
}

.c-product-container12 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.c-product-text25 {
  padding: var(--dl-space-space-unit);
  font-size: 20px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 500;
}

.c-product-container13 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
}

.c-product-container14 {
  width: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  padding-right: 16px;
  flex-direction: row;
  justify-content: space-between;
}

.c-product-profileimg {
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-medium);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}

.c-product-text27 {
  width: auto;
  margin-left: var(--dl-space-space-unit);
}

.c-product-container15 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.c-product-pasted-image14 {
  width: auto;
  height: 1rem;
  margin-bottom: var(--dl-space-space-halfunit);
}

.c-product-description1 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 14px;
  align-self: flex-start;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-product-container16 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
}

.c-product-container17 {
  width: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  padding-right: 16px;
  flex-direction: row;
  justify-content: space-between;
}

.c-product-profileimg1 {
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-medium);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}

.c-product-text29 {
  width: auto;
  margin-left: var(--dl-space-space-unit);
}

.c-product-container18 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.c-product-pasted-image15 {
  width: auto;
  height: 1rem;
  margin-bottom: var(--dl-space-space-halfunit);
}

.c-product-description2 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 14px;
  align-self: flex-start;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-product-container19 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
}

.c-product-container20 {
  width: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  padding-right: 16px;
  flex-direction: row;
  justify-content: space-between;
}

.c-product-profileimg2 {
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-medium);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}

.c-product-text31 {
  width: auto;
  margin-left: var(--dl-space-space-unit);
}

.c-product-container21 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.c-product-pasted-image16 {
  width: auto;
  height: 1rem;
  margin-bottom: var(--dl-space-space-halfunit);
}

.c-product-description3 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 14px;
  align-self: flex-start;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

@media(max-width: 991px) {
  .c-product-product {
    padding: var(--dl-space-space-oneandhalfunits);
  }

  .c-product-product-preview {
    width: 100%;
    height: 100%;
    align-self: stretch;
    margin-left: 0px;
    flex-direction: column;
  }

  .c-product-smaillpreview {
    display: none;
    margin-right: var(--dl-space-space-halfunit);
  }

  .c-product-smallproductimg1 {
    margin-bottom: 6px;
  }

  .c-product-smallproductimg11 {
    width: 55px;
    height: 55px;
  }

  .c-product-smallproductimg2 {
    margin-bottom: 6px;
  }

  .c-product-smallproductimg21 {
    width: 55px;
    height: 55px;
  }

  .c-product-smallproductimg3 {
    margin-bottom: 6px;
  }

  .c-product-smallproductimg31 {
    width: 55px;
    height: 55px;
  }

  .c-product-smallproductimg4 {
    margin-bottom: 6px;
  }

  .c-product-smallproductimg41 {
    width: 55px;
    height: 55px;
  }

  .c-product-smallproductimg51 {
    width: 55px;
    height: 55px;
  }

  .c-product-bigpreview {
    justify-content: center;
  }

  .c-product-img-preview {
    align-self: center;
  }

  .c-product-productimg {
    width: 100%;
    height: 400px;
    align-self: center;
  }

  .c-product-smaillpreview1 {
    width: 100%;
    display: flex;
    margin-top: var(--dl-space-space-halfunit);
    margin-right: 0px;
    flex-direction: row;
    justify-content: space-between;
  }

  .c-product-smallproductimg12 {
    margin-bottom: 6px;
  }

  .c-product-smallproductimg13 {
    width: 70px;
    height: 70px;
  }

  .c-product-smallproductimg22 {
    margin-bottom: 6px;
  }

  .c-product-smallproductimg23 {
    width: 70px;
    height: 70px;
    margin-left: 2px;
    margin-right: 2px;
  }

  .c-product-smallproductimg32 {
    margin-bottom: 6px;
  }

  .c-product-smallproductimg33 {
    width: 70px;
    height: 70px;
  }

  .c-product-smallproductimg42 {
    margin-bottom: 6px;
  }

  .c-product-smallproductimg43 {
    width: 70px;
    height: 70px;
    margin-left: 2px;
    margin-right: 2px;
  }

  .c-product-smallproductimg53 {
    width: 70px;
    height: 70px;
  }

  .c-product-product-specification {
    width: 100%;
    align-self: stretch;
    margin-left: var(--dl-space-space-oneandhalfunits);
  }

  .c-product-icon {
    width: auto;
    height: 100%;
    align-self: flex-start;
  }

  .c-product-shop {
    font-size: 14px;
  }

  .c-product-p-r-o-d-u-c-t-n-a-m-e {
    font-size: 26px;
  }

  .c-product-text03 {
    font-size: 12px;
  }

  .c-product-text06 {
    font-size: 12px;
  }

  .c-product-p-r-i-c-e {
    font-size: 16px;
  }

  .c-product-details {
    font-size: 14px;
  }

  .c-product-description {
    font-size: 12px;
  }

  .c-product-shipping1 {
    font-size: 14px;
  }

  .c-product-text09 {
    font-size: 12px;
  }

  .c-product-variations1 {
    font-size: 14px;
  }

  .c-product-quantity1 {
    font-size: 14px;
  }

  .c-product-quantity-indicator {
    font-size: 12px;
  }

  .c-product-addtocartproduct {
    padding-top: var(--dl-space-space-halfunit);
    padding-left: var(--dl-space-space-halfunit);
    padding-right: var(--dl-space-space-halfunit);
    padding-bottom: var(--dl-space-space-halfunit);
  }

  .c-product-icon02 {
    width: var(--dl-size-size-xsmall);
  }

  .c-product-addto-cart {
    font-size: 12px;
  }

  .c-product-addtocartproduct1 {
    padding-top: var(--dl-space-space-halfunit);
    padding-left: var(--dl-space-space-halfunit);
    padding-right: var(--dl-space-space-halfunit);
    padding-bottom: var(--dl-space-space-halfunit);
  }

  .c-product-addto-cart1 {
    font-size: 12px;
  }

  .c-product-description1 {
    font-size: 12px;
  }

  .c-product-description2 {
    font-size: 12px;
  }

  .c-product-description3 {
    font-size: 12px;
  }
}

@media(max-width: 767px) {
  .c-product-product {
    padding: 0px;
    align-self: stretch;
    flex-direction: column;
    justify-content: space-between;
  }

  .c-product-product-preview {
    align-self: flex-start;
    align-items: flex-start;
    margin-left: 0px;
    flex-direction: column;
    justify-content: center;
  }

  .c-product-smaillpreview {
    display: none;
    align-items: flex-start;
  }

  .c-product-bigpreview {
    align-self: flex-start;
    align-items: center;
    justify-content: flex-start;
  }

  .c-product-img-preview {
    width: 100%;
    height: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }

  .c-product-productimg {
    width: 100%;
    height: auto;
    border-radius: 0px;
  }

  .c-product-smaillpreview1 {
    display: none;
    align-items: flex-start;
  }

  .c-product-product-specification {
    padding: var(--dl-space-space-unit);
    align-self: flex-start;
    margin-left: 0px;
    margin-right: 0px;
  }

  .c-product-s-h-o-p-n-a-m-e {
    display: none;
  }

  .c-product-icon {
    height: 100%;
  }

  .c-product-shop {
    font-size: 16px;
  }

  .c-product-p-r-o-d-u-c-t-n-a-m-e {
    font-size: 26px;
    margin-bottom: var(--dl-space-space-halfunit);
  }

  .c-product-text03 {
    font-size: 10px;
  }

  .c-product-text06 {
    font-size: 10px;
  }

  .c-product-p-r-i-c-e {
    font-size: 18px;
  }

  .c-product-product-details {
    margin-bottom: var(--dl-space-space-unit);
  }

  .c-product-details {
    font-size: 12px;
    margin-bottom: var(--dl-space-space-halfunit);
  }

  .c-product-description {
    padding-left: var(--dl-space-space-unit);
  }

  .c-product-shipping {
    margin-bottom: var(--dl-space-space-unit);
  }

  .c-product-shipping1 {
    font-size: 12px;
  }

  .c-product-variations {
    margin-bottom: var(--dl-space-space-unit);
  }

  .c-product-variations1 {
    font-size: 12px;
  }

  .c-product-variationbtn {
    font-size: 12;
  }

  .c-product-quantity1 {
    font-size: 12px;
  }

  .c-product-addto-cart {
    font-size: 10px;
  }

  .c-product-addtocartproduct1 {
    align-self: stretch;
  }

  .c-product-addto-cart1 {
    font-size: 10px;
  }

  .c-product-details1 {
    display: flex;
    padding: var(--dl-space-space-unit);
    align-self: stretch;
    margin-top: var(--dl-space-space-unit);
  }

  .c-product-item-details {
    display: none;
    background-color: var(--dl-color-gray-white);
  }

  .c-product-shipping-details {
    display: none;
    background-color: var(--dl-color-gray-white);
  }

  .c-product-shipping-details1 {
    width: 100%;
    padding: var(--dl-space-space-unit);
    align-items: center;
    border-color: var(--dl-color-gray-700);
    border-width: 1px;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--dl-color-gray-white);
  }

  .c-product-button6 {
    border-width: 0px;
  }

  .c-product-container02 {
    display: none;
  }

  .c-product-description1 {
    padding-left: var(--dl-space-space-unit);
  }

  .c-product-description2 {
    padding-left: var(--dl-space-space-unit);
  }

  .c-product-description3 {
    padding-left: var(--dl-space-space-unit);
  }
}

@media(max-width: 470px) {
  .c-product-link {
    width: auto;
    height: auto;
    align-self: center;
  }

  .c-product-button {
    height: auto;
  }

  .c-product-text {
    font-size: 12px;
  }

  .c-product-button1 {
    height: auto;
  }

  .c-product-text01 {
    font-size: 12px;
  }

  .c-product-text02 {
    font-size: 12px;
  }

  .c-product-product {
    margin-top: 0px;
    padding-left: 0px;
    margin-bottom: var(--dl-space-space-unit);
    padding-right: 0px;
    flex-direction: column;
  }

  .c-product-product-preview {
    width: 100%;
    height: auto;
    max-width: var(--dl-size-size-maxwidth);
    margin-left: 0px;
    margin-right: 0px;
    flex-direction: column;
  }

  .c-product-smaillpreview {
    display: none;
    align-self: center;
    margin-top: var(--dl-space-space-halfunit);
    padding-top: var(--dl-space-space-halfunit);
    margin-right: 0px;
    padding-left: var(--dl-space-space-halfunit);
    padding-right: var(--dl-space-space-halfunit);
    flex-direction: row;
    padding-bottom: var(--dl-space-space-halfunit);
  }

  .c-product-smallproductimg1 {
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: 0px;
  }

  .c-product-smallproductimg2 {
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: 0px;
  }

  .c-product-smallproductimg3 {
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: 0px;
  }

  .c-product-smallproductimg4 {
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: 0px;
  }

  .c-product-smallproductimg5 {
    margin-right: 0px;
    margin-bottom: 0px;
  }

  .c-product-productimg {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0px;
  }

  .c-product-smaillpreview1 {
    display: none;
    align-self: center;
    margin-top: var(--dl-space-space-halfunit);
    padding-top: var(--dl-space-space-halfunit);
    margin-right: 0px;
    padding-left: var(--dl-space-space-halfunit);
    padding-right: var(--dl-space-space-halfunit);
    flex-direction: row;
    padding-bottom: var(--dl-space-space-halfunit);
  }

  .c-product-smallproductimg12 {
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: 0px;
  }

  .c-product-smallproductimg22 {
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: 0px;
  }

  .c-product-smallproductimg32 {
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: 0px;
  }

  .c-product-smallproductimg42 {
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: 0px;
  }

  .c-product-smallproductimg52 {
    margin-right: 0px;
    margin-bottom: 0px;
  }

  .c-product-product-specification {
    width: 100%;
    margin-top: 0px;
    align-items: flex-start;
    margin-left: 0px;
    padding-top: var(--dl-space-space-unit);
    margin-right: 0px;
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
    justify-content: center;
  }

  .c-product-s-h-o-p-n-a-m-e {
    display: none;
    align-self: flex-start;
  }

  .c-product-icon {
    height: 100%;
  }

  .c-product-shop {
    font-size: 12px;
    align-self: center;
  }

  .c-product-p-r-o-d-u-c-t-n-a-m-e {
    font-size: 22px;
    margin-top: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .c-product-ratings-and-sales {
    align-self: flex-start;
    margin-top: var(--dl-space-space-halfunit);
    align-items: center;
  }

  .c-product-p-r-i-c-e {
    font-size: 20px;
  }

  .c-product-product-details {
    display: none;
    margin-bottom: var(--dl-space-space-unit);
  }

  .c-product-details {
    font-size: 14px;
    margin-bottom: var(--dl-space-space-halfunit);
  }

  .c-product-description {
    font-size: 12px;
    padding-left: var(--dl-space-space-unit);
  }

  .c-product-shipping {
    display: none;
  }

  .c-product-text09 {
    font-size: 10px;
  }

  .c-product-variations {
    margin-bottom: var(--dl-space-space-unit);
  }

  .c-product-variations1 {
    font-size: 14px;
  }

  .c-product-quantity {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .c-product-quantity1 {
    font-size: 14px;
  }

  .c-product-buttons {
    width: 100%;
    align-self: center;
    justify-content: center;
  }

  .c-product-details1 {
    width: 100%;
    display: flex;
    padding: var(--dl-space-space-unit);
    flex-direction: column;
  }

  .c-product-item-details {
    width: 100%;
    display: flex;
    padding: var(--dl-space-space-unit);
    align-self: flex-start;
    align-items: center;
    border-color: var(--dl-color-gray-900);
    border-width: 1px;
    flex-direction: row;
    justify-content: space-between;
  }

  .c-product-button4 {
    padding: 0px;
    position: relative;
    border-width: 0px;
    background-color: transparent;
  }

  .c-product-text15 {
    width: auto;
    height: 100%;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
  }

  .c-product-icon06 {
    width: var(--dl-size-size-xsmall);
    height: auto;
    align-self: center;
  }

  .c-product-shipping-details {
    width: 100%;
    display: flex;
    padding: var(--dl-space-space-unit);
    align-self: flex-start;
    margin-top: var(--dl-space-space-halfunit);
    align-items: center;
    border-color: var(--dl-color-gray-900);
    border-width: 1px;
    flex-direction: row;
    justify-content: space-between;
  }

  .c-product-button5 {
    padding: 0px;
    position: relative;
    border-width: 0px;
    background-color: transparent;
  }

  .c-product-text17 {
    width: auto;
    height: 100%;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
  }

  .c-product-icon08 {
    width: var(--dl-size-size-xsmall);
    height: auto;
    align-self: center;
  }

  .c-product-shipping-details1 {
    width: 100%;
    padding: var(--dl-space-space-unit);
    align-self: flex-start;
    margin-top: var(--dl-space-space-halfunit);
    align-items: center;
    border-color: var(--dl-color-gray-900);
    border-width: 1px;
    flex-direction: row;
    justify-content: space-between;
  }

  .c-product-button6 {
    padding: 0px;
    position: relative;
    border-width: 0px;
    background-color: transparent;
  }

  .c-product-text19 {
    width: auto;
    height: 100%;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
  }

  .c-product-icon10 {
    width: var(--dl-size-size-xsmall);
    height: auto;
    align-self: center;
  }

  .c-product-container14 {
    width: auto;
    display: none;
    align-self: flex-start;
    margin-top: 0px;
    margin-left: var(--dl-space-space-twounits);
    margin-right: 0px;
    margin-bottom: 0px;
    flex-direction: row;
    justify-content: center;
  }

  .c-product-description1 {
    font-size: 12px;
    padding-left: var(--dl-space-space-unit);
  }

  .c-product-container17 {
    width: auto;
    display: none;
    align-self: flex-start;
    margin-top: 0px;
    margin-left: var(--dl-space-space-twounits);
    margin-right: 0px;
    margin-bottom: 0px;
    flex-direction: row;
    justify-content: center;
  }

  .c-product-description2 {
    font-size: 12px;
    padding-left: var(--dl-space-space-unit);
  }

  .c-product-container20 {
    width: auto;
    display: none;
    align-self: flex-start;
    margin-top: 0px;
    margin-left: var(--dl-space-space-twounits);
    margin-right: 0px;
    margin-bottom: 0px;
    flex-direction: row;
    justify-content: center;
  }

  .c-product-description3 {
    font-size: 12px;
    padding-left: var(--dl-space-space-unit);
  }
}
</style>
