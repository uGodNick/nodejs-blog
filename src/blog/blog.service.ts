import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogModel } from './blog.model';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogModel)
    private blogRepository: Repository<BlogModel>,
  ) {}

  async create(dto: CreateBlogDto): Promise<void> {
    this.blogRepository.save(dto);
  }

  async getById(id: number): Promise<BlogModel> {
    return this.blogRepository.findOne(id);
  }

  async deleteById(id: number): Promise<void> {
    await this.blogRepository.delete(id);
  }

  async save(dto: BlogModel): Promise<void> {
    const blogToUpdate = await this.getById(dto.id);

    blogToUpdate.authorEmail = dto.authorEmail;
    blogToUpdate.createdDateUtc = dto.createdDateUtc;
    blogToUpdate.message = dto.message;

    await this.blogRepository.save(blogToUpdate);
  }
}
