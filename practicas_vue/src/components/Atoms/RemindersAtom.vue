<template lang="html">
  <div class="reminders">
    <div class="date">
      <h1>TODAY</h1>
      <p>2 JULY / MONDAY</p>
    </div>
    <div class="doctor">
      <div>
        <img src="./images/phone.png" alt="Telephon icon" class="img_phone" />
      </div>
      <div class="dr_name">
        <h1>Call Dr. Smith</h1>
        <p>675 557 89</p>
      </div>
    </div>
    <div class="test">
      <div class="header_test">
        <div>
          <img src="./images/calendar.png" alt="Calendar icon" class="img_calendar" />
        </div>
        <div class="test_type">
          <h1>Ocular Test</h1>
          <p>Memorial Clinic Miami</p>
        </div>
        <div class="cross">
          <img src="./images/close_cross.png" alt="Closing cross" />
        </div>
      </div>
      <div class="body_test">
        <div class="test_date">
          <p>2 JULY 2012 /</p>
          <h1>14:30</h1>
        </div>
        <div class="test_summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique orci sed ipsum maximus sollicitudin. Phasellus sed porta neque. Morbi at convallis risus. Aliquam et lorem
          venenatis, sodales eros sit amet, lobortis risus. Proin ac condimentum ipsum. Vestibulum vestibulum fermentum venenatis. Quisque sodales velit erat, eu scelerisque nisi feugiat ac. Nulla
          congue tellus vel nunc euismod interdum.
        </div>
        <div class="buttons">
          <input type="button" value="CHANGE" class="btn_reply" />
          <input type="button" value="DELETE" class="btn_delete" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.reminders {
  width: 40%;

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    width: 100%;
  }
}

.date {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-content: center;

  & > h1 {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > p {
    margin-top: 0;
  }
}

.doctor {
  background-image: url(./images/Rectangle\ 2.png);
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
  background-image: url(./images/Rectangle\ 2.png);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: white;
  align-items: center;
}

.cross {
  align-self: flex-start;
  margin-left: auto;

  & > img {
    height: 30px;
  }
}

.body_test {
  background-color: lightgrey;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding-bottom: 10px;
}

.test_date {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.dr_name > p,
.test_type > p {
  margin: 0;
  margin-bottom: 10px;
}

.test_date > p {
  margin: 0;
}

.dr_name > h1,
.test_type > h1 {
  margin-bottom: 0;
  margin-top: 10px;
}

.test_date,
.test_summary {
  margin-left: 15px;
}

.test_summary {
  margin-bottom: 20px;
}

.buttons {
  align-self: center;
  display: flex;
  gap: 20px;
}
</style>
