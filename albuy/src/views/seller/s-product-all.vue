<template>
  <div class="s-product-all-container">
    <s-header rootClassName="s-header-root-class-name3"></s-header>
    <div class="s-product-all-container01">
      <div class="s-product-all-container02">
        <svg viewBox="0 0 1024 1024" class="s-product-all-icon">
          <path
            d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"
          ></path>
        </svg>
      </div>
      <div class="s-product-all-container03">
        <div class="s-product-all-group149">
          <button class="s-product-all-button button">
            <span class="s-product-all-text">Shipment &amp; Orders</span>
            <svg viewBox="0 0 1024 1024" class="s-product-all-icon02">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
          <span @click="switchTab('shipment_and_orders','all')" :class="[currentMenu=='shipment_and_orders' && currentTab=='all' ? 's-product-all-text10' : 's-product-all-text01']">All</span>
          <span @click="switchTab('shipment_and_orders','unpaid')" :class="[currentMenu=='shipment_and_orders' && currentTab=='unpaid' ? 's-product-all-text10' : 's-product-all-text02']" >Unpaid</span>
          <span @click="switchTab('shipment_and_orders','toship')" :class="[currentMenu=='shipment_and_orders' && currentTab=='toship' ? 's-product-all-text10' : 's-product-all-text03']" >To Ship</span>
          <span @click="switchTab('shipment_and_orders','shipping')" :class="[currentMenu=='shipment_and_orders' && currentTab=='shipping' ? 's-product-all-text10' : 's-product-all-text04']" >Shipping</span>
          <span @click="switchTab('shipment_and_orders','completed')" :class="[currentMenu=='shipment_and_orders' && currentTab=='completed' ? 's-product-all-text10' : 's-product-all-text05']">Completed</span>
          <span @click="switchTab('shipment_and_orders','cancellation')" :class="[currentMenu=='shipment_and_orders' && currentTab=='cancellation' ? 's-product-all-text10' : 's-product-all-text06']">Cancellation</span>
          <span  @click="switchTab('shipment_and_orders','return')" :class="[currentMenu=='shipment_and_orders' && currentTab=='return' ? 's-product-all-text10' : 's-product-all-text07']">Return/Refund</span>
        </div>

        <div class="s-product-all-group150">
          <button class="s-product-all-button01 button">
            <span class="s-product-all-text08">Product</span>
            <svg viewBox="0 0 1024 1024" class="s-product-all-icon04">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
          <span class="s-product-all-text09">Add New Product</span>
          <span @click="switchTab('product', 'all')" :class="[currentMenu=='product' && currentTab=='all' ? 's-product-all-text10' : 's-product-all-text09']" >All</span>
          <span @click="switchTab('product', 'live')" :class="[currentMenu=='product' && currentTab=='live' ? 's-product-all-text10' : 's-product-all-text11']" >Live</span>
          <span @click="switchTab('product', 'soldout')" :class="[currentMenu=='product' && currentTab=='soldout' ? 's-product-all-text10' : 's-product-all-text12']">Sold Out</span>
          <span @click="switchTab('product', 'violation')" :class="[currentMenu=='product' && currentTab=='violation' ? 's-product-all-text10' : 's-product-all-text13']">Violation</span>
        </div>

        <div class="s-product-all-group151">
          <button class="s-product-all-button02 button">
            <span class="s-product-all-text14">Discount Promotions</span>
            <svg viewBox="0 0 1024 1024" class="s-product-all-icon06">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
          <span @click="switchTab('discount_promotions', 'all')" :class="[currentMenu=='discount_promotions' && currentTab=='all' ? 's-product-all-text10' : 's-product-all-text15']" >All</span>
          <span @click="switchTab('discount_promotions', 'ongoing')" :class="[currentMenu=='discount_promotions' && currentTab=='ongoing' ? 's-product-all-text10' : 's-product-all-text16']" >Ongoing</span>
          <span @click="switchTab('discount_promotions', 'upcomming')" :class="[currentMenu=='discount_promotions' && currentTab=='upcomming' ? 's-product-all-text10' : 's-product-all-text17']">Upcoming</span>
          <span @click="switchTab('discount_promotions', 'expired')" :class="[currentMenu=='discount_promotions' && currentTab=='expired' ? 's-product-all-text10' : 's-product-all-text17']">Expired</span>
        </div>
        <div class="s-product-all-container04">
          <button class="s-product-all-button03 button">
            <span class="s-product-all-text19">Income Details</span>
            <svg viewBox="0 0 1024 1024" class="s-product-all-icon08">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
        </div>
        <div class="s-product-all-container05">
          <button class="s-product-all-button04 button">
            <span @click="switchTab('chat_auto_reply', '')" :class="[currentMenu=='chat_auto_reply' ? 's-product-all-text10' : 's-product-all-text20']">Chat Auto Reply</span>
            <svg viewBox="0 0 1024 1024" class="s-product-all-icon10">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
        </div>
        <div class="s-product-all-group152">
          <button class="s-product-all-button05 button">
            <span class="s-product-all-text21">Shop</span>
            <svg viewBox="0 0 1024 1024" class="s-product-all-icon12">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
          <span @click="switchTab('shop_rating', '')" :class="[currentMenu=='shop_rating' ? 's-product-all-text10' : 's-product-all-text22']">Shop Rating</span>
          <span @click="switchTab('shop_profile_and_decoration', '')" :class="[currentMenu=='shop_profile_and_decoration' ? 's-product-all-text10' : 's-product-all-text23']">Shop Profile and Decoration</span>
        </div>
        <div class="s-product-all-group153">
          <button class="s-product-all-button06 button">
            <span class="s-product-all-text24">Settings</span>
            <svg viewBox="0 0 1024 1024" class="s-product-all-icon14">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
          <span @click="switchTab('settings_my_address', '')" :class="[currentMenu=='settings_my_address' ? 's-product-all-text10' : 's-product-all-text25']">My Addresses</span>
          <span @click="switchTab('settings_account', '')" :class="[currentMenu=='settings_account' ? 's-product-all-text10' : 's-product-all-text26']">Account</span>
        </div>
      </div>

      <!--SHIPMENTS AND ORDERS-->
      <div v-if="currentMenu=='shipment_and_orders'" class="s-shipment-and-orders-container05">
        <div class="s-shipment-and-orders-group126">
          <button class="s-shipment-and-orders-button07 button">
            <span class="s-shipment-and-orders-text27">All</span>
            <svg viewBox="0 0 1024 1024" class="s-shipment-and-orders-icon14">
              <path d="M298 426h428l-214 214z"></path>
            </svg>
          </button>
          <span @click="switchTab('shipment_and_orders','all')" :class="[currentTab=='all' ? 's-shipment-and-orders-text28' : 's-shipment-and-orders-text29']" >All</span>
          <span @click="switchTab('shipment_and_orders','unpaid')" :class="[currentTab=='unpaid' ? 's-shipment-and-orders-text28' : 's-shipment-and-orders-text29']">Unpaid</span>
          <span @click="switchTab('shipment_and_orders','toship')" :class="[currentTab=='toship' ? 's-shipment-and-orders-text28' : 's-shipment-and-orders-text30']">To Ship</span>
          <span @click="switchTab('shipment_and_orders','shipping')" :class="[currentTab=='shipping' ? 's-shipment-and-orders-text28' : 's-shipment-and-orders-text31']">Shipping</span>
          <span @click="switchTab('shipment_and_orders','completed')" :class="[currentTab=='completed' ? 's-shipment-and-orders-text28' : 's-shipment-and-orders-text32']">Completed</span>
          <span @click="switchTab('shipment_and_orders','cancellation')" :class="[currentTab=='cancellation' ? 's-shipment-and-orders-text28' : 's-shipment-and-orders-text33']">Cancellation</span>
          <span @click="switchTab('shipment_and_orders','return')" :class="[currentTab=='return' ? 's-shipment-and-orders-text28' : 's-shipment-and-orders-text34']">Return/Refund</span>
        </div>
        <div class="s-shipment-and-orders-container06">
          <div class="s-shipment-and-orders-container07">
            <span class="s-shipment-and-orders-text35">Order Creation Date</span>
            <button class="s-shipment-and-orders-button08 button">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                class="s-shipment-and-orders-icon16"
              >
                <path
                  d="M73.143 950.857h164.571v-164.571h-164.571v164.571zM274.286 950.857h182.857v-164.571h-182.857v164.571zM73.143 749.714h164.571v-182.857h-164.571v182.857zM274.286 749.714h182.857v-182.857h-182.857v182.857zM73.143 530.286h164.571v-164.571h-164.571v164.571zM493.714 950.857h182.857v-164.571h-182.857v164.571zM274.286 530.286h182.857v-164.571h-182.857v164.571zM713.143 950.857h164.571v-164.571h-164.571v164.571zM493.714 749.714h182.857v-182.857h-182.857v182.857zM292.571 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM713.143 749.714h164.571v-182.857h-164.571v182.857zM493.714 530.286h182.857v-164.571h-182.857v164.571zM713.143 530.286h164.571v-164.571h-164.571v164.571zM731.429 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"
                ></path>
              </svg>
              <span class="s-shipment-and-orders-text36">
                2022/05/22 - 2022/06/22
              </span>
            </button>
          </div>
          <button class="button s-shipment-and-orders-button09">Export</button>
        </div>
        <div class="s-shipment-and-orders-container08">
          <div class="s-shipment-and-orders-container09">
            <button class="s-shipment-and-orders-button10 button">
              <span class="s-shipment-and-orders-text37">Order ID</span>
              <svg viewBox="0 0 1024 1024" class="s-shipment-and-orders-icon18">
                <path d="M298 426h428l-214 214z"></path>
              </svg>
            </button>
            <div class="s-shipment-and-orders-search-bar">
              <input type="text" class="s-shipment-and-orders-textinput input" />
              <svg
                viewBox="0 0 1024 1024"
                class="s-shipment-and-orders-searchheader"
              >
                <path
                  d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="s-shipment-and-orders-container10">
            <button class="s-shipment-and-orders-button11 button">Search</button>
            <button class="s-shipment-and-orders-button12 button">Reset</button>
          </div>
        </div>

        <div v-if="currentTab=='all'" class="s-shipment-and-orders-container11">
          <span class="s-shipment-and-orders-text38">0 Orders</span>
          <div class="s-shipment-and-orders-container12">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1564320382348-c06ae02a3897?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQzfHx0YWJsZXxlbnwwfHx8fDE2NTU5NTc3MDQ&amp;ixlib=rb-1.2.1&amp;h=300"
              class="s-shipment-and-orders-image"
            />
          </div>
        </div>

        <div v-if="currentTab=='cancellation'" class="s-shipment-and-orders-cancellation-container11">
          <div class="s-shipment-and-orders-cancellation-container12">
            <span class="s-shipment-and-orders-cancellation-text38">All</span>
            <span class="s-shipment-and-orders-cancellation-text39">Unpaid</span>
            <span class="s-shipment-and-orders-cancellation-text40">To Ship</span>
          </div>
          <span class="s-shipment-and-orders-cancellation-text41">0 Orders</span>
          <div class="s-shipment-and-orders-cancellation-container13">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1564320382348-c06ae02a3897?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQzfHx0YWJsZXxlbnwwfHx8fDE2NTU5NTc3MDQ&amp;ixlib=rb-1.2.1&amp;h=300"
              class="s-shipment-and-orders-cancellation-image"
            />
          </div>
        </div>
        
        <div v-if="currentTab=='return'" class="s-shipment-and-orders-refund-container08">
          <div class="s-shipment-and-orders-refund-container09">
            <span class="s-shipment-and-orders-refund-text37">All</span>
            <span class="s-shipment-and-orders-refund-text38">To Process</span>
            <span class="s-shipment-and-orders-refund-text39">Processed</span>
          </div>
          <span class="s-shipment-and-orders-refund-text40">0 Orders</span>
          <div class="s-shipment-and-orders-refund-container10">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1564320382348-c06ae02a3897?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQzfHx0YWJsZXxlbnwwfHx8fDE2NTU5NTc3MDQ&amp;ixlib=rb-1.2.1&amp;h=300"
              class="s-shipment-and-orders-refund-image"
            />
          </div>
        </div>

      </div>

      <!--PRODUCTS-->
      <div v-if="currentMenu=='product'" class="s-product-all-container06">
        <div class="s-product-all-container07">
          <div class="s-product-all-container08">
            <div class="s-product-all-container09">
              <button class="s-product-all-button07 button">
                <span class="s-product-all-text27">Category</span>
                <svg viewBox="0 0 1024 1024" class="s-product-all-icon16">
                  <path d="M298 426h428l-214 214z"></path>
                </svg>
              </button>
              <button class="s-product-all-button08 button">
                <span class="s-product-all-text28">Product Name</span>
                <svg viewBox="0 0 1024 1024" class="s-product-all-icon18">
                  <path d="M298 426h428l-214 214z"></path>
                </svg>
              </button>
            </div>
            <div class="s-product-all-search-bar">
              <input type="text" class="s-product-all-textinput input" />
              <svg viewBox="0 0 1024 1024" class="s-product-all-searchheader">
                <path
                  d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="s-product-all-container10">
            <div class="s-product-all-container11">
              <button class="s-product-all-button09 button">
                <span class="s-product-all-text29">Category</span>
                <svg viewBox="0 0 1024 1024" class="s-product-all-icon21">
                  <path d="M298 426h428l-214 214z"></path>
                </svg>
              </button>
              <div class="s-product-all-container12">
                <span class="s-product-all-text30">Stock</span>
                <button class="s-product-all-button10 button">
                  <span class="s-product-all-text31">Min</span>
                </button>
                <span class="s-product-all-text32"><span>-</span></span>
                <button class="s-product-all-button11 button">
                  <span class="s-product-all-text34"><span>Max</span></span>
                </button>
              </div>
              <div class="s-product-all-container13">
                <span class="s-product-all-text36">Sales</span>
                <button class="s-product-all-button12 button">
                  <span class="s-product-all-text37">Min</span>
                </button>
                <span class="s-product-all-text38"><span>-</span></span>
                <button class="s-product-all-button13 button">
                  <span class="s-product-all-text40">Max</span>
                </button>
              </div>
            </div>
            <div class="s-product-all-container14">
              <button class="button s-product-all-button14">Search</button>
              <button class="s-product-all-button15 button">Reset</button>
            </div>
          </div>
        </div>
        <div class="s-product-all-container15">
          <div class="s-product-all-group126">
            <button class="s-product-all-button16 button">
              <span class="s-product-all-text41">All</span>
              <svg viewBox="0 0 1024 1024" class="s-product-all-icon23">
                <path d="M298 426h428l-214 214z"></path>
              </svg>
            </button>
            <span @click="switchTab('product', 'all')" :class="[currentMenu=='product' && currentTab=='all' ? 's-product-all-text42' : 's-product-all-text43']">All</span>
            <span @click="switchTab('product', 'live')" :class="[currentMenu=='product' && currentTab=='live' ? 's-product-all-text42' : 's-product-all-text43']">Live</span>
            <span @click="switchTab('product', 'soldout')" :class="[currentMenu=='product' && currentTab=='soldout' ? 's-product-all-text42' : 's-product-all-text44']">Sold Out</span>
            <span @click="switchTab('product', 'violation')" :class="[currentMenu=='product' && currentTab=='violation' ? 's-product-all-text42' : 's-product-all-text45']">Violation</span>
          </div>

          <!--PRODUCT TAB-->
          <div v-if="currentMenu=='product'">
            <div v-if="currentTab=='all'" class="s-product-all-container16">
              <span class="s-product-all-text46">0 Products</span>
              <button @click="addNewProduct()" class="button s-product-all-button17">
                Add a New Product
              </button>
            </div>

            <div v-if="currentTab=='live'" class="s-product-all-container16">
              <span class="s-product-all-text46">0 Products</span>
            </div>
            <div v-if="currentTab=='soldout'" class="s-product-all-container16">
              <span class="s-product-all-text46">0 Products</span>
            </div>

            <div v-if="currentTab=='violation'" class="s-product-violation-container16">
              <span class="s-product-violation-text46">0 Products</span>
              <div class="s-product-violation-container17">
                <span class="s-product-violation-text47">Suspended</span>
                <span class="s-product-violation-text48">Albuy Deleted</span>
              </div>
            </div>
          </div>
          <div class="s-product-all-container17">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1564320382348-c06ae02a3897?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQzfHx0YWJsZXxlbnwwfHx8fDE2NTU5NTc3MDQ&amp;ixlib=rb-1.2.1&amp;h=300"
              class="s-product-all-image"
            />
          </div>
        </div>
      </div>
      
      <!--Discount Promotions-->
      <div v-if="currentMenu=='discount_promotions'" class="s-discount-promotions-all-container06">
        <div class="s-discount-promotions-all-container07">
          <div class="s-discount-promotions-all-container08">
            <div class="s-discount-promotions-all-container09">
              <button class="s-discount-promotions-all-button07 button">
                <span class="s-discount-promotions-all-text27">Order ID</span>
                <svg
                  viewBox="0 0 1024 1024"
                  class="s-discount-promotions-all-icon16"
                >
                  <path d="M298 426h428l-214 214z"></path>
                </svg>
              </button>
              <div class="s-discount-promotions-all-search-bar">
                <input
                  type="text"
                  class="s-discount-promotions-all-textinput input"
                />
                <svg
                  viewBox="0 0 1024 1024"
                  class="s-discount-promotions-all-searchheader"
                >
                  <path
                    d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="s-discount-promotions-all-container10">
            <div class="s-discount-promotions-all-container11">
              <span class="s-discount-promotions-all-text28">
                Promotion Period
              </span>
              <button class="s-discount-promotions-all-button08 button">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  class="s-discount-promotions-all-icon19"
                >
                  <path
                    d="M73.143 950.857h164.571v-164.571h-164.571v164.571zM274.286 950.857h182.857v-164.571h-182.857v164.571zM73.143 749.714h164.571v-182.857h-164.571v182.857zM274.286 749.714h182.857v-182.857h-182.857v182.857zM73.143 530.286h164.571v-164.571h-164.571v164.571zM493.714 950.857h182.857v-164.571h-182.857v164.571zM274.286 530.286h182.857v-164.571h-182.857v164.571zM713.143 950.857h164.571v-164.571h-164.571v164.571zM493.714 749.714h182.857v-182.857h-182.857v182.857zM292.571 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM713.143 749.714h164.571v-182.857h-164.571v182.857zM493.714 530.286h182.857v-164.571h-182.857v164.571zM713.143 530.286h164.571v-164.571h-164.571v164.571zM731.429 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"
                  ></path>
                </svg>
                <span class="s-discount-promotions-all-text29">
                  2022/05/22 - 2022/06/22
                </span>
              </button>
            </div>
            <div class="s-discount-promotions-all-container12">
              <button class="button s-discount-promotions-all-button09">
                Search
              </button>
              <button class="s-discount-promotions-all-button10 button">
                Reset
              </button>
            </div>
          </div>
        </div>
        <div class="s-discount-promotions-all-container13">
          <div class="s-discount-promotions-all-group126">
            <button class="s-discount-promotions-all-button11 button">
              <span class="s-discount-promotions-all-text30">All</span>
              <svg
                viewBox="0 0 1024 1024"
                class="s-discount-promotions-all-icon21"
              >
                <path d="M298 426h428l-214 214z"></path>
              </svg>
            </button>
            <span @click="switchTab('discount_promotions', 'all')" :class="[currentTab=='all' ? 's-discount-promotions-all-text31' : 's-discount-promotions-all-text32']" >All</span>
            <span @click="switchTab('discount_promotions', 'ongoing')" :class="[currentTab=='ongoing' ? 's-discount-promotions-all-text31' : 's-discount-promotions-all-text32']">Ongoing</span>
            <span @click="switchTab('discount_promotions', 'upcoming')"  :class="[currentTab=='upcoming' ? 's-discount-promotions-all-text31' : 's-discount-promotions-all-text33']">Upcoming</span>
            <span @click="switchTab('discount_promotions', 'expired')"  :class="[currentTab=='expired' ? 's-discount-promotions-all-text31' : 's-discount-promotions-all-text34']">Expired</span>
          </div>

          <div v-if="currentTab=='all'" class="s-discount-promotions-all-container14">
            <span class="s-discount-promotions-all-text35">0 Orders</span>
            <button class="button s-discount-promotions-all-button12">
              Create New Promo
            </button>
          </div>

          <div v-if="currentTab=='ongoing'" class="s-discount-promotions-all-container14">
            <span class="s-discount-promotions-all-text35">0 Orders</span>
          </div>

          <div v-if="currentTab=='upcoming'" class="s-discount-promotions-all-container14">
            <span class="s-discount-promotions-all-text35">0 Orders</span>
          </div>

          <div v-if="currentTab=='expired'" class="s-discount-promotions-all-container14">
            <span class="s-discount-promotions-all-text35">0 Orders</span>
          </div>

          <div class="s-discount-promotions-all-container15">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1564320382348-c06ae02a3897?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQzfHx0YWJsZXxlbnwwfHx8fDE2NTU5NTc3MDQ&amp;ixlib=rb-1.2.1&amp;h=300"
              class="s-discount-promotions-all-image"
            />
          </div>
        </div>
      </div>

      <!--DISCOUNT PROMOTION ADD NEW-->
      <div v-if="currentMenu == 'discount_promotions_add'" class="s-discount-promotions-create-new-container06">
        <div class="s-discount-promotions-create-new-container07">
          <div class="s-discount-promotions-create-new-group126">
            <span class="s-discount-promotions-create-new-text27">
              Create New Discount Promotion
            </span>
          </div>
          <div class="s-discount-promotions-create-new-container08">
            <span class="s-discount-promotions-create-new-text28">
              Promotion Period
            </span>
            <button class="s-discount-promotions-create-new-button7 button">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                class="s-discount-promotions-create-new-icon16"
              >
                <path
                  d="M73.143 950.857h164.571v-164.571h-164.571v164.571zM274.286 950.857h182.857v-164.571h-182.857v164.571zM73.143 749.714h164.571v-182.857h-164.571v182.857zM274.286 749.714h182.857v-182.857h-182.857v182.857zM73.143 530.286h164.571v-164.571h-164.571v164.571zM493.714 950.857h182.857v-164.571h-182.857v164.571zM274.286 530.286h182.857v-164.571h-182.857v164.571zM713.143 950.857h164.571v-164.571h-164.571v164.571zM493.714 749.714h182.857v-182.857h-182.857v182.857zM292.571 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM713.143 749.714h164.571v-182.857h-164.571v182.857zM493.714 530.286h182.857v-164.571h-182.857v164.571zM713.143 530.286h164.571v-164.571h-164.571v164.571zM731.429 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"
                ></path>
              </svg>
              <span class="s-discount-promotions-create-new-text29">
                2022/05/22 - 2022/06/22
              </span>
            </button>
          </div>
          <div class="s-discount-promotions-create-new-container09">
            <span class="s-discount-promotions-create-new-text30">
              Promotion Name
            </span>
            <input
              type="text"
              placeholder="placeholder"
              class="s-discount-promotions-create-new-textinput input"
            />
          </div>
          <div class="s-discount-promotions-create-new-container10">
            <span class="s-discount-promotions-create-new-text31">
              <span>
                Promotion
                <span v-html="rawjhfs"></span>
              </span>
              <br />
              <span>Description</span>
            </span>
            <input
              type="text"
              placeholder="placeholder"
              class="s-discount-promotions-create-new-textinput1 input"
            />
          </div>
        </div>
        <div class="s-discount-promotions-create-new-container11">
          <span class="s-discount-promotions-create-new-text35">
            Discount Promotion Products
          </span>
          <div class="s-discount-promotions-create-new-container12">
            <button class="button s-discount-promotions-create-new-button8">
              + Add Products
            </button>
          </div>
        </div>
      </div>

      <!--DISCOUNT PROMOTION ADD NEW PRODUCT-->
      <div v-if="currentMenu == 'discount_promotions_add_product'" class="s-discount-promotions-create-new-add-prod-container06">
        <div class="s-discount-promotions-create-new-add-prod-container07">
          <div class="s-discount-promotions-create-new-add-prod-group126">
            <span class="s-discount-promotions-create-new-add-prod-text27">
              Discount Promotion Products
            </span>
          </div>
          <div class="s-discount-promotions-create-new-add-prod-container08">
            <span class="s-discount-promotions-create-new-add-prod-text28">
              Select Products
            </span>
            <div class="s-discount-promotions-create-new-add-prod-container09">
              <div class="s-discount-promotions-create-new-add-prod-container10">
                <span class="s-discount-promotions-create-new-add-prod-text29">
                  Category
                </span>
                <select class="s-discount-promotions-create-new-add-prod-select">
                  <option value="Option 1">All Categories</option>
                  <option value="Option 2">Processed Foods</option>
                  <option value="New Option">Arts and Crafts</option>
                  <option value="Option 3">Agri-based Products</option>
                  <option value="New Option">Home and Fashion</option>
                  <option value="New Option">Others</option>
                </select>
              </div>
              <div class="s-discount-promotions-create-new-add-prod-container11">
                <div
                  class="s-discount-promotions-create-new-add-prod-container12"
                >
                  <select
                    class="s-discount-promotions-create-new-add-prod-select1"
                  >
                    <option value="Option 1" selected>Product Name</option>
                    <option value="Option 2">Sales</option>
                    <option value="Option 3">Price</option>
                  </select>
                  <div
                    class="s-discount-promotions-create-new-add-prod-search-bar"
                  >
                    <input
                      type="text"
                      class="s-discount-promotions-create-new-add-prod-textinput input"
                    />
                    <svg
                      viewBox="0 0 1024 1024"
                      class="s-discount-promotions-create-new-add-prod-searchheader"
                    >
                      <path
                        d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  class="s-discount-promotions-create-new-add-prod-container13"
                >
                  <input type="checkbox" checked="true" />
                  <span class="s-discount-promotions-create-new-add-prod-text30">
                    Search for available products only
                  </span>
                </div>
              </div>
            </div>
            <div class="s-discount-promotions-create-new-add-prod-container14">
              <button
                class="s-discount-promotions-create-new-add-prod-button07 button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div class="s-discount-promotions-create-new-add-prod-container15">
          <div class="s-discount-promotions-create-new-add-prod-container16">
            <div class="s-discount-promotions-create-new-add-prod-container17">
              <span class="s-discount-promotions-create-new-add-prod-text31">
                Phone Number
              </span>
            </div>
            <div class="s-discount-promotions-create-new-add-prod-container18">
              <span class="s-discount-promotions-create-new-add-prod-text32">
                Shop Name
              </span>
            </div>
            <div class="s-discount-promotions-create-new-add-prod-container19">
              <span class="s-discount-promotions-create-new-add-prod-text33">
                Shop Username
              </span>
            </div>
            <div class="s-discount-promotions-create-new-add-prod-container20">
              <span class="s-discount-promotions-create-new-add-prod-text34">
                Uploaded Documents
              </span>
            </div>
          </div>
          <div class="s-discount-promotions-create-new-add-prod-container21">
            <button
              class="button s-discount-promotions-create-new-add-prod-button08"
            >
              Confirm
            </button>
            <button
              class="s-discount-promotions-create-new-add-prod-button09 button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      <!--DISCOUNT PROMOTION ADD NEW DISC PRODUCT-->
      <div v-if="currentMenu=='discount_promotions_add_disc_product'"
        class="s-discount-promotions-create-new-disc-promo-details-container06"
      >
        <div
          class="s-discount-promotions-create-new-disc-promo-details-container07"
        >
          <div
            class="s-discount-promotions-create-new-disc-promo-details-group126"
          >
            <span
              class="s-discount-promotions-create-new-disc-promo-details-text27"
            >
              Discount Promotion Details
            </span>
          </div>
          <div
            class="s-discount-promotions-create-new-disc-promo-details-container08"
          >
            <div
              class="s-discount-promotions-create-new-disc-promo-details-container09"
            >
              <div
                class="s-discount-promotions-create-new-disc-promo-details-container10"
              >
                <div
                  class="s-discount-promotions-create-new-disc-promo-details-container11"
                >
                  <span
                    class="s-discount-promotions-create-new-disc-promo-details-text28"
                  >
                    Product Name:
                  </span>
                  <div
                    class="s-discount-promotions-create-new-disc-promo-details-search-bar"
                  >
                    <input
                      type="text"
                      class="s-discount-promotions-create-new-disc-promo-details-textinput input"
                    />
                    <svg
                      viewBox="0 0 1024 1024"
                      class="s-discount-promotions-create-new-disc-promo-details-searchheader"
                    >
                      <path
                        d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  class="s-discount-promotions-create-new-disc-promo-details-container12"
                >
                  <button
                    class="s-discount-promotions-create-new-disc-promo-details-button07 button"
                  >
                    Search
                  </button>
                </div>
              </div>
              <div
                class="s-discount-promotions-create-new-disc-promo-details-container13"
              >
                <div
                  class="s-discount-promotions-create-new-disc-promo-details-container14"
                >
                  <button
                    class="s-discount-promotions-create-new-disc-promo-details-button08 button"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
            <div
              class="s-discount-promotions-create-new-disc-promo-details-container15"
            >
              <input type="checkbox" checked="true" />
              <span
                class="s-discount-promotions-create-new-disc-promo-details-text29"
              >
                Search for available products only
              </span>
            </div>
          </div>
        </div>
        <div
          class="s-discount-promotions-create-new-disc-promo-details-container16"
        >
          <div
            class="s-discount-promotions-create-new-disc-promo-details-container17"
          >
            <div
              class="s-discount-promotions-create-new-disc-promo-details-container18"
            >
              <span
                class="s-discount-promotions-create-new-disc-promo-details-text30"
              >
                Phone Number
              </span>
            </div>
            <div
              class="s-discount-promotions-create-new-disc-promo-details-container19"
            >
              <span
                class="s-discount-promotions-create-new-disc-promo-details-text31"
              >
                Shop Name
              </span>
            </div>
            <div
              class="s-discount-promotions-create-new-disc-promo-details-container20"
            >
              <span
                class="s-discount-promotions-create-new-disc-promo-details-text32"
              >
                Shop Username
              </span>
            </div>
            <div
              class="s-discount-promotions-create-new-disc-promo-details-container21"
            >
              <span
                class="s-discount-promotions-create-new-disc-promo-details-text33"
              >
                Uploaded Documents
              </span>
            </div>
          </div>
          <div
            class="s-discount-promotions-create-new-disc-promo-details-container22"
          >
            <button
              class="button s-discount-promotions-create-new-disc-promo-details-button09"
            >
              Confirm
            </button>
            <button
              class="s-discount-promotions-create-new-disc-promo-details-button10 button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <!--Income Details-->

      <!--Chat Auto Reply-->
      <div v-if="currentMenu=='chat_auto_reply'" class="s-chat-auto-reply-container07">
        <div class="s-chat-auto-reply-container08">
          <div class="s-chat-auto-reply-container09">
            <span class="s-chat-auto-reply-text29">Chat Auto Reply</span>
            <svg
              viewBox="0 0 1170.2857142857142 1024"
              class="s-chat-auto-reply-icon18"
            >
              <path
                d="M658.286 512c0-161.143-131.429-292.571-292.571-292.571s-292.571 131.429-292.571 292.571 131.429 292.571 292.571 292.571 292.571-131.429 292.571-292.571zM1097.143 512c0-161.143-131.429-292.571-292.571-292.571h-220.571c89.143 66.857 147.429 173.143 147.429 292.571s-58.286 225.714-147.429 292.571h220.571c161.143 0 292.571-131.429 292.571-292.571zM1170.286 512c0 201.714-164 365.714-365.714 365.714h-438.857c-201.714 0-365.714-164-365.714-365.714s164-365.714 365.714-365.714h438.857c201.714 0 365.714 164 365.714 365.714z"
              ></path>
            </svg>
          </div>
          <span class="s-chat-auto-reply-text30">
            When enabled, this Auto-Reply will be sent once the buyer initiates
            the conversation.
          </span>
        </div>
        <div class="s-chat-auto-reply-container10">
          <span class="s-chat-auto-reply-text31">
            Edit Shop Auto-Reply Message
            <span v-html="rawtbcr"></span>
          </span>
          <div class="s-chat-auto-reply-container11">
            <span class="s-chat-auto-reply-text32">
              You can put greetings, shop policies, promotions, shop and chat
              hours or any other information you wish to let customers know in the
              message. Maximum of 600 characters only.
            </span>
          </div>
          <span class="s-chat-auto-reply-text33">69/500</span>
        </div>
        <div class="s-chat-auto-reply-container12">
          <button class="s-chat-auto-reply-button08 button">Cancel</button>
          <button class="s-chat-auto-reply-button09 button">Save</button>
        </div>
      </div>

      <!--Shop Rating-->
      <div v-if="currentMenu=='shop_rating'" class="s-shop-rating-container07">
        <div class="s-shop-rating-container08">
          <div class="s-shop-rating-container09">
            <span class="s-shop-rating-text29">Shop Rating</span>
            <div class="s-shop-rating-container10">
              <span class="s-shop-rating-text30">0.0</span>
              <span class="s-shop-rating-text31">/5</span>
            </div>
          </div>
          <span class="s-shop-rating-text32">View the ratings to your shop</span>
        </div>
        <div class="s-shop-rating-container11">
          <div class="s-shop-rating-container12">
            <span class="s-shop-rating-text33">Product Name</span>
            <input
              type="text"
              placeholder="placeholder"
              class="s-shop-rating-textinput input"
            />
          </div>
          <div class="s-shop-rating-container13">
            <span class="s-shop-rating-text34">Variation Name</span>
            <input
              type="text"
              placeholder="placeholder"
              class="s-shop-rating-textinput1 input"
            />
          </div>
        </div>
        <div class="s-shop-rating-container14">
          <div class="s-shop-rating-container15">
            <span class="s-shop-rating-text35">User Name</span>
            <input
              type="text"
              placeholder="placeholder"
              class="s-shop-rating-textinput2 input"
            />
          </div>
          <div class="s-shop-rating-container16">
            <span class="s-shop-rating-text36">Review Date</span>
            <input
              type="text"
              placeholder="placeholder"
              class="s-shop-rating-textinput3 input"
            />
          </div>
        </div>
        <div class="s-shop-rating-container17">
          <button class="button s-shop-rating-button08">Reset</button>
          <button class="s-shop-rating-button09 button">Search</button>
        </div>
        <div class="s-shop-rating-container18">
          <div class="s-shop-rating-group126">
            <button class="s-shop-rating-button10 button">
              <span class="s-shop-rating-text37">All</span>
              <svg viewBox="0 0 1024 1024" class="s-shop-rating-icon18">
                <path d="M298 426h428l-214 214z"></path>
              </svg>
            </button>
            <span class="s-shop-rating-text38">All</span>
            <span class="s-shop-rating-text39">5 Star</span>
            <span class="s-shop-rating-text40">4 Star</span>
            <span class="s-shop-rating-text41">3 Star</span>
            <span class="s-shop-rating-text42">2 Star</span>
            <span class="s-shop-rating-text43">1 Star</span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fHRhYmxlfGVufDB8fHx8MTY1NTk1NzY5OA&amp;ixlib=rb-1.2.1&amp;w=200"
            class="s-shop-rating-image"
          />
        </div>
      </div>

      <!--SHOP PROFILE AND DECORATION-->
      <div v-if="currentMenu=='shop_profile_and_decoration'" class="s-shop-profile-and-decoration-container07">
        <div class="s-shop-profile-and-decoration-container08">
          <div class="s-shop-profile-and-decoration-container09">
            <span class="s-shop-profile-and-decoration-text28">
              Shop Profile and Decoration
            </span>
          </div>
          <span class="s-shop-profile-and-decoration-text29">
            View your shop status and update your shop profile.
          </span>
        </div>
        <div class="s-shop-profile-and-decoration-container10">
          <span class="s-shop-profile-and-decoration-text30">
            Basic Information
          </span>
        </div>
        <div class="s-shop-profile-and-decoration-container11">
          <div class="s-shop-profile-and-decoration-profile">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1649859394657-8762d8a4758a?ixid=Mnw5MTMyMXwxfDF8YWxsfDMxfHx8fHx8Mnx8MTY1NjY4MDczNA&amp;ixlib=rb-1.2.1&amp;h=300"
              class="s-shop-profile-and-decoration-image"
            />
            <button class="s-shop-profile-and-decoration-changeprofile button">
              Edit Cover Photo
            </button>
          </div>
          <div class="s-shop-profile-and-decoration-container12">
            <div class="s-shop-profile-and-decoration-container13">
              <div class="s-shop-profile-and-decoration-profile1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1656534938872-0d8c633a90e2?ixid=Mnw5MTMyMXwwfDF8YWxsfDM5fHx8fHx8Mnx8MTY1NjY4MDczNA&amp;ixlib=rb-1.2.1&amp;w=200"
                  class="s-shop-profile-and-decoration-profileimg"
                />
                <button
                  class="s-shop-profile-and-decoration-changeprofile1 button"
                >
                  Edit Profile Photo
                </button>
              </div>
            </div>
            <div class="s-shop-profile-and-decoration-container14">
              <div class="s-shop-profile-and-decoration-container15">
                <span class="s-shop-profile-and-decoration-text31">
                  Shop Name
                </span>
                <div class="s-shop-profile-and-decoration-container16">
                  <span class="s-shop-profile-and-decoration-text32">
                    OTOP HUB
                  </span>
                  <span class="s-shop-profile-and-decoration-text33">
                    <span>8</span>
                    <span>/30</span>
                  </span>
                </div>
              </div>
              <div class="s-shop-profile-and-decoration-container17">
                <span class="s-shop-profile-and-decoration-text36">
                  Shop Description
                </span>
                <div class="s-shop-profile-and-decoration-container18">
                  <span class="s-shop-profile-and-decoration-text37">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisiea commodo consequat.
                  </span>
                </div>
                <span class="s-shop-profile-and-decoration-text38">
                  <span>8</span>
                  <span>/30</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="s-shop-profile-and-decoration-container19">
          <button class="button s-shop-profile-and-decoration-button7">
            Cancel
          </button>
          <button class="s-shop-profile-and-decoration-button8 button">
            Save
          </button>
        </div>
      </div>

      <!--SEttings my address-->
      <div v-if="currentMenu=='settings_my_address'" class="s-settings-my-address-container07">
        <div class="s-settings-my-address-container08">
          <div class="s-settings-my-address-container09">
            <span class="s-settings-my-address-text28">My Addresses</span>
            <button class="button s-settings-my-address-button07">
              Add a New Address
            </button>
          </div>
        </div>
        <span class="s-settings-my-address-text29">
          Manage your shipping addresses
        </span>
        <div class="s-settings-my-address-container10">
          <div class="s-settings-my-address-container11">
            <div class="s-settings-my-address-container12">
              <svg
                viewBox="0 0 585.1428571428571 1024"
                class="s-settings-my-address-icon16"
              >
                <path
                  d="M438.857 365.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM585.143 365.714c0 34.857-4 70.857-18.857 102.286l-208 442.286c-12 25.143-38.286 40.571-65.714 40.571s-53.714-15.429-65.143-40.571l-208.571-442.286c-14.857-31.429-18.857-67.429-18.857-102.286 0-161.714 130.857-292.571 292.571-292.571s292.571 130.857 292.571 292.571z"
                ></path>
              </svg>
              <div class="s-settings-my-address-container13">
                <div class="s-settings-my-address-container14">
                  <span class="s-settings-my-address-text30">Full Name</span>
                  <span class="s-settings-my-address-text31">Phone Number</span>
                  <span class="s-settings-my-address-text32">Address</span>
                </div>
                <div class="s-settings-my-address-container15">
                  <span class="s-settings-my-address-text33">Decy Abion</span>
                  <span class="s-settings-my-address-text34">639509175493</span>
                  <div class="s-settings-my-address-container16">
                    <span class="s-settings-my-address-text35">
                      <span>Purok 1 165 Binitayan Daraga Albay</span>
                      <span></span>
                    </span>
                    <span class="s-settings-my-address-text38">
                      <span>Binitayan, Daraga</span>
                    </span>
                    <span class="s-settings-my-address-text40">
                      <span></span>
                      <span>South Luzon, Albay 4501</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button class="s-settings-my-address-button08 button">
              <span class="s-settings-my-address-text43">Edit</span>
            </button>
          </div>
        </div>
        <div class="s-settings-my-address-container17">
          <div class="s-settings-my-address-container18">
            <div class="s-settings-my-address-container19">
              <svg
                viewBox="0 0 585.1428571428571 1024"
                class="s-settings-my-address-icon18"
              >
                <path
                  d="M438.857 365.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM585.143 365.714c0 34.857-4 70.857-18.857 102.286l-208 442.286c-12 25.143-38.286 40.571-65.714 40.571s-53.714-15.429-65.143-40.571l-208.571-442.286c-14.857-31.429-18.857-67.429-18.857-102.286 0-161.714 130.857-292.571 292.571-292.571s292.571 130.857 292.571 292.571z"
                ></path>
              </svg>
              <div class="s-settings-my-address-container20">
                <div class="s-settings-my-address-container21">
                  <span class="s-settings-my-address-text44">Full Name</span>
                  <span class="s-settings-my-address-text45">Phone Number</span>
                  <span class="s-settings-my-address-text46">Address</span>
                </div>
                <div class="s-settings-my-address-container22">
                  <span class="s-settings-my-address-text47">Decy Abion</span>
                  <span class="s-settings-my-address-text48">639509175493</span>
                  <div class="s-settings-my-address-container23">
                    <span class="s-settings-my-address-text49">
                      <span>Purok 1 165 Binitayan Daraga Albay</span>
                      <span></span>
                    </span>
                    <span class="s-settings-my-address-text52">
                      <span>Binitayan, Daraga</span>
                    </span>
                    <span class="s-settings-my-address-text54">
                      <span></span>
                      <span>South Luzon, Albay 4501</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button class="s-settings-my-address-button09 button">
              <span class="s-settings-my-address-text57">Edit</span>
            </button>
          </div>
        </div>
      </div>

      <!--SEttings account-->
      <div v-if="currentMenu=='settings_account'" class="s-settings-account-container07">
        <div class="s-settings-account-container08">
          <div class="s-settings-account-container09">
            <span class="s-settings-account-text28">Account</span>
          </div>
        </div>
        <span class="s-settings-account-text29">
          Change your basic account settings.
        </span>
        <div class="s-settings-account-container10">
          <div class="s-settings-account-container11">
            <div class="s-settings-account-container12">
              <svg viewBox="0 0 1024 1024" class="s-settings-account-icon16">
                <path
                  d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
                ></path>
              </svg>
              <span class="s-settings-account-text30">My Profile</span>
            </div>
            <div class="s-settings-account-container13">
              <div class="s-settings-account-container14">
                <div class="s-settings-account-container15">
                  <span class="s-settings-account-text31">Username</span>
                  <div class="s-settings-account-container16">
                    <input
                      type="text"
                      placeholder="placeholder"
                      class="s-settings-account-textinput input"
                    />
                    <span class="s-settings-account-text32">
                      Username must be 5-30 characters with only English letters,
                      numbers, underscores and dots. No spaces or pure numbers are
                      allowed
                    </span>
                  </div>
                </div>
              </div>
              <div class="s-settings-account-container17">
                <button class="s-settings-account-button07 button">Cancel</button>
                <button class="s-settings-account-button08 button">Save</button>
              </div>
            </div>
          </div>
          <div class="s-settings-account-container18">
            <div class="s-settings-account-container19">
              <svg
                viewBox="0 0 804.5714285714286 1024"
                class="s-settings-account-icon18"
              >
                <path
                  d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"
                ></path>
              </svg>
              <span class="s-settings-account-text33">Phone</span>
            </div>
            <div class="s-settings-account-container20">
              <div class="s-settings-account-container21">
                <span class="s-settings-account-text34">Phone Number</span>
                <input
                  type="text"
                  placeholder="placeholder"
                  class="s-settings-account-textinput1 input"
                />
              </div>
              <div class="s-settings-account-container22">
                <button class="s-settings-account-button09 button">Cancel</button>
                <button class="s-settings-account-button10 button">Save</button>
              </div>
            </div>
          </div>
          <div class="s-settings-account-container23">
            <div class="s-settings-account-container24">
              <svg viewBox="0 0 1024 1024" class="s-settings-account-icon20">
                <path
                  d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                ></path>
              </svg>
              <span class="s-settings-account-text35">Email</span>
            </div>
            <div class="s-settings-account-container25">
              <div class="s-settings-account-container26">
                <span class="s-settings-account-text36">Email Address</span>
                <input
                  type="text"
                  placeholder="placeholder"
                  class="s-settings-account-textinput2 input"
                />
              </div>
              <div class="s-settings-account-container27">
                <button class="s-settings-account-button11 button">Cancel</button>
                <button class="s-settings-account-button12 button">Save</button>
              </div>
            </div>
          </div>
          <div class="s-settings-account-container28">
            <div class="s-settings-account-container29">
              <svg
                viewBox="0 0 658.2857142857142 1024"
                class="s-settings-account-icon22"
              >
                <path
                  d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"
                ></path>
              </svg>
              <span class="s-settings-account-text37">Login Password</span>
            </div>
            <div class="s-settings-account-p-a-s-s-w-o-r-d-s">
              <div class="s-settings-account-container30">
                <span class="s-settings-account-currentpass">
                  Current Password
                </span>
                <input
                  type="password"
                  class="s-settings-account-currentpassinput input"
                />
              </div>
              <div class="s-settings-account-container31">
                <span class="s-settings-account-newpass">New Password</span>
                <input
                  type="password"
                  class="s-settings-account-newpassinput input"
                />
              </div>
              <div class="s-settings-account-container32">
                <span class="s-settings-account-confirmpass">
                  Confirm Password
                </span>
                <input
                  type="password"
                  class="s-settings-account-confirmpassinput input"
                />
              </div>
            </div>
            <div class="s-settings-account-container33">
              <button class="s-settings-account-button13 button">Cancel</button>
              <button class="s-settings-account-button14 button">Save</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  //MISSING PAGES
  /*
    discount promotions create new
    shop statistics
  */
  import Parse from 'parse';
  import SHeader from '@/components/s-header'

  export default {
    name: 'SProductAll',
    components: {
      SHeader,
    },
    metaInfo: {
      title: 'S-Product-All - exported project',
      meta: [
        {
          property: 'og:title',
          content: 'S-Product-All - exported project',
        },
      ],
    },

    beforeMount(){
      console.log(Parse.User.current().get("AccountID"));
    },

    data(){
      return{
         currentTab: 'all',
         currentMenu: 'discount_promotions_add_disc_product',
      }
    },

    methods:{
      addNewProduct(){
        this.$router.push({
          name: 's-add-new-product',
        });
      },

      switchTab(menu, tab){
        this.currentMenu = menu;
        this.currentTab = tab;
      },

      gotoPage(name){
        this.$router.push({
          name: name,
        });
      },

    }
  
}
</script>

