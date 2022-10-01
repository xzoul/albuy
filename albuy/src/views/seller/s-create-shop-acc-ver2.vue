<template>
  <div class="s-create-shop-acc-ver2-container">
    <div class="s-create-shop-acc-ver2-container1">
      <div class="s-create-shop-acc-ver2-container2">
        <div class="s-create-shop-acc-ver2-container3">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-ccuq-200h.png"
            class="s-create-shop-acc-ver2-pasted-image"
          />
          <svg
            viewBox="0 0 987.4285714285713 1024"
            class="s-create-shop-acc-ver2-icon"
          >
            <path
              d="M987.429 510.286c0 5.143-2.286 10.286-5.714 13.714l-219.429 202.286c-5.714 5.143-13.143 6.286-20 3.429-6.286-2.857-10.857-9.143-10.857-16.571v-128h-713.143c-10.286 0-18.286-8-18.286-18.286v-109.714c0-10.286 8-18.286 18.286-18.286h713.143v-128c0-7.429 4-13.714 10.857-16.571s14.286-1.714 20 2.857l219.429 200c3.429 3.429 5.714 8 5.714 13.143v0z"
            ></path>
          </svg>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-yrtv-200h.png"
            class="s-create-shop-acc-ver2-pasted-image1"
          />
          <svg
            viewBox="0 0 987.4285714285713 1024"
            class="s-create-shop-acc-ver2-icon2"
          >
            <path
              d="M987.429 510.286c0 5.143-2.286 10.286-5.714 13.714l-219.429 202.286c-5.714 5.143-13.143 6.286-20 3.429-6.286-2.857-10.857-9.143-10.857-16.571v-128h-713.143c-10.286 0-18.286-8-18.286-18.286v-109.714c0-10.286 8-18.286 18.286-18.286h713.143v-128c0-7.429 4-13.714 10.857-16.571s14.286-1.714 20 2.857l219.429 200c3.429 3.429 5.714 8 5.714 13.143v0z"
            ></path>
          </svg>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-8zsd-200h.png"
            class="s-create-shop-acc-ver2-pasted-image2"
          />
        </div>
        <div class="s-create-shop-acc-ver2-container4">
          <svg viewBox="0 0 1024 1024" class="s-create-shop-acc-ver2-icon4">
            <path
              d="M512 1024c282.77 0 512-229.23 512-512s-229.23-512-512-512-512 229.23-512 512 229.23 512 512 512zM512 96c229.75 0 416 186.25 416 416s-186.25 416-416 416-416-186.25-416-416 186.25-416 416-416z"
            ></path>
            <path
              d="M669.256 317.256l-90.512-90.512-285.254 285.256 285.256 285.254 90.508-90.508-194.744-194.746z"
            ></path>
          </svg>
          <span class="s-create-shop-acc-ver2-text">
            Upload Your Store Documents
          </span>
        </div>
        <span class="s-create-shop-acc-ver2-text1">
          Upload your store documents that prove that you are are regsitered as a
          reseller of One Town, One Product products (PDF, JPG, PNG)
        </span>
        <div class="s-create-shop-acc-ver2-container5">
          <div class="s-create-shop-acc-ver2-container6">
            <input @change="onDocumentSelected" class="s-create-shop-acc-ver2-button button" type="file" accept=".pdf,.jpg,.png"/>
            <button class="s-create-shop-acc-ver2-button button">
              Upload File(s) Here
            </button>
          </div>
          <div class="s-create-shop-acc-ver2-container7">
            <span class="s-create-shop-acc-ver2-text2">Document.pdf</span>
          </div>
        </div>
        <!--TESTING-->
        <div>
          <button @click="continueSignup()" :disabled="ContinueButtonDisabled" >Continue</button>
          <button @click="continueSignup()">Skip</button>
        </div>
        <!--TESTING-->
      </div>
    </div>
  </div>
</template>

