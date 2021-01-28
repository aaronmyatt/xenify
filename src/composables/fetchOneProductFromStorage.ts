import fetchProducts from './fetchProductsFromStorage';

export default function fetchOneProduct(id: number){
    const products = fetchProducts().products;
    const product = products[id]
    return {
      product
    }
  }