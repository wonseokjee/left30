import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Timestamp,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
// import { User } from 'src/users/entities/user.entity';

@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  action_id: number;

  // @JoinColumn({ name: 'user_id' })
  // user: User;

  @Column({ type: 'boolean', default: true })
  needHelp: boolean;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @Column()
  category: string;

  @Column()
  content: string;
}
