import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './auth/user.model';
import { AuthModule } from './auth/auth.module';
import { BlogModel } from './blog/blog.model';
import { BlogModule } from './blog/blog.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..'),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'sqlite',
        database: 'db/blog.db',
        entities: [BlogModel, UserModel],
        autoLoadEntities: true,
      }),
    }),
    AuthModule,
    BlogModule,
  ],
})
export class AppModule {}
