import "./Product.css"

function Price({oldPrice, newPrice}){
    let oldStyle={textDecorationLine: "line-through"}
    return(
        <div className="Price">
            <p style={oldStyle}>{oldPrice}</p>
            <p>{newPrice}</p>
        </div>
    )
}

export default Price;