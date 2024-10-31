import { Action } from '../entities/action.entity';
import { DataSource } from 'typeorm';

export const TopicRepository = [
  {
    provide: 'ACTION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Action),
    inject: ['DATA_SOURCE'],
  },
];
