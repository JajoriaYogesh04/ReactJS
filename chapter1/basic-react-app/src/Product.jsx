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

function Product({Title, price=1}){
    // console.log(props)
    return(
        <div className="Product">
            <h1>{Title}</h1>
            <h3>Price: {price}</h3>
        </div>
    )
}

export default Product;

