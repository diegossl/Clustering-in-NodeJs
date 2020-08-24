const isPrime = (num) => {
  let quantityDividers = 0
  for (let i = 1; i <= num; i++) {
    if(num % i == 0) {
      quantityDividers++
    }
  }
  if (quantityDividers == 2) {
    return true
  }
  return false
}

let quantityPrimeNumbers = 0
let timeBefore = Date.now()
for (let index = 1; index <= 100000; index++) {
  if (isPrime(index)) {
    quantityPrimeNumbers++
  }
}
let timeAfter = Date.now()

console.log(`It took ${timeAfter - timeBefore}ms`)
console.log(`There are ${quantityPrimeNumbers} prime numbers`)