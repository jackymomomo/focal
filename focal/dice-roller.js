let num = process.argv[2];
let arr = []
let rolled

function dice(num) {
  for (let i = 0; i < num; i++) {
    rolled = Math.ceil(Math.random() * 6);
    arr.push(rolled);
  }
  return arr;
}
function output(num) {
  let result = '';
  const numbers = dice(num);
  for (let i = 0; i < numbers.length - 1; i++) {
    result += numbers[i] + ',' + ' '
  }
  return result + numbers[numbers.length - 1];
}

console.log(`Rolled ${num} dice: ${output(num)} `)