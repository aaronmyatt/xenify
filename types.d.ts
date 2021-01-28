interface Product {
    name: string;
    description: string;
    squareImage: string;
    verticalImage: string;
    price: number;
}

type Cart = Array<Array<Product>>;
