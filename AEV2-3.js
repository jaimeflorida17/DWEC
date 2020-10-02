values=[2,4,5,2,7];

let minimvalue=values.reduce(function(minimo, recorre){
    return Math.min(minimo, recorre);
})

console.log(minimvalue);