function sumTo(n) {
  let sum = 1;
  for (i = 1; i < n; i++) {
    sum += i + 1;
  }
  return sum;
}

console.log(sumTo(100));
