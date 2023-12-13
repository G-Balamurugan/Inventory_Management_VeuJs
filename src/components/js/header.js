import image from '@/assets/images/tree-logo.jpg'
export default{
    data() {
        return {
          
            image,
            loginPath:"",
            cartPath:"",
            accountPath:"",
            signIn:"",
            searchMessage:''
        }
    },
    computed:
    {
        loginAlert()
        {
        alert("Login Page")
        },
        cartAlert()
        {
        alert("Cart Page")
        },
        accountAlert()
        {
        alert("Account Page")
        }
    },
    props:['title'],
    emits:['clicked-the-header']
}