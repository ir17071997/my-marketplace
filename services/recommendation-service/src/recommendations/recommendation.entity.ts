import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum RecommendationType {
  PERSONALIZED = 'personalized',
  BUNDLES = 'bundles',
}

@Entity()
export class RecommendationLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column({ type: 'enum', enum: RecommendationType })
  type: RecommendationType;

  @Column('json')
  results: any;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}