import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTypes } from './role-types.enum';
import { NestedEnumRoleTypesWithAggregatesFilter } from './nested-enum-role-types-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRoleTypesFilter } from './nested-enum-role-types-filter.input';

@InputType()
export class EnumRoleTypesWithAggregatesFilter {

    @Field(() => RoleTypes, {nullable:true})
    equals?: `${RoleTypes}`;

    @Field(() => [RoleTypes], {nullable:true})
    in?: Array<`${RoleTypes}`>;

    @Field(() => [RoleTypes], {nullable:true})
    notIn?: Array<`${RoleTypes}`>;

    @Field(() => NestedEnumRoleTypesWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRoleTypesWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumRoleTypesFilter, {nullable:true})
    _min?: NestedEnumRoleTypesFilter;

    @Field(() => NestedEnumRoleTypesFilter, {nullable:true})
    _max?: NestedEnumRoleTypesFilter;
}
