// IIFE for running...
// npx tsc --watch
// node dist/10-functions.js
(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  // example 1
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ){
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
  const product1 = createProductToJson('P1', new Date(), 12, 'XL')
  console.log('PRODUCT 1', product1);
  console.log('PRODUCT title', product1.title);

  // example 2
  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes //optional variable but you get errors if added other than Sizes value or undefined
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product2 = createProductToJsonV2('P1', new Date(), 12)
  console.log('PRODUCT 1', product2);
  console.log('PRODUCT title', product2.title);
})();
