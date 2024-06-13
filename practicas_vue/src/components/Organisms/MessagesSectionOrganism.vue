<template lang="html">
  <CommonDivAtom className="title" image="/src/images/warnings-off2.png" imgAlt="Warnings" imgClass="img_title" text="ALERTS Y MESSAGES" :isParagraph="false" />
  <div class="alerts_messaging">
    <ContainerMessageMolecule />
  </div>
</template>
<script lang="ts" setup>
import { ContainerMessageMolecule, CommonDivAtom } from "../index"
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
.new_msg {
  background-image: url(//src/images/Rectangle\ 2.png);
  color: white;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0px 15px 0px 15px;
}
.sent_msg {
  background-color: lightgrey;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0px 15px 0px 15px;
}
.previous_msg {
  background-color: lightgrey;
  padding-left: 10px;
}
.alerts_messaging {
  margin-top: 30px;
  margin-bottom: 50px;
  color: #555555;
}
</style>
