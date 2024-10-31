import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
// import { TopicRepository } from './dao/actions.repository';
import { ActionsController } from './actions.controller';
import { ActionsService } from './actions.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ActionsController],
  providers: [
    // ...TopicRepository,
    ActionsService,
  ],
})
export class ActionsModule {}
