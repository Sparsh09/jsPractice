function printSingleFullRow(n) {
  var str = "";
  for (var i = 0; i < n; i++) {
    str += "*";
  }
  console.log(str);
}

function printFirstAndLastStart(n) {
  var str = "";
  for (var i = 0; i < n - 2; i++) {
    str += "*";
    str += " ".repeat(n - 2);
    str += "*";
    console.log(str);
    str = "";
  }
}

function starryPattern(n) {
  printSingleFullRow(n);
  printFirstAndLastStart(n);
  printSingleFullRow(n);
}

starryPattern(10);

function count(first, last) {
  var sum = 0;
  for (i = first; i <= last; i++) {
    sum += i;
  }
  return sum;
}

setTimeout(() => {
  console.log("10 seconds has passed");
}, 10 * 1000);

var answer = count(1, 10000);
console.log(answer);

var counter = 0;
function printCounter() {
  console.clear();
  console.log(counter);
  counter += 1;
}

// setInterval(printCounter, 1 * 1000);

function n() {
  return "sparsh";
}

var student = {
  name: function () {
    return "sparsh";
  },
};

console.log(student.name);

// anagram code

a = "sparsh";
b = "sparsh";

function returnUpdatedString(value) {
  return value.split("").join(" ");
}
function isAnagram() {
  if (returnUpdatedString(a) === returnUpdatedString(b)) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram());
// console.log(a.split(''))
