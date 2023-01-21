// IIFE for running...
// npx tsc --watch
// node dist/09-null.js
(() => {
  // undefined and null are not strings or numbers; they have their own types :)
  let myNumber: number = undefined;
  let myString: string = null;
  let myNull: null = null
  let myUndefined: undefined = undefined

  let myNullNumber: number | null = null
  myNullNumber = 12

  let myUndefinedString: string | undefined = undefined
  myUndefinedString = 'teba'

  function sayHi(name: string | null) {
    let hello = 'Hi';
    if(name){
      return `${hello} ${name}`
    } else {
      return `${hello} nobody`
    }
  }
  console.log(sayHi('Teba'))
  console.log(sayHi(null))

  // cleaner with optional chaining
  function sayGoodBye(name: string | null){
    let bye = 'Bye ';
    return bye += name?.toLowerCase() || 'nobody';
  }
  console.log(sayGoodBye('STRANGER'))
  console.log(sayGoodBye(null))
})();
