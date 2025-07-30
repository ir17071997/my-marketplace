import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerProduct } from './seller.entity';

class CreateDto {
  userId: string;
  title: string;
  price: number;
}

class UpdateDto {
  title?: string;
  price?: number;
}

@Controller('seller')
export class SellerController {
  constructor(private svc: SellerService) {}

  @Get('products')
  findAll(@Query('userId') userId: string): Promise<SellerProduct[]> {
    return this.svc.findAll(userId);
  }

  @Post('products')
  create(@Body() dto: CreateDto): Promise<SellerProduct> {
    return this.svc.create(dto.userId, dto.title, dto.price);
  }

  @Put('products/:id')
  update(@Param('id') id: string, @Body() dto: UpdateDto): Promise<SellerProduct> {
    return this.svc.update(id, dto);
  }

  @Delete('products/:id')
  remove(@Param('id') id: string): Promise<void> {
    return this.svc.remove(id);
  }
}