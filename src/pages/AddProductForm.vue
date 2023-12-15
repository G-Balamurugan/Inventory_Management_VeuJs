<template>
  <div>
    <form name="filterform" class="filterBox">
    <br>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="productName" required>
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" id="price" v-model="productPrice" required>
      </div>
      <div class="form-group">
        <label for="stock">Stock:</label>
        <input type="number" id="stock" v-model="productStock" required>
      </div>
      <div class="form-group">
        <label for="categoryName">Category:</label>
        <input type="text" id="categoryName" v-model="productCategory" required>
      </div>
      <div class="form-group">
        <input class="submitButton" type="submit" id="submit" value="Add Product" @click="submitForm">
      </div>
    </form>
  </div>
</template>

<script src="./js/add-product-form.js"></script>

<style scoped>
  .filterBox {
    border: 1px solid #ccc;
    margin: 59px;
    max-width: 450px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
  }

  .form-group {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }

  label {
    margin-right: 10px;
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
  }

  .submitButton:hover {
    background-color: #45a049;
  }
</style>
