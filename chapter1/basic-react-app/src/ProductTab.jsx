import Product from "./Product"
import "./Product.css"

// function ProductTab(){
//     let features=["Hi-Tech", "Durable", "Nice Quality"];
//     let features2={a:"Hi-Tech", b:"Durable", c:"Nice Quality"};
//     return(
//         <>
//             <Product Title="Phone" price="40000" features={features} ></Product>
//             <Product Title="Laptop" price={90000} features2={features2}></Product>
//             <Product Title="Watch" options={["Hi-Tech", "Durable"]}></Product>
//             <Product Title="Watch" options2={{a:"Hi-Tech", b:"Durable"}}></Product>
//         </>
//     )
// }

// function ProductTab(){
//     let features=[<li>"Hi-Tech"</li>, <li>"Durable"</li>, <li>"Nice Quality"</li>];
//     let features2=["Hi-Tech", "Durable", "Nice Quality"];
//     return(
//         <>
//             <Product Title="Phone" price="40000" features={features} ></Product>
//             <Product Title="Laptop" price={90000} features2={features2}></Product>
//         </>
//     )
// }

// function ProductTab(){
//     return(
//         <>
//             <Product Title="Phone" price={40000}></Product>
//             <Product Title="Laptop" price={90000}></Product>
//         </>
//     )
// }

function ProductTab(){
    let features={a: [<li>8,000 DPI</li>, <li>5 Programmanle Buttons</li>],
                  b: [<li>Intuitive touch surface</li>, <li>Designed for ipad Pro</li>],
                  c: [<li>Intuitive touch surface</li>, <li>Designed for ipad Pro</li>],
                  d: [<li>Wireless Mouse 2.4GHz</li>, <li>Optical Orientation</li>],
    };
    return(
        <div className="ProductTab">
            <Product title="Logitech MX Master 3S" features={features.a} oldPrice={12495} newPrice={8999}></Product>
            <Product title="Apple Pencil(2nd Gen)" features={features.b} oldPrice={11900} newPrice={9199}></Product>
            <Product title="Zebronics Zeb-Transformer" features={features.c} oldPrice={1599} newPrice={899}></Product>
            <Product title="Protronics Toad 23 Wireless Mouse" features={features.d} oldPrice={599} newPrice={278}></Product>
        </div>
    )
}

export default ProductTab;