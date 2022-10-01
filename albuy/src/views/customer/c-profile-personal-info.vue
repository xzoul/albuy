<template>
  <div class="c-profile-personal-info-container">
    <c-header rootClassName="c-header-root-class-name8"></c-header>
    <div class="c-profile-personal-info-profile-personal-info">
      <div class="c-profile-personal-info-container1">
        <profile-side-bar rootClassName="profile-side-bar-root-class-name3"></profile-side-bar>
        <div class="c-profile-personal-info-my-profile">
          <div class="c-profile-personal-info-container2">
            <div class="c-profile-personal-info-my-profile1">
              <span class="c-profile-personal-info-text">My Profile</span>
              <span class="c-profile-personal-info-text1">
                Account details are found here
              </span>
            </div>
            <button class="c-profile-personal-info-editprofile button">
              Edit Profile
            </button>
          </div>
          <div class="c-profile-personal-info-container3">
            <div class="c-profile-personal-info-profile">
              <img alt="image" src="https://play.teleporthq.io/static/svg/default-img.svg"
                class="c-profile-personal-info-profileimg" />
              <button class="c-profile-personal-info-changeprofile button">
                Change Profile
              </button>
            </div>
            <div class="c-profile-personal-info-profiledata">
              <div class="c-profile-personal-info-container4">
                <span class="c-profile-personal-info-username">Username</span>
                <span class="c-profile-personal-info-fname">First Name</span>
                <span class="c-profile-personal-info-mname">Middle Name</span>
                <span class="c-profile-personal-info-lname">Last Name</span>
                <span class="c-profile-personal-info-emailadd">
                  Email Address
                </span>
                <span class="c-profile-personal-info-contactnum">
                  Contact Number
                </span>
                <span class="c-profile-personal-info-address">Address</span>
                <span class="c-profile-personal-info-birthdate">Birthdate</span>
              </div>
              <div class="c-profile-personal-info-container5">
                <span class="c-profile-personal-info-usernameinput">decybn</span>
                <span class="c-profile-personal-info-fnameinput">Decy</span>
                <span class="c-profile-personal-info-mnameinput">Marbella</span>
                <span class="c-profile-personal-info-lnameinput">Abion</span>
                <span class="c-profile-personal-info-emailaddinput">
                  d**********n@yahoo.com
                </span>
                <span class="c-profile-personal-info-contactnuminput">
                  09********9
                </span>
                <div class="c-profile-personal-info-container6 button">
                  <span class="c-profile-personal-info-addressinput">
                    Daraga, Albay
                  </span>
                  <svg viewBox="0 0 1024 1024" class="c-profile-personal-info-icon">
                    <path
                      d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z">
                    </path>
                  </svg>
                </div>
                <select class="c-profile-personal-info-birthmonthselect">
                  <option value="Option 1" selected>December 12 2000</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </div>
          </div>
          <div class="c-profile-personal-info-container7">
            <button class="c-profile-personal-info-save button">Save</button>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name8"></app-footer>
  </div>
</template>

<script>
import CHeader from '@/components/c-header'
import ProfileSideBar from '@/components/profile-side-bar'
import AppFooter from '@/components/footer'

