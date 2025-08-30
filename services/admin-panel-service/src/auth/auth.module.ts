import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminGuard } from './admin.guard';

@Module({
  providers: [AuthService, AdminGuard],
  controllers: [AuthController],
  exports: [AdminGuard],
})
export class AuthModule {}
