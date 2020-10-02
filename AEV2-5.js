values=[6,9,4,3,5];

function multipleFactorial(number) {
    if(number<=1){
       return 1;

}else{
        return number*multipleFactorial(number-1);
    }
}
    console.log(values.map(multipleFactorial));