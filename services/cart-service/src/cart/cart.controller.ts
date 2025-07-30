import { Controller, Get, Post, Delete, Query, Param, Body } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartItem } from './cart.entity';

class AddCartDto {
  userId: string;
  productId: string;
  quantity: number;
}

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Get()
  findAll(@Query('userId') userId: string): Promise<CartItem[]> {
    return this.cartService.findAll(userId);
  }

  @Post()
  add(@Body() dto: AddCartDto): Promise<CartItem> {
    const { userId, productId, quantity } = dto;
    return this.cartService.add(userId, productId, quantity);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.cartService.remove(id);
  }
}