<template>
  <div class="banner-container">
    <img src="/playground_assets/179300.svg" class="banner-image" />
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    image_src: {
      type: String,
      default: '/playground_assets/179300.svg',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.banner-container {
  width: var(--dl-size-size-maxwidth);
  height: 400px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: #ffffff;
}
.banner-image {
  width: auto;
  object-fit: cover;
}
</style>
