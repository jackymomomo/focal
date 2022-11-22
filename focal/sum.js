const sums = process.argv;
let newArg = sums.slice(2);
let added = 0;

for (let i = 0; i < newArg.length; i++) {
  added += parseInt(newArg[i]);

}

console.log('the sum is', added);


