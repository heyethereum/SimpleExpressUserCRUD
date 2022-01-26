let x = 5;
var y = 6;

var z = x + y;
console.log("hello world! " + z);

if (x > 18) {
  console.log("Eligible for moderna and Pfizer");
} else {
  console.log("Eligible for Pfizer only");
}

var year = 2022;

is_leap_year = (year) => {
  if (year % 400 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  } else {
    return false;
  }
};

console.log(is_leap_year(year));

function A(x, Y) {
  // x==12; Y ==B;  Y is a callback function
  console.log("Received value: %s", x);
  Y(x); // B(12)
}
function B(c) {
  // c== 12;
  console.log(2 * c); //24
}

A(12, B);
// normal function
function A(a) {
  console.log(a);
}
// anonymous function
A = function (a) {
  console.log(a);
};
// Arrow function
A = (a) => {
  console.log(a);
};

function print(x, power) {
  console.log("Value of x:", x);
  power(x);
}

function square(a) {
  console.log("Square:", a * a);
}

function cube(a) {
  console.log("Cube:", a * a * a);
}

print(2, cube);

let names = ["alex", "jon", "victor", "yy", "yc"];

names.forEach((name) => {
  console.log("Hi, %s!", name);
});

let numbers = [1, 2, 3, 4, 5, 6];
product = 1;

numbers.forEach((x) => {
  product = product * x;
});

console.log("Product: %s, 2 x Product: %s", product, product * 2);

let info = {
  first_name: "Piggy",
  last_name: "Inu",
  school: "NUS Computing",
};

console.log(info.first_name);
console.log(info["school"]);

console.log(info["last_name"]);
