import { Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';
import { UserModel } from './user.model';
export declare class AuthService {
    private blogRepository;
    constructor(blogRepository: Repository<UserModel>);
    createUser(dto: AuthDto): Promise<void>;
    findUser(email: string): Promise<UserModel>;
    validateUser(email: string, password: string): Promise<Pick<UserModel, 'email'>>;
}
