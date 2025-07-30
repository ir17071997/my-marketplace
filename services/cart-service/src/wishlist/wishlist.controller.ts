import { Controller, Get, Post, Delete, Query, Param, Body } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistItem } from './wishlist.entity';

class AddWishlistDto {
  userId: string;
  productId: string;
}

@Controller('wishlist')
export class WishlistController {
  constructor(private wishlistService: WishlistService) {}

  @Get()
  findAll(@Query('userId') userId: string): Promise<WishlistItem[]> {
    return this.wishlistService.findAll(userId);
  }

  @Post()
  add(@Body() dto: AddWishlistDto): Promise<WishlistItem> {
    const { userId, productId } = dto;
    return this.wishlistService.add(userId, productId);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.wishlistService.remove(id);
  }
}