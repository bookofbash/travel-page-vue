<template>
  <div class="container">
    <div class="searchbar">
      <span class="icon-container"
        ><img class="icon search" src="../assets/icons/search.svg" alt="Search Icon"
      /></span>
      <input class="search-field" placeholder="Bali, Canggu, Kabupaten Badung" />
    </div>
    <div class="search-options">
      <div class="options date-range"><span><img class="icon filter-purple" src="../assets/icons/calendar.svg" alt="calendar Icon"
      /></span>Fri, Dec 20  - Thurs, Dec 26  <span class="select-arrow"> &#9660;</span></div>
      <div class="options search-rooms"><span><img class="icon filter-purple" src="../assets/icons/bed.svg" alt="Bed Icon"
      /></span>Rooms - 1 <span class="select-arrow" >&#9660;</span></div>
      <div class="options search-adults"><span><img class="icon filter-purple" src="../assets/icons/user.svg" alt="User Icon"
      /></span>Adults - 1<span class="select-arrow">&#9660;</span></div>
      <div class="options search-children"><span><img class="icon filter-purple" src="../assets/icons/child.svg" alt="Child Icon"
      /></span>Children - 0 <span class="select-arrow">&#9660;</span></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      range: {
        start: new Date(2018, 0, 16), // Jan 16th, 2018
        end: new Date(2018, 0, 19) // Jan 19th, 2018
      }
    };
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
width: 500px
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
.options{
  border-radius: 25px;
  border: 1px solid silver;
  font-size: 12px;
  padding: 10px;
  margin-right: 10px;
}
.filter-purple {
  filter: invert(26%) sepia(89%) saturate(1674%) hue-rotate(272deg) brightness(90%) contrast(94%);
}
</style>
