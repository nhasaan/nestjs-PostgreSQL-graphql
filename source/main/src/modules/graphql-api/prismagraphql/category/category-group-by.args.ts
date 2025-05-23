import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { CategoryOrderByWithAggregationInput } from './category-order-by-with-aggregation.input';
import { CategoryScalarFieldEnum } from './category-scalar-field.enum';
import { CategoryScalarWhereWithAggregatesInput } from './category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CategoryCountAggregateInput } from './category-count-aggregate.input';
import { CategoryAvgAggregateInput } from './category-avg-aggregate.input';
import { CategorySumAggregateInput } from './category-sum-aggregate.input';
import { CategoryMinAggregateInput } from './category-min-aggregate.input';
import { CategoryMaxAggregateInput } from './category-max-aggregate.input';

@ArgsType()
export class CategoryGroupByArgs {

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;

    @Field(() => [CategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithAggregationInput>;

    @Field(() => [CategoryScalarFieldEnum], {nullable:false})
    by!: Array<`${CategoryScalarFieldEnum}`>;

    @Field(() => CategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: CategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CategoryCountAggregateInput, {nullable:true})
    _count?: CategoryCountAggregateInput;

    @Field(() => CategoryAvgAggregateInput, {nullable:true})
    _avg?: CategoryAvgAggregateInput;

    @Field(() => CategorySumAggregateInput, {nullable:true})
    _sum?: CategorySumAggregateInput;

    @Field(() => CategoryMinAggregateInput, {nullable:true})
    _min?: CategoryMinAggregateInput;

    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    _max?: CategoryMaxAggregateInput;
}
