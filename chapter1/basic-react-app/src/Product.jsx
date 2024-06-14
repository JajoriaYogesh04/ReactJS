import Title from "./Title";
import { Description } from "./Description";
import "./Product.css"

// function Product(){
//     return(
//         <div className="Product">
//             <Title></Title>
//             <Description></Description>
//         </div>
//     )
// }

// function Product(props){
//     // console.log(props)
//     return(
//         <div className="Product">
//             <h1>{props.Title}</h1>
//         </div>
//     )
// }

// function Product({Title, price=1, features, features2={}, options, options2={}}){
//     // console.log(features)
//     return(
//         <div className="Product">
//             <h1>{Title}</h1>
//             <h3>Price: {price}</h3>
//             <p>{features}</p>
//             <p>{features2.b}</p>
//             <p>{options}</p>
//             <p>{options2.a}</p>
//         </div>
//     )
// }

function Product({Title, price=1, features, features2=[]}){
    // const list= features2.map((feature) => <li>{feature}</li>);
    // console.log(features)
    return(
        <div className="Product">
            <h1>{Title}</h1>
            <h3>Price: {price}</h3>
            <p>{features}</p>
            <p>{features2.map((feature) => <li>{feature}</li>)}</p>
        </div>
    )
}

export default Product;

