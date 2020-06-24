import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'test-db-b' })
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
