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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const mongo_db_service_1 = require("../../../database/mongo-db.service");
const blog_object_1 = require("../objects/blog.object");
const uuid = require("uuid");
let BlogService = class BlogService {
    constructor(mongoDbService) {
        this.collection = mongoDbService.db.collection('blog');
    }
    async findAll() {
        const data = await this.collection.find().toArray();
        console.log(data);
        return data.map((entity) => new blog_object_1.Blog(entity));
    }
    async create(createBlogInput) {
        const data = Object.assign(Object.assign({}, createBlogInput), { _id: uuid.v4() });
        await this.collection.insertOne(data);
        return new blog_object_1.Blog(data);
    }
    async findOne(_id) {
        const data = await this.collection.findOne({ _id });
        console.log(data);
        return data;
    }
    async delete(_id) {
        const data = await this.collection.deleteOne({ _id });
        return "delete successfully";
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mongo_db_service_1.MongoDbService])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map