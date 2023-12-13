import image from "@/assets/images/tree-logo.jpg";
export default{
    data(){
        return{
            buyPath:'',
            productDetails: [
                {
                image,
                name: "Iphone",
                buyEnable: false,
                price: "$450",
                },
                {
                image,
                name: "Macbook",
                buyEnable: false,
                price: "$999",
                },
                {
                image,
                name: "Tab",
                buyEnable: false,
                price: "$100",
                },
                {
                image,
                name: "Watch",
                buyEnable: false,
                price: "$200",
                },
            ]
        }
    },computed: {
        filterSubmit() {
          alert(" Filter Applied");
          //Api can be Invoked
        },
        productName: {
          get(index, fieldName) {
            // common get function to collect all fiedls of productDetails
            return this.productDetails[index][fieldName];
          },
          set(newValue, fieldName, index) {
            // common set function to update all fields of prodcutDetails
            this.productDetails[index][fieldName] = newValue;
          },
        },
        isAlive() {
          // isActive = this.category || this.product || this.price,
          // return this.isActive && !this.error,
          return this.category || this.product || this.price;
        },
      },
      methods: {
        say(message) {
          alert(message);
        },
        mouseover(index) {
          this.productDetails[index].buyEnable = true;
        },
        mouseleave(index) {
          this.productDetails[index].buyEnable = false;
        },
        addToCart(name) {
          alert("Product " + name + " added to Cart");
        },
      },
}