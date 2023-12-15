<template>
    <div class="mainFilter">
      <div class="clearButton">
        <button class="cartButtonTop" @click="placeOrder">Purchase</button>
        <button class="cartButtonTop" @click="clearCart()">Clear Cart</button>
      </div>
      <br>
      <hr>
      <br>
      <div class="productsBox" >
          <div class="productsCard" :class="product.productPointed" v-on:mouseover="mouseOver(index)" v-on:mouseleave="mouseLeave(index)" v-for="(product , index) in cartList" :key="index">
              <img :src="image" alt="Loading Image"/>
              <div class="productDesc">
                  <p>{{product.name}}</p>
                  <p>{{product.price}}</p>
              </div>
              <div class="addCart">
                  <div class="productQuantity">
                      <button @click="decreaseQuantity(index)" class="quantityButton">-</button>
                      <p>{{product.tempQuantity}}</p>
                      <button @click="increaseQuantity(index)" class="quantityButton">+</button>
                  </div>
                  <button class="cartButton" @click="cartRemove(product)">Delete</button>
              </div>
          </div>
      </div>
    </div>
</template>

<script src="./js/cart.js">
</script>

<style scoped>
.mainFilter{
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    margin-right: 250px;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
button{
    height: auto;
    width: auto;
}
.clearButton{
  display: flex;
  justify-content: space-evenly;
  height: 30px;
  width: auto;
  margin-top: 38px;
}
.quantityButton {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: #ccc;
}
.cartButton{
  width: 80px;
  height: 30px;
  border-radius: 5px;
  background-color: #1188e9;
  color: white;
}
  img {
    height: 275px;
    width: 200px;
  }

.cartButtonTop {
  width: 100px;
  height: 30px;
  border-radius: 20px;
  background-color: #349738;
  color: white;
}
  .productsBox {
    display: flex;
    padding-bottom: 15px;
    justify-content: space-around; 
    flex-wrap: wrap;
  }
.pointed{
    box-shadow: 2px 2px 10px black;
}
.notPointed{
    box-shadow: none;
}
  .productsCard {
    text-align: center;
    box-sizing: border-box; 
    border: 1px solid #ccc; 
    margin: 10px;
    padding: 10px;
    line-height: 0.1px;
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
