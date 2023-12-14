<template>
    <form id="filter-form" class="filterBox">
      
        <label for="category">Category:</label>
        <label><input type="checkbox" id="category1" v-model="electronic" >Electronics</label>
        <label><input type="checkbox" id="category2" v-model="cloths">Clothing</label>
        <label><input type="checkbox" id="category3" v-model="shoe">Shoes</label>
        <label><input ref="watchRef" type="checkbox" id="category4" v-model="watches">Watch</label>

        <!-- <label v-for="(checkList,index) in checkBoxList" :key="index">
          <input type="checkbox" name="category" :value="checkList.values">{{checkList.display}}</label> -->
        <br>
        <label for="name">Name:</label>
        <input type="text" id="name">
        <br>
        <label>Price Range:</label>
        <label><input type="radio" name="price-range" value="0-50">0 - 50</label>
        <label><input type="radio" name="price-range" value="50-100">50 - 100</label>
        <label><input type="radio" name="price-range" value="100-200">100 - 200</label>
        <br>
        <!-- <button type="button" class="filterButton" @click="filterProducts">Clear Filter</button> -->
    </form>
</template>

<script src="./js/filter.js">

</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
}
.filterButton{
  width: 30%;
  border-radius: 10px;
}
.filterBox{
  border: 3px solid black;
  padding: 22px;
  border-radius: 15px;
}
</style>