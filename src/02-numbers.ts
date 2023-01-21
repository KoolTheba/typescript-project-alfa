// IIFE for running...
// npx tsc --watch
// node dist/02-numbers.js
(() => {
  // inference - no mistakes
  let productPrice = 100;
  productPrice = 12
  console.log('product price', productPrice);

  // explicit - mistakes but permissive
  let customerAge: number = 28;
  // ts allows you to compile despite trying to sum string + number
  customerAge =  customerAge  + 1; // 281
  console.log('customer age', customerAge);

  // explicit - mistakes on declaration
  let productInStock: number;
  console.log('product in stock', productInStock);
  if(productInStock > 10){
    console.log('Enough stock');
  }

  // inference - applying number method to string
  let discount = parseInt('assasas');
  console.log('discount', discount);

  // dont type with Number object
  const myNumber: Number = 10
})();
