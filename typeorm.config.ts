import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type:'postgres',
    host: 'monorail.proxy.rlwy.net', 
    port: 20955, 
    username: 'postgres', 
    password: 'IfJQGdHJDmdcQLoVYjRSzJYTobQAMctj',
    database: 'railway', 
    synchronize: false,
    entities: ['src/**/*.entity.ts'],
    migrations: ['./src/migrations/*.ts'],
});