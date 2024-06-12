<template lang="html">
  <div class="container">
    <RectangleCardMolecule v-for="(item, index) in cardItems" :key="index" :itemSrc="item.itemSrc" :circleNumber="item.circleNumber" :title="item.title" />
  </div>
</template>
<script lang="ts" setup>
import { RectangleCardMolecule } from "../index"
interface CardItem {
  itemSrc: string
  circleNumber?: string
  title: string
}
const cardItems: CardItem[] = [
  { itemSrc: "./images/warnings-off2.png", circleNumber: "2", title: "ALERTS AND MESSAGING" },
  { itemSrc: "./images/reminders-calendar.png", circleNumber: "1", title: "REMINDERS CALENDAR" },
  { itemSrc: "./images/ties2.png", circleNumber: "2", title: "CIRCLE OF CARE" },
  { itemSrc: "./images/daily-care-o-gram.png", circleNumber: "1", title: "DAILY CARE-O-GRAM" },
  { itemSrc: "./images/casemanager.png", title: "REPOSITORY" },
  { itemSrc: "./images/my-health-reports.png", title: "REPORTS" },
  { itemSrc: "./images/reward-points.png", title: "MY POINTS" },
]
</script>
<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    width: 1500px;
    height: auto;
    margin-top: 20px;
    margin-bottom: 50px;

    @media screen and (min-width: 320px) and (max-width: 640px) {
      width: auto;
      flex-direction: column;
      flex-wrap: nowrap;
    }

    @media screen and (min-width: 640px) and (max-width: 1024px), (min-width: 1024px) and (max-width: 1280px) {
      width: auto;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
}
</style>
