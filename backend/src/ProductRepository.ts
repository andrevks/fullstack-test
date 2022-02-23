import { DeleteResult, getRepository, Repository } from "typeorm";
import { Product } from "./entities/Product";

interface ICreateProductDTO {
  name: string;
  category: string;
  price: number;
}

interface IUpdateProductDTO {
  id: number;
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

  async update({
    id,
    name,
    category,
    price,
  }: IUpdateProductDTO): Promise<void> {
    const product = this.repository.create({
      id,
      name,
      category,
      price,
    });

    await this.repository.save(product);
  }

  async delete(id: number): Promise<DeleteResult> {
    const product = await this.repository.delete({ id });
    return product;
  }

  async read(): Promise<Product[]> {
    const products = await this.repository.find();
    return products;
  }

  async findById(id: number): Promise<Product> {
    const product = await this.repository.findOne({ id });
    return product;
  }

  async findByName(name: string): Promise<Product> {
    const product = await this.repository.findOne({ name });
    return product;
  }
}

export { ProductRepository };
