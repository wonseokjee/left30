import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Observable, of } from 'rxjs';

class Users {
  date: string;
}

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  private time: string = '';
  //date String test
  getHello(): string {
    const date = new Date().toLocaleString();
    return date;
  }
}
