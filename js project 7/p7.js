// let arr = [5, 6, 2, 1, 101, 3];

// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });

// console.log(output);

// let marks = [97, 98, 96, 95, 44, 66, 55, 77, 88, 33, 99, 88, 90, 91, 92, 93, 94]

// let toppers = marks.filter((val) => {
//     return val > 90;
// });

// console.log(toppers);



// let n = prompt("enter a number : ");
// let arr = [];

// for (let i = 1; i <= n; i++){
//     arr[i - 1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// })
// console.log("sum = ", sum);
// let factorial = arr.reduce((res, curr) => {
//     return res * curr;
// })
// console.log("factorial = ",factorial);


// let P = document.querySelector("P");
// P.innerText = P.innerText + "Avinash Welcome to this world";

let divs = document.querySelectorAll(".box");

let idx = 1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`
    idx++;
}