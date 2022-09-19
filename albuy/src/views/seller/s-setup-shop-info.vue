<template>
  <div class="s-setup-shop-info-container">
    <c-header rootClassName="c-header-root-class-name9"></c-header>
    <div class="s-setup-shop-info-container01">
      <div class="s-setup-shop-info-container02">
        <div class="s-setup-shop-info-container03">
          <span class="s-setup-shop-info-text">Shop Name</span>
          <input
            type="password"
            class="s-setup-shop-info-currentpassinput input"
          />
        </div>
        <div class="s-setup-shop-info-container04">
          <span class="s-setup-shop-info-text01">Pickup Address</span>
        </div>
        <div class="s-setup-shop-info-container05">
          <span class="s-setup-shop-info-text02">Full Name</span>
          <input
            type="password"
            class="s-setup-shop-info-currentpassinput01 input"
          />
        </div>
        <div class="s-setup-shop-info-container06">
          <span class="s-setup-shop-info-text03">Phone Number</span>
          <input
            type="password"
            class="s-setup-shop-info-currentpassinput02 input"
          />
        </div>
        <div class="s-setup-shop-info-container07">
          <span class="s-setup-shop-info-text04">Province</span>
          <input
            type="password"
            class="s-setup-shop-info-currentpassinput03 input"
          />
        </div>
        <div class="s-setup-shop-info-container08">
          <span class="s-setup-shop-info-text05">City</span>
          <input
            type="password"
            class="s-setup-shop-info-currentpassinput04 input"
          />
        </div>
        <div class="s-setup-shop-info-container09">
          <span class="s-setup-shop-info-text06">Barangay</span>
          <input
            type="password"
            class="s-setup-shop-info-currentpassinput05 input"
          />
        </div>
        <div class="s-setup-shop-info-container10">
          <span class="s-setup-shop-info-text07">Detailed Address</span>
          <input
            type="password"
            class="s-setup-shop-info-currentpassinput06 input"
          />
        </div>
        <div class="s-setup-shop-info-container11">
          <span class="s-setup-shop-info-text08">Postal Code</span>
          <input
            type="password"
            class="s-setup-shop-info-currentpassinput07 input"
          />
        </div>
        <div class="s-setup-shop-info-container12">
          <span class="s-setup-shop-info-text09">Email</span>
          <input
            type="password"
            class="s-setup-shop-info-currentpassinput08 input"
          />
        </div>
        <div class="s-setup-shop-info-container13">
          <div class="s-setup-shop-info-container14">
            <span class="s-setup-shop-info-text10">Phone Number</span>
            <input
              type="password"
              class="s-setup-shop-info-currentpassinput09 input"
            />
          </div>
          <span class="s-setup-shop-info-text11">
            <span class="s-setup-shop-info-text12">Verify</span>
          </span>
        </div>
        <div class="s-setup-shop-info-container15">
          <button class="button s-setup-shop-info-button">Cancel</button>
          <button class="s-setup-shop-info-button1 button">
            <span class="s-setup-shop-info-text13">
              <span>Save</span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name9"></app-footer>
  </div>
</template>

<script>
import CHeader from '../components/c-header'
import AppFooter from '../components/footer'

export default {
  name: 'SSetupShopInfo',
  components: {
    CHeader,
    AppFooter,
  },
  metaInfo: {
    title: 'S-Setup-Shop-Info - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'S-Setup-Shop-Info - exported project',
      },
    ],
  },
}
</script>

<style scoped>
.s-setup-shop-info-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.s-setup-shop-info-container01 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  max-width: var(--dl-size-size-maxwidth);
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.s-setup-shop-info-container02 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  flex-direction: column;
}
.s-setup-shop-info-container03 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container04 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
  border-top-width: 1px;
}
.s-setup-shop-info-text01 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 20px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-container05 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text02 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput01 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container06 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text03 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput02 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container07 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text04 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput03 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container08 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  padding-left: 16px;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text05 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput04 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container09 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text06 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput05 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container10 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text07 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput06 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container11 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text08 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput07 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container12 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text09 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput08 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-container13 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: column;
}
.s-setup-shop-info-container14 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.s-setup-shop-info-text10 {
  color: rgba(0, 0, 0, 1);
  width: var(--dl-size-size-xlarge);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-currentpassinput09 {
  width: 100%;
  height: auto;
  font-size: 16px;
  max-width: 100%;
  margin-left: var(--dl-space-space-twounits);
  border-color: #bfbfbf;
  border-width: .5px;
  background-color: transparent;
}
.s-setup-shop-info-text11 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 12px;
  align-self: flex-end;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.s-setup-shop-info-text12 {
  color: var(--dl-color-primary-100);
}
.s-setup-shop-info-container15 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-end;
}
.s-setup-shop-info-button1 {
  margin-left: var(--dl-space-space-unit);
}
@media(max-width: 991px) {
  .s-setup-shop-info-container02 {
    width: 100%;
  }
  .s-setup-shop-info-currentpassinput {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput01 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput02 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput03 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput04 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput05 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput06 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput07 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput08 {
    max-width: 100%;
  }
  .s-setup-shop-info-currentpassinput09 {
    max-width: 100%;
  }
}
@media(max-width: 767px) {
  .s-setup-shop-info-container02 {
    width: 100%;
  }
  .s-setup-shop-info-container03 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput {
    max-width: 100%;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container05 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput01 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container06 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput02 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container07 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput03 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container08 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput04 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container09 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput05 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container10 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput06 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container11 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput07 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container12 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput08 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-container14 {
    align-items: flex-start;
    flex-direction: column;
  }
  .s-setup-shop-info-currentpassinput09 {
    width: 100%;
    max-width: 100%;
    align-self: flex-start;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .s-setup-shop-info-text11 {
    align-self: flex-end;
  }
}
@media(max-width: 470px) {
  .s-setup-shop-info-container01 {
    padding: var(--dl-space-space-unit);
  }
  .s-setup-shop-info-text {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text02 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput01 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text03 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput02 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text04 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput03 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text05 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput04 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text06 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput05 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text07 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput06 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text08 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput07 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text09 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput08 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text10 {
    font-size: 14px;
  }
  .s-setup-shop-info-currentpassinput09 {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 14px;
    max-width: 100%;
    align-self: center;
  }
  .s-setup-shop-info-text11 {
    font-size: 11px;
  }
  .s-setup-shop-info-button {
    font-size: 14px;
  }
  .s-setup-shop-info-text13 {
    font-size: 14px;
  }
}
</style>
