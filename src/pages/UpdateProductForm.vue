<template>
  <div>
    <form name="filterform" class="filterBox">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="productName">

      <label for="price">Price:</label>
      <input type="number" id="price" v-model="productPrice">

      <label for="stock">Stock:</label>
      <input type="number" id="stock" v-model="productStock">

      <label for="categoryName">Category:</label>
      <input type="text" id="categoryName" v-model="productCategory">

      <button class="submitButton" type="button" id="submit" @click="addProductInfo">
        Update Product
      </button>
    </form>
  </div>
</template>

<script src="./js/update-product-form.js">

</script>

<style scoped>
.filterBox {
    border: 1px solid #ccc;
    margin: 60px;
    max-width: 460px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .submitButton {
    width: 200px;
    margin-left: 105px;
    height: 40px;
    border-radius: 20px;
    background-color: #3fb559;
    color: white;
    border: none;
  }

  .submitButton:hover {
    background-color: #15a81d;
  }
</style>
