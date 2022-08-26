<template>
  <div class="profile-side-bar-p-m-n-p-p-menu" v-bind:class="rootClassName">
    <div class="profile-side-bar-container">
      <div class="profile-side-bar-container1">
        <img
          :alt="profileimg_alt"
          :src="profileimg_src"
          class="profile-side-bar-profileimg"
        />
        <span class="profile-side-bar-profilename">{{ profilename }}</span>
      </div>
      <select class="profile-side-bar-birthmonthselect">
        <option value="Option 1" selected>My Orders</option>
        <option value="Option 3">Option 3</option>
      </select>
    </div>
    <div class="profile-side-bar-buttons">
      <button class="profile-side-bar-button button">
        <svg viewBox="0 0 731.4285714285713 1024" class="profile-side-bar-icon">
          <path
            d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
          ></path>
        </svg>
        <span class="profile-side-bar-text">{{ text }}</span>
      </button>
      <button class="profile-side-bar-button1 button">
        <svg viewBox="0 0 1024 1024" class="profile-side-bar-icon02">
          <path
            d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"
          ></path>
        </svg>
        <span class="profile-side-bar-text1">{{ text3 }}</span>
      </button>
      <button class="profile-side-bar-button2 button">
        <svg viewBox="0 0 1024 1024" class="profile-side-bar-icon04">
          <path
            d="M768 682l86 86v42h-684v-42l86-86v-212q0-100 51-174t141-96v-30q0-26 18-45t46-19 46 19 18 45v30q90 22 141 96t51 174v212zM512 938q-36 0-61-24t-25-60h172q0 34-26 59t-60 25z"
          ></path>
        </svg>
        <span class="profile-side-bar-text2">{{ text2 }}</span>
      </button>
      <button class="profile-side-bar-button3 button">
        <svg viewBox="0 0 658.2857142857142 1024" class="profile-side-bar-icon06">
          <path
            d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"
          ></path>
        </svg>
        <span class="profile-side-bar-text3">{{ text1 }}</span>
      </button>
      <button class="profile-side-bar-button4 button">
        <svg viewBox="0 0 1024 1024" class="profile-side-bar-icon08">
          <path
            d="M504 466q44 12 73 24t61 33 49 53 17 76q0 62-41 101t-109 51v92h-128v-92q-66-14-109-56t-47-108h94q8 90 126 90 62 0 89-23t27-53q0-72-128-104-200-46-200-176 0-58 42-99t106-55v-92h128v94q66 16 101 60t37 102h-94q-4-90-108-90-52 0-83 22t-31 58q0 58 128 92z"
          ></path>
        </svg>
        <span class="profile-side-bar-text4">{{ text11 }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileSideBar',
  props: {
    text11: {
      type: String,
      default: 'Payment Methods',
    },
    text2: {
      type: String,
      default: 'Notifications',
    },
    profilename: {
      type: String,
      default: 'username',
    },
    rootClassName: String,
    profileimg_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1656562105231-7d34cce4f123?ixid=Mnw5MTMyMXwwfDF8YWxsfDd8fHx8fHwyfHwxNjU2NTc0NDQ4&ixlib=rb-1.2.1&w=200',
    },
    profileimg_alt: {
      type: String,
      default: 'image',
    },
    text3: {
      type: String,
      default: 'My Orders',
    },
    text: {
      type: String,
      default: 'My Account',
    },
    text1: {
      type: String,
      default: 'Password & Security',
    },
  },
}
</script>

<style scoped>
.profile-side-bar-p-m-n-p-p-menu {
  width: auto;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  flex-direction: column;
}
.profile-side-bar-container {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  padding-right: 16px;
  padding-bottom: 16px;
}
.profile-side-bar-container1 {
  display: flex;
  align-items: center;
}
.profile-side-bar-profileimg {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.profile-side-bar-profilename {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  max-width: var(--dl-size-size-medium);
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  margin-left: var(--dl-space-space-unit);
  font-stretch: normal;
  text-decoration: none;
}
.profile-side-bar-birthmonthselect {
  width: auto;
  height: auto;
  display: none;
  font-size: 12px;
  background-color: transparent;
}
.profile-side-bar-buttons {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.profile-side-bar-button {
  display: flex;
  align-self: stretch;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  background-color: transparent;
}
.profile-side-bar-icon {
  width: 24px;
  height: 24px;
}
.profile-side-bar-text {
  font-size: 14px;
  margin-left: var(--dl-space-space-halfunit);
}
.profile-side-bar-button1 {
  display: flex;
  align-self: stretch;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  background-color: transparent;
}
.profile-side-bar-icon02 {
  width: 24px;
  height: 24px;
}
.profile-side-bar-text1 {
  font-size: 14px;
  margin-left: var(--dl-space-space-halfunit);
}
.profile-side-bar-button2 {
  display: flex;
  align-self: stretch;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  background-color: transparent;
}
.profile-side-bar-icon04 {
  width: 24px;
  height: 24px;
}
.profile-side-bar-text2 {
  font-size: 14px;
  margin-left: var(--dl-space-space-halfunit);
}
.profile-side-bar-button3 {
  display: flex;
  align-self: stretch;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  background-color: transparent;
}
.profile-side-bar-icon06 {
  width: 24px;
  height: 24px;
}
.profile-side-bar-text3 {
  font-size: 14px;
  margin-left: var(--dl-space-space-halfunit);
}
.profile-side-bar-button4 {
  display: flex;
  align-items: center;
  border-width: 0px;
  flex-direction: row;
  background-color: transparent;
}
.profile-side-bar-icon08 {
  width: 24px;
  height: 24px;
}
.profile-side-bar-text4 {
  font-size: 14px;
  margin-left: var(--dl-space-space-halfunit);
}






@media(max-width: 991px) {
  .profile-side-bar-p-m-n-p-p-menu {
    width: auto;
    padding: var(--dl-space-space-halfunit);
    align-self: stretch;
    justify-content: flex-start;
  }
}
@media(max-width: 767px) {
  .profile-side-bar-p-m-n-p-p-menu {
    width: 100%;
    height: 100%;
    margin: 0px;
    align-items: center;
  }
  .profile-side-bar-container {
    margin-bottom: 0px;
    justify-content: space-between;
  }
  .profile-side-bar-profilename {
    font-size: 16px;
  }
  .profile-side-bar-birthmonthselect {
    display: flex;
    padding: var(--dl-space-space-unit);
    font-size: 16;
    align-self: flex-start;
    font-weight: bold;
  }
  .profile-side-bar-buttons {
    display: none;
  }
}
@media(max-width: 470px) {
  .profile-side-bar-p-m-n-p-p-menu {
    width: 100%;
    padding: var(--dl-space-space-halfunit);
    align-self: center;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    flex-direction: row;
    justify-content: space-between;
  }
  .profile-side-bar-container {
    width: 100%;
    margin-bottom: 0px;
    flex-direction: row;
    justify-content: space-between;
  }
  .profile-side-bar-profilename {
    width: auto;
    font-size: 14px;
    margin-left: var(--dl-space-space-unit);
  }
  .profile-side-bar-birthmonthselect {
    padding: var(--dl-space-space-halfunit);
    font-size: 12;
    align-self: center;
  }
  .profile-side-bar-buttons {
    width: auto;
    display: none;
    margin-left: 0px;
    margin-right: var(--dl-space-space-twounits);
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
