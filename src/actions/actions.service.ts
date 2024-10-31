import {
  Injectable,
  Inject,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Action } from './entities/action.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActionsService {
  constructor(
    @Inject('ACTION_REPOSITORY')
    private actionRepository: Repository<Action>,
  ) {}

  // async getAll(): Promise<SimpleTopicDto[]> {
  //   const getall = this.topicRepository.find({
  //     relations: { leafs: true, bestLeaf: true, rootLeaf: true },
  //   });
  //   return await getall;
  // }
}
