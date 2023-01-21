// IIFE for running...
// npx tsc --watch
// node dist/07-union.js
(() => {
  // union types
  let userId: string | number;
  userId = 12123456
  userId = 'tebagomez'

  // TS handles dynamically both types in the function
  function greeting(myText: string | number) {
    if(typeof myText === 'string'){
      console.log(`string method ${myText.toLowerCase()}`);
    } else {
      console.log(`number method ${myText.toFixed(1)}`);
    }
  }
  greeting('gomezteba')
  greeting(345612121)
  greeting(null) // shouts the mistake
})();
