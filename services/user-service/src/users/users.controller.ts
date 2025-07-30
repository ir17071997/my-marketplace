import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserRole } from './user.entity';

class CreateUserDto {
  email: string;
  password: string;
  role?: UserRole;
}

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const { email, password, role } = createUserDto;
    return this.usersService.createUser(email, password, role);
  }
}