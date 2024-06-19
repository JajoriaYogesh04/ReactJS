

function getLotnum(n){
    let arr= new Array(n);
    for(let i=0; i<n;i++){
        arr[i]= Math.floor(Math.random()*10);
    }
    // console.log(arr);
    return arr;
}

function sumArr(numArr){
    let sum= numArr.reduce((acc, curr)=>{
        return acc+curr
    }, 0);
    // console.log(sum);
    return sum;
}


export {getLotnum, sumArr};