const numbers = [21, 23, 43, 54, 76, 77, 12, 432, 98, 5656, 342, 234, 454, 56, 868];
const newNums = numbers.sort(function (a, b) {
    return a - b;
});
console.log(newNums);
