// IIFE for running...
// npx tsc --watch
// node dist/12-objects.js
(() => {
  // example using objects as attributes
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  }
  login({
    email: 'example@example.io',
    password: '12344321**'
  })

  // example 2
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }
  const products: Product[] = []

  const addProduct = (data: Product) => products.push(data)

  addProduct({
    title: 'P1',
    createdAt: new Date(1995, 1, 1),
    stock: 13,
    size: 'S'
  })

  addProduct({
    title: 'P2',
    createdAt: new Date(1995, 10, 10),
    stock: 13
  })

  console.log('PRODUCTS', products);
})();
