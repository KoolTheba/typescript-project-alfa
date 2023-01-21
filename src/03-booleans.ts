// IIFE for running...
// npx tsc --watch
// node dist/03-booleans.js
(() => {
  // inference
  let isEnable = true;
  isEnable = 'as';
  isEnable = 123;
  isEnable = false

  // explicit
  let isDisable: boolean = false;
  console.log('is disable', isDisable);

  // inference - boolean mistakes within a tertiary
  const randomNumber = Math.random();
  console.log('random number', randomNumber);
  isDisable = randomNumber >= 0.5 ? 'mistake' : 'false'
})();
