import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StoresService } from './stores.service';
import { Store, StoreStatus } from './store.entity';

class CreateStoreDto {
  name: string;
  description?: string;
  logoUrl?: string;
}

class UpdateStoreDto {
  name?: string;
  description?: string;
  logoUrl?: string;
  status?: StoreStatus;
}

@Controller('stores')
export class StoresController {
  constructor(private storesService: StoresService) {}

  @Get()
  findAll(): Promise<Store[]> {
    return this.storesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Store> {
    return this.storesService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateStoreDto): Promise<Store> {
    const { name, description, logoUrl } = dto;
    return this.storesService.create(name, description, logoUrl);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateStoreDto): Promise<Store> {
    return this.storesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.storesService.remove(id);
  }
}