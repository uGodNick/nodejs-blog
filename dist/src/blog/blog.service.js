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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const blog_model_1 = require("./blog.model");
let BlogService = class BlogService {
    constructor(blogRepository) {
        this.blogRepository = blogRepository;
    }
    async create(dto) {
        this.blogRepository.save(dto);
    }
    async getLast() {
        return this.blogRepository.findOne({ order: { id: 'DESC' } });
    }
    async deleteById(id) {
        await this.blogRepository.delete(id);
    }
    async save(dto) {
        const blogToUpdate = await this.blogRepository.findOne(dto.id);
        blogToUpdate.message = dto.message;
        await this.blogRepository.save(blogToUpdate);
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blog_model_1.BlogModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map