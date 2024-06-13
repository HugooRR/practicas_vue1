<template lang="html">
  <CommonDivAtom className="title" image="/src/images/reminders-calendar.png" imgAlt="Calendar" imgClass="img_title" text="REMINDERS CALENDAR" :isParagraph="false" :rightImg="true"/>

  <div class="raminders_calendar">
    <ContainerCalendarMolecule />
  </div>
  <BarIconsAtom />
</template>
<script lang="ts" setup>
import { CommonDivAtom, BarIconsAtom, ContainerCalendarMolecule } from "../index.ts"
</script>
<style lang="scss" >
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
