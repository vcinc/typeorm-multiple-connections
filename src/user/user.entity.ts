import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'test-db-a' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;
}
