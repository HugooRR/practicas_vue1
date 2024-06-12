<template lang="html">
  <table class="table_mail">
    <tbody>
      <tr class="tr_mail">
        <td class="td_check"><input type="checkbox" name="check_1" id="check_1" /></td>
        <td class="td_sender"><img src="./images/Ellipse 1.png" alt="Ellipse" class="ellipse_mail" />John Snow</td>
        <td class="td_subject">Hi Friend!!</td>
        <td class="td_date">12 April 2014</td>
        <td class="td_arrow"><img src="./images/mail_arrow.png" alt="Mail arrow" class="arrow_opened" /></td>
      </tr>
      <tr class="tr_mail">
        <td colspan="5" class="opened_mail">
          <h1>Hi Friend!!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique orci sed ipsum maximus sollicitudin. Phasellus sed porta neque. Morbi at convallis risus. Aliquam et lorem
            venenatis, sodales eros sit amet, lobortis risus. Proin ac condimentum ipsum. Vestibulum vestibulum fermentum venenatis. Quisque sodales velit erat, eu scelerisque nisi feugiat ac. Nulla
            congue tellus vel nunc euismod interdum.Nulla eget mattis est, et lacinia velit. Cras aliquam eu diam non laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ornare erat nec lacus sagittis porttitor. Vivamus sodales nisi et nunc suscipit, imperdiet tristique est
            iaculis. Quisque vitae massa in sem pretium venenatis.
          </p>
          <input type="button" value="DELETE" class="btn_delete" />
          <input type="button" value="REPLY" class="btn_reply" />
        </td>
      </tr>
      <tr class="tr_mail">
        <td class="td_check"><input type="checkbox" name="check_2" id="check_2" /></td>
        <td class="td_sender"><img src="./images/grey_ellipse.png" alt="Grey ellipse" class="grey_ellipse" />Richard Channing</td>
        <td class="td_subject">Memorial Clinic</td>
        <td class="td_date">12 April 2014</td>
        <td class="td_arrow"><img src="./images/mail_arrow.png" alt="Mail arrow" class="arrow_closed" /></td>
      </tr>
      <tr class="tr_mail">
        <td class="td_check"><input type="checkbox" name="check_3" id="check_3" /></td>
        <td class="td_sender"><img src="./images/grey_ellipse.png" alt="Grey ellipse" class="grey_ellipse" />Elisabeth Bale</td>
        <td class="td_subject">From Connecticut</td>
        <td class="td_date">21 June 2013</td>
        <td class="td_arrow"><img src="./images/mail_arrow.png" alt="Mail arrow" class="arrow_closed" /></td>
      </tr>
      <tr class="tr_mail">
        <td class="td_check"><input type="checkbox" name="check_4" id="check_4" /></td>
        <td class="td_sender"><img src="./images/grey_ellipse.png" alt="Grey ellipse" class="grey_ellipse" />Sarah Connor</td>
        <td class="td_subject">Cyberdyne Systems</td>
        <td class="td_date">20 June 2013</td>
        <td class="td_arrow"><img src="./images/mail_arrow.png" alt="Mail arrow" class="arrow_closed" /></td>
      </tr>
      <tr class="tr_mail">
        <td class="td_check"><input type="checkbox" name="check_5" id="check_5" /></td>
        <td class="td_sender"><img src="./images/grey_ellipse.png" alt="Grey ellipse" class="grey_ellipse" />Arturo González</td>
        <td class="td_subject">Recordatorio Consulta</td>
        <td class="td_date">20 June 2013</td>
        <td class="td_arrow"><img src="./images/mail_arrow.png" alt="Mail arrow" class="arrow_closed" /></td>
      </tr>
      <tr class="tr_mail" id="span3">
        <td colspan="3"></td>
        <td class="previous_msg">5 Previously Messages</td>
      </tr>
      <tr class="tr_mail" id="span2">
        <td colspan="2"></td>
        <td colspan="2" class="previous_msg">5 Previously Messages</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.table_mail,
.tr_mail {
  border: 1px solid lightgrey;
  border-collapse: collapse;
  height: 35px;
}
.td_check {
  width: 2%;
  text-align: center;
}
.td_sender {
  font-weight: bold;
  width: 20%;
}
.td_subject {
  width: 40%;
}
.td_date {
  width: 20%;
}
.td_arrow {
  width: 2%;
  text-align: center;
}
.ellipse_mail,
.grey_ellipse {
  height: 15px;
  margin-right: 10px;
}
.arrow_opened {
  height: 5px;
}
.arrow_closed {
  height: 5px;
  rotate: -90deg;
}
.opened_mail {
  background-color: #f5f5f5;
}
.opened_mail > h1,
p {
  text-align: left;
  font-weight: 100;
  margin-left: 30px;
  margin-right: 30px;
}
.opened_mail > input[type="button"] {
  float: right;
  margin-right: 30px;
  margin-bottom: 20px;
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
  background-image: url(./images/Rectangle\ 2.png);
  border: none;
  color: white;
  font-weight: bold;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.new_msg {
  background-image: url(./images/Rectangle\ 2.png);
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
#span2 {
  visibility: hidden;
  border: 1px solid transparent;
}

@media screen and (min-width: 320px) and (max-width: 640px) {
  .td_check {
    text-align: start;
    width: 10%;
  }
  .td_subject {
    display: none;
  }
  .td_sender,
  .td_date {
    width: 40%;
    white-space: nowrap;
  }
  .td_arrow {
    width: 10%;
    overflow: hidden;
  }
  .btn_delete,
  .btn_reply {
    font-size: smaller;
    padding: 10px 16px;
  }
  #span3 {
    display: none;
  }
  #span2 {
    visibility: visible;
    border: 1px solid lightgrey;
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    .td_check {
      text-align: start;
      width: 10%;
    }
    .td_sender,
    .td_subject,
    .td_date {
      width: 30%;
      white-space: nowrap;
    }
    .td_arrow {
      width: 10%;
      overflow: hidden;
      padding-right: 10px;
    }
    .previous_msg {
      padding: 0;
      width: 1%;
      white-space: nowrap;
      text-align: center;
      justify-content: center;
    }
  }
}
</style>
