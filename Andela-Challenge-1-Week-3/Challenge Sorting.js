function arraySort(anArray){
    if(Array.isArray(anArray)){
        let result={ evens:[], odds:[], chars:[]}
    for (let index = 0; index < array.length; index++) {
        const element = array[index];    
    }
        if(anArray[index]% 2 === 0){result.evens .push(anArray[index]);}
        else if (anArray[index]%2 ===! 0){result.odds .push(anArray[index]);}
        else {result.chars .push(anArray[index])};
}

result.evens.sort();
result.odds.sort();
result.chars.sort();
return result;
}
else {
    return "invalid input"
}
module.exports=arraySort;
