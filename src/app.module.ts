import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { ConfigModule, ConfigService } from 'nestjs-config';
import * as path from 'path';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.load(
      path.resolve(__dirname, 'config', '**', '!(*.d).{ts,js}'),
      {
        path: path.resolve(process.cwd(), !ENV ? '.env' : `.env.${ENV}`),
      },
    ),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('a'),
      inject: [ConfigService],
      name: 'connectionA',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('b'),
      inject: [ConfigService],
      name: 'connectionB',
    }),
    UserModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
