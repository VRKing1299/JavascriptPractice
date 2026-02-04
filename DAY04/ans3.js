let num = 12345;
let rev = "";

while (num > 0) {
  rev = rev + (num % 10);
  num = parseInt(num / 10);
}

console.log("reverse number is " + rev);
