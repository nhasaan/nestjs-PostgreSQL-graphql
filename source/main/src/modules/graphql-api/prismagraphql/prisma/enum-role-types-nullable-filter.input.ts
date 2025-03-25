import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTypes } from './role-types.enum';
import { NestedEnumRoleTypesNullableFilter } from './nested-enum-role-types-nullable-filter.input';

@InputType()
export class EnumRoleTypesNullableFilter {

    @Field(() => RoleTypes, {nullable:true})
    equals?: `${RoleTypes}`;

    @Field(() => [RoleTypes], {nullable:true})
    in?: Array<`${RoleTypes}`>;

    @Field(() => [RoleTypes], {nullable:true})
    notIn?: Array<`${RoleTypes}`>;

    @Field(() => NestedEnumRoleTypesNullableFilter, {nullable:true})
    not?: NestedEnumRoleTypesNullableFilter;
}
