import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTypes } from './role-types.enum';

@InputType()
export class NestedEnumRoleTypesNullableFilter {

    @Field(() => RoleTypes, {nullable:true})
    equals?: `${RoleTypes}`;

    @Field(() => [RoleTypes], {nullable:true})
    in?: Array<`${RoleTypes}`>;

    @Field(() => [RoleTypes], {nullable:true})
    notIn?: Array<`${RoleTypes}`>;

    @Field(() => NestedEnumRoleTypesNullableFilter, {nullable:true})
    not?: NestedEnumRoleTypesNullableFilter;
}