<style>
html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6 {  margin: 0;  padding: 0;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }

@import '../../assets/css/seller/s-shipment-and-orders-cancellation.css';
@import '../../assets/css/seller/s-shipment-and-orders-refund.css';
@import '../../assets/css/seller/s-shipment-and-orders.css';

@import '../../assets/css/seller/s-discount-promotions-all.css';
@import '../../assets/css/seller/s-discount-promotions-create-new.css';
@import '../../assets/css/seller/s-discount-promotions-create-new-add-prod.css';
@import '../../assets/css/seller/s-discount-promotions-create-new-disc-promo-details.css';
@import '../../assets/css/seller/s-discount-promotions-ongoing-upcoming-expired.css';
@import '../../assets/css/seller/s-income-details.css';

@import '../../assets/css/seller/s-chat-auto-reply.css';
@import '../../assets/css/seller/s-setup-shop-info.css';
@import '../../assets/css/seller/s-shop-profile-and-decoration.css';
@import '../../assets/css/seller/s-shop-rating.css';
@import '../../assets/css/seller/s-shop-statistics.css';

@import '../../assets/css/seller/s-settings-account.css';
@import '../../assets/css/seller/s-settings-my-address.css';

.s-product-violation-container17 {
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-violation-text47 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 20px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  font-stretch: normal;
  text-decoration: none;
  border-bottom-width: 0px;
}
.s-product-violation-text48 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 20px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  font-stretch: normal;
  text-decoration: none;
  border-bottom-width: 0px;
}
.s-product-violation-container16 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.s-product-violation-text46 {
  padding: var(--dl-space-space-unit);
  font-size: 20px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 700;
}

