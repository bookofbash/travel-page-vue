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
          ><font-awesome-icon class="icon" icon="bed" size="m" :style="{ color: '#825DBB' }"/></span
        >Rooms - 1
        <span class="select-arrow">&#9660;</span>
      </div>
      <div class="options search-adults">
        <span
          ><font-awesome-icon
            class="icon"
            icon="user"
            size="m"
            :style="{ color: '#825DBB' }"/></span
        >Adults - 1<span class="select-arrow">&#9660;</span>
      </div>
      <div class="options search-children">
        <span
          ><font-awesome-icon
            class="icon"
            icon="child"
            size="m"
            :style="{ color: '#825DBB' }"/></span
        >Children - 0
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