<script>
  import Parse from 'parse';

  export default {
    name: 'SCreateShopAccVer2',
    metaInfo: {
      title: 'S-CreateShopAccVer2 - exported project',
      meta: [
        {
          property: 'og:title',
          content: 'S-CreateShopAccVer2 - exported project',
        },
      ],
    },

    data(){
      return{
        ContinueButtonDisabled: true,
        DocumentURL: '',
      }
    },

    methods: {
      async onDocumentSelected(e){
        var file = e.target.files[0];
        var parseFile = new Parse.File(file.name, file);
        await parseFile.save().then(()=> {
          this.DocumentURL = parseFile.url();
          this.ContinueButtonDisabled = false;
        });
      },

      continueSignup(){
        this.$router.push({
            name: 's-create-shop-acc-ver3',
            query: {
                DocumentURL : this.DocumentURL,
            }
        });
      },
      
    }
  }
</script>

<style scoped>
.s-create-shop-acc-ver2-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #E5E5E5;
}
.s-create-shop-acc-ver2-container1 {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.s-create-shop-acc-ver2-container2 {
  flex: 0;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.s-create-shop-acc-ver2-container3 {
  flex: 0 0 auto;
  width: 400px;
  display: flex;
  align-self: center;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
  justify-content: space-between;
}
.s-create-shop-acc-ver2-pasted-image {
  width: var(--dl-size-size-small);
}
.s-create-shop-acc-ver2-icon {
  width: 24px;
  height: 24px;
}
.s-create-shop-acc-ver2-pasted-image1 {
  width: var(--dl-size-size-small);
}
.s-create-shop-acc-ver2-icon2 {
  width: 24px;
  height: 24px;
}
.s-create-shop-acc-ver2-pasted-image2 {
  width: var(--dl-size-size-small);
}
.s-create-shop-acc-ver2-container4 {
  width: auto;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.s-create-shop-acc-ver2-icon4 {
  width: 24px;
  height: 24px;
}
.s-create-shop-acc-ver2-text {
  padding: var(--dl-space-space-unit);
  font-size: 25px;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
.s-create-shop-acc-ver2-text1 {
  width: var(--dl-size-size-xxlarge);
  padding: var(--dl-space-space-unit);
  font-size: 18px;
  font-style: normal;
  text-align: center;
  font-weight: 400;
}
.s-create-shop-acc-ver2-container5 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.s-create-shop-acc-ver2-container6 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-unit);
}
.s-create-shop-acc-ver2-button {
  width: var(--dl-size-size-xlarge);
  height: auto;
  padding: 6px;
  font-size: 15px;
  align-self: center;
  text-align: center;
  border-width: 0px;
  border-radius: 15px;
  background-color: #F27320;
}
.s-create-shop-acc-ver2-container7 {
  flex: 0 0 auto;
  width: var(--dl-size-size-xxlarge);
  height: 100px;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
  justify-content: flex-start;
  background-color: #e5e5e5;
}
.s-create-shop-acc-ver2-text2 {
  width: auto;
  align-self: flex-start;
  text-align: left;
}
@media(max-width: 991px) {
  .s-create-shop-acc-ver2-container4 {
    width: 60%;
  }
  .s-create-shop-acc-ver2-text {
    font-size: 14px;
  }
  .s-create-shop-acc-ver2-text1 {
    font-size: 25px;
  }
  .s-create-shop-acc-ver2-button {
    font-size: 14px;
  }
}
@media(max-width: 767px) {
  .s-create-shop-acc-ver2-container4 {
    width: 50%;
  }
  .s-create-shop-acc-ver2-text {
    font-size: 14px;
  }
  .s-create-shop-acc-ver2-text1 {
    font-size: 22px;
  }
  .s-create-shop-acc-ver2-button {
    font-size: 12px;
  }
}
@media(max-width: 470px) {
  .s-create-shop-acc-ver2-container4 {
    width: 100%;
  }
  .s-create-shop-acc-ver2-text1 {
    font-size: 18px;
    text-align: center;
  }
}
</style>
