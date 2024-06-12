<template lang="html">
  <div class="header_right">
    <img src="./images/senior.png" alt="Woman image" class="client" />
    <DivAtom className="ellipse" image="./images/Ellipse 1.png" imgAlt="Notifications" text="6" :isParagraph="true" />

    <div class="client_name">Cordelia Carpanter</div>

    <DivAtom className="settings" image="./images/config.png" imgAlt="Configuration" imgClass="config" text="SETTINGS" :isParagraph="false" />

    <DivAtom className="logout" image="./images/1419365876_on-off.png" imgAlt="Logout" imgClass="on_off" text="LOGOUT" :isParagraph="false" />
  </div>
</template>

<script lang="ts" setup>
import { DivAtom } from "../index.ts"
</script>

<style lang="scss" scoped>
.header_right {
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  .client {
    position: relative;
    height: 70px;
  }

  .ellipse {
    position: relative;
    z-index: 1;
    margin-left: -50px;
    margin-top: -30px;

    > p {
      padding: 0;
      color: white;
      font-weight: bold;
      position: absolute;
      margin-top: -29px;
      margin-left: 10px;
    }
  }

  .client_name {
    position: relative;
    margin-left: -30px;
  }

  .config {
    height: 40px;
    width: 40px;
  }

  .on_off {
    height: 35px;
    width: 35px;
    filter: opacity(0.4) drop-shadow(0 0 0 red);
  }

  .dots {
    height: 20px;
  }

  .settings {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .logout {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: red;
    gap: 10px;
  }

  @media screen and (min-width: 320px) and (max-width: 640px) {
    justify-content: flex-end;

    .client,
    .config,
    .on_off {
      height: 75%;
    }

    .ellipse {
      margin-top: -30px;
      margin-left: -20px;
    }

    .dots,
    .log_letters,
    .client_name,
    .sett_letters {
      display: none;
    }

    hr {
      width: 100%;
    }
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    .dots,
    .log_letters,
    .client_name,
    .sett_letters {
      display: none;
    }

    width: 200px;

    .ellipse {
      max-height: 5%;
      margin-top: -60px;
    }

    hr {
      width: 100%;
    }
  }
}
</style>
