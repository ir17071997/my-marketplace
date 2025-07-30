import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminLog, AdminActionType } from './admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminLog)
    private repo: Repository<AdminLog>,
  ) {}

  log(action: AdminActionType, payload: any): Promise<AdminLog> {
    const entry = this.repo.create({ action, payload });
    return this.repo.save(entry);
  }

  findAll(): Promise<AdminLog[]> {
    return this.repo.find();
  }
}