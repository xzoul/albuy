<template>
  <div class="c-profile-pass-sec-container">
    <c-header rootClassName="c-header-root-class-name5"></c-header>
    <div class="c-profile-pass-sec-profile-pass-sec">
      <profile-side-bar rootClassName="profile-side-bar-root-class-name1"></profile-side-bar>
      <div class="c-profile-pass-sec-passsec">
        <div class="c-profile-pass-sec-container1">
          <span class="c-profile-pass-sec-text">Set Password</span>
          <span class="c-profile-pass-sec-text1">
            For your account&apos;s security, do not share your password with
            anyone else
          </span>
        </div>
        <div class="c-profile-pass-sec-p-a-s-s-w-o-r-d-s">
          <div class="c-profile-pass-sec-container2">
            <span class="c-profile-pass-sec-currentpass">Current Password</span>
            <input type="password" class="c-profile-pass-sec-currentpassinput input" />
          </div>
          <div class="c-profile-pass-sec-container3">
            <span class="c-profile-pass-sec-newpass">New Password</span>
            <input type="password" class="c-profile-pass-sec-newpassinput input" />
          </div>
          <div class="c-profile-pass-sec-container4">
            <span class="c-profile-pass-sec-confirmpass">Confirm Password</span>
            <input type="password" class="c-profile-pass-sec-confirmpassinput input" />
          </div>
        </div>
        <div class="c-profile-pass-sec-buttons">
          <button class="c-profile-pass-sec-cancel button">Cancel</button>
          <button class="c-profile-pass-sec-changepass button">
            Change Password
          </button>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name5"></app-footer>
  </div>
</template>

<script>
import CHeader from '@/components/c-header'
import ProfileSideBar from '@/components/profile-side-bar'
import AppFooter from '@/components/footer'

export default {
  name: 'CProfilePassSec',
  components: {
    CHeader,
    ProfileSideBar,
    AppFooter,
  },
  metaInfo: {
    title: 'C-ProfilePassSec - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-ProfilePassSec - exported project',
      },
    ],
  },
}
</script>

<style>
html {
  line-height: 1.15;
}

body {
  margin: 0;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
}

p,
li,
ul,
pre,
div,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focus,
[type="button"]:-moz-focus,
[type="reset"]:-moz-focus,
[type="submit"]:-moz-focus {
  outline: 1px dotted ButtonText;
}

a {
  color: inherit;
  text-decoration: inherit;
}

input {
  padding: 2px 4px;
}

img {
  display: block;
}

html {
  scroll-behavior: smooth
}

.c-profile-pass-sec-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.c-profile-pass-sec-profile-pass-sec {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-twounits);
  overflow: hidden;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  box-sizing: border-box;
  align-items: center;
  background-color: rgba(245, 245, 245, 1);
}

.c-profile-pass-sec-passsec {
  flex: 1;
  width: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
}

.c-profile-pass-sec-container1 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: column;
  border-bottom-width: 1px;
}

