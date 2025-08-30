import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers['authorization'] || '';
    const token = authHeader.split(' ')[1];
    const payload = token ? this.auth.validateToken(token) : null;
    if (payload && payload.role === 'admin') {
      req.user = payload;
      return true;
    }
    return false;
  }
}
