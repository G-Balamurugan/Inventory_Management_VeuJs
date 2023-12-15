import { mapActions, mapState, mapWritableState } from "pinia";
import { getAllProducts } from "@/stores/product-list-store.js";
import Images1 from "@/assets/images/iphone1.jpg";

export default{
    data() {
        return {
          pointCard : "notPointed",
          image : Images1
        };
      },
    computed: {
        ...mapState(getAllProducts, ["productDetails", "cartList" ,"cartItems"]),
    },   
    methods: {
        ...mapActions(getAllProducts, ["removeFromCartList","cartListClear","CREATE_ORDER","ADD_PRODUCT"]),
        mouseOver(index) {
          this.cartList[index].productPointed = "pointed"
        },
        mouseLeave(index) {
          this.cartList[index].productPointed = "notPointed" 
        },
        increaseQuantity(index) {
          if(this.cartList[index].quantity < this.cartList[index].stock)
          {
            this.cartList[index].quantity++;
            this.cartList[index].tempQuantity++;
          }
          else{
            alert("Out Of Stock")
          }
        },
        decreaseQuantity(index) {
          this.cartList[index].tempQuantity--;
          if(this.cartList[index].tempQuantity == 0)
          this.removeFromCartList(this.cartList[index])       //Empty hence can be removed
        },
        cartRemove(product) {
          this.removeFromCartList(product);
          alert("Item "+product.name+" Removed From Cart")
        },
        clearCart()
        {
          this.cartListClear();
        },

        placeOrder() {
                    console.log(this.cart)
                  const cartRequest = {
                    "customerId":4,
                    "shippingAddress":"27e... cbe",
                    "productVoList" : this.cartList
                }
                  const actions = {
                      "payload" : cartRequest
                  }
                  this.CREATE_ORDER(actions)
        
            this.clearCart()
            this.$router.push("/")
        }
      },   
}
