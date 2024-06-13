<template lang="html">
  <div class="header_messages">
    <div class="mail_menu">
      <div class="btn_check">
        <input type="checkbox" name="check_all" id="check_all" />
      </div>
      <div class="new_msg">New Message</div>
      <div class="inbox">Inbox</div>
      <div class="ellipse_inbox">2</div>
      <div class="sent_msg">Sent</div>
    </div>
    <form>
      <input type="search" name="search" id="search" placeholder="Search" />
      <button type="submit">Search</button>
    </form>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss">

.new_msg {
  background-image: url("/src/images/Rectangle 2.png");
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
.header_messages,
.mail_menu {
  display: flex;
  flex-direction: row;
  border: 1px solid lightgrey;
  align-items: center;
  gap: 30px;
  height: 45px;
  
  .btn_check {
    margin-left: 9px;
    width: 0;
  }

  .ellipse_inbox {
    position: absolute;
    margin-top: -35px;
    margin-left: 235px;
    background-color: rgb(240, 47, 47);
    color: white;
    font-weight: bold;
    border-radius: 50%;
    padding: 10px 15px;
  }
}


form {
  display: flex;
  padding: 2px;
  border: 1px solid lightgrey;
  margin-left: auto;
  margin-right: 50px;

  input[type="search"] {
    margin-left: auto;
    border: 1px solid transparent;
  }

  button[type="submit"] {
    text-indent: -999px;
    overflow: hidden;
    width: 40px;
    padding: 0;
    margin: 0;
    border: 1px solid transparent;
    border-radius: inherit;
    background: transparent
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
      no-repeat center;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 640px) {
  .header_messages {
    width: 100%;
    height: fit-content;
    flex-wrap: wrap;

    .btn_check {
      margin-left: 0;
    }

    .ellipse_inbox {
      margin-left: 210px;
      font-size: x-small;
      padding: 10px 12px;
    }
  }

  .mail_menu {
    display: flex;
    flex-direction: row;
    border: 1px solid lightgrey;
    align-items: center;
    gap: 30px;
    height: 45px;
  }

  form {
    margin-right: 10px;
  }
}

@media screen and (min-width: 640px) and (max-width: 1024px) {
  .btn_check {
    margin-left: 0;
  }
  form {
    margin-right: 10px;
  }
  .ellipse_inbox {
    margin-left: 225px;
    font-size: small;
  }
}
</style>
