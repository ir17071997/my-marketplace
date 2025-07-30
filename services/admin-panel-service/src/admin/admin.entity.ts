import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export enum AdminActionType {
  MODERATION = 'moderation',
  CONFIG_UPDATE = 'config_update',
  TICKET = 'ticket',
  BANNER = 'banner',
}

@Entity()
export class AdminLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: AdminActionType })
  action: AdminActionType;

  @Column('json')
  payload: any;

  @CreateDateColumn()
  timestamp: Date;
}