import { Repository } from 'typeorm';
import { BlogModel } from './blog.model';
import { CreateBlogDto } from './dto/create-blog.dto';
export declare class BlogService {
    private blogRepository;
    constructor(blogRepository: Repository<BlogModel>);
    create(dto: CreateBlogDto): Promise<void>;
    getLast(): Promise<BlogModel>;
    deleteById(id: number): Promise<void>;
    save(dto: BlogModel): Promise<void>;
}
