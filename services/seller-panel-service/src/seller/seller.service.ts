import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SellerProduct } from './seller.entity';

@Injectable()
export class SellerService {
  constructor(
    @InjectRepository(SellerProduct)
    private repo: Repository<SellerProduct>,
  ) {}

  create(userId: string, title: string, price: number): Promise<SellerProduct> {
    const p = this.repo.create({ userId, title, price });
    return this.repo.save(p);
  }

  findAll(userId: string): Promise<SellerProduct[]> {
    return this.repo.find({ where: { userId } });
  }

  async update(id: string, attrs: Partial<Pick<SellerProduct,'title'|'price'>>): Promise<SellerProduct> {
    const p = await this.repo.findOne(id);
    if (!p) throw new NotFoundException();
    Object.assign(p, attrs);
    return this.repo.save(p);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}