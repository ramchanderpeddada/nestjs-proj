import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1676620119421 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE 'coffee' CHANGE COLUMN name TO title`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE 'coffee' CHANGE COLUMN title TO name`);
  }
}

//error in query why?