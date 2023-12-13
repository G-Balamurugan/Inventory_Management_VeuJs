export default{
    data()
    {
        return {
            category: false,
            product: false,
            price: false
        }
    },
    computed: {
        filterSubmit() {
          alert(" Filter Applied");
          //Api can be Invoked
        }, isAlive() {
            // isActive = this.category || this.product || this.price,
            // return this.isActive && !this.error,
            return this.category || this.product || this.price;
          }
    }
}