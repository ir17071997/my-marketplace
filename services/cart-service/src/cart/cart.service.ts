import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from './cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartItem)
    private cartRepository: Repository<CartItem>,
  ) {}

  findAll(userId: string): Promise<CartItem[]> {
    return this.cartRepository.find({ where: { userId } });
  }

  add(userId: string, productId: string, quantity: number): Promise<CartItem> {
    const item = this.cartRepository.create({ userId, productId, quantity });
    return this.cartRepository.save(item);
  }

  remove(id: string): Promise<void> {
    return this.cartRepository.delete(id).then(() => undefined);
  }
}