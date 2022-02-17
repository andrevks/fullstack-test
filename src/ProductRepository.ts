import { Product } from "./model/Product";

interface ICreateProductDTO {
  name: string;
  category: string;
  price: number;
} 

class ProductRepository {
  private product: Product[];

  constructor() {
    this.product = [ {
        "name": "Macbook",
        "category": "computer",
        "price": 7000,
        "created_at": new Date("2022-02-17T16:17:14.067Z")
    }];
  }


  create({ name, category, price }: ICreateProductDTO ): void {
    const product = new Product();
    
    Object.assign(product, {
      name,
      category,
      price,
      created_at: new Date()
    });

    this.product.push(product);

  }

  list(): Product[] {
    return this.product;
  }

  findByName(name: string): Product {
    const product = this.product.find((product) => product.name === name);
    return product;
  }

}


export { ProductRepository }