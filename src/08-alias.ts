// IIFE for running...
// npx tsc --watch
// node dist/08-alias.js
(() => {
  // create your alias type with the reserved word *type*
  type UserID = string | number;
  let userId: UserID;

  // literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Sizes
  shirtSize = 'S'
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'
  shirtSize = 'XXL'
  shirtSize = 's'

  function greeting(userId: UserID, size: Sizes) {
    if(typeof userId === 'string'){
      console.log(`string method ${userId.toLowerCase()}`);
    } else {
      console.log(`number method ${userId.toFixed(1)}`);
    }
  }

  greeting(11, 'M')
  greeting(true, 'M') // TS knows your mistake :)
})();
