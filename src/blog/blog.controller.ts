import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { BlogModel } from './blog.model';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateBlogDto) {
    this.blogService.create(dto);
  }

  @Get('last')
  async get() {
    return this.blogService.getLast();
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    this.blogService.deleteById(id);
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Patch('update')
  async patch(@Body() dto: BlogModel) {
    this.blogService.save(dto);
  }
}
