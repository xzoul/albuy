<template>
  <div class="a-header-container" v-bind:class="rootClassName">
    <div class="a-header-container1">
      <div class="a-header-container2">
        <img
          alt="Untitled652022032713280332178"
          src="/playground_assets/logo1-1500h.png"
          class="a-header-albuylogo"
        />
      </div>
      <div class="a-header-container3">
        <span class="a-header-text">Admin Control</span>
      </div>
      <div class="a-header-container4">
        <button class="a-header-button button">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-516h-1500h.png"
            class="a-header-pasted-image"
          />
          <span class="a-header-text1">Administrator</span>
          <svg viewBox="0 0 1024 1024" class="a-header-icon">
            <path d="M298 426h428l-214 214z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AHeader',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.a-header-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.a-header-container1 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: row;
  justify-content: center;
  border-bottom-width: 1px;
}
.a-header-container2 {
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.a-header-albuylogo {
  height: 4rem;
}
.a-header-container3 {
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.a-header-text {
  padding: var(--dl-space-space-unit);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
.a-header-container4 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.a-header-button {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  background-color: transparent;
}
.a-header-pasted-image {
  height: 2rem;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-round);
}
.a-header-text1 {
  font-size: 20px;
  margin-left: var(--dl-space-space-halfunit);
}
.a-header-icon {
  width: 24px;
  height: 24px;
}





@media(max-width: 991px) {
  .a-header-container2 {
    align-self: stretch;
  }
  .a-header-container3 {
    align-self: stretch;
  }
  .a-header-container4 {
    height: auto;
    align-self: stretch;
  }
}
@media(max-width: 767px) {
  .a-header-container {
    justify-content: space-between;
  }
  .a-header-container1 {
    justify-content: space-between;
  }
  .a-header-container2 {
    display: none;
  }
  .a-header-albuylogo {
    height: 2rem;
  }
  .a-header-container3 {
    width: auto;
  }
  .a-header-text {
    font-size: 18px;
  }
  .a-header-container4 {
    width: auto;
  }
  .a-header-button {
    padding: 0px;
  }
  .a-header-pasted-image {
    height: 1.5rem;
  }
  .a-header-text1 {
    font-size: 18px;
  }
}
@media(max-width: 470px) {
  .a-header-container {
    border-color: var(--dl-color-gray-black);
    border-width: 0px;
    border-bottom-width: 1px;
  }
  .a-header-container2 {
    width: 30%;
  }
  .a-header-albuylogo {
    width: auto;
    height: 1.5rem;
    margin-left: var(--dl-space-space-halfunit);
  }
  .a-header-container3 {
    width: auto;
  }
  .a-header-text {
    font-size: 16px;
  }
  .a-header-container4 {
    width: auto;
  }
  .a-header-pasted-image {
    width: 20px;
    height: 20px;
    display: flex;
  }
  .a-header-text1 {
    font-size: 16px;
  }
}
</style>
