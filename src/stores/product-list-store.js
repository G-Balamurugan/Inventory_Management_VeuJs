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

export const getAllProducts = defineStore("productList", {
  // id: 'api-test',
  state: () => ({
    productDetails: [
      {
        image: Images1,
        name: "Iphone14",
        buyEnable: false,
        price: "$450",
        quantity: 1,
        productPointed: "notPointed",
        category: "electronics"
      },
      {
        image: Images2,
        name: "Macbook Pro",
        buyEnable: false,
        price: "$999",
        quantity: 1,
        productPointed: "notPointed",
        category: "electronics"
      },
      {
        image: Images3,
        name: "Cloth - Suite",
        buyEnable: false,
        price: "$10",
        quantity: 1,
        productPointed: "notPointed",
        category: "clothing"
      },
      {
        image: Images4,
        name: "Fasttrack Watch",
        buyEnable: false,
        price: "$200",
        quantity: 1,
        productPointed: "notPointed",
        category: "watch"
      },
      {
        image: Images5,
        name: "Leather Cloth",
        buyEnable: false,
        price: "$999",
        quantity: 1,
        productPointed: "notPointed",
        category: "clothing"
      },
      {
        image: Images6,
        name: "Iphone13 Pro",
        buyEnable: false,
        price: "$100",
        quantity: 1,
        productPointed: "notPointed",
        category: "electronics"
      },
      {
        image: Images7,
        name: "Rolex Watch",
        buyEnable: false,
        price: "$450",
        quantity: 1,
        productPointed: "notPointed",
        category: "watch"
      },{
        image: Images8,
        name: "Sneakers Shoe",
        buyEnable: false,
        price: "$200",
        quantity: 1,
        productPointed: "notPointed",
        category: "shoes"
      },
      {
        image: Images9,
        name: "White Sneakers",
        buyEnable: false,
        price: "$999",
        quantity: 1,
        productPointed: "notPointed",
        category: "shoes"
      },
      {
        image: Images10,
        name: "Macbook Lite",
        buyEnable: false,
        price: "$999",
        quantity: 1,
        productPointed: "notPointed",
        category: "electronics"
      },
      {
        image: Images11,
        name: "Cotton Cloth",
        buyEnable: false,
        price: "$999",
        quantity: 1,
        productPointed: "notPointed",
        category: "clothing"
      },
      {
        image: Images6,
        name: "Iphone11",
        buyEnable: false,
        price: "$999",
        quantity: 1,
        productPointed: "notPointed",
        category: "electronics"
      }
    ],
    productDetailsOriginal : [
      {
        image: Images1,
        name: "Iphone14",
        buyEnable: false,
        price: "$450",
        quantity: 1,
        productPointed: "notPointed",
        category: "electronics"
      },
      {
        image: Images2,
        name: "Macbook Pro",
        buyEnable: false,
        price: "$999",
        quantity: 1,
        productPointed: "notPointed",
        category: "electronics"
      },
      {
        image: Images3,
        name: "Cloth - Suite",
        buyEnable: false,
        price: "$10",
        quantity: 1,
        productPointed: "notPointed",
        category: "clothing"
      },
      {
        image: Images4,
        name: "Fasttrack Watch",
        buyEnable: false,
        price: "$200",
        quantity: 1,
        productPointed: "notPointed",
        category: "watch"
      },
      {
        image: Images5,
        name: "Leather Cloth",
        buyEnable: false,
        price: "$999",
        quantity: 1,
        productPointed: "notPointed",
        category: "clothing"
      },
      {
        image: Images6,
        name: "Iphone13 Pro",
        buyEnable: false,
        price: "$100",
        quantity: 1,
        productPointed: "notPointed",
        category: "electronics"
      },
      {
        image: Images7,
        name: "Rolex Watch",
        buyEnable: false,
        price: "$450",
        quantity: 1,
        productPointed: "notPointed",
        category: "watch"
      },{
        image: Images8,
        name: "Sneakers Shoe",
        buyEnable: false,
        price: "$200",
        quantity: 1,
        productPointed: "notPointed",
        category: "shoes"
      },
      {
        image: Images9,
        name: "White Sneakers",
        buyEnable: false,
        price: "$999",
        quantity: 1,
        productPointed: "notPointed",
        category: "shoes"
      },
      {
        image: Images10,
        name: "Macbook Lite",
        buyEnable: false,
        price: "$999",
        quantity: 1,
        productPointed: "notPointed",
        category: "electronics"
      },
      {
        image: Images11,
        name: "Cotton Cloth",
        buyEnable: false,
        price: "$999",
        quantity: 1,
        productPointed: "notPointed",
        category: "clothing"
      },
      {
        image: Images6,
        name: "Iphone11",
        buyEnable: false,
        price: "$999",
        quantity: 1,
        productPointed: "notPointed",
        category: "electronics"
      }
    ],
    cartList: [],
    categoryFilter : [],
    cartItems: 0
  }),
  actions: {
    addToCartList(product) {
      let flag = true;
      this.cartItems += product.quantity
      for(let index = 0 ; index < this.cartList.length ; index++)
      {
        if(this.cartList[index].name === product.name)
        {
          flag = false;
          this.cartList[index].quantity += product.quantity
          this.cartList[index].tempQuantity += product.quantity
        }
      }
      if(flag){
        let newProduct = {...product}
        newProduct["tempQuantity"] = product.quantity
        this.cartList.push(newProduct)
      }
      console.log(product.quantity)
      console.log(this.cartList , this.cartItems);
    },
    removeFromCartList(product){
      let index = this.cartList.indexOf(product)
      this.cartList.splice(index,1)
      if(this.cartItems >= product.quantity)
      this.cartItems -= product.quantity
      else{
        this.cartItems = 0
      }
    },
    decrementCartItems(quantity){
      if(this.cartItems-quantity > -1)
        this.cartItems -= quantity;
    },
    cartListClear(){
      this.cartItems = 0
      this.cartList = []
    },
    getFilterPorduct(checkList){
      console.log(checkList)
      if(checkList.length == 0)
      {
        this.productDetails = this.productDetailsOriginal
      }
      else{
        let newProductList = []
        for(let index = 0 ; index < this.productDetailsOriginal.length ; index++)
        {
          if(checkList[this.productDetailsOriginal[index].category])
          {
            newProductList.push(this.productDetailsOriginal[index])
          }
        }
        if(newProductList.length == 0)
        this.productDetails = this.productDetailsOriginal
        else
        this.productDetails = newProductList
      }
    }
  },
});


//   async getTextData ({ query }) {
    //     return testAPI.getDataByAPI(query)
    //       .then(res => {
    //         this.text = res.body.data.text
    //         return res
    //       })
    //   },
    //   async postTextData (data) {
    //     testAPI.postDataViaAPI(data)
    //       .then(res => {
    //         this.postText = res.body.data.text
    //         this.texts = res.body.data.list
    //         console.log(this.postText)
    //         console.log(this.texts)
    //         return res
    //       })
    //   }