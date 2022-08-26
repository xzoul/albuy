<template>
  <nav>
    <router-link to="/AdminTest">AdminTest</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
  import Parse from 'parse';
  Parse.serverURL = "http://localhost:1337/api";
  Parse.initialize("myAppId", "jspass");

  export default {

  };
</script>
