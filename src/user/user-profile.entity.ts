import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'test-db-aa' })
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
