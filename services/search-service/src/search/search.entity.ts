import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SearchLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  keyword: string;

  @Column('int')
  resultsCount: number;
}