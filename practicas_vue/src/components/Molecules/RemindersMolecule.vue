<template lang="html">
  <div class="reminders">
    <div class="date">
      <h1>TODAY</h1>
      <p>2 JULY / MONDAY</p>
    </div>
    <div class="doctor">
      <div>
        <img src="/src/images/phone.png" alt="Telephon icon" class="img_phone" />
      </div>
      <div class="dr_name">
        <h1>Call Dr. Smith</h1>
        <p>675 557 89</p>
      </div>
    </div>
    <div class="test">
      <div class="header_test">
        <div>
          <img src="/src/images/calendar.png" alt="Calendar icon" class="img_calendar" />
        </div>
        <div class="test_type">
          <h1>Ocular Test</h1>
          <p>Memorial Clinic Miami</p>
        </div>
        <div class="cross">
          <img src="/src/images/close_cross.png" alt="Closing cross" />
        </div>
      </div>
      <RemindersCardsAtom/>
    </div>
  </div>
</template>
<script lang="ts" setup>

  import {RemindersCardsAtom} from "../index.ts";

</script>
<style lang="scss">
.reminders_calendar {
  display: flex;
  justify-content: center;
}

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
}
@media screen and (min-width: 320px) and (max-width: 640px) {
  .reminders_calendar {
    display: flex;
    justify-content: center;
  }
  .container_calendar {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
}
@media screen and (min-width: 640px) and (max-width: 1024px) {
  .reminders_calendar {
    display: flex;
    justify-content: center;
  }
  .container_calendar {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
}
.reminders {
  width: 40%;
}
.date {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-content: center;
  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
}
.doctor {
  background-image: url("/src/images/Rectangle 2.png");
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: white;
  align-items: center;
  margin-bottom: 10px;
  justify-items: flex-start;
}
.img_phone,
.img_calendar {
  height: 30px;
  margin-left: 20px;
  margin-right: 20px;
}

.header_test {
  background-image: url("/src/images/Rectangle 2.png");
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: white;
  align-items: center;
}
.cross {
  align-self: flex-start;
  margin-left: auto;
}
.cross > img {
  height: 30px;
}

.btn_reply {
  background-color: rgb(1, 209, 216);
  border: none;
  color: rgb(67, 111, 112);
  font-weight: bold;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.btn_delete {
  background-image: url("/src/images/Rectangle 2.png");
  border: none;
  color: white;
  font-weight: bold;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
