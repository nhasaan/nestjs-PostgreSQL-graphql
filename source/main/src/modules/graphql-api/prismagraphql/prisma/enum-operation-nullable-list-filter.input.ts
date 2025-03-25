import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Operation } from './operation.enum';

@InputType()
export class EnumOperationNullableListFilter {

    @Field(() => [Operation], {nullable:true})
    equals?: Array<`${Operation}`>;

    @Field(() => Operation, {nullable:true})
    has?: `${Operation}`;

    @Field(() => [Operation], {nullable:true})
    hasEvery?: Array<`${Operation}`>;

    @Field(() => [Operation], {nullable:true})
    hasSome?: Array<`${Operation}`>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
