<template>
  <div class="s-shop-statistics-container">
    <s-header rootClassName="s-header-root-class-name12"></s-header>
    <div class="s-shop-statistics-container01">
      <div class="s-shop-statistics-container02">
        <div class="s-shop-statistics-container03">
          <svg viewBox="0 0 1024 1024" class="s-shop-statistics-icon">
            <path
              d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"
            ></path>
          </svg>
          <span class="s-shop-statistics-text">Shop</span>
        </div>
      </div>
      <div class="s-shop-statistics-container04">
        <div class="s-shop-statistics-group149">
          <button class="s-shop-statistics-button button">
            <span class="s-shop-statistics-text01">Shipment &amp; Orders</span>
            <svg viewBox="0 0 1024 1024" class="s-shop-statistics-icon02">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
          <span class="s-shop-statistics-text02">All</span>
          <span class="s-shop-statistics-text03">Unpaid</span>
          <span class="s-shop-statistics-text04">To Ship</span>
          <span class="s-shop-statistics-text05">Shipping</span>
          <span class="s-shop-statistics-text06">Completed</span>
          <span class="s-shop-statistics-text07">Cancellation</span>
          <span class="s-shop-statistics-text08">Return/Refund</span>
        </div>
        <div class="s-shop-statistics-group150">
          <button class="s-shop-statistics-button1 button">
            <span class="s-shop-statistics-text09">Product</span>
            <svg viewBox="0 0 1024 1024" class="s-shop-statistics-icon04">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
          <span class="s-shop-statistics-text10">Add New Product</span>
          <span class="s-shop-statistics-text11">All</span>
          <span class="s-shop-statistics-text12">Live</span>
          <span class="s-shop-statistics-text13">Sold Out</span>
          <span class="s-shop-statistics-text14">Violation</span>
        </div>
        <div class="s-shop-statistics-group151">
          <button class="s-shop-statistics-button2 button">
            <span class="s-shop-statistics-text15">Discount Promotions</span>
            <svg viewBox="0 0 1024 1024" class="s-shop-statistics-icon06">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
          <span class="s-shop-statistics-text16">All</span>
          <span class="s-shop-statistics-text17">Ongoing</span>
          <span class="s-shop-statistics-text18">Upcoming</span>
          <span class="s-shop-statistics-text19">Expired</span>
        </div>
        <div class="s-shop-statistics-container05">
          <button class="s-shop-statistics-button3 button">
            <span class="s-shop-statistics-text20">Income Details</span>
            <svg viewBox="0 0 1024 1024" class="s-shop-statistics-icon08">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
        </div>
        <div class="s-shop-statistics-container06">
          <button class="s-shop-statistics-button4 button">
            <span class="s-shop-statistics-text21">Chat Auto Reply</span>
            <svg viewBox="0 0 1024 1024" class="s-shop-statistics-icon10">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
        </div>
        <div class="s-shop-statistics-group152">
          <button class="s-shop-statistics-button5 button">
            <span class="s-shop-statistics-text22">Shop</span>
            <svg viewBox="0 0 1024 1024" class="s-shop-statistics-icon12">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
          <span class="s-shop-statistics-text23">Shop Rating</span>
          <span class="s-shop-statistics-text24">
            Shop Profile and Decoration
          </span>
        </div>
        <div class="s-shop-statistics-group153">
          <button class="s-shop-statistics-button6 button">
            <span class="s-shop-statistics-text25">Settings</span>
            <svg viewBox="0 0 1024 1024" class="s-shop-statistics-icon14">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
          <span class="s-shop-statistics-text26">My Addresses</span>
          <span class="s-shop-statistics-text27">Account</span>
        </div>
      </div>
      <div class="s-shop-statistics-container07">
        <div class="s-shop-statistics-container08">
          <div class="s-shop-statistics-container09">
            <span class="s-shop-statistics-text28">
              Product and Category Sales Ranking
            </span>
          </div>
        </div>
        <div class="s-shop-statistics-container10">
          <div class="s-shop-statistics-container11">
            <span class="s-shop-statistics-text29">Product Sales</span>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHx0YWJsZXxlbnwwfHx8fDE2NTY2Nzg1ODk&amp;ixlib=rb-1.2.1&amp;h=300"
              class="s-shop-statistics-image"
            />
          </div>
          <div class="s-shop-statistics-container12">
            <span class="s-shop-statistics-text30">Category Sales</span>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHx0YWJsZXxlbnwwfHx8fDE2NTY2Nzg1ODk&amp;ixlib=rb-1.2.1&amp;h=300"
              class="s-shop-statistics-image1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SHeader from '../components/s-header'

export default {
  name: 'SShopStatistics',
  components: {
    SHeader,
  },
  metaInfo: {
    title: 'S-Shop-Statistics - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'S-Shop-Statistics - exported project',
      },
    ],
  },
}
</script>

