<template>
  <navBarComponent v-if="!$route.meta.hideNavbar" />
  <div class="container">
    <div class="">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import navBarComponent from "./components/navBarComponent";

export default {

  name: 'App',
  components: {
    navBarComponent
  }
}
</script>

<style></style>
