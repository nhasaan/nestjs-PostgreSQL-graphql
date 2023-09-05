import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableEnumRoleTypesFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-types-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CommentUncheckedUpdateManyWithoutUserNestedInput } from '../comment/comment-unchecked-update-many-without-user-nested.input';
import { LikeUncheckedUpdateManyWithoutUserNestedInput } from '../like/like-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userRoleId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userStatus?: StringFieldUpdateOperationsInput;

    @Field(() => NullableEnumRoleTypesFieldUpdateOperationsInput, {nullable:true})
    roleType?: NullableEnumRoleTypesFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => LikeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput;
}
