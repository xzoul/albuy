<template>
  <div class="footer-container" v-bind:class="rootClassName">
    <div class="footer-container1">
      <img :alt="albuylogo_alt" :src="albuylogo_src" class="footer-albuylogo" />
      <div class="footer-container2">
        <div class="footer-container3">
          <span class="footer-text">{{ text }}</span>
          <span class="footer-text01">{{ text1 }}</span>
        </div>
        <div class="footer-aboutalbuy">
          <span class="footer-text02">{{ text2 }}</span>
          <span class="footer-text03">{{ text3 }}</span>
          <span class="footer-text04">{{ text4 }}</span>
          <span class="footer-text05">{{ text5 }}</span>
        </div>
        <div class="footer-gethelp">
          <span class="footer-text06">{{ text6 }}</span>
          <span class="footer-text07">{{ text7 }}</span>
          <span class="footer-text08">{{ text8 }}</span>
        </div>
        <div class="footer-container4">
          <span class="footer-text09">{{ text9 }}</span>
          <div class="footer-socials">
            <svg viewBox="0 0 877.7142857142857 1024" class="footer-icon">
              <path
                d="M731.429 348.571c-21.714 9.714-44.571 16-69.143 19.429 25.143-14.857 44-38.857 53.143-66.857-23.429 13.714-49.143 24-76.571 29.143-21.714-23.429-53.143-37.714-87.429-37.714-66.286 0-120 53.714-120 120 0 9.143 0.571 18.857 2.857 27.429-100-5.143-188.571-52.571-248-125.714-10.286 17.714-16.571 38.857-16.571 60.571 0 41.714 19.429 78.286 52 100-20-0.571-38.857-6.286-57.143-14.857v1.143c0 58.286 44 106.857 98.857 117.714-10.286 2.857-18.286 4.571-29.143 4.571-7.429 0-14.857-1.143-22.286-2.286 15.429 47.429 59.429 82.286 112 83.429-41.143 32-92.571 51.429-149.143 51.429-9.714 0-19.429-0.571-28.571-1.714 53.143 33.714 116 53.714 184 53.714 220.571 0 341.714-182.857 341.714-341.714 0-5.143 0-10.286-0.571-15.429 23.429-16.571 44-37.714 60-62.286zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
              ></path></svg
            ><svg viewBox="0 0 877.7142857142857 1024" class="footer-icon2">
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg viewBox="0 0 877.7142857142857 1024" class="footer-icon4">
              <path
                d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CFooter',
  props: {
    text4: {
      type: String,
      default: 'Contact Us',
    },
    text1: {
      type: String,
      default: 'Become a Seller',
    },
    text6: {
      type: String,
      default: 'Get Help',
    },
    text8: {
      type: String,
      default: 'Live Chat',
    },
    text9: {
      type: String,
      default: 'Follow Us!',
    },
    rootClassName: String,
    text7: {
      type: String,
      default: 'FAQs',
    },
    text5: {
      type: String,
      default: 'Privacy Policy',
    },
    albuylogo_alt: {
      type: String,
      default: 'Untitled652022032713280332178',
    },
    text: {
      type: String,
      default: 'Sell',
    },
    albuylogo_src: {
      type: String,
      default: '/playground_assets/albuylogo-1500h.png',
    },
    text2: {
      type: String,
      default: 'About AlBuy',
    },
    text3: {
      type: String,
      default: 'About Us',
    },
  },
}
</script>

