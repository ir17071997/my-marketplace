import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WishlistItem } from './wishlist.entity';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(WishlistItem)
    private wishlistRepository: Repository<WishlistItem>,
  ) {}

  findAll(userId: string): Promise<WishlistItem[]> {
    return this.wishlistRepository.find({ where: { userId } });
  }

  add(userId: string, productId: string): Promise<WishlistItem> {
    const item = this.wishlistRepository.create({ userId, productId });
    return this.wishlistRepository.save(item);
  }

  remove(id: string): Promise<void> {
    return this.wishlistRepository.delete(id).then(() => undefined);
  }
}