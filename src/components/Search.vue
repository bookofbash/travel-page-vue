<template>
  <div class="container">
    <div class="searchbar">
      <span class="icon-container"
        ><font-awesome-icon class="icon" icon="search" size="m" :style="{ color: '#825DBB' }"
      /></span>
      <input class="search-field" placeholder="Bali, Canggu, Kabupaten Badung" />
    </div>
    <div class="search-options">
      <div class="options date-range">
        <span
          ><font-awesome-icon class="icon" icon="calendar" size="m" :style="{ color: '#825DBB' }"
        /></span>
        <DatePicker />
        <span class="select-arrow"> &#9660;</span>
      </div>
      <div class="options search-rooms">
        <span
          ><font-awesome-icon class="icon" icon="bed" size="m" :style="{ color: '#825DBB' }"
        /></span>
        <div class="select-style">
          <select
            ><option value="Rooms - 1">Rooms - 1</option>
            <option value="Rooms - 2">Rooms - 2</option>
            <option value="Rooms - 3">Rooms - 3</option>
            <option value="Rooms - 4">Rooms - 4</option>
          </select>
        </div>
        <span class="select-arrow">&#9660;</span>
      </div>
      <div class="options search-adults">
        <span
          ><font-awesome-icon class="icon" icon="user" size="m" :style="{ color: '#825DBB' }"
        /></span>
        <div class="select-style">
          <select
            ><option value="Adults - 1">Adults - 1</option>
            <option value="Adults - 2">Adults - 2</option>
            <option value="Adults - 3">Adults - 3</option>
            <option value="Adults - 4">Adults - 4</option>
            <option value="Adults - 5">Adults - 5</option>
            <option value="Adults - 6">Adults - 6</option>
            <option value="Adults - 7">Adults - 7</option>
            <option value="Adults - 8">Adults - 8</option>
            <option value="Adults - 9">Adults - 9</option>
            <option value="Adults - 10">Adults - 10</option>
            <option value="Adults - 11">Adults - 11</option>
            <option value="Adults - 12">Adults - 12</option></select
          >
        </div>
        <span class="select-arrow">&#9660;</span>
      </div>
      <div class="options search-children">
        <span
          ><font-awesome-icon class="icon" icon="child" size="m" :style="{ color: '#825DBB' }"
        /></span>
        <div class="select-style">
          <select
            ><option value="Children - 1">Children - 1</option>
            <option value="Children - 2">Children - 2</option>
            <option value="Children - 3">Children - 3</option>
            <option value="Children - 4">Children - 4</option>
          </select>
        </div>
        <span class="select-arrow">&#9660;</span>
      </div>
    </div>
  </div>
</template>
<script>
import DatePicker from "@/components/DatePicker.vue";
import "vue2-datepicker/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChild, faUser, faBed, faCalendar, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faChild);
library.add(faUser);
library.add(faBed);
library.add(faCalendar);
library.add(faSearch);

export default {
  components: {
    DatePicker
  }
};
</script>
<style scoped>
.container {
  display: grid;
  width: auto;
  margin: 30px 30px 40px 40px;
}
.searchbar {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  margin: auto;
}
.searchbar input {
  width: 500px;
}
.icon {
  width: 10px;
  margin-right: 10px;
  vertical-align: middle;
  padding-bottom: 2px;
}
.search {
  border: solid rgb(128, 127, 127) 1px;
  border-radius: 50%;
  padding: 10px;
}

.search-field {
  font-size: 28px;
  font-weight: bold;
  border: none;
  margin: 10px;
  border-radius: 20px;
}

.search-rooms {
  width: auto;
}
.search-adults {
  width: auto;
}
.search-children {
  width: auto;
}
.select-style {
  display: inline-flex;
  font-size: 28px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
}
.select-style select {
  border: none;
  box-shadow: none;
  background: transparent;
  background-image: none;
  width: inherit;
  font-size: 12px;
  -webkit-appearance: none;
}
.select-style option {
  height: auto;
  width: auto;
}
.select-arrow {
  margin-left: 15px;
}
.search-options {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
}
.options {
  border-radius: 25px;
  border: 1px solid silver;
  font-size: 12px;
  padding: 10px;
  margin-right: 10px;
}
.date-range {
  display: flex;
  height: 16px;
  width: auto;
}
</style>
