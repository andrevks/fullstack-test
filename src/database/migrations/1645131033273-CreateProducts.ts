import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1645131033273 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "product",
          columns: [
            {
              name: "id",
              type: "int",
              isPrimary: true
            },
            {
              name: "name",
              type: "varchar",
            },
            {
              name: "category",
              type: "varchar",
            },
            {
              name: "price",
              type: "decimal"
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            }
          ],
        }
        )
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("product");
    }

}