import * as path from 'path';
import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'mariadb',
  name: process.env.B_NAME,
  host: process.env.B_HOST,
  database: 'test-db-b',
  username: process.env.B_USERNAME || 'root',
  password: process.env.B_PASSWORD,
  port: Number(process.env.B_PORT) || 3306,
  entities: path
    .resolve(__dirname, '..', '..')
    .concat(process.env.B_ENTITIES)
    .split(' '),
  migrations: path
    .resolve(__dirname, '..', '..')
    .concat(process.env.B_MIGRATIONS)
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
