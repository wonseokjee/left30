import {
  Query,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ActionsService } from './actions.service';
// import { SimpleTopicDto } from './dto/simple.topic.dto';
// import { User } from 'src/users/entities/user.entity';

@Controller('action')
export class ActionsController {
  constructor(private readonly actionsService: ActionsService) {}

  // @Get()
  // getAll(): Promise<SimpleTopicDto[]> {
  //   return this.actionsService.getAll();
  // }
}
