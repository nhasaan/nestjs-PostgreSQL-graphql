import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';

@InputType()
export class ArticleScalarRelationFilter {

    @Field(() => ArticleWhereInput, {nullable:true})
    is?: ArticleWhereInput;

    @Field(() => ArticleWhereInput, {nullable:true})
    isNot?: ArticleWhereInput;
}
