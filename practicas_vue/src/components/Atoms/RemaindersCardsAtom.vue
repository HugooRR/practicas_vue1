<template lang="html">

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

</template>

<style lang="scss" scoped>
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
  margin-left: 15px;
  p {
    margin: 0;
  }
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

.test_summary {
  margin-bottom: 20px;
  margin-left: 15px;
}
.buttons {
  align-self: center;
  display: flex;
  gap: 20px;
}

.header_test {
  background-image: url("/src/images/Rectangle 2.png");
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: white;
  align-items: center;
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