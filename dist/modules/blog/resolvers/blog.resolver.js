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
exports.BlogResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const blog_service_1 = require("../services/blog.service");
const blog_object_1 = require("../objects/blog.object");
const create_blog_input_1 = require("../dto/create-blog.input");
let BlogResolver = class BlogResolver {
    constructor(blogService) {
        this.blogService = blogService;
    }
    blogs() {
        return this.blogService.findAll();
    }
    createBlog(createBlogInput) {
        return this.blogService.create(createBlogInput);
    }
    getBlog(_id) {
        return this.blogService.findOne(_id);
    }
    deleteBlog(_id) {
        return this.blogService.delete(_id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [blog_object_1.Blog]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogResolver.prototype, "blogs", null);
__decorate([
    (0, graphql_1.Mutation)(() => blog_object_1.Blog),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blog_input_1.CreateBlogInput]),
    __metadata("design:returntype", void 0)
], BlogResolver.prototype, "createBlog", null);
__decorate([
    (0, graphql_1.Query)(() => blog_object_1.Blog),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogResolver.prototype, "getBlog", null);
__decorate([
    (0, graphql_1.Mutation)(() => blog_object_1.Blog),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogResolver.prototype, "deleteBlog", null);
BlogResolver = __decorate([
    (0, graphql_1.Resolver)(() => blog_object_1.Blog),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogResolver);
exports.BlogResolver = BlogResolver;
//# sourceMappingURL=blog.resolver.js.map