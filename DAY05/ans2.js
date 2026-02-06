let arr = ["a", "e", "i", "o", "u"];
let ch = "a";

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == ch) {
    console.log(ch + " is a vowel");
    break;
  }
}