<style scoped>
.s-shop-statistics-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.s-shop-statistics-container01 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  align-items: flex-start;
  flex-direction: row;
}
.s-shop-statistics-container02 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.s-shop-statistics-container03 {
  display: none;
  align-items: flex-start;
  flex-direction: row;
}
.s-shop-statistics-icon {
  width: 24px;
  height: 24px;
}
.s-shop-statistics-container04 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: column;
  border-right-width: 1px;
}
.s-shop-statistics-group149 {
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  box-sizing: border-box;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
}
.s-shop-statistics-button {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-shop-statistics-text01 {
  font-style: normal;
  font-weight: 700;
}
.s-shop-statistics-icon02 {
  width: 24px;
  height: 24px;
}
.s-shop-statistics-text02 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text03 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text04 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text05 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text06 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text07 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text08 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-group150 {
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  box-sizing: border-box;
  align-items: stretch;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
}
.s-shop-statistics-button1 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  max-width: auto;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-shop-statistics-text09 {
  font-style: normal;
  font-weight: 700;
}
.s-shop-statistics-icon04 {
  width: 24px;
  height: 24px;
}
.s-shop-statistics-text10 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text11 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text12 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text13 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text14 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-group151 {
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  box-sizing: border-box;
  align-items: stretch;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
}
.s-shop-statistics-button2 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  max-width: auto;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-shop-statistics-text15 {
  font-style: normal;
  font-weight: 700;
}
.s-shop-statistics-icon06 {
  width: 24px;
  height: 24px;
}
.s-shop-statistics-text16 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text17 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text18 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text19 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-container05 {
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: stretch;
  flex-direction: column;
}
.s-shop-statistics-button3 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  max-width: auto;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-shop-statistics-text20 {
  font-style: normal;
  font-weight: 700;
}
.s-shop-statistics-icon08 {
  width: 24px;
  height: 24px;
}
.s-shop-statistics-container06 {
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: stretch;
  flex-direction: column;
}
.s-shop-statistics-button4 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  max-width: auto;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-shop-statistics-text21 {
  font-style: normal;
  font-weight: 700;
}
.s-shop-statistics-icon10 {
  width: 24px;
  height: 24px;
}
.s-shop-statistics-group152 {
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  box-sizing: border-box;
  align-items: stretch;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
}
.s-shop-statistics-button5 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  max-width: auto;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-shop-statistics-text22 {
  font-style: normal;
  font-weight: 700;
}
.s-shop-statistics-icon12 {
  width: 24px;
  height: 24px;
}
.s-shop-statistics-text23 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text24 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-group153 {
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  box-sizing: border-box;
  align-items: stretch;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
}
.s-shop-statistics-button6 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  max-width: auto;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-shop-statistics-text25 {
  font-style: normal;
  font-weight: 700;
}
.s-shop-statistics-icon14 {
  width: 24px;
  height: 24px;
}
.s-shop-statistics-text26 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-text27 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-shop-statistics-container07 {
  flex: 1;
  width: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  flex-direction: column;
}
.s-shop-statistics-container08 {
  display: flex;
  flex-direction: column;
}
.s-shop-statistics-container09 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
}
.s-shop-statistics-text28 {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
}
.s-shop-statistics-container10 {
  display: flex;
  padding: var(--dl-space-space-unit);
  flex-direction: column;
}
.s-shop-statistics-container11 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: column;
}
.s-shop-statistics-text29 {
  padding: var(--dl-space-space-unit);
  align-self: center;
  font-style: normal;
  font-weight: 700;
}
.s-shop-statistics-image {
  width: auto;
  height: var(--dl-size-size-xxlarge);
  align-self: stretch;
  object-fit: cover;
}
.s-shop-statistics-container12 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: column;
}
.s-shop-statistics-text30 {
  padding: var(--dl-space-space-unit);
  align-self: center;
  font-style: normal;
  font-weight: 700;
}
.s-shop-statistics-image1 {
  width: auto;
  height: var(--dl-size-size-xxlarge);
  align-self: stretch;
  object-fit: cover;
}
@media(max-width: 991px) {
  .s-shop-statistics-container04 {
    padding: var(--dl-space-space-halfunit);
  }
  .s-shop-statistics-text01 {
    min-width: auto;
  }
  .s-shop-statistics-container07 {
    padding: var(--dl-space-space-halfunit);
  }
}
@media(max-width: 767px) {
  .s-shop-statistics-container01 {
    flex-direction: column;
  }
  .s-shop-statistics-container02 {
    align-self: stretch;
    padding-top: var(--dl-space-space-halfunit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-halfunit);
    justify-content: space-between;
  }
  .s-shop-statistics-container03 {
    display: flex;
    align-items: center;
  }
  .s-shop-statistics-icon {
    width: var(--dl-size-size-xsmall);
    height: var(--dl-size-size-xsmall);
  }
  .s-shop-statistics-text {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    margin-left: var(--dl-space-space-halfunit);
  }
  .s-shop-statistics-container04 {
    display: none;
  }
  .s-shop-statistics-text01 {
    width: auto;
  }
  .s-shop-statistics-container07 {
    padding: var(--dl-space-space-unit);
  }
  .s-shop-statistics-container09 {
    justify-content: center;
  }
}
@media(max-width: 470px) {
  .s-shop-statistics-container01 {
    flex: 1;
  }
  .s-shop-statistics-container02 {
    padding-top: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
  }
  .s-shop-statistics-text {
    font-size: 16px;
  }
  .s-shop-statistics-container07 {
    padding: var(--dl-space-space-halfunit);
  }
  .s-shop-statistics-container09 {
    justify-content: center;
  }
  .s-shop-statistics-text28 {
    font-size: 18px;
  }
}
</style>
