<template lang="html">
  <div class="container_messages">
    <HeaderMessagesAtom />
    <TableMailAtom />
  </div>
</template>
<script lang="ts" setup>
import { HeaderMessagesAtom, TableMailAtom } from "../index.ts"
</script>
<style lang="scss" scoped>
.container_messages {
  margin-left: 100px;
  margin-right: 100px;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    margin-left: 0;
    margin-right: 0;
    font-size: small;
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    margin-left: 0;
    margin-right: 0;
  }
  
}
</style>