<style scoped>
.footer-container {
  width: 100%;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: row;
  justify-content: center;
  border-top-width: 1px;
}
.footer-container1 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.footer-albuylogo {
  height: 4REM;
  align-self: center;
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-threeunits);
}
.footer-container2 {
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
}
.footer-container3 {
  width: auto;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  margin-left: 0px;
  margin-right: 0px;
  flex-direction: column;
}
.footer-text {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  font-size: 16px;
  align-self: flex-start;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.footer-text01 {
  color: rgba(0, 0, 0, 0.6899999976158142);
  width: auto;
  height: auto;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.footer-aboutalbuy {
  width: auto;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  margin-left: 0px;
  margin-right: 0px;
  flex-direction: column;
}
.footer-text02 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
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
.footer-text03 {
  color: rgba(0, 0, 0, 0.6899999976158142);
  width: auto;
  height: auto;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.footer-text04 {
  color: rgba(0, 0, 0, 0.6899999976158142);
  width: auto;
  height: auto;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.footer-text05 {
  color: rgba(0, 0, 0, 0.6899999976158142);
  width: auto;
  height: auto;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.footer-gethelp {
  width: auto;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  margin-left: 0px;
  margin-right: 0px;
  flex-direction: column;
}
.footer-text06 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
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
.footer-text07 {
  color: rgba(0, 0, 0, 0.6899999976158142);
  width: auto;
  height: auto;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.footer-text08 {
  color: rgba(0, 0, 0, 0.6899999976158142);
  width: auto;
  height: auto;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.footer-container4 {
  width: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}
.footer-text09 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
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
.footer-socials {
  width: auto;
  height: auto;
  display: flex;
  box-sizing: border-box;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
}
.footer-icon {
  width: 2REM;
  height: auto;
  align-self: center;
}
.footer-icon2 {
  width: 2REM;
  height: auto;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
}
.footer-icon4 {
  width: 2REM;
  height: auto;
  align-self: center;
}
.footer-root-class-name {
  background-color: #019EDB;
}
.footer-root-class-name1 {
  left: 0px;
  bottom: 0px;
  position: static;
  align-self: stretch;
}
.footer-root-class-name2 {
  left: 0px;
  bottom: 0px;
  position: static;
}
.footer-root-class-name3 {
  left: 0px;
  bottom: 0px;
  position: static;
}

.footer-root-class-name5 {
  left: 0px;
  width: 100%;
  bottom: 0px;
  position: static;
  align-self: center;
}
.footer-root-class-name6 {
  left: 0px;
  width: 100%;
  bottom: 0px;
  position: static;
  align-self: center;
}
.footer-root-class-name7 {
  left: 0px;
  width: 100%;
  bottom: 0px;
  position: static;
  align-self: flex-end;
}
.footer-root-class-name8 {
  left: 0px;
  width: 100%;
  bottom: 0px;
  position: static;
  align-self: center;
}



.footer-root-class-name12 {
  left: 0px;
  bottom: 0px;
  position: static;
}
















@media(max-width: 991px) {
  .footer-container {
    border-color: var(--dl-color-gray-black);
    border-width: 0px;
    border-top-width: 1px;
  }
  .footer-albuylogo {
    height: 3rem;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-twounits);
  }
  .footer-icon {
    width: 1.5rem;
  }
  .footer-icon2 {
    width: 1.5rem;
  }
  .footer-icon4 {
    width: 1.5rem;
  }
  .footer-root-class-name1 {
    position: static;
  }
}
@media(max-width: 767px) {
  .footer-container {
    padding: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
  }
  .footer-container1 {
    flex-direction: column;
  }
  .footer-albuylogo {
    margin-left: 0px;
    margin-right: 0px;
  }
  .footer-container2 {
    width: 100%;
    align-self: center;
    margin-top: var(--dl-space-space-oneandhalfunits);
    align-items: flex-start;
    margin-bottom: var(--dl-space-space-unit);
    justify-content: space-between;
  }
  .footer-text {
    font-size: 14px;
  }
  .footer-text01 {
    font-size: 12px;
  }
  .footer-text02 {
    font-size: 14px;
  }
  .footer-text03 {
    font-size: 12px;
  }
  .footer-text04 {
    font-size: 12px;
  }
  .footer-text05 {
    font-size: 12px;
  }
  .footer-text06 {
    font-size: 14px;
  }
  .footer-text07 {
    font-size: 12px;
  }
  .footer-text08 {
    font-size: 12px;
  }
  .footer-text09 {
    font-size: 14px;
  }
  .footer-icon {
    width: 1rem;
  }
  .footer-icon2 {
    width: 1rem;
  }
  .footer-icon4 {
    width: 1rem;
  }
  .footer-root-class-name1 {
    position: static;
  }
  .footer-root-class-name2 {
    display: none;
  }
  .footer-root-class-name4 {
    display: none;
  }
  .footer-root-class-name5 {
    display: none;
  }
  .footer-root-class-name6 {
    display: none;
  }
  .footer-root-class-name8 {
    display: none;
  }
  .footer-root-class-name12 {
    display: none;
  }
  .footer-root-class-name13 {
    display: none;
  }
  .footer-root-class-name14 {
    display: none;
  }
  .footer-root-class-name15 {
    display: none;
  }
  .footer-root-class-name16 {
    display: none;
  }
  .footer-root-class-name17 {
    display: none;
  }
  .footer-root-class-name18 {
    display: none;
  }
  .footer-root-class-name22 {
    display: none;
  }
  .footer-root-class-name24 {
    display: none;
  }
  .footer-root-class-name26 {
    display: none;
  }
  .footer-root-class-name27 {
    display: none;
  }
  .footer-root-class-name28 {
    display: none;
  }
}
@media(max-width: 470px) {
  .footer-container {
    padding: var(--dl-space-space-unit);
    flex-direction: column;
  }
  .footer-albuylogo {
    height: 3rem;
    margin-left: 0px;
    margin-right: 0px;
  }
  .footer-text {
    font-size: 12px;
  }
  .footer-text01 {
    font-size: 10px;
  }
  .footer-text02 {
    font-size: 12px;
  }
  .footer-text03 {
    font-size: 10px;
  }
  .footer-text04 {
    font-size: 10px;
  }
  .footer-text05 {
    font-size: 10px;
  }
  .footer-text06 {
    font-size: 12px;
  }
  .footer-text07 {
    font-size: 10px;
  }
  .footer-text08 {
    font-size: 10px;
  }
  .footer-container4 {
    margin-right: 0px;
  }
  .footer-text09 {
    font-size: 12px;
  }
  .footer-icon {
    width: 1rem;
  }
  .footer-icon2 {
    width: 1rem;
  }
  .footer-icon4 {
    width: 1rem;
  }
  .footer-root-class-name1 {
    position: static;
  }
  .footer-root-class-name2 {
    display: none;
  }
  .footer-root-class-name3 {
    position: static;
  }
  .footer-root-class-name4 {
    display: none;
  }
  .footer-root-class-name5 {
    display: none;
    position: static;
    margin-top: var(--dl-space-space-threeunits);
  }
  .footer-root-class-name6 {
    position: static;
  }
  .footer-root-class-name7 {
    position: static;
    margin-top: var(--dl-space-space-threeunits);
  }
  .footer-root-class-name8 {
    display: none;
    position: static;
    margin-top: var(--dl-space-space-threeunits);
  }
  .footer-root-class-name9 {
    display: flex;
  }
  .footer-root-class-name12 {
    display: none;
  }
  .footer-root-class-name13 {
    display: none;
  }
  .footer-root-class-name14 {
    display: none;
  }
  .footer-root-class-name15 {
    display: none;
  }
  .footer-root-class-name16 {
    display: none;
  }
  .footer-root-class-name17 {
    display: none;
  }
  .footer-root-class-name18 {
    display: none;
  }
  .footer-root-class-name22 {
    display: none;
  }
  .footer-root-class-name24 {
    display: none;
  }
  .footer-root-class-name26 {
    display: none;
  }
  .footer-root-class-name27 {
    display: none;
  }
  .footer-root-class-name28 {
    display: none;
  }
}
</style>
