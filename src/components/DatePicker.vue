<template>
  <div>
    <date-picker
      v-model="range"
      lang="en"
      width="900"
      range
      type="date"
      format="MM-DD-YYYY"
      input-class="calendar-input"
      calendar-class="calendar-input"
      class="options date-range "
      v-bind:clearable="false"
    >
    </date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: {
    DatePicker
  },
  data() {
    return {
      date: "",
      range: ""
    };
  }
};
</script>

<style scoped>
input .calendar-input {
  width: inherit !important;
  height: 330px;
}
.options .date-range {
  width: 180px;
}
</style>
