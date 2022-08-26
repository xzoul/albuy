<template>
  <div class="topsellingproductbtn-container button" v-bind:class="rootClassName">
    <img
      :alt="TSPimg1_alt"
      :src="TSPimg1_src"
      class="topsellingproductbtn-t-s-pimg1"
    />
    <span class="topsellingproductbtn-text">
      <span class="topsellingproductbtn-text1">
        <span>Keychains</span>
        <br />
        <span></span>
      </span>
    </span>
    <span class="topsellingproductbtn-text5">{{ text }}</span>
    <span class="topsellingproductbtn-text6">{{ text1 }}</span>
  </div>
</template>

<script>
export default {
  name: 'Topsellingproductbtn',
  props: {
    text1: {
      type: String,
      default: '23 Sold',
    },
    TSPimg1_alt: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    TSPimg1_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJhZ3xlbnwwfHx8fDE2NTU2MzU0OTc&ixlib=rb-1.2.1&w=200',
    },
    text: {
      type: String,
      default: 'Php 20',
    },
  },
}
</script>

<style scoped>
.topsellingproductbtn-container {
  width: auto;
  height: auto;
  display: flex;
  padding: 0px;
  position: relative;
  transition: 0.3s;
  align-items: stretch;
  border-radius: 0px;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
}

.topsellingproductbtn-t-s-pimg1 {
  width: var(--dl-size-size-xlarge);
  height: var(--dl-size-size-xlarge);
  align-self: center;
  object-fit: cover;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.topsellingproductbtn-text {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-halfunit);
  font-stretch: normal;
  text-decoration: none;
}
.topsellingproductbtn-text1 {
  color: rgba(0, 0, 0, 1);
  width: 125px;
  height: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}
.topsellingproductbtn-text5 {
  color: rgba(1, 158, 219, 1);
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
.topsellingproductbtn-text6 {
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
  .topsellingproductbtn-t-s-pimg1 {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }
  .topsellingproductbtn-text {
    font-size: 14px;
  }
  .topsellingproductbtn-text5 {
    font-size: 12px;
  }
  .topsellingproductbtn-text6 {
    font-size: 10px;
  }
}
</style>
