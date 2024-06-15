

function Counter(){
    let count = 0;

    function increaseCount(){
        count+=1;
        console.log(count)
    }
    return(
        <>
            <h1>count = {count}</h1>
            <button onClick={increaseCount}>Increase Count</button>        
        </>
    )
}

export default Counter