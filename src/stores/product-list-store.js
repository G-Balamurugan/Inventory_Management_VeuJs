import { defineStore } from "pinia";
import testAPI from "@/api/test-api";
import Images1 from "@/assets/images/iphone1.jpg";
import Images2 from "@/assets/images/macbook1.jpg";
import Images3 from "@/assets/images/cloth1.jpg";
import Images4 from "@/assets/images/watch1.jpg";
import Images5 from "@/assets/images/cloth2.jpg";
import Images6 from "@/assets/images/iphone2.jpg";
import Images7 from "@/assets/images/watch2.jpg";
import Images8 from "@/assets/images/shoe1.jpg";
import Images9 from "@/assets/images/shoe2.jpg";
import Images10 from "@/assets/images/mackbook2.jpg";
import Images11 from "@/assets/images/cloth3.jpg";

import Services from "@/services/product-service.js";

export const getAllProducts = defineStore("productList", {
  // id: 'api-test',
  state: () => ({
    list: [],
    productDetails: [],
    productDetailsOriginal: [],
    cartList: [],
    categoryFilter: [],
    cartItems: 0,
  }),
  actions: {
    GET_ALL_PRODUCTS() {
      let productArr = [];
      fetch("http://localhost:8089/httpmethod/product/list").then(
        (response) => {
          const result = response.json();
          if (response.status === 200) {
            result.then((data) => {
              console.log("Old => ", data);
              
              let chk = ["electronics" , "shoes" , "watch" , "clothing"]
              let i = 0
              for (let index = 0; index < data.length; index++) {
                data[index]["stock"] = data[index].quantity;
                data[index].quantity = 1;
                data[index]["category_details"] = data[index].category;
                data[index].category = chk[i];
                i ++ ;
                if(i == 4) i = 0;   // recursive ... setting it to 0 
                if (data[index].stock > 0) {
                  productArr.push(data[index]);
                }
                // static list ... neeed to fetch from database .. currently ["electronics" , "shoes" , "watch" , "clothing"]
              }
              console.log("Modified => ", data);

              this.productDetails = productArr;
              this.productDetailsOriginal = productArr;
            });
          }
        }
      );
    },

    async CREATE_ORDER(orderDetails) {
      const payload = orderDetails.payload;
      const createOrderResponse = await Services.createOrder(payload);
      const data = await createOrderResponse.json();
      console.log(data, createOrderResponse);
    },

    async ADD_PRODUCT(productInfo) {
      alert("Hi...", productInfo);
      const payload = productInfo.payload;
      console.log(">>>>>>" + payload);
      const addedProduct = await Services.addProduct(payload);
      const data = await addedProduct.json();
      console.log("= }" + data, addedProduct);
    },

    async CREATE_PRODUCT(productDetails) {
      const payload = productDetails.payload;
      const createProductResponse = await Services.createProduct(payload);
      const data = await createProductResponse.json();
      console.log("added to inventory: ", data);
    },

    async UPDATE_PRODUCT(productInfo, id) {
      const payload = productInfo.payload;
      const addedProduct = await Services.updateProduct(payload, id);
      const data = await addedProduct.json();
      console.log(data, addedProduct);
    },

    addToCartList(product) {
      let flag = true;
      this.cartItems += product.quantity;
      for (let index = 0; index < this.cartList.length; index++) {
        if (this.cartList[index].name === product.name) {
          flag = false;
          this.cartList[index].quantity += product.quantity;
          this.cartList[index].tempQuantity += product.quantity;
        }
      }
      if (flag) {
        let newProduct = { ...product };
        newProduct["tempQuantity"] = product.quantity;
        this.cartList.push(newProduct);
      }
      console.log(product.quantity);
      console.log(this.cartList, this.cartItems);
    },
    removeFromCartList(product) {
      let index = this.cartList.indexOf(product);
      this.cartList.splice(index, 1);
      if (this.cartItems >= product.quantity)
        this.cartItems -= product.quantity;
      else {
        this.cartItems = 0;
      }
    },
    decrementCartItems(quantity) {
      if (this.cartItems - quantity > -1) this.cartItems -= quantity;
    },
    cartListClear() {
      this.cartItems = 0;
      this.cartList = [];
    },
    getFilterPorduct(checkList) {
      console.log(checkList);
      if (checkList.length == 0) {
        this.productDetails = this.productDetailsOriginal;
      } else {
        let newProductList = [];
        for (
          let index = 0;
          index < this.productDetailsOriginal.length;
          index++
        ) {
          if (checkList[this.productDetailsOriginal[index].category]) {
            newProductList.push(this.productDetailsOriginal[index]);
          }
        }
        if (newProductList.length == 0)
          this.productDetails = this.productDetailsOriginal;
        else this.productDetails = newProductList;
      }
    },
  },
});
