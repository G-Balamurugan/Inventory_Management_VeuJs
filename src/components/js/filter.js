import { mapActions, mapState, mapWritableState } from "pinia";
import { getAllProducts } from "@/stores/product-list-store.js";
export default{
    data()
    {
        return {
            electronic:false,
            cloths:false,
            shoe:false,
            watches:false,
            checkBoxList:[{values:"electronics" , 
                            display:"ELectronics"},
                            {values:"clothing" , 
                            display:"Clothing"},
                            {values:"shoes"  , 
                            display:"Shoes" },
                            {values:"watch" , 
                            display:"Watch"}],
            category: false,
            product: false,
            price: false
        }
    },
    computed: {
        ...mapState(getAllProducts, ["productDetails", "cartList" , "categoryFilter"]),
      },
      methods: {
        ...mapActions(getAllProducts, ["addToCartList" , "getFilterPorduct"]),
        filterProducts() {
            let checkList = {
                "electronics" : this.electronic,
                "clothing" : this.cloths,
                "shoes" : this.shoe,
                "watch"  : this.watches
            }
            // if(this.electronic) checkList.push("electronics")
            // if(this.cloths) checkList.push("clothing")
            // if(this.shoe) checkList.push("shoes")
            // if(this.watches) checkList.push("watch")

            this.getFilterPorduct(checkList)
        }
      },
      mounted() {
        console.log(this.$refs.watchRef)
      },
      watch: {
        electronic(newValue , oldValue){
            this.filterProducts()
            if(newValue)
            {
                console.log("Hi - "+newValue)
            }
            else{
                console.log("Hello - "+newValue)
            }
        },
        cloths(){
            this.filterProducts()
        },shoe(){
            this.filterProducts()
        },watches(){
            this.filterProducts()
        }
      }
}