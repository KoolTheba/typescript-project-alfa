// IIFE for running...
// npx tsc --watch
// node dist/11-return.js
(() => {
  const numbers = [1,2,3,4,5]

  // example 1
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += item
    });
    return total
  }
  const result = calcTotal(numbers)
  console.log(result);

  // example 2 - no return function
  const printTotal = (prices: number[]): void => {
    const total = calcTotal(prices)
    console.log(`Total: ${total}`);
  }
  printTotal(numbers)

})();
