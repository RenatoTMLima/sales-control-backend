import { MigrationInterface, QueryRunner } from 'typeorm';

export class Sales1614474042144 implements MigrationInterface {
  name = 'Sales1614474042144';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "sale" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "seats" integer NOT NULL, "value" real NOT NULL, "saleDate" character varying NOT NULL, CONSTRAINT "PK_d03891c457cbcd22974732b5de2" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "sale"`);
  }
}
