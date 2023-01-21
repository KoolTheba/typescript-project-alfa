// IIFE for running...
// npx tsc --watch
// node dist/04-strings.js
(() => {
  let productName = 'tables'
  productName = 'plastic tables'
  console.log('product name', productName);

  const productPrice = 100;
  const summary = `
    name: ${productName}
    description: tables made of plastic
    price: ${productPrice}
  `
  console.log('product summary', summary);
})();
