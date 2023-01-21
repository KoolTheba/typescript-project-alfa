// IIFE for running...
// npx tsc --watch
// node dist/05-arrays.js
(() => {
  let prices = [23, 56, 90]
  prices.push('table')
  prices.push(true)
  prices.tables = 100

  // mixed array explicit
  let mixedArray: (number | string | boolean | Object)[] = ['hola', true]
  mixedArray.push(12)
  mixedArray.push('as')
  mixedArray.push(true)
  mixedArray.push({})
  mixedArray.push([])

  // using array methods without mistakes
  let numbers = [1,2,3,4,5,6]
  numbers.map(item => item*2)

  // using array methods with mistakes
  let numbersAndStringArray = [1,2,3,4,5,6, 'as']
  numbersAndStringArray.map(item => item*2)
})();