.s-product-all-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.s-product-all-container01 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  align-items: flex-start;
  flex-direction: row;
}
.s-product-all-container02 {
  display: none;
  align-items: flex-start;
  flex-direction: row;
}
.s-product-all-icon {
  width: 24px;
  height: 24px;
}
.s-product-all-container03 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: column;
  border-right-width: 1px;
}
.s-product-all-group149 {
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  box-sizing: border-box;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
}
.s-product-all-button {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-text {
  font-style: normal;
  font-weight: 700;
}
.s-product-all-icon02 {
  width: 24px;
  height: 24px;
}
.s-product-all-text01 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-product-all-text02 {
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
.s-product-all-text03 {
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
.s-product-all-text04 {
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
.s-product-all-text05 {
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
.s-product-all-text06 {
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
.s-product-all-text07 {
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
.s-product-all-group150 {
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
.s-product-all-button01 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  max-width: auto;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-text08 {
  font-style: normal;
  font-weight: 700;
}
.s-product-all-icon04 {
  width: 24px;
  height: 24px;
}
.s-product-all-text09 {
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
.s-product-all-text10 {
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
.s-product-all-text11 {
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
.s-product-all-text12 {
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
.s-product-all-text13 {
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
.s-product-all-group151 {
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
.s-product-all-button02 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  max-width: auto;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-text14 {
  font-style: normal;
  font-weight: 700;
}
.s-product-all-icon06 {
  width: 24px;
  height: 24px;
}
.s-product-all-text15 {
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
.s-product-all-text16 {
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
.s-product-all-text17 {
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
.s-product-all-text18 {
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
.s-product-all-container04 {
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: stretch;
  flex-direction: column;
}
.s-product-all-button03 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  max-width: auto;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-text19 {
  font-style: normal;
  font-weight: 700;
}
.s-product-all-icon08 {
  width: 24px;
  height: 24px;
}
.s-product-all-container05 {
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: stretch;
  flex-direction: column;
}
.s-product-all-button04 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  max-width: auto;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-text20 {
  font-style: normal;
  font-weight: 700;
}
.s-product-all-icon10 {
  width: 24px;
  height: 24px;
}
.s-product-all-group152 {
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
.s-product-all-button05 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  max-width: auto;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-text21 {
  font-style: normal;
  font-weight: 700;
}
.s-product-all-icon12 {
  width: 24px;
  height: 24px;
}
.s-product-all-text22 {
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
.s-product-all-text23 {
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
.s-product-all-group153 {
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
.s-product-all-button06 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  max-width: auto;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-text24 {
  font-style: normal;
  font-weight: 700;
}
.s-product-all-icon14 {
  width: 24px;
  height: 24px;
}
.s-product-all-text25 {
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
.s-product-all-text26 {
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
.s-product-all-container06 {
  flex: 1;
  width: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  flex-direction: column;
}
.s-product-all-container07 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  flex-direction: column;
}
.s-product-all-container08 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-container09 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.s-product-all-button07 {
  display: none;
  font-size: 18px;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-text27 {
  width: auto;
  font-size: 16px;
  min-width: auto;
  font-style: normal;
  font-weight: 500;
}
.s-product-all-icon16 {
  width: 18px;
  height: 18px;
  margin-left: var(--dl-space-space-unit);
}
.s-product-all-button08 {
  display: flex;
  font-size: 18px;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-text28 {
  width: auto;
  font-size: 16px;
  min-width: auto;
  font-style: normal;
  font-weight: 500;
}
.s-product-all-icon18 {
  width: 18px;
  height: 18px;
  margin-left: var(--dl-space-space-unit);
}
.s-product-all-search-bar {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
  margin-left: var(--dl-space-space-unit);
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 15px;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.s-product-all-textinput {
  width: 100%;
  height: 100%;
  padding-top: var(--dl-space-space-halfunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unit);
  border-radius: 15px;
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.s-product-all-searchheader {
  width: 30px;
  height: auto;
  padding: 4px;
  align-self: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  border-left-width: 1px;
}
.s-product-all-container10 {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.s-product-all-container11 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-button09 {
  display: flex;
  font-size: 18px;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-text29 {
  width: auto;
  font-size: 16px;
  min-width: auto;
  font-style: normal;
  font-weight: 500;
}
.s-product-all-icon21 {
  width: 18px;
  height: 18px;
  margin-left: var(--dl-space-space-unit);
}
.s-product-all-container12 {
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-text30 {
  padding: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-halfunit);
}
.s-product-all-button10 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.s-product-all-text31 {
  color: var(--dl-color-gray-700);
}
.s-product-all-text32 {
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
}
.s-product-all-button11 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.s-product-all-text34 {
  color: var(--dl-color-gray-700);
}
.s-product-all-container13 {
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-text36 {
  padding: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-halfunit);
}
.s-product-all-button12 {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.s-product-all-text37 {
  color: var(--dl-color-gray-700);
}
.s-product-all-text38 {
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
}
.s-product-all-button13 {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.s-product-all-text40 {
  color: var(--dl-color-gray-700);
}
.s-product-all-container14 {
  display: flex;
  align-items: center;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: flex-end;
}
.s-product-all-button15 {
  margin-left: var(--dl-space-space-unit);
}
.s-product-all-container15 {
  height: 519px;
  display: flex;
  padding: var(--dl-space-space-unit);
  flex-direction: column;
}
.s-product-all-group126 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: relative;
  align-self: flex-start;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  padding-left: 16px;
  justify-content: space-between;
  border-bottom-width: 1px;
}
.s-product-all-button16 {
  display: none;
  padding: 0px;
  font-size: 18px;
  align-self: center;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-text41 {
  width: auto;
  font-size: 16px;
  min-width: auto;
  font-style: normal;
  font-weight: 500;
}
.s-product-all-icon23 {
  width: 18px;
  height: 18px;
}
.s-product-all-text42 {
  color: rgba(0, 0, 0, 1);
  width: 100%;
  height: auto;
  font-size: 20px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-product-all-text43 {
  color: rgba(0, 0, 0, 1);
  width: 100%;
  height: auto;
  font-size: 20px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-product-all-text44 {
  color: rgba(0, 0, 0, 1);
  width: 100%;
  height: auto;
  font-size: 20px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-product-all-text45 {
  color: rgba(0, 0, 0, 1);
  width: 100%;
  height: auto;
  font-size: 20px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-product-all-container16 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-product-all-text46 {
  padding: var(--dl-space-space-unit);
  font-size: 20px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 700;
}
.s-product-all-container17 {
  display: flex;
  padding: var(--dl-space-space-unit);
  flex-direction: column;
}
.s-product-all-image {
  width: auto;
  height: var(--dl-size-size-xxlarge);
  align-self: stretch;
  object-fit: cover;
}
@media(max-width: 991px) {
  .s-product-all-container03 {
    padding: var(--dl-space-space-halfunit);
  }
  .s-product-all-text {
    min-width: auto;
  }
  .s-product-all-container06 {
    padding: var(--dl-space-space-halfunit);
  }
  .s-product-all-container07 {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-halfunit);
    padding-right: var(--dl-space-space-halfunit);
    padding-bottom: var(--dl-space-space-unit);
  }
  .s-product-all-container08 {
    padding: var(--dl-space-space-halfunit);
    align-items: flex-end;
    flex-direction: column;
  }
  .s-product-all-button07 {
    display: flex;
    align-self: center;
    margin-right: var(--dl-space-space-unit);
    margin-bottom: var(--dl-space-space-unit);
  }
  .s-product-all-text27 {
    font-size: 14px;
  }
  .s-product-all-button08 {
    align-self: flex-end;
    margin-bottom: var(--dl-space-space-unit);
  }
  .s-product-all-text28 {
    font-size: 14px;
  }
  .s-product-all-search-bar {
    align-self: stretch;
    margin-left: 0px;
    justify-content: space-between;
  }
  .s-product-all-textinput {
    width: 100%;
    border-radius: 15px;
  }
  .s-product-all-container11 {
    padding: var(--dl-space-space-halfunit);
  }
  .s-product-all-button09 {
    display: none;
    align-self: center;
  }
  .s-product-all-text29 {
    font-size: 14px;
  }
  .s-product-all-text30 {
    font-size: 14px;
  }
  .s-product-all-button10 {
    min-width: 80px;
    margin-right: 0px;
    justify-content: center;
  }
  .s-product-all-text31 {
    font-size: 14px;
  }
  .s-product-all-button11 {
    min-width: 80px;
    margin-right: 0px;
    justify-content: center;
  }
  .s-product-all-text34 {
    font-size: 14px;
  }
  .s-product-all-text36 {
    font-size: 14px;
  }
  .s-product-all-button12 {
    min-width: 80px;
    margin-right: 0px;
    justify-content: center;
  }
  .s-product-all-text37 {
    font-size: 14px;
    min-width: auto;
  }
  .s-product-all-button13 {
    min-width: 80px;
    margin-right: 0px;
    justify-content: center;
  }
  .s-product-all-text40 {
    font-size: 14px;
  }
  .s-product-all-container14 {
    padding-left: var(--dl-space-space-halfunit);
    padding-right: var(--dl-space-space-halfunit);
  }
  .s-product-all-button14 {
    font-size: 14px;
  }
  .s-product-all-button15 {
    font-size: 14px;
  }
  .s-product-all-group126 {
    padding-left: var(--dl-space-space-halfunit);
    padding-right: var(--dl-space-space-halfunit);
  }
  .s-product-all-text41 {
    font-size: 14px;
  }
  .s-product-all-text42 {
    font-size: 20px;
  }
  .s-product-all-text43 {
    font-size: 20px;
  }
  .s-product-all-text44 {
    font-size: 20px;
  }
  .s-product-all-text45 {
    font-size: 20px;
  }
  .s-product-all-button17 {
    font-size: 14px;
    margin-top: var(--dl-space-space-halfunit);
  }
}
@media(max-width: 767px) {
  .s-product-all-container01 {
    flex-direction: column;
  }
  .s-product-all-container02 {
    display: flex;
    padding: var(--dl-space-space-halfunit);
  }
  .s-product-all-container03 {
    display: none;
  }
  .s-product-all-text {
    width: auto;
  }
  .s-product-all-search-bar {
    height: 100%;
  }
  .s-product-all-textinput {
    width: 100%;
    padding-top: var(--dl-space-space-halfunit);
    padding-left: var(--dl-space-space-halfunit);
    border-radius: 15px;
    padding-right: var(--dl-space-space-halfunit);
    padding-bottom: var(--dl-space-space-halfunit);
  }
  .s-product-all-searchheader {
    width: 2rem;
    height: 1.5rem;
  }
  .s-product-all-container11 {
    flex-direction: column;
  }
  .s-product-all-container12 {
    width: 100%;
  }
  .s-product-all-button10 {
    width: 100%;
    min-width: 75px;
    justify-content: center;
  }
  .s-product-all-text31 {
    text-align: center;
  }
  .s-product-all-button11 {
    width: 100%;
    min-width: 75px;
    justify-content: center;
  }
  .s-product-all-text34 {
    width: auto;
    text-align: center;
  }
  .s-product-all-container13 {
    width: 100%;
  }
  .s-product-all-button12 {
    width: 100%;
    min-width: 75px;
    justify-content: center;
  }
  .s-product-all-text37 {
    text-align: center;
  }
  .s-product-all-button13 {
    width: 100%;
    min-width: 75px;
    justify-content: center;
  }
  .s-product-all-text40 {
    text-align: center;
  }
  .s-product-all-group126 {
    align-items: center;
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    justify-content: flex-start;
  }
  .s-product-all-button16 {
    display: flex;
    padding: 0px;
    border-width: 0px;
  }
  .s-product-all-text41 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
  .s-product-all-text42 {
    display: none;
    font-size: 20px;
    margin-left: var(--dl-space-space-unit);
  }
  .s-product-all-text43 {
    display: none;
  }
  .s-product-all-text44 {
    display: none;
  }
  .s-product-all-text45 {
    display: none;
  }
  .s-product-all-text46 {
    font-size: 20px;
  }
}
@media(max-width: 470px) {
  .s-product-all-container08 {
    padding: var(--dl-space-space-unit);
  }
  .s-product-all-button07 {
    padding: var(--dl-space-space-halfunit);
  }
  .s-product-all-text27 {
    font-size: 12px;
  }
  .s-product-all-button08 {
    padding: var(--dl-space-space-halfunit);
  }
  .s-product-all-text28 {
    font-size: 12px;
  }
  .s-product-all-search-bar {
    height: 100%;
    margin-left: var(--dl-space-space-unit);
    border: 1px solid currentColor;
    border-color: var(--dl-color-gray-black);
    border-width: 1px;
    margin-right: 0px;
  }
  .s-product-all-textinput {
    width: 100%;
    height: 100%;
    padding: 0px;
    border-radius: 15px;
  }
  .s-product-all-searchheader {
    width: 2rem;
    height: 100%;
  }
  .s-product-all-button09 {
    padding: var(--dl-space-space-halfunit);
  }
  .s-product-all-text29 {
    font-size: 12px;
  }
  .s-product-all-container12 {
    padding: var(--dl-space-space-halfunit);
  }
  .s-product-all-text30 {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
    text-align: right;
  }
  .s-product-all-text31 {
    font-size: 12px;
  }
  .s-product-all-text34 {
    font-size: 12px;
  }
  .s-product-all-container13 {
    padding: var(--dl-space-space-halfunit);
  }
  .s-product-all-text36 {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
    text-align: right;
  }
  .s-product-all-text37 {
    font-size: 12px;
  }
  .s-product-all-text40 {
    font-size: 12px;
  }
  .s-product-all-container14 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .s-product-all-button14 {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }
  .s-product-all-button15 {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }
  .s-product-all-container15 {
    padding: var(--dl-space-space-halfunit);
  }
  .s-product-all-text46 {
    font-size: 18px;
  }
  .s-product-all-button17 {
    padding: var(--dl-space-space-halfunit);
    font-size: 12px;
  }
}
</style>
