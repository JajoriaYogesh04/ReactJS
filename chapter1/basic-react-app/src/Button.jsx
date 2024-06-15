function printHello(){
    console.log("HELLO!");
}

function printBye(){
    console.log("BYE!");
}

function Button(){
    return(
        <>
            <button onClick={printHello}>Hello</button>
            <br /><br />
            <button onClick={printBye}>Bye</button>
        </>
    )
}

export default Button