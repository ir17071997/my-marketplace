import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review, ReviewStatus } from './review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
  ) {}

  create(
    userId: string,
    rating: number,
    productId?: string,
    sellerId?: string,
    comment?: string,
  ): Promise<Review> {
    const review = this.reviewsRepository.create({ userId, rating, productId, sellerId, comment });
    return this.reviewsRepository.save(review);
  }

  findAll(): Promise<Review[]> {
    return this.reviewsRepository.find();
  }

  async findOne(id: string): Promise<Review> {
    const review = await this.reviewsRepository.findOne({ where: { id } });
    if (!review) {
      throw new NotFoundException(`Review with id ${id} not found`);
    }
    return review;
  }

  async update(
    id: string,
    attrs: Partial<Pick<Review, 'rating' | 'comment' | 'status'>>,
  ): Promise<Review> {
    const review = await this.findOne(id);
    Object.assign(review, attrs);
    return this.reviewsRepository.save(review);
  }

  async remove(id: string): Promise<void> {
    const result = await this.reviewsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Review with id ${id} not found`);
    }
  }
}