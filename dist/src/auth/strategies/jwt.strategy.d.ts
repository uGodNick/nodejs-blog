import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserModel } from '../user.model';
declare const JwtStratagy_base: new (...args: any[]) => Strategy;
export declare class JwtStratagy extends JwtStratagy_base {
    private configService;
    constructor(configService: ConfigService);
    validate({ email }: Pick<UserModel, 'email'>): Promise<string>;
}
export {};
