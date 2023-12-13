<template>
  <div class="filter">
    <form>
      <div class="innerFilter">
        <label for="category">Category</label>
        <input type="checkbox" id="category" v-model="category" />
      </div>
      <div class="innerFilter">
        <label for="product">Product</label>
        <input type="checkbox" id="product" v-model="product" />
      </div>
      <div class="innerFilter">
        <label for="price">Price</label>
        <input type="checkbox" id="price" v-model="price" />
      </div>
      <button :disabled="!isAlive" @click="filterSubmit">Submit</button>
    </form>
  </div>
</template>

<script src="./js/filter.js"></script>

<style scoped>
.filter {
  width: 27%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  /* display: flex;
    align-items: center;
    justify-content: center; */
}
.innerFilter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row-reverse;
  width: 150px;
}
button {
  width: 50%;
}
</style>
