import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification, NotificationType } from './notification.entity';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private repo: Repository<Notification>,
  ) {}

  create(userId: string, type: NotificationType, payload: any): Promise<Notification> {
    const note = this.repo.create({ userId, type, payload });
    return this.repo.save(note);
  }

  findAll(userId: string): Promise<Notification[]> {
    return this.repo.find({ where: { userId } });
  }

  async findOne(id: string): Promise<Notification> {
    const note = await this.repo.findOne({ where: { id } });
    if (!note) {
      throw new NotFoundException(`Notification ${id} not found`);
    }
    return note;
  }

  async markRead(id: string): Promise<Notification> {
    const note = await this.findOne(id);
    note.read = true;
    return this.repo.save(note);
  }

  async remove(id: string): Promise<void> {
    const result = await this.repo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Notification ${id} not found`);
    }
  }
}