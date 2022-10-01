<template>
  <div class="c-sign-up-container">
    <div class="c-sign-up-container01">
      <div class="c-sign-up-container02">
        <div class="c-sign-up-container03">
          <img alt="image" src="/playground_assets/unknown-1400w.png" class="c-sign-up-image" />
        </div>
        <div class="c-sign-up-container04">
          <span class="c-sign-up-text">Create an Account</span>
          <div class="c-sign-up-container05">
            <button class="c-sign-up-button button">
              <svg viewBox="0 0 877.7142857142857 1024" class="c-sign-up-icon">
                <path
                  d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z">
                </path>
              </svg>
              <span class="c-sign-up-text01">Sign Up with Facebook</span>
            </button>
            <button class="c-sign-up-button1 button">
              <svg viewBox="0 0 1024 1024" class="c-sign-up-icon2">
                <path
                  d="M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z">
                </path>
              </svg>
              <span class="c-sign-up-text02">Sign Up with Google</span>
            </button>
          </div>
          <span class="c-sign-up-text03">Or</span>
          <div class="c-sign-up-container06">
            <div class="c-sign-up-container07">
              <div class="c-sign-up-container08">
                <span class="c-sign-up-text04">First Name</span>
                <input type="text" placeholder="placeholder" class="c-sign-up-textinput input" />
              </div>
              <div class="c-sign-up-container09">
                <span class="c-sign-up-text05">Middle Name</span>
                <input type="text" placeholder="placeholder" class="c-sign-up-textinput1 input" />
              </div>
            </div>
            <div class="c-sign-up-container10">
              <div class="c-sign-up-container11">
                <span class="c-sign-up-text06">Last Name</span>
                <input type="text" placeholder="placeholder" class="c-sign-up-textinput2 input" />
              </div>
              <div class="c-sign-up-container12">
                <span class="c-sign-up-text07">Username</span>
                <input type="text" placeholder="placeholder" class="c-sign-up-textinput3 input" />
              </div>
            </div>
            <div class="c-sign-up-container13">
              <span class="c-sign-up-text08">Email Address</span>
              <input type="text" placeholder="placeholder" class="c-sign-up-textinput4 input" />
            </div>
            <div class="c-sign-up-container14">
              <div class="c-sign-up-container15">
                <span class="c-sign-up-text09">Password</span>
                <input type="text" placeholder="placeholder" class="c-sign-up-textinput5 input" />
              </div>
              <div class="c-sign-up-container16">
                <span class="c-sign-up-text10">Confirm Password</span>
                <input type="text" placeholder="placeholder" class="c-sign-up-textinput6 input" />
              </div>
            </div>
            <div class="c-sign-up-container17">
              <button class="c-sign-up-button2 button">Sign Up</button>
              <span class="c-sign-up-text11">
                Already have a shop account? Sign In
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name10"></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/footer'

