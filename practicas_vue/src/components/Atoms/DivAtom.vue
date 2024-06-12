<template lang="html">
  <div :class="className">
    <img :src="image" alt="Imagen" :class="imgClass" />
    <p v-if="isParagraph">{{ text }}</p>
    <div class="text_container" v-else>
      {{ text }}
    </div>
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
})
</script>
