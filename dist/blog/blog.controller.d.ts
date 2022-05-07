import { BlogModel } from './blog.model';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
export declare class BlogController {
    private blogService;
    constructor(blogService: BlogService);
    create(dto: CreateBlogDto): Promise<void>;
    get(id: number): Promise<BlogModel>;
    delete(id: number): Promise<void>;
    patch(dto: BlogModel): Promise<void>;
}
