const add = (a, b) => {
    return a + b;
};
console.log(add(55,1));

const user = {
    name: "Ivan",
    cities: ["Skopje", "Athens", "Sofia"],
    printPlacesLived(){
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    arrayTemp: [10, 20 ,30],
    multiplyBy: 3,
    multiply(){
        return this.arrayTemp.map((item) => item * this.multiplyBy);
    }
}

console.log(multiplier.multiply());