// Exercise 1:
const foods = [];
console.log(foods);

// Exercise 2:
foods.push("pizza", "cheeseburger")
console.log(foods);

// Exercise 3:
foods.unshift("taco");
console.log(foods);

// Exercise 4:
let favFood = foods[1];
console.log(favFood);

// Exercise 5:
foods.splice(2, 0, "tofu")
console.log(foods);

// Exercise 6:
foods.splice(1, 1, "sushi", "cupcake")
console.log(foods);

// Exercise 7:
let yummy = foods.slice(1, 3)
console.log(yummy);

// Exercise 8:
let soyIdx = foods.indexOf("tofu");
console.log(soyIdx);

// Exercise 9:
let allFoods = foods.join(" -> ")
console.log(allFoods);

// Exercise 10:
let hasSoup = foods.includes("soup");
console.log(hasSoup);

// Exercise 11:
const odds = [];
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

for(let i=0; i<nums.length; i++) {
  if (nums[i]%2==1) {
    odds.push(nums[i]);
  }
}

console.log(odds);

// Exercise 12:
const fizz = [], buzz = [], fizzbuzz = [];

for (number of nums) {
  if (number%3==0) {
    fizz.push(number);
  }

  if (number%5==0) {
    buzz.push(number);
  }

  if (fizz.includes(number) && buzz.includes(number)) {
    fizzbuzz.push(number);
  }
}

console.log(`Fizz: ${fizz}`);
console.log(`Buzz: ${buzz}`);
console.log(`Fizzbuzz: ${fizzbuzz}`);

// Exercise 13:
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

let numList = numArrays[numArrays.length-1]
console.log(numList);

let num = numArrays[2][1];
console.log(num);

// Exercise 14:
let total = 0;

for(let i=0; i<numArrays.length; i++) {
  for(let j=0; j<numArrays[i].length; j++) {
    total+=numArrays[i][j];
  }
}

console.log(total);