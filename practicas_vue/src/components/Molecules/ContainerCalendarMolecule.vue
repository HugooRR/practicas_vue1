<template lang="html">
  <div class="container_calendar">
    <RemindersAtom />
    <CalendarAtom />
  </div>
</template>
<script lang="ts" setup>
import { CalendarAtom, RemindersAtom } from "../index.ts"
</script>

<style lang="scss" scoped>
.container_calendar {
  border: 1px solid lightgrey;
  margin: 20px 100px;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 30px;
  padding: 20px 40px;
  background-color: #f5f5f5;

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
