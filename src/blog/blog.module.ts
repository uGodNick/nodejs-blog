import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './blog.controller';
import { BlogModel } from './blog.model';
import { BlogService } from './blog.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogModel])],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
