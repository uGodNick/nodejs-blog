import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlogModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdDateUtc: string;

  @Column()
  authorEmail: string;

  @Column()
  message: string;
}
