// const square = function(x){
//     return x*x;
// };

// // const squareArrow = (x) => {
// //     return x*x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

const firstName = (name) => {
    return name.split(' ')[0];
};

const surName = (surname) => surname.split(' ')[1];

console.log(firstName("John Heplinger"), surName("John Heplinger"));