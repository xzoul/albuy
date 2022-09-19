<template>
  <nav>
    <router-link to="/AdminTest">AdminTest</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
  import Parse from 'parse';
  Parse.serverURL = "https://parseapi.back4app.com/";
  Parse.initialize("TUXzLCXn5SGneDRra9AkQbap7th7kqaNpWt7yDyY", "p3RbDlNG6TwerCtxBvgkM1m98LZzb4FrpqJ14Wr9");

  export default {

  };
</script>
