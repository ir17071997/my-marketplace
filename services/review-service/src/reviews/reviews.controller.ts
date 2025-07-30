import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { Review, ReviewStatus } from './review.entity';

class CreateReviewDto {
  userId: string;
  rating: number;
  productId?: string;
  sellerId?: string;
  comment?: string;
}

class UpdateReviewDto {
  rating?: number;
  comment?: string;
  status?: ReviewStatus;
}

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Get()
  findAll(): Promise<Review[]> {
    return this.reviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Review> {
    return this.reviewsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateReviewDto): Promise<Review> {
    const { userId, rating, productId, sellerId, comment } = dto;
    return this.reviewsService.create(userId, rating, productId, sellerId, comment);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateReviewDto,
  ): Promise<Review> {
    return this.reviewsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.reviewsService.remove(id);
  }
}