import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { resolve } from 'path';
import 'dotenv/config';

class DatabaseConfigService {
  getTypeormConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [resolve(__dirname, '..', '**', 'models', '*.model.ts')],
      migrations: [
        resolve(__dirname, '..', 'shared', 'database', 'migrations', '*.ts'),
      ],
      cli: {
        migrationsDir: './src/shared/database/migrations',
      },
    };
  }
}

const databaseConfigService = new DatabaseConfigService();

export default databaseConfigService;
