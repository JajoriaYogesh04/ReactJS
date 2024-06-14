import Product from "./Product"

function ProductTab(){
    return(
        <>
            <Product Title="Phone" price="40000"></Product>
            <Product Title="Laptop" price={90000}></Product>
            <Product Title="Watch"></Product>
        </>
    )
}

export default ProductTab;