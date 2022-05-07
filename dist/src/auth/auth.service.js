"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const bcryptjs_1 = require("bcryptjs");
const typeorm_2 = require("typeorm");
const auth_constants_1 = require("./auth.constants");
const user_model_1 = require("./user.model");
let AuthService = class AuthService {
    constructor(blogRepository, jwtService) {
        this.blogRepository = blogRepository;
        this.jwtService = jwtService;
    }
    async createUser(dto) {
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const newUser = {
            email: dto.login,
            passwordHash: await (0, bcryptjs_1.hash)(dto.password, salt),
        };
        this.blogRepository.save(newUser);
    }
    async findUser(email) {
        const user = await this.blogRepository.findOne({
            email: email,
        });
        return user;
    }
    async validateUser(email, password) {
        const user = await this.findUser(email);
        const isCorrectPassword = await (0, bcryptjs_1.compare)(password, user.passwordHash);
        if (!user) {
            throw new common_1.UnauthorizedException(auth_constants_1.USER_NOT_FOUND_ERROR);
        }
        if (!isCorrectPassword) {
            throw new common_1.UnauthorizedException(auth_constants_1.WRONG_PASSWORD_ERROR);
        }
        return { email: user.email };
    }
    async login(email) {
        const payload = { email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_model_1.UserModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map