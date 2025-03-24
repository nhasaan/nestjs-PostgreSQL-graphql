import { Module } from "@nestjs/common";
import { LikeService } from "@shared/services/like.service";
import { PrismaService } from "@/prisma.service";
import { ArticleService } from "@shared/services/article.service";
import { CategoryService } from "@shared/services/category.service";
import { CommentService } from "@shared/services/comment.service";
import { PermissionService } from "@shared/services/permission.service";
import { RoleService } from "@shared/services/role.service";
import { UserService } from "@shared/services/user.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '2days' },
    }),
  ],
  providers: [
    PrismaService,
    UserService,
    ArticleService,
    CategoryService,
    CommentService,
    LikeService,
    PermissionService,
    RoleService,
  ],
  exports: [
    PrismaService,
    UserService,
    ArticleService,
    CategoryService,
    CommentService,
    LikeService,
    PermissionService,
    RoleService,
  ],
})
export class SharedModule {}
