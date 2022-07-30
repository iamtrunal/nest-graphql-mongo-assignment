import { BlogService } from '../services/blog.service';
import { Blog } from '../objects/blog.object';
import { CreateBlogInput } from '../dto/create-blog.input';
export declare class BlogResolver {
    private readonly blogService;
    constructor(blogService: BlogService);
    blogs(): Promise<Blog[]>;
    createBlog(createBlogInput: CreateBlogInput): Promise<Blog>;
    getBlog(_id: string): Promise<import("mongodb").WithId<import("bson").Document>>;
    deleteBlog(_id: string): Promise<string>;
}
