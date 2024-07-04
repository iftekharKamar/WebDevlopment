import "./Product.css";

function Product({title,price,features}){
    const list=features?features.map((feature)=><li>{feature}</li>):[];
    return <div className="product">
        <h4>{title}</h4>
        <p>{price}</p>
        <p>{list}</p>
    </div>
}

// function Product(userNmae,color){
//     console.log(textColor);
//     console.log(userNmae);
//       return <div>
//         <h1>{userNmae}</h1>
//         <h2 style={textColor ={color}}>Hello</h2>
//       </div>

// }


export default Product;