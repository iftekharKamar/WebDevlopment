import Product from "./Product.jsx"


function ProductTab(){
    let option=["Iftekhar","Tufail","Fuzail"];
    return (<div>
        <Product title="phone" price={10000} features={option} />
        <Product title="laptop" price={100000} features={option}/>
    </div>
    )
} 

export default ProductTab;