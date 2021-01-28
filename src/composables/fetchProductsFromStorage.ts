export default function fetchProducts(){
    interface Product {
        name: string;
        description: string;
        squareImage: string;
        verticalImage: string;
        price: number;
      }
  
      let products: Array<Product>;
  
      if (window && window.localStorage) {
        const rawProducts = window.localStorage.getItem("products") || "";
        products = JSON.parse(rawProducts).data as Array<Product> || [];
      } else {
        products = [];
      }
  
      return {
        products
      };
  }