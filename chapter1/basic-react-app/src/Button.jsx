function printHello(event){
    console.log("HELLO!");
    console.log(event)
}

function printBye(){
    console.log("BYE!");
}

function handleMouseOver(){
    console.log("VERY GOOD");
}

function handleKeyPress(){
    console.log("Key Pressed")
}

function Button(){
    return(
        <>
            <button onClick={printHello} >Hello</button>
            <br /><br />
            <button onClick={printBye}>Bye</button>
            <br /><br />
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui nisi fugiat, eveniet at laboriosam porro? Dicta dolorum sunt beatae necessitatibus adipisci accusamus quia enim at. Dolor facere officiis perferendis.</p>
            <br /><br />
            <button onKeyDown={handleKeyPress}>Key press</button>
        </>
    )
}

export default Button