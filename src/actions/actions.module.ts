import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ActionRepository } from './dao/actions.repository';
import { ActionsController } from './actions.controller';
import { ActionsService } from './actions.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ActionsController],
  providers: [...ActionRepository, ActionsService],
})
export class ActionsModule {}
