users=["Manolo", "Paco", "Juan", "Antonio", "Magda"];
blacklisted=["Juan", "Magda"];


function theGoods(listafinal){
    const index = -1
    return blacklisted.indexOf(listafinal) === index;
}

console.log(users.filter(theGoods));
