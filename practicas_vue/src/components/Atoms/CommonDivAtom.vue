<template lang="html">
  <div :class="className">
    <img :src="image" :alt="imgAlt" :class="imgClass" />
    <p v-if="isParagraph">{{ text }}</p>
    <div class="text_container" v-else>
      {{ text }}
    </div>
    <img v-if="rightImg" src="/src/images/Titular barra.png" alt="Title bar" class="bar"/>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

defineProps({
  className: {
    type: String,
    requied: true,
  },

  image: {
    type: String,
    requied: true,
  },
  imgAlt: {
    type: String,
    requied: true,
  },
  imgClass: {
    type: String,
  },
  text: {
    type: String,
  },
  isParagraph: {
    type: Boolean,
    default: false,
  },
  
  rightImg: {
    type: Boolean,
    default: false,
  }
})
</script>

<style lang="scss">
.bar {
  margin-left: auto;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    display: none;
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    height: 15px;
  }
}

</style>
