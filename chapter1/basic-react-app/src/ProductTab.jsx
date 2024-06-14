import Product from "./Product"

function ProductTab(){
    let features=["Hi-Tech", "Durable", "Nice Quality"];
    let features2={a:"Hi-Tech", b:"Durable", c:"Nice Quality"};
    return(
        <>
            <Product Title="Phone" price="40000" features={features} ></Product>
            <Product Title="Laptop" price={90000} features2={features2}></Product>
            <Product Title="Watch" options={["Hi-Tech", "Durable"]}></Product>
            <Product Title="Watch" options2={{a:"Hi-Tech", b:"Durable"}}></Product>
        </>
    )
}

export default ProductTab;