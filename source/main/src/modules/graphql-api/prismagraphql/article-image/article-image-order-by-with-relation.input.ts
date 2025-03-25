import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleOrderByWithRelationInput } from '../article/article-order-by-with-relation.input';

@InputType()
export class ArticleImageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    articleId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ArticleOrderByWithRelationInput, {nullable:true})
    article?: ArticleOrderByWithRelationInput;
}
