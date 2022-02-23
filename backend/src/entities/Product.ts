import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('product')
class Product {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  price: number;

  @CreateDateColumn()
  created_at: Date

}


export { Product }