export default {
  name: 'CSignUp',
  components: {
    AppFooter,
  },
  metaInfo: {
    title: 'C-Sign-Up - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'C-Sign-Up - exported project',
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

.c-sign-up-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.c-sign-up-container01 {
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

.c-sign-up-container02 {
  width: 100%;
  display: flex;
  max-width: auto;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  flex-direction: row;
}

.c-sign-up-container03 {
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.c-sign-up-image {
  flex: 1;
  width: 100%;
  align-self: stretch;
  object-fit: fill;
}

.c-sign-up-container04 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.c-sign-up-text {
  padding: var(--dl-space-space-unit);
  font-size: 30px;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-unit);
}

.c-sign-up-container05 {
  width: 55%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.c-sign-up-button {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-up-icon {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-halfunit);
}

.c-sign-up-button1 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-up-icon2 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-halfunit);
}

.c-sign-up-text03 {
  padding: var(--dl-space-space-unit);
  font-style: normal;
  font-weight: 600;
}

.c-sign-up-container06 {
  display: flex;
  align-self: stretch;
  align-items: stretch;
  flex-direction: column;
}

.c-sign-up-container07 {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-sign-up-container08 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.c-sign-up-text04 {
  padding: var(--dl-space-space-halfunit);
  font-style: normal;
  font-weight: 500;
}

.c-sign-up-textinput {
  width: 100%;
  font-size: 14px;
  align-self: stretch;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-up-container09 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.c-sign-up-text05 {
  padding: var(--dl-space-space-halfunit);
  font-style: normal;
  font-weight: 500;
}

.c-sign-up-textinput1 {
  width: 100%;
  font-size: 14px;
  align-self: stretch;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-up-container10 {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-sign-up-container11 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.c-sign-up-text06 {
  padding: var(--dl-space-space-halfunit);
  font-style: normal;
  font-weight: 500;
}

.c-sign-up-textinput2 {
  width: 100%;
  font-size: 14px;
  align-self: stretch;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-up-container12 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.c-sign-up-text07 {
  padding: var(--dl-space-space-halfunit);
  font-style: normal;
  font-weight: 500;
}

.c-sign-up-textinput3 {
  width: 100%;
  font-size: 14px;
  align-self: stretch;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-up-container13 {
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}

.c-sign-up-text08 {
  padding: var(--dl-space-space-halfunit);
  font-style: normal;
  font-weight: 500;
}

.c-sign-up-textinput4 {
  width: 100%;
  font-size: 14px;
  align-self: stretch;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-up-container14 {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-sign-up-container15 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.c-sign-up-text09 {
  padding: var(--dl-space-space-halfunit);
  font-style: normal;
  font-weight: 500;
}

.c-sign-up-textinput5 {
  width: 100%;
  font-size: 14px;
  align-self: stretch;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-up-container16 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.c-sign-up-text10 {
  padding: var(--dl-space-space-halfunit);
  font-style: normal;
  font-weight: 500;
}

.c-sign-up-textinput6 {
  width: 100%;
  font-size: 14px;
  align-self: stretch;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-up-container17 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.c-sign-up-button2 {
  align-self: stretch;
  text-align: center;
  border-radius: 15px;
  background-color: var(--dl-color-gray-bg);
}

.c-sign-up-text11 {
  padding: var(--dl-space-space-halfunit);
  font-size: 12px;
}

@media(max-width: 991px) {
  .c-sign-up-image {
    flex: 1;
  }

  .c-sign-up-text {
    font-size: 25px;
  }

  .c-sign-up-container05 {
    width: 60%;
  }

  .c-sign-up-button {
    width: auto;
    align-self: stretch;
    align-items: center;
    justify-content: center;
  }

  .c-sign-up-icon {
    width: 20px;
    height: 20px;
  }

  .c-sign-up-text01 {
    font-size: 14px;
  }

  .c-sign-up-button1 {
    width: auto;
    align-self: stretch;
    align-items: center;
    justify-content: center;
  }

  .c-sign-up-icon2 {
    width: 20px;
    height: 20px;
  }

  .c-sign-up-text02 {
    font-size: 14px;
  }

  .c-sign-up-text03 {
    font-size: 14px;
  }

  .c-sign-up-container08 {
    align-self: stretch;
    justify-content: flex-end;
  }

  .c-sign-up-text04 {
    font-size: 14px;
  }

  .c-sign-up-textinput {
    font-size: 12px;
  }

  .c-sign-up-container09 {
    align-self: stretch;
    justify-content: flex-end;
  }

  .c-sign-up-text05 {
    font-size: 14px;
  }

  .c-sign-up-textinput1 {
    font-size: 12px;
  }

  .c-sign-up-container11 {
    align-self: stretch;
    justify-content: flex-end;
  }

  .c-sign-up-text06 {
    font-size: 14px;
  }

  .c-sign-up-textinput2 {
    font-size: 12px;
  }

  .c-sign-up-container12 {
    align-self: stretch;
    justify-content: flex-end;
  }

  .c-sign-up-text07 {
    font-size: 14px;
  }

  .c-sign-up-textinput3 {
    font-size: 12px;
  }

  .c-sign-up-text08 {
    font-size: 14px;
  }

  .c-sign-up-textinput4 {
    font-size: 12px;
  }

  .c-sign-up-container15 {
    align-self: stretch;
    justify-content: flex-end;
  }

  .c-sign-up-text09 {
    font-size: 14px;
  }

  .c-sign-up-textinput5 {
    font-size: 12px;
  }

  .c-sign-up-container16 {
    align-self: stretch;
    justify-content: flex-end;
  }

  .c-sign-up-text10 {
    font-size: 14px;
  }

  .c-sign-up-textinput6 {
    font-size: 12px;
  }

  .c-sign-up-button2 {
    font-size: 14px;
  }

  .c-sign-up-text11 {
    font-size: 10px;
  }
}

@media(max-width: 767px) {
  .c-sign-up-container01 {
    padding: var(--dl-space-space-oneandhalfunits);
  }

  .c-sign-up-container03 {
    display: none;
  }

  .c-sign-up-text {
    font-size: 22px;
  }

  .c-sign-up-container05 {
    width: 50%;
  }

  .c-sign-up-text01 {
    font-size: 12px;
  }

  .c-sign-up-text02 {
    font-size: 12px;
  }

  .c-sign-up-text03 {
    font-size: 14px;
  }

  .c-sign-up-text04 {
    font-size: 12px;
  }

  .c-sign-up-textinput {
    width: 100%;
  }

  .c-sign-up-text05 {
    font-size: 12px;
  }

  .c-sign-up-textinput1 {
    width: 100%;
  }

  .c-sign-up-text06 {
    font-size: 12px;
  }

  .c-sign-up-textinput2 {
    width: 100%;
  }

  .c-sign-up-text07 {
    font-size: 12px;
  }

  .c-sign-up-textinput3 {
    width: 100%;
  }

  .c-sign-up-text08 {
    font-size: 12px;
  }

  .c-sign-up-textinput4 {
    width: 100%;
  }

  .c-sign-up-text09 {
    font-size: 12px;
  }

  .c-sign-up-textinput5 {
    width: 100%;
  }

  .c-sign-up-text10 {
    font-size: 12px;
  }

  .c-sign-up-textinput6 {
    width: 100%;
  }

  .c-sign-up-button2 {
    font-size: 12px;
  }

  .c-sign-up-text11 {
    font-size: 9px;
  }
}

@media(max-width: 470px) {
  .c-sign-up-container01 {
    padding: var(--dl-space-space-unit);
  }

  .c-sign-up-text {
    font-size: 18px;
    text-align: center;
  }

  .c-sign-up-container05 {
    width: 100%;
  }

  .c-sign-up-container07 {
    flex-direction: column;
  }

  .c-sign-up-container10 {
    flex-direction: column;
  }

  .c-sign-up-container14 {
    flex-direction: column;
  }
}
</style>
