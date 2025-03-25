import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTypes } from './role-types.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumRoleTypesNullableFilter } from './nested-enum-role-types-nullable-filter.input';

@InputType()
export class NestedEnumRoleTypesNullableWithAggregatesFilter {

    @Field(() => RoleTypes, {nullable:true})
    equals?: `${RoleTypes}`;

    @Field(() => [RoleTypes], {nullable:true})
    in?: Array<`${RoleTypes}`>;

    @Field(() => [RoleTypes], {nullable:true})
    notIn?: Array<`${RoleTypes}`>;

    @Field(() => NestedEnumRoleTypesNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRoleTypesNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumRoleTypesNullableFilter, {nullable:true})
    _min?: NestedEnumRoleTypesNullableFilter;

    @Field(() => NestedEnumRoleTypesNullableFilter, {nullable:true})
    _max?: NestedEnumRoleTypesNullableFilter;
}
