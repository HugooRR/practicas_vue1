<template lang="html">
  <section>
    <CommonDivAtom className="title" image="/src/images/ties2.png" imgAlt="Ties" imgClass="img_title" text="CIRCLE OF CARE" :isParagraph="false" />
    <CircleContainerMolecule />
  </section>
</template>
<script lang="ts" setup>
import { CircleContainerMolecule, CommonDivAtom } from "../index"
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
}
</style>
