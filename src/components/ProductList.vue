<template>
  <div class="productsBox">
    <div class="productsCard" :class="product.productPointed"  v-for="(product , index) in productDetails" :key="index">
      <img :src="Images1" alt="Loading Image"/>
      <div class="productDesc">
        <p><b>{{product.name}}</b></p>
        <p>Price: <b>{{product.price}}</b></p>
      </div>
      <div class="addCart">
        <div class="productQuantity">
          <button @click="decreaseQuantity(index)" class="quantityButton">-</button>
          <p>{{product.quantity}}</p>
          <button @click="increaseQuantity(index)" class="quantityButton">+</button>
        </div>
        <button @click="cartAppend(product)" class="cartButton">Add to Cart</button>
      </div>
      <button @click="updateProduct(product)" class="updateButton">Update</button>
    </div>
  </div>
</template>

<script src="./js/product-list.js"></script>

<style scoped>
  button {
    height: 30px;
    width: 30px;
    border-radius: 5px;
    cursor: pointer;
  }

  .cartButton {
    width: 100px;
    height: 30px;
    border-radius: 20px;
    background-color: #349738;
    color: white;
  }

  .updateButton {
    width: 80px;
    height: 30px;
    border-radius: 5px;
    background-color: #1188e9;
    color: white;
  }

  .quantityButton {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #ccc;
  }

  img {
    height: 275px;
    width: 200px;
  }

  .productsBox {
    display: flex;
    justify-content: space-around; 
    flex-wrap: wrap;
  }

  .pointed {
    box-shadow: 2px 2px 10px black;
  }

  .notPointed {
    box-shadow: none;
  }

  .productsCard {
    text-align: center;
    box-sizing: border-box; 
    border: 1px solid #ccc; 
    margin: 10px;
    padding: 15px;
    line-height: 0.1px;
    border-radius: 15px;
  }
  .productsCard:hover {
     box-shadow: 2px 2px 10px black;
  }

  .productDesc {
    display: flex;
    flex-direction: column;
    line-height: 0.1px;
  }

  .productQuantity {
    display: flex;
     align-items: center;
  }

  .addCart {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
</style>

