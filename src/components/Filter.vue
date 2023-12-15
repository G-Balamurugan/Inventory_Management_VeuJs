<template>
  <form id="filter-form" class="filterBox">
    <div class="category-group">
      <label for="category"><b>Category :</b></label>
      <br>
      <label><input type="checkbox" id="category1" v-model="electronic">Electronics</label>
      <label><input type="checkbox" id="category2" v-model="cloths">Clothing</label>
      <label><input type="checkbox" id="category3" v-model="shoe">Shoes</label>
      <label><input ref="watchRef" type="checkbox" id="category4" v-model="watches">Watch</label>
    </div>
    <br>
    <div class="form-group">
      <label for="name"><b>Name :</b></label>
      <br>
      <input type="text" id="name" :class="pointCard" v-on:mouseover="mouseOver" v-on:mouseleave="mouseLeave" placeholder="Enter here">
    </div>
    <br>
    <div class="form-group">
      <label><b>Price Range :</b></label>
      <br>
      <label><input type="radio" name="price-range" value="0-50">0 - 50</label>
      <label><input type="radio" name="price-range" value="50-100">50 - 100</label>
      <label><input type="radio" name="price-range" value="100-200">100 - 200</label>
    </div>
    <!-- <button type="button" class="filterButton" @click="filterProducts">Clear Filter</button> -->
  </form>
</template>

<script src="./js/filter.js"></script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }

  .filterButton {
    width: 30%;
    border-radius: 10px;
  }

  .pointed {
    box-shadow: 2px 2px 5px gray;
  }

  .notPointed {
    box-shadow: none;
  }

  .filterBox {
    border: 3px solid black;
    padding: 22px;
    border-radius: 15px;
  }

  #name {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .category-group {
    margin-bottom: 15px;
  }

  label {
    margin-bottom: 5px;
    display: block;
  }

  input[type="checkbox"],
  input[type="radio"] {
    margin-right: 5px;
  }

  .form-group {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
  }
</style>
