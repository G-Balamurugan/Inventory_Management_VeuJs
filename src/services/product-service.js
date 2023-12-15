const baseUrl = "http://localhost:8089/httpmethod"
const getAllProductsList = () => {
    const url = baseUrl + "/product/list"
    return fetch(url)
}

const createOrder = (orderDetails) => {
    fetch("http://localhost:8089/httpmethod/customer/purchase",{
        method:"POST",
        body:JSON.stringify(orderDetails),
        headers:{
            "Content-Type" : "application/json"
        },
        mode:'cors'
 
    })
}

const createProduct = (productDetails) => {
    fetch("http://localhost:8089/httpmethod/add",{
        method:"POST",
        body:JSON.stringify(productDetails),
        headers:{
            "Content-Type" : "application/json"
        },
        mode:'cors'
 
    })
}

const updateProduct = (productInfo , id) => {
    fetch("http://localhost:8089/httpmethod/product/update/" + id ,{
        method:"PUT",
        body:JSON.stringify(productInfo),
        headers:{
            "Content-Type" : "application/json"
        },
        mode:'cors'
    })
}

export default {
    getAllProductsList,
    createOrder,
    // addProduct,
    updateProduct,
    createProduct
}