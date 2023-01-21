import {addProduct, calcStock, products} from './product.service'

addProduct({
  title: 'P1',
  createdAt: new Date(1995, 1, 1),
  stock: 13,
  size: 'S'
})

addProduct({
  title: 'P2',
  createdAt: new Date(1995, 10, 10),
  stock: 6
})

console.log('PRODUCTS', products);
console.log('STOCK', calcStock());

