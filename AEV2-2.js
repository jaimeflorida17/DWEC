dataArray=[2,5,7,3,8,4];

let sumatotal=dataArray.reduce(function(acumulador, recorre){
    return acumulador+recorre;
}, 0);

const promedio=sumatotal/dataArray.length;

console.log(promedio);