export default {
  name: 'CProfilePersonalInfo',
  components: {
    CHeader,
    ProfileSideBar,
    AppFooter,
  },
  metaInfo: {
    title: 'C-ProfilePersonalInfo - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-ProfilePersonalInfo - exported project',
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

.c-profile-personal-info-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.c-profile-personal-info-profile-personal-info {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  overflow: hidden;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  box-sizing: border-box;
  min-height: 565px;
  align-items: center;
  justify-content: center;
  background-color: rgba(245, 245, 245, 1);
}

.c-profile-personal-info-container1 {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.c-profile-personal-info-my-profile {
  flex: 1;
  width: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  border-radius: 15px;
  flex-direction: column;
  background-color: #ffffff;
}

.c-profile-personal-info-container2 {
  flex: 1;
  width: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
}

.c-profile-personal-info-my-profile1 {
  width: auto;
  height: auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.c-profile-personal-info-text {
  color: rgba(0, 0, 0, 1);
  height: auto;
  padding: var(--dl-space-space-halfunit);
  font-size: 18px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-text1 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  padding: var(--dl-space-space-halfunit);
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-editprofile {
  width: 97px;
  height: auto;
  font-size: 12px;
  font-family: Roboto;
  border-width: 0px;
  background-color: transparent;
}

.c-profile-personal-info-container3 {
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  padding-bottom: 16px;
}

.c-profile-personal-info-profile {
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.c-profile-personal-info-profileimg {
  width: var(--dl-size-size-large);
  height: var(--dl-size-size-large);
  padding: var(--dl-space-space-unit);
  object-fit: cover;
  border-radius: 150px;
}

.c-profile-personal-info-changeprofile {
  width: auto;
  font-size: 12px;
  align-self: center;
  font-family: Roboto;
  border-width: 0px;
  background-color: transparent;
}

.c-profile-personal-info-profiledata {
  flex: 1;
  width: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
}

.c-profile-personal-info-container4 {
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}

.c-profile-personal-info-username {
  color: var(--dl-color-gray-black);
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-fname {
  color: var(--dl-color-gray-black);
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-mname {
  color: var(--dl-color-gray-black);
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-lname {
  color: var(--dl-color-gray-black);
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-emailadd {
  color: var(--dl-color-gray-black);
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-contactnum {
  color: var(--dl-color-gray-black);
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-address {
  color: var(--dl-color-gray-black);
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-birthdate {
  color: var(--dl-color-gray-black);
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-container5 {
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}

.c-profile-personal-info-usernameinput {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  min-width: auto;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-fnameinput {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  min-width: auto;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-mnameinput {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  min-width: auto;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-lnameinput {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  min-width: auto;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-emailaddinput {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  min-width: auto;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-contactnuminput {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  min-width: auto;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-container6 {
  display: flex;
  padding: 0px;
  align-items: center;
  border-width: 0px;
  border-radius: 0px;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
}

.c-profile-personal-info-addressinput {
  color: rgb(0, 0, 0);
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14px;
  min-width: auto;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.c-profile-personal-info-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.c-profile-personal-info-birthmonthselect {
  width: auto;
  height: auto;
  padding: var(--dl-space-space-unit);
  font-size: 14;
}

.c-profile-personal-info-container7 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}

.c-profile-personal-info-save {
  font-size: 12px;
  align-self: flex-end;
  font-family: Roboto;
  border-width: 1px;
  border-radius: 15px;
  background-color: transparent;
}

@media(max-width: 991px) {
  .c-profile-personal-info-profile-personal-info {
    padding: var(--dl-space-space-unit);
    align-self: stretch;
  }

  .c-profile-personal-info-container1 {
    width: 100%;
    justify-content: center;
  }

  .c-profile-personal-info-my-profile {
    width: auto;
    margin-left: var(--dl-space-space-unit);
    margin-right: 0px;
  }

  .c-profile-personal-info-profile {
    padding: var(--dl-space-space-halfunit);
  }

  .c-profile-personal-info-profileimg {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-profile-personal-info-container4 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-profile-personal-info-username {
    font-size: 12px;
  }

  .c-profile-personal-info-fname {
    font-size: 12px;
  }

  .c-profile-personal-info-mname {
    font-size: 12px;
  }

  .c-profile-personal-info-lname {
    font-size: 12px;
  }

  .c-profile-personal-info-emailadd {
    font-size: 12px;
  }

  .c-profile-personal-info-contactnum {
    font-size: 12px;
  }

  .c-profile-personal-info-address {
    font-size: 12px;
  }

  .c-profile-personal-info-birthdate {
    font-size: 12px;
  }

  .c-profile-personal-info-container5 {
    padding: var(--dl-space-space-halfunit);
  }

  .c-profile-personal-info-usernameinput {
    font-size: 12px;
  }

  .c-profile-personal-info-fnameinput {
    font-size: 12px;
  }

  .c-profile-personal-info-mnameinput {
    font-size: 12px;
  }

  .c-profile-personal-info-lnameinput {
    font-size: 12px;
  }

  .c-profile-personal-info-emailaddinput {
    font-size: 12px;
  }

  .c-profile-personal-info-contactnuminput {
    font-size: 12px;
  }

  .c-profile-personal-info-addressinput {
    font-size: 12px;
  }
}

@media(max-width: 767px) {
  .c-profile-personal-info-profile-personal-info {
    width: 100%;
    max-width: var(--dl-size-size-maxwidth);
    flex-direction: column;
  }

  .c-profile-personal-info-container1 {
    flex-direction: column;
  }

  .c-profile-personal-info-my-profile {
    width: auto;
    height: auto;
    padding: var(--dl-space-space-unit);
    align-self: stretch;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }

  .c-profile-personal-info-my-profile1 {
    width: auto;
    margin-left: var(--dl-space-space-unit);
  }

  .c-profile-personal-info-text {
    font-size: 18px;
  }

  .c-profile-personal-info-text1 {
    font-size: 14px;
  }

  .c-profile-personal-info-editprofile {
    width: auto;
    font-size: 14px;
    align-self: flex-start;
  }

  .c-profile-personal-info-container3 {
    height: auto;
    flex-direction: column;
  }

  .c-profile-personal-info-profile {
    width: auto;
  }

  .c-profile-personal-info-profileimg {
    width: var(--dl-size-size-xlarge);
    height: var(--dl-size-size-xlarge);
  }

  .c-profile-personal-info-changeprofile {
    font-size: 14px;
  }

  .c-profile-personal-info-profiledata {
    justify-content: center;
  }

  .c-profile-personal-info-username {
    font-size: 14px;
  }

  .c-profile-personal-info-fname {
    font-size: 14px;
  }

  .c-profile-personal-info-mname {
    font-size: 14px;
  }

  .c-profile-personal-info-lname {
    font-size: 14px;
  }

  .c-profile-personal-info-emailadd {
    font-size: 14px;
  }

  .c-profile-personal-info-contactnum {
    font-size: 14px;
  }

  .c-profile-personal-info-address {
    font-size: 14px;
  }

  .c-profile-personal-info-birthdate {
    font-size: 14px;
  }

  .c-profile-personal-info-usernameinput {
    font-size: 14px;
  }

  .c-profile-personal-info-fnameinput {
    font-size: 14px;
  }

  .c-profile-personal-info-mnameinput {
    font-size: 14px;
  }

  .c-profile-personal-info-lnameinput {
    font-size: 14px;
  }

  .c-profile-personal-info-emailaddinput {
    font-size: 14px;
  }

  .c-profile-personal-info-contactnuminput {
    font-size: 14px;
  }

  .c-profile-personal-info-addressinput {
    font-size: 14px;
  }

  .c-profile-personal-info-birthmonthselect {
    font-size: 14px;
  }

  .c-profile-personal-info-save {
    font-size: 14px;
    align-self: flex-end;
  }
}

@media(max-width: 470px) {
  .c-profile-personal-info-profile-personal-info {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
    flex-direction: column;
  }

  .c-profile-personal-info-my-profile {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-halfunit);
  }

  .c-profile-personal-info-container2 {
    padding: var(--dl-space-space-halfunit);
    border-color: var(--dl-color-gray-black);
    border-width: 0px;
    border-bottom-width: 1px;
  }

  .c-profile-personal-info-my-profile1 {
    width: auto;
    height: auto;
    align-self: flex-start;
    margin-top: 0px;
    align-items: flex-start;
    margin-left: 0px;
    margin-right: 0px;
    justify-content: flex-start;
  }

  .c-profile-personal-info-text {
    font-size: 16px;
  }

  .c-profile-personal-info-text1 {
    width: auto;
    font-size: 12px;
    margin-right: 0px;
  }

  .c-profile-personal-info-editprofile {
    padding: 0px;
    font-size: 9px;
    align-self: center;
  }

  .c-profile-personal-info-container3 {
    padding: var(--dl-space-space-unit);
    flex-direction: column;
  }

  .c-profile-personal-info-profile {
    width: 100%;
    height: auto;
    padding: var(--dl-space-space-unit);
    align-self: center;
    flex-direction: column;
  }

  .c-profile-personal-info-profileimg {
    width: var(--dl-size-size-large);
    height: var(--dl-size-size-large);
  }

  .c-profile-personal-info-container5 {
    width: 100%;
  }

  .c-profile-personal-info-emailaddinput {
    min-width: var(--dl-size-size-large);
  }

  .c-profile-personal-info-contactnuminput {
    min-width: var(--dl-size-size-large);
  }

  .c-profile-personal-info-save {
    align-self: center;
  }
}
</style>
