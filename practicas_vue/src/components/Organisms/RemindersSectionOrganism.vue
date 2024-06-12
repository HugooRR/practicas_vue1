<template lang="html">
  <DivAtom className="title" image="./images/ties2.png" imgAlt="Ties" imgClass="img_title" text="CIRCLE OF CARE" :isParagraph="false" />
  <div class="raminders_calendar">
    <ContainerCalendarMolecule />
  </div>
  <img src="./images/Titular barra.png" alt="Title bar" class="bar" />
  <BarIconsAtom />
</template>
<script lang="ts" setup>
import { DivAtom, BarIconsAtom, ContainerCalendarMolecule } from "../index.ts"
</script>
<style lang="scss" scoped>
.title {
  height: 50px;
  background-color: lightgray;
  color: grey;
  font-size: xx-large;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: flex-start;
  gap: 40px;
  padding-left: 40px;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    font-size: small;
    padding-left: 10px;
    gap: 20px;
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    font-size: medium;
    padding-left: 10px;
    gap: 20px;
  }
}

.img_title {
  height: 50px;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    height: 40px;
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    height: 40px;
  }
}

.bar {
  margin-left: auto;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    display: none;
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    height: 15px;
  }
}

.reminders_calendar {
  @media screen and (min-width: 320px) and (max-width: 640px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
}
</style>
