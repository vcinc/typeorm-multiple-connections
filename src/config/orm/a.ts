import * as path from 'path';
import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'mariadb',
  name: process.env.A_NAME,
  host: process.env.A_HOST,
  database: 'test-db-a',
  username: process.env.A_USERNAME || 'root',
  password: process.env.A_PASSWORD,
  port: Number(process.env.A_PORT) || 3306,
  entities: path
    .resolve(__dirname, '..', '..')
    .concat(process.env.A_ENTITIES)
    .split(' '),
  migrations: path
    .resolve(__dirname, '..', '..')
    .concat(process.env.A_MIGRATIONS)
    .split(' '),
  migrationsRun: true,
  timezone: 'Z',

  // ! Never use synchronize in production
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV !== 'production',

  cli: {
    entitiesDir: 'src/api/v1/services',
    migrationsDir: 'src/migrations',
  },
};

export = config;