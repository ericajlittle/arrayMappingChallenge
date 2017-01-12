// var a = { x: 3, y: 4 };


// var answer = 5;

// function getZ (obj) {
//   // sqrt((x * x) + (y * y))

//   console.log("obj is:", obj);
//   console.log("a is:", a);

//   return Math.sqrt((obj.x * obj.x) + (obj.y * obj.y))
// }

// console.log(getZ(a) === answer)
// console.log(getZ({ x: 12, y: 5 }) === 13)

////////




var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

 // using .map function which loops through each
 //  key in the input object which squares x and y adds them then returns the new value as divisible by itself so prints out true
 //  use Math.sqrt
var result = input.map(function(currentValue) {
  return Math.sqrt(currentValue.x * currentValue.x + currentValue.y * currentValue.y)
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);