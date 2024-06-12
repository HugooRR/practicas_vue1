<template lang="html">
  <DivsEncabezadoAtom className="title" image="./images/warnings-off2.png" imgAlt="Warnings" imgClass="img_title" text="ALERTS Y MESSAGES" :isParagraph="false" />
  <div class="alerts_messaging">
    <ContainerMessageMolecule />
  </div>
</template>
<script lang="ts" setup>
import { ContainerMessageMolecule, DivsEncabezadoAtom } from "../index"
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

  .img_title {
    height: 50px;
  }

  .bar {
    margin-left: auto;
  }

  .bar_icons {
    visibility: hidden;
  }

  @media screen and (min-width: 320px) and (max-width: 640px) {
    font-size: medium;
    padding-left: 10px;
    gap: 20px;

    .img_title {
      height: 40px;
    }
  }
}

.alerts_messaging {
  margin-top: 30px;
  margin-bottom: 50px;
  color: #555555;
}
</style>
