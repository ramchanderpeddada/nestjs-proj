import { CoffeeRefactor1676620119421 } from 'src/migrations/1676620119421-CoffeeRefactor';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'nestjs_typeorm',
  entities: [],
  migrations: [CoffeeRefactor1676620119421],
});
