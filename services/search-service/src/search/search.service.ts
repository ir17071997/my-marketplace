import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchLog } from './search.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(SearchLog)
    private repo: Repository<SearchLog>,
  ) {}

  async logSearch(keyword: string, resultsCount: number): Promise<SearchLog> {
    const log = this.repo.create({ keyword, resultsCount });
    return this.repo.save(log);
  }

  async findAll(): Promise<SearchLog[]> {
    return this.repo.find();
  }
}