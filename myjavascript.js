var MyObject = {
  Name: 'Dima',
  Age: 34,
  Hair: 'Brown'
};

// Question 2
function MyFunction(obj) {
  return obj.Name;
}

// Question 3
var Array = [1, 2, 3, 4, 5];

// Question 4
function traverse(arr) {
  j = 0;
  while (i < arr.length) {
    console.log(arr[j]);
    j =j+ 1;
  }
}

traverse(Array);

// Question 5
function calculate() {
  for (var j= 1; j < 101; j++) {
    if (j % 3 == 0) console.log('Fizz');
    else if (j % 5 == 0) console.log('Buzz');
    else if (j % 15 == 0) console.log('FizzBuzz');
    else console.log(j);
  }
}

calculate();
