<template lang="html">
  <div class="care_square">
    <div :class="className"></div>
    <div class="picture">
      <img :src="imgSrc" :alt="altText" />
    </div>
    <div class="care_card">
      <div class="name_profession">
        <h1>{{ name }}</h1>
        <p>{{ profesion }}</p>
        <div class="send_msg">Send Message</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  className: {
    type: String,
    default: "",
  },
  imgSrc: {
    type: String,
    default: "",
  },
  altText: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  profesion: {
    type: String,
    default: "",
  },
})
</script>
<style lang="scss" scoped>
.care_square {
  background-color: white;
  border: 1px solid lightgrey;
  width: 30%;
  display: flex;
  flex-direction: row;
  position: relative;

  .care_card {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-end;
  }

  .picture {
    width: 20%;
    height: fit-content;
    padding: 0px 0px 15px 35px;
    align-self: flex-end;
    position: absolute;

    > img {
      width: 100%;
    }
  }

  .name_profession {
    display: flex;
    flex-direction: column;
    height: fit-content;
    white-space: nowrap;

    > p {
      margin: 0;
      width: fit-content;
      align-self: flex-end;
      margin-right: 10px;
    }

    > h1 {
      margin-right: 10px;
    }
  }

  .send_msg {
    display: flex;
    background-image: url(./images/Rectangle\ 2.png);
    color: white;
    width: fit-content;
    height: 15%;
    display: table-cell;
    vertical-align: middle;
    padding: 20px;
    align-self: flex-end;
    flex-wrap: nowrap;
    white-space: nowrap;
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 50%;
  }
}
</style>
