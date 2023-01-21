import { Product } from './product.model'

export const products: Product[] = [];

export const addProduct = (data: Product) => products.push(data)

export const calcStock = (): number => {
  let total = 0;
  products.forEach((prod) => {
    total += prod.stock
  })

  return total
}
