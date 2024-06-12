<template lang="html">
  <img src="./images/logo-easy-connect_SBS.png" alt="Logo" class="logo" />
  <HeaderRightMolecule />
</template>

<script lang="ts" setup>
import { HeaderRightMolecule } from "../index.ts"
</script>

<style lang="css" scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;

  .logo {
    max-width: fit-content;

    @media screen and (min-width: 320px) and (max-width: 640px) {
      width: 50%;
      height: 50%;
      align-self: center;
    }
  }
}
</style>
