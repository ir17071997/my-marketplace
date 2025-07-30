import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchLog } from './search.entity';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async search(@Query('q') keyword: string): Promise<any[]> {
    await this.searchService.logSearch(keyword, 0);
    return [];
  }

  @Get('suggestions')
  suggestions(@Query('q') keyword: string): string[] {
    return [];
  }
}