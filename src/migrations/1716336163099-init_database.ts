import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1716336163099 implements MigrationInterface {
    name = 'InitDatabase1716336163099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text NOT NULL DEFAULT '', CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "posts"`);
    }

}
