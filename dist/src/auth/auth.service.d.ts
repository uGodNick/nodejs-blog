import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';
import { UserModel } from './user.model';
export declare class AuthService {
    private blogRepository;
    private jwtService;
    constructor(blogRepository: Repository<UserModel>, jwtService: JwtService);
    createUser(dto: AuthDto): Promise<void>;
    findUser(email: string): Promise<UserModel>;
    validateUser(email: string, password: string): Promise<Pick<UserModel, 'email'>>;
    login(email: string): Promise<{
        access_token: string;
    }>;
}
