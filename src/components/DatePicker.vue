<template>
  <div>
      <date-picker v-model="range" lang="en" range  type="date" format="MM-DD-YYYY" :shortcuts="shortcuts" width="500"></date-picker>
  </div>
</template>

<script>

import DatePicker from 'vue2-datepicker'
  import 'vue2-datepicker/index.css';

export default {
    components: {
        DatePicker
    },
    data(){
        return {
            date: '',
            range:''
        }
    }
}
</script>

<style scoped>
i .mx-icon-calendar svg{
  display:none;
}
.mx-input{
    width: inherit;
}
.mx-input-wrapper. input{
    font-size: 12px;
}
.mx-datepicker {
    font-size: 12px;
}

</style>