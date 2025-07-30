import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecommendationLog, RecommendationType } from './recommendation.entity';

@Injectable()
export class RecommendationsService {
  constructor(
    @InjectRepository(RecommendationLog)
    private repo: Repository<RecommendationLog>,
  ) {}

  async log(
    userId: string,
    type: RecommendationType,
    results: any,
  ): Promise<RecommendationLog> {
    const entry = this.repo.create({ userId, type, results });
    return this.repo.save(entry);
  }

  findAll(userId: string): Promise<RecommendationLog[]> {
    return this.repo.find({ where: { userId } });
  }
}