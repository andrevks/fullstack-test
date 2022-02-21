import { getRepository, Repository } from "typeorm";
import { Product } from "./entities/Product";

interface ICreateProductDTO {
  name: string;
  category: string;
  price: number;
}

interface IProductRepository {
  findByName(name: string): Promise<Product>;
  read(): Promise<Product[]>;
  create({ name, category, price }: ICreateProductDTO): Promise<void>;
}

class ProductRepository implements IProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async create({ name, category, price }: ICreateProductDTO): Promise<void> {
    const product = this.repository.create({
      name,
      category,
      price,
    });

    await this.repository.save(product);
  }

  async read(): Promise<Product[]> {
    const products = await this.repository.find();

    // console.log(products);
    return products;
  }

  async findByName(name: string): Promise<Product> {
    const product = await this.repository.findOne({ name });
    console.log(`Product found: ${product}`);
    return product;
  }
}

export { ProductRepository };
