<template>
  <body>
    <header>
      <HeaderOrganism />
    </header>
    <hr>
    <main>
      <MainContainerOrganism />
    </main>
    <section>
      <MessagesSectionOrganism />
    </section>
    <section>
      <RemindersSectionOrganism />
    </section>
    <section>
      <CicleOfCareOrganism />
    </section>
  </body>
</template>

<script lang="ts" setup>
import { CicleOfCareOrganism, HeaderOrganism, MainContainerOrganism, MessagesSectionOrganism, RemindersSectionOrganism } from '../index.ts';
</script>

<style lang="scss" scoped>
body {
  font-family: sans-serif;
  color: #555555;
}
</style>