<template>
  <div class="nav_care" v-if="id" :id="id">
    {{ navCareText }}
    <div v-if="divClassName" :class="divClassName"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  navCareText: {
    type: String,
    default: "",
  },

  id: {
    type: String,
    default: "",
  },

  divClassName: {
    type: String,
  },
})
</script>

<style lang="scss" scoped>
.nav_care {
  border: 1px solid lightgrey;
  width: 100%;
  text-align: center;
  padding: 20px 0 20px;
  position: relative;
}
.bottom_bar {
  position: absolute;
  height: 5px;
  background-color: red;
  width: 100%;
  padding: 0;
  margin-top: 15px;
}

@media screen and (min-width: 320px) and (max-width: 640px) {
  .circle_nav {
    font-size: small;
  }
}
</style>
