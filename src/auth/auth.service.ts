import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { genSalt, hash, compare } from 'bcryptjs';
import { Repository } from 'typeorm';
import { USER_NOT_FOUND_ERROR, WRONG_PASSWORD_ERROR } from './auth.constants';
import { AuthDto } from './dto/auth.dto';
import { UserDto } from './dto/user.dto';
import { UserModel } from './user.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserModel)
    private blogRepository: Repository<UserModel>,
    private jwtService: JwtService,
  ) {}

  async createUser(dto: AuthDto) {
    const salt = await genSalt(10);
    const newUser: UserDto = {
      email: dto.login,
      passwordHash: await hash(dto.password, salt),
    };

    this.blogRepository.save(newUser);
  }

  async findUser(email: string) {
    const user = await this.blogRepository.findOne({
      email: email,
    });

    return user;
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Pick<UserModel, 'email'>> {
    const user = await this.findUser(email);
    const isCorrectPassword = await compare(password, user.passwordHash);

    if (!user) {
      throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
    }
    if (!isCorrectPassword) {
      throw new UnauthorizedException(WRONG_PASSWORD_ERROR);
    }

    return { email: user.email };
  }

  async login(email: string) {
    const payload = { email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
