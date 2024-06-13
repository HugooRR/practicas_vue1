<template>
  <div class="calendar">
    <div class="nav_calendar">
      <div class="arrow_left"><img src="/src/images/mail_arrow.png" alt="Calendar arrow left" class="arrow_closed" id="arrow_left" /></div>
      <div class="date">
        <h1>APRIL 2024</h1>
      </div>
      <div class="arrow_right"><img src="/src/images/mail_arrow.png" alt="Calendar arrow right" class="arrow_closed" /></div>
    </div>
    <table class="table_calendar">
      <thead>
        <tr>
          <th>S</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td class="date_current">2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td class="date_day">6</td>
          <td>7</td>
        </tr>
        <tr>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
        </tr>
        <tr>
          <td>15</td>
          <td class="date_day">16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
        </tr>
        <tr>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td class="date_day">27</td>
          <td>28</td>
        </tr>
        <tr>
          <td>29</td>
          <td>30</td>
          <td>31</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" >
.calendar {
  width: 50%;
}
.nav_calendar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 34px;
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
}
#arrow_left {
  rotate: 90deg;
}
.arrow_left {
  margin-right: auto;
}
.arrow_right {
  margin-left: auto;
}
.arrow_closed {
  rotate: -90deg;
  height: 5px;
}
.table_calendar {
  width: 100%;
  height: 87%;
  background-color: white;
  text-align: center;
  border-collapse: collapse;
  font-size: larger;
  tr {
    height: 0;
  }
  thead {
    background-color: rgb(1, 209, 216);
    height: 10%;
  }
  .date_current,
  .date_day {
    background-image: url("/src/images/Ellipse 1.png");
    background-repeat: no-repeat;
    background-size: 40%;
    background-position-x: center;
    background-position-y: center;
    color: white;
    font-weight: 900;
  }
  .date_day {
    opacity: 0.7;
    font-weight: 100;
  }
}
</style>
