<template >
  <div class="bar_icons">
    <img src="./images/square.png" alt="Square view" class="square" />
    <img src="./images/list.png" alt="List view" class="list" />
  </div>
</template>

<style lang="scss" scoped>
.bar_icons {
  visibility: hidden;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    visibility: visible;
    margin-left: auto;
  }
}

.square,
.list {
  height: 20px;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    height: 20px;
  }
}
</style>