.c-profile-pass-sec-text {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 15.000000953674316px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-pass-sec-text1 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 12px;
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

.c-profile-pass-sec-p-a-s-s-w-o-r-d-s {
  width: 100%;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  margin-top: var(--dl-space-space-unit);
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
}

.c-profile-pass-sec-container2 {
  display: flex;
  align-items: center;
  margin-left: var(--dl-space-space-threeunits);
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.c-profile-pass-sec-currentpass {
  color: var(--dl-color-gray-black);
  height: auto;
  font-size: 15px;
  min-width: var(--dl-size-size-large);
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-pass-sec-currentpassinput {
  flex: 1;
  width: auto;
  height: auto;
  max-width: 500px;
  margin-left: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-gray-black);
  border-width: .5px;
  padding-left: var(--dl-space-space-halfunit);
  background-color: transparent;
}

.c-profile-pass-sec-container3 {
  display: flex;
  align-items: center;
  margin-left: var(--dl-space-space-threeunits);
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: flex-start;
}

.c-profile-pass-sec-newpass {
  color: var(--dl-color-gray-black);
  height: auto;
  font-size: 15px;
  min-width: var(--dl-size-size-large);
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-pass-sec-newpassinput {
  flex: 1;
  width: auto;
  height: auto;
  max-width: 500px;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-gray-black);
  border-width: .5px;
  padding-left: var(--dl-space-space-halfunit);
  background-color: transparent;
}

.c-profile-pass-sec-container4 {
  display: flex;
  align-items: center;
  margin-left: var(--dl-space-space-threeunits);
  flex-direction: row;
  justify-content: flex-start;
}

.c-profile-pass-sec-confirmpass {
  color: var(--dl-color-gray-black);
  height: auto;
  font-size: 15px;
  min-width: var(--dl-size-size-large);
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-pass-sec-confirmpassinput {
  flex: 1;
  width: auto;
  height: auto;
  max-width: 500px;
  margin-left: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-gray-black);
  border-width: .5px;
  padding-left: var(--dl-space-space-halfunit);
  background-color: transparent;
}

.c-profile-pass-sec-buttons {
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  justify-content: center;
}

.c-profile-pass-sec-cancel {
  width: auto;
  height: auto;
  font-size: 12px;
  transition: 0.3s;
  font-family: Roboto;
  border-radius: 15px;
  background-color: transparent;
}

.c-profile-pass-sec-cancel:hover {
  background-color: #a6d9ef;
}

.c-profile-pass-sec-changepass {
  width: auto;
  height: auto;
  font-size: 12px;
  transition: 0.3s;
  font-family: Roboto;
  margin-left: var(--dl-space-space-halfunit);
  border-width: 1px;
  border-radius: 15px;
  background-color: transparent;
}

.c-profile-pass-sec-changepass:hover {
  background-color: #a6d9ef;
}

@media(max-width: 991px) {
  .c-profile-pass-sec-profile-pass-sec {
    width: 100%;
  }

  .c-profile-pass-sec-passsec {
    margin-left: 0px;
    margin-right: 0px;
  }

  .c-profile-pass-sec-container2 {
    margin-left: var(--dl-space-space-twounits);
  }

  .c-profile-pass-sec-currentpassinput {
    width: auto;
  }

  .c-profile-pass-sec-container3 {
    margin-left: var(--dl-space-space-twounits);
  }

  .c-profile-pass-sec-newpassinput {
    flex: 1;
    width: auto;
  }

  .c-profile-pass-sec-container4 {
    margin-left: var(--dl-space-space-twounits);
  }

  .c-profile-pass-sec-confirmpassinput {
    flex: 1;
    width: auto;
  }

  .c-profile-pass-sec-buttons {
    align-self: stretch;
    align-items: center;
  }
}

@media(max-width: 767px) {
  .c-profile-pass-sec-profile-pass-sec {
    width: 100%;
    max-width: auto;
    flex-direction: column;
  }

  .c-profile-pass-sec-passsec {
    width: 100%;
    align-self: center;
    align-items: flex-start;
    margin-left: 0px;
    justify-content: center;
  }

  .c-profile-pass-sec-p-a-s-s-w-o-r-d-s {
    align-self: center;
    margin-top: 0px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-end;
  }

  .c-profile-pass-sec-container2 {
    align-self: stretch;
    align-items: center;
    margin-left: var(--dl-space-space-unit);
    flex-direction: column;
    justify-content: space-between;
  }

  .c-profile-pass-sec-currentpass {
    align-self: flex-start;
  }

  .c-profile-pass-sec-currentpassinput {
    width: 100%;
    padding: var(--dl-space-space-halfunit);
    max-width: var(--dl-size-size-maxwidth);
    align-self: stretch;
    margin-top: var(--dl-space-space-halfunit);
    margin-left: 0px;
  }

  .c-profile-pass-sec-container3 {
    align-self: stretch;
    align-items: center;
    margin-left: var(--dl-space-space-unit);
    flex-direction: column;
    justify-content: space-between;
  }

  .c-profile-pass-sec-newpass {
    align-self: flex-start;
  }

  .c-profile-pass-sec-newpassinput {
    width: 100%;
    padding: var(--dl-space-space-halfunit);
    max-width: var(--dl-size-size-maxwidth);
    align-self: stretch;
    margin-top: var(--dl-space-space-halfunit);
    margin-left: 0px;
  }

  .c-profile-pass-sec-container4 {
    width: auto;
    align-self: stretch;
    align-items: center;
    margin-left: var(--dl-space-space-unit);
    flex-direction: column;
    justify-content: space-between;
  }

  .c-profile-pass-sec-confirmpass {
    align-self: flex-start;
  }

  .c-profile-pass-sec-confirmpassinput {
    padding: var(--dl-space-space-halfunit);
    max-width: var(--dl-size-size-maxwidth);
    align-self: stretch;
    margin-top: var(--dl-space-space-halfunit);
    margin-left: 0px;
  }

  .c-profile-pass-sec-buttons {
    align-self: center;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }
}

@media(max-width: 470px) {
  .c-profile-pass-sec-profile-pass-sec {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-unit);
    flex-direction: column;
    justify-content: center;
  }

  .c-profile-pass-sec-passsec {
    width: auto;
    height: auto;
    padding: var(--dl-space-space-unit);
    align-self: stretch;
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }

  .c-profile-pass-sec-container1 {
    padding: var(--dl-space-space-unit);
  }

  .c-profile-pass-sec-text {
    font-size: 14px;
  }

  .c-profile-pass-sec-text1 {
    font-size: 9px;
    margin-top: var(--dl-space-space-halfunit);
  }

  .c-profile-pass-sec-p-a-s-s-w-o-r-d-s {
    width: 100%;
    padding: var(--dl-space-space-unit);
    margin-top: var(--dl-space-space-halfunit);
    align-items: stretch;
    margin-left: 0px;
    margin-right: 0px;
    flex-direction: column;
    justify-content: center;
  }

  .c-profile-pass-sec-container2 {
    align-self: stretch;
    align-items: center;
    margin-left: 0px;
    justify-content: space-between;
  }

  .c-profile-pass-sec-currentpass {
    font-size: 13px;
    min-width: 75px;
    align-self: flex-start;
  }

  .c-profile-pass-sec-currentpassinput {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 13;
    max-width: var(--dl-size-size-maxwidth);
    align-self: center;
  }

  .c-profile-pass-sec-container3 {
    align-items: center;
    margin-left: 0px;
    justify-content: space-between;
  }

  .c-profile-pass-sec-newpass {
    font-size: 13px;
    min-width: 75px;
    align-self: flex-start;
  }

  .c-profile-pass-sec-newpassinput {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 13;
    max-width: var(--dl-size-size-maxwidth);
    align-self: stretch;
  }

  .c-profile-pass-sec-container4 {
    align-items: center;
    margin-left: 0px;
    justify-content: space-between;
  }

  .c-profile-pass-sec-confirmpass {
    width: auto;
    font-size: 13px;
    min-width: 75px;
    align-self: flex-start;
  }

  .c-profile-pass-sec-confirmpassinput {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    font-size: 13;
    max-width: var(--dl-size-size-maxwidth);
    align-self: center;
  }

  .c-profile-pass-sec-buttons {
    align-self: center;
  }
}
</style>
