import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AdminGuard } from './admin.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(AdminGuard)
  @Get('verify')
  verify(@Req() req) {
    return { user: req.user || true };
  }
}
