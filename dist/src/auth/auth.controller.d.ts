import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: AuthDto): Promise<void>;
    login(dto: AuthDto): Promise<{
        access_token: string;
    }>;
}
