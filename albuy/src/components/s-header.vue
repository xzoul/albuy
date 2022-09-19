<template>
  <div class="s-header-container" v-bind:class="rootClassName">
    <div class="s-header-container1">
      <div class="s-header-container2">
        <span class="s-header-text">Home</span>
        <svg viewBox="0 0 1024 1024" class="s-header-icon">
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
        <span class="s-header-text1">My Sales</span>
      </div>
      <div class="s-header-container3">
        <img
          alt="Untitled652022032713280332178"
          src="/playground_assets/albuylogo-1500h.png"
          class="s-header-albuylogo"
        />
      </div>
      <div class="s-header-container4">
        <button class="s-header-button button">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-516h-1500h.png"
            class="s-header-pasted-image"
          />
          <span class="s-header-text2">Decy Abion</span>
        </button>
        <div class="s-header-container5">
          <svg viewBox="0 0 1024 1024" class="s-header-icon2">
            <path
              d="M810.667 768c23.467 0 42.667 19.2 42.667 42.667s-19.2 42.667-42.667 42.667h-597.333c-23.467 0-42.667-19.2-42.667-42.667s19.2-42.667 42.667-42.667h597.333M810.667 682.667h-597.333c-70.571 0-128 57.429-128 128s57.429 128 128 128h597.333c70.571 0 128-57.429 128-128s-57.429-128-128-128z"
            ></path>
            <path
              d="M810.667 469.333c23.467 0 42.667 19.2 42.667 42.667s-19.2 42.667-42.667 42.667h-597.333c-23.467 0-42.667-19.2-42.667-42.667s19.2-42.667 42.667-42.667h597.333M810.667 384h-597.333c-70.571 0-128 57.429-128 128s57.429 128 128 128h597.333c70.571 0 128-57.429 128-128s-57.429-128-128-128z"
            ></path>
            <path
              d="M810.667 170.667c23.467 0 42.667 19.2 42.667 42.667s-19.2 42.667-42.667 42.667h-597.333c-23.467 0-42.667-19.2-42.667-42.667s19.2-42.667 42.667-42.667h597.333M810.667 85.333h-597.333c-70.571 0-128 57.429-128 128s57.429 128 128 128h597.333c70.571 0 128-57.429 128-128s-57.429-128-128-128z"
            ></path></svg
          ><svg viewBox="0 0 1024 1024" class="s-header-icon6">
            <path
              d="M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM140.571 804.571h742.857c-102.286-115.429-152-272-152-475.429 0-73.714-69.714-182.857-219.429-182.857s-219.429 109.143-219.429 182.857c0 203.429-49.714 360-152 475.429zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SHeader',
  props: {
    text1: {
      type: String,
      default: 'Text',
    },
    heading: {
      type: String,
      default: 'Heading',
    },
    text: {
      type: String,
      default: 'Text',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.s-header-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.s-header-container1 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-oneandhalfunits);
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  justify-content: center;
  border-bottom-width: 1px;
}
.s-header-container2 {
  width: 33%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.s-header-text {
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
}
.s-header-icon {
  width: 24px;
  height: 24px;
}
.s-header-text1 {
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
}
.s-header-container3 {
  width: 33%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.s-header-albuylogo {
  height: 4rem;
  align-self: center;
}
.s-header-container4 {
  width: 33%;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.s-header-button {
  display: flex;
  padding: 0px;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  background-color: transparent;
}
.s-header-pasted-image {
  height: 2rem;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-round);
}
.s-header-text2 {
  margin-left: var(--dl-space-space-halfunit);
}
.s-header-container5 {
  display: flex;
  align-self: stretch;
  align-items: center;
  margin-left: var(--dl-space-space-unit);
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  margin-right: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: flex-end;
  border-left-width: 1px;
}
.s-header-icon2 {
  width: 24px;
  height: 24px;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
}
.s-header-icon6 {
  width: 24px;
  height: 24px;
}



















@media(max-width: 991px) {
  .s-header-container2 {
    align-self: stretch;
  }
  .s-header-container3 {
    align-self: stretch;
  }
  .s-header-container4 {
    height: auto;
    align-self: stretch;
  }
}
@media(max-width: 767px) {
  .s-header-container {
    justify-content: space-between;
  }
  .s-header-container1 {
    justify-content: space-between;
  }
  .s-header-container2 {
    width: auto;
  }
  .s-header-text {
    font-size: 18px;
  }
  .s-header-text1 {
    font-size: 18px;
  }
  .s-header-container3 {
    display: none;
  }
  .s-header-albuylogo {
    height: 2rem;
  }
  .s-header-container4 {
    width: auto;
  }
  .s-header-button {
    padding: 0px;
  }
  .s-header-pasted-image {
    height: 1.5rem;
  }
  .s-header-text2 {
    font-size: 18px;
  }
}
@media(max-width: 470px) {
  .s-header-container {
    border-color: var(--dl-color-gray-black);
    border-width: 0px;
    border-bottom-width: 1px;
  }
  .s-header-container2 {
    width: auto;
  }
  .s-header-text {
    font-size: 16px;
  }
  .s-header-text1 {
    font-size: 16px;
  }
  .s-header-container3 {
    width: 30%;
  }
  .s-header-albuylogo {
    width: auto;
    height: 1.5rem;
    margin-left: var(--dl-space-space-halfunit);
  }
  .s-header-container4 {
    width: auto;
  }
  .s-header-pasted-image {
    width: 20px;
    height: 20px;
    display: flex;
  }
  .s-header-text2 {
    font-size: 16px;
  }
  .s-header-container5 {
    padding-top: var(--dl-space-space-halfunit);
    padding-bottom: var(--dl-space-space-halfunit);
  }
  .s-header-icon2 {
    width: 20px;
    height: 20px;
  }
  .s-header-icon6 {
    width: 20px;
    height: 20px;
  }
}
</style>
