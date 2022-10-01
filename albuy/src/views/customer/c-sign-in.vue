<template>
  <div class="c-sign-in-container">
    <div class="c-sign-in-container01">
      <div class="c-sign-in-container02">
        <div class="c-sign-in-container03">
          <img alt="image" src="/playground_assets/unknown-1400w.png" class="c-sign-in-image" />
        </div>
        <div class="c-sign-in-container04">
          <span class="c-sign-in-text">Sign In</span>
          <div class="c-sign-in-container05">
            <button class="c-sign-in-button button">
              <svg viewBox="0 0 877.7142857142857 1024" class="c-sign-in-icon">
                <path
                  d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z">
                </path>
              </svg>
              <span class="c-sign-in-text1">Sign Up with Facebook</span>
            </button>
            <button class="c-sign-in-button1 button">
              <svg viewBox="0 0 1024 1024" class="c-sign-in-icon2">
                <path
                  d="M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z">
                </path>
              </svg>
              <span class="c-sign-in-text2">Sign Up with Google</span>
            </button>
          </div>
          <span class="c-sign-in-text3">Or</span>
          <div class="c-sign-in-container06">
            <div class="c-sign-in-container07">
              <div class="c-sign-in-container08">
                <span class="c-sign-in-text4">Username</span>
                <input type="text" placeholder="placeholder" class="c-sign-in-textinput input" />
              </div>
            </div>
            <div class="c-sign-in-container09">
              <div class="c-sign-in-container10">
                <span class="c-sign-in-text5">Password</span>
                <input type="text" placeholder="placeholder" class="c-sign-in-textinput1 input" />
                <span class="c-sign-in-text6">Forgot Password?</span>
              </div>
            </div>
            <div class="c-sign-in-container11">
              <button class="c-sign-in-button2 button">Log In</button>
              <span class="c-sign-in-text7">
                Still don’t have an account? Create an Account
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name20"></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/footer'

export default {
  name: 'CSignIn',
  components: {
    AppFooter,
  },
  metaInfo: {
    title: 'C-Sign-In - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-Sign-In - exported project',
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

.c-sign-in-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.c-sign-in-container01 {
  flex: 1;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-in-container02 {
  width: 100%;
  display: flex;
  max-width: auto;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  flex-direction: row;
}

.c-sign-in-container03 {
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.c-sign-in-image {
  flex: 1;
  width: 100%;
  align-self: stretch;
  object-fit: fill;
}

.c-sign-in-container04 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.c-sign-in-text {
  padding: var(--dl-space-space-unit);
  font-size: 30px;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-unit);
}

.c-sign-in-container05 {
  width: 55%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.c-sign-in-button {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-in-icon {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-halfunit);
}

.c-sign-in-button1 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-in-icon2 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-halfunit);
}

.c-sign-in-text3 {
  padding: var(--dl-space-space-unit);
  font-style: normal;
  font-weight: 600;
}

.c-sign-in-container06 {
  display: flex;
  align-self: stretch;
  align-items: stretch;
  flex-direction: column;
}

.c-sign-in-container07 {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-sign-in-container08 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.c-sign-in-text4 {
  font-style: normal;
  font-weight: 500;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-unit);
}

.c-sign-in-textinput {
  width: 100%;
  font-size: 16px;
  align-self: stretch;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-in-container09 {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-sign-in-container10 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.c-sign-in-text5 {
  font-style: normal;
  font-weight: 500;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-unit);
}

.c-sign-in-textinput1 {
  width: 100%;
  font-size: 16px;
  align-self: stretch;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-in-text6 {
  padding: var(--dl-space-space-halfunit);
  font-size: 12px;
  align-self: flex-end;
}

.c-sign-in-container11 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.c-sign-in-button2 {
  align-self: stretch;
  text-align: center;
  border-radius: 15px;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-in-text7 {
  padding: var(--dl-space-space-halfunit);
  font-size: 12px;
}

@media(max-width: 991px) {
  .c-sign-in-image {
    flex: 1;
  }

  .c-sign-in-text {
    font-size: 25px;
  }

  .c-sign-in-container05 {
    width: 60%;
  }

  .c-sign-in-button {
    width: auto;
    align-self: stretch;
    align-items: center;
    justify-content: center;
  }

  .c-sign-in-icon {
    width: 20px;
    height: 20px;
  }

  .c-sign-in-text1 {
    font-size: 14px;
  }

  .c-sign-in-button1 {
    width: auto;
    align-self: stretch;
    align-items: center;
    justify-content: center;
  }

  .c-sign-in-icon2 {
    width: 20px;
    height: 20px;
  }

  .c-sign-in-text2 {
    font-size: 14px;
  }

  .c-sign-in-text3 {
    font-size: 14px;
  }

  .c-sign-in-container08 {
    align-self: stretch;
    justify-content: flex-end;
  }

  .c-sign-in-text4 {
    font-size: 14px;
  }

  .c-sign-in-textinput {
    font-size: 12px;
  }

  .c-sign-in-container10 {
    align-self: stretch;
    justify-content: flex-end;
  }

  .c-sign-in-text5 {
    font-size: 14px;
  }

  .c-sign-in-textinput1 {
    font-size: 12px;
  }

  .c-sign-in-text6 {
    font-size: 10px;
  }

  .c-sign-in-button2 {
    font-size: 14px;
  }

  .c-sign-in-text7 {
    font-size: 10px;
  }
}

@media(max-width: 767px) {
  .c-sign-in-container01 {
    padding: var(--dl-space-space-oneandhalfunits);
  }

  .c-sign-in-container03 {
    display: none;
  }

  .c-sign-in-text {
    font-size: 22px;
  }

  .c-sign-in-container05 {
    width: 50%;
  }

  .c-sign-in-text1 {
    font-size: 12px;
  }

  .c-sign-in-text2 {
    font-size: 12px;
  }

  .c-sign-in-text3 {
    font-size: 14px;
  }

  .c-sign-in-container06 {
    width: 85%;
    align-self: center;
  }

  .c-sign-in-text4 {
    font-size: 12px;
  }

  .c-sign-in-textinput {
    width: 100%;
  }

  .c-sign-in-text5 {
    font-size: 12px;
  }

  .c-sign-in-textinput1 {
    width: 100%;
  }

  .c-sign-in-text6 {
    font-size: 9px;
  }

  .c-sign-in-button2 {
    font-size: 12px;
  }

  .c-sign-in-text7 {
    font-size: 9px;
  }
}

@media(max-width: 470px) {
  .c-sign-in-container01 {
    flex: 1;
    padding: var(--dl-space-space-unit);
  }

  .c-sign-in-text {
    font-size: 18px;
    text-align: center;
  }

  .c-sign-in-container05 {
    width: 100%;
  }

  .c-sign-in-container06 {
    width: auto;
    align-self: stretch;
  }

  .c-sign-in-container07 {
    flex-direction: column;
  }

  .c-sign-in-container09 {
    flex-direction: column;
  }
}
</style>
