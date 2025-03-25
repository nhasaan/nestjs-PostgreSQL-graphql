import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Operation } from '../prisma/operation.enum';

@InputType()
export class PermissionUpdateallowedOperationsInput {

    @Field(() => [Operation], {nullable:true})
    set?: Array<`${Operation}`>;

    @Field(() => [Operation], {nullable:true})
    push?: Array<`${Operation}`>;
}
