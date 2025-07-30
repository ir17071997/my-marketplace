import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store, StoreStatus } from './store.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private storesRepository: Repository<Store>,
  ) {}

  create(name: string, description: string, logoUrl: string): Promise<Store> {
    const store = this.storesRepository.create({ name, description, logoUrl });
    return this.storesRepository.save(store);
  }

  findAll(): Promise<Store[]> {
    return this.storesRepository.find();
  }

  async findOne(id: string): Promise<Store> {
    const store = await this.storesRepository.findOne({ where: { id } });
    if (!store) {
      throw new NotFoundException(`Store with id ${id} not found`);
    }
    return store;
  }

  async update(
    id: string,
    attrs: Partial<Pick<Store, 'name' | 'description' | 'logoUrl' | 'status'>>,
  ): Promise<Store> {
    const store = await this.findOne(id);
    Object.assign(store, attrs);
    return this.storesRepository.save(store);
  }

  async remove(id: string): Promise<void> {
    const result = await this.storesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Store with id ${id} not found`);
    }
  }
}