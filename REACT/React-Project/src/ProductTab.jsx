import Product from "./Product.jsx"


function ProductTab(){
    let option =["hitech","durable"];
    return <>
        <Product title="phone" price={10000} features ={option}/>
        <Product title="Laptop" price={100000}/>
        <Product title="Laptop" price={100000}/>
    </>
} 

export default ProductTab;