import { CreateBlogInput } from '../dto/create-blog.input';
import { MongoDbService } from '../../../database/mongo-db.service';
import { Collection, Document } from 'mongodb';
import { Blog } from '../objects/blog.object';
export declare class BlogService {
    collection: Collection<Document>;
    constructor(mongoDbService: MongoDbService);
    findAll(): Promise<Blog[]>;
    create(createBlogInput: CreateBlogInput): Promise<Blog>;
    findOne(_id: string): Promise<import("mongodb").WithId<Document>>;
    delete(_id: string): Promise<string>;
}
