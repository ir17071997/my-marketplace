import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnalyticsRecord, MetricType } from './analytics.entity';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(AnalyticsRecord)
    private repo: Repository<AnalyticsRecord>,
  ) {}

  async record(type: MetricType, data: any): Promise<AnalyticsRecord> {
    const rec = this.repo.create({ type, data });
    return this.repo.save(rec);
  }

  async findAll(type?: MetricType): Promise<AnalyticsRecord[]> {
    return this.repo.find(type ? { where: { type } } : {});
  }
}