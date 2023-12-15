import { mapActions, mapState, mapWritableState } from "pinia";
import { getAllProducts } from "@/stores/product-list-store.js";
export default {
  data() {
    return {
      productName: "",
      productPrice: "",
      productStock: "",
      productCategory: "",
    };
  },
  computed: {
    ...mapState(getAllProducts, ["productDetails", "cartList", "list"]),
  },
  methods: {
    ...mapActions(getAllProducts, [
      "addToCartList",
      "GET_ALL_PRODUCTS",
      "CREATE_PRODUCT",
    ]),
    submitForm() {
      if (
        this.productName == "" ||
        this.productPrice == "" ||
        this.productStock == "" ||
        this.productCategory == ""
      ) {
        alert("Enter all fields ..!");
        return;
      } else if (this.productPrice <= 0 || this.productStock <= 0) {
        alert("Price and Stock can only be Positive");
        return;
      }
      console.log("category: ", this.category);
      const productRequest = {
        id: 1,
        name: this.productName,
        price: this.productPrice,
        quantity: this.productStock,
        category: this.productCategory,
      };
      console.log("this.cartRequest: ", this.productRequest);

      const actions = {
        payload: productRequest,
      };
      this.CREATE_PRODUCT(actions);
      alert("product created");
      console.log("this.productRequest: ", this.productRequest);
      this.$router.push("/");
    },
  },
};
