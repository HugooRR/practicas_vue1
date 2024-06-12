<template lang="html">
  <div class="card">
    <img src="./images/Layer 2.png" alt="Layer" class="layer" />
    <img :src="itemSrc" alt="Warnings" class="img_item" />
    <div v-if="circleNumber !== undefined && circleNumber !== null && circleNumber.toString() !== ''" class="circle_test">
      {{ circleNumber }}
    </div>
    <div>{{ title }}</div>
    <img src="./images/Layer 3.png" alt="Layer bottom" class="layer_bottom" />
    <div v-if="showDiv" class="total_points"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

defineProps({
  itemSrc: {
    type: String,
    requied: true,
  },
  circleNumber: {
    type: String,
    requied: true,
  },
  title: {
    type: String,
    default: "",
  },
  showDiv: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
// Estilos para web
.card {
  height: 225px;
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 10px;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    max-height: 110px;
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    width: 37%;
    max-height: 110px;
    flex-wrap: nowrap;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 290px;
    max-height: 27%;
    flex-wrap: nowrap;
    margin: 5px;
  }
}

.card > div {
  font-weight: bold;
  font-size: xx-large;
  height: fit-content;
  width: 220px;
  word-break: break-all;
  align-self: flex-end;
  text-align: right;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    width: 100px;
    font-size: 15px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    width: 140%;
    font-size: 15px;
    margin-bottom: 10px;
    word-break: keep-all;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 120%;
    font-size: 20px;
    word-break: keep-all;
    margin-bottom: 10px;
  }
}

.layer {
  height: 20px;
  align-self: flex-start;
}

.layer_bottom {
  height: 24px;
  align-self: flex-end;
}

.circle_test {
  background-color: rgb(240, 47, 47);
  color: white;
  max-width: fit-content;
  height: auto;
  padding: 10px 20px;
  border-radius: 50%;
  position: absolute;
  margin-bottom: 170px;
  margin-left: 400px;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    margin-left: 190px;
    margin-bottom: 75px !important;
    padding: 10px 15px;
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    margin-left: 190px;
    margin-bottom: 75px !important;
    padding: 10px 15px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    margin-left: 240px;
    margin-bottom: 90px !important;
    padding: 10px 15px;
  }
}

.img_item {
  height: 200px;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    height: 80%;
    align-self: center;
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    height: 80%;
    align-self: center;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    height: 80%;
    align-self: center;
  }
}

.total_points {
  display: flex;
  justify-content: center;
  color: white;
  font-size: small;
  background-color: rgb(240, 47, 47);
  white-space: nowrap;
  max-width: fit-content;
  padding: 15px;
  position: absolute;
  margin-left: 220px;
  margin-bottom: 160px;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    font-size: x-small !important;
    background-color: rgb(240, 47, 47);
    margin-left: 120px;
    margin-bottom: 75px !important;
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    font-size: small !important;
    background-color: rgb(240, 47, 47);
    margin-left: 110px;
    margin-bottom: 70px !important;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    font-size: small !important;
    background-color: rgb(240, 47, 47);
    margin-left: 160px;
    margin-bottom: 80px !important;
  }
}
</style>
