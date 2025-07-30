import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export enum MetricType {
  SALES = 'sales',
  VISITORS = 'visitors',
  TRENDS = 'trends',
}

@Entity()
export class AnalyticsRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: MetricType })
  type: MetricType;

  @Column('json')
  data: any;

  @CreateDateColumn()
  recordedAt: Date;
}