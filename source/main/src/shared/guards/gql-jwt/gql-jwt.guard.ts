import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '@shared/services/user.service'

@Injectable()
export class GqlJWTGuard extends AuthGuard('jwt') {
  private readonly logger = new Logger(GqlJWTGuard.name);

  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Create GraphQL execution context
    const ctx = GqlExecutionContext.create(context);
    const { request } = ctx.getContext();

    // Extract token from Authorization header
    const authHeader = request.headers?.authorization;
    if (!authHeader) {
      this.logger.warn('Missing authorization header');
      throw new UnauthorizedException('Missing authorization header');
    }

    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) {
      this.logger.warn('Invalid authorization format');
      throw new UnauthorizedException('Invalid authorization format');
    }

    try {
      // Verify JWT token
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      if (!payload.sub) {
        throw new UnauthorizedException('Invalid token payload');
      }

      // Get user with permissions
      const userData = await this.userService.findFirst({
        where: { id: { equals: Number(payload.sub) } },
        include: { role: { include: { permissions: true } } },
      });

      if (!userData) {
        throw new UnauthorizedException('User not found');
      }

      // Attach user to request object
      request.user = userData;
      return true;
    } catch (error) {
      this.logger.error(`Authentication failed: ${error.message}`);
      throw new UnauthorizedException('Authentication failed');
    }
  }
}
