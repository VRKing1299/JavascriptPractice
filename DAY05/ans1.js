let num = 12345;
let total = 0;

while (num > 0) {
  total = total + (num % 10);
  num = parseInt(num / 10);
}

console.log("total sum of digits is : " + total);
