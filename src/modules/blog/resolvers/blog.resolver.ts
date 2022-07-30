import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlogService } from '../services/blog.service';
import { Blog } from '../objects/blog.object';
import { CreateBlogInput } from '../dto/create-blog.input';
import { query } from 'express';


@Resolver(() => Blog)
export class BlogResolver {
  constructor(private readonly blogService: BlogService) {}

  @Query(() => [Blog])
  blogs() {
    return this.blogService.findAll();
  }

  @Mutation(() => Blog)
  createBlog(
    @Args('input')
    createBlogInput: CreateBlogInput,
  ) {
    return this.blogService.create(createBlogInput);
  }

@Query(() => Blog)
getBlog(
  @Args('id') _id: string
){
  return this.blogService.findOne(_id)
}

@Mutation(() => Blog)
deleteBlog(
  @Args('id') _id: string
){
  return this.blogService.delete(_id)
}
  // @TODO: Create mutation for create Blog
  // @TODO: Create a query to get all blogs
  // @TODO: Create a query to get blog by its id
}
