<template lang="html">
  <div class="rectangle">
    <img src="/src/images/Rectangle 1.png" alt="Rectangle" class="img_rectangle" />
    <CardsAtom :itemSrc="itemSrc" :circleNumber="circleNumber" :title="title" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
import { CardsAtom } from "../index.ts"

defineProps({
  itemSrc: {
    type: String,
    requied: true,
  },
  circleNumber: {
    type: Number,
  },
  title: {
    type: String,
    requied: true,
  },
})
</script>

<style lang="css" >
.rectangle {
  max-height: 100%;
  max-width: 100%;
  align-self: start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .img_rectangle {
    height: 242px;
    width: auto;

    @media screen and (min-width: 320px) and (max-width: 640px) {
      max-height: 120px;
    }

    @media screen and (min-width: 640px) and (max-width: 1024px) {
      max-height: 120px;
      width: 140%;
    }

    @media screen and (min-width: 1024px) and (max-width: 1280px) {
      max-height: 150px;
      max-width: 300px;
    }
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    width: 40%;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 30%;
  }
}
</style>