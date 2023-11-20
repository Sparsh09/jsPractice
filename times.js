function calculateTime(n) {
  sum = 0;
  time = new Date();
  for (var i = 1; i < n; i++) {
    sum += i;
  }
  console.log(sum);
  return (new Date() - time) * 0.1;
}

console.log(calculateTime(100));
console.log(calculateTime(1000));
console.log(calculateTime(10000));
console.log(calculateTime(100000));
console.log(calculateTime(1000000));
