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

  //sse로 데이터 뿌려주기
  @Cron('0 */1 * * * *')
  checkCron() {
    const date = new Date().toString();
    // console.log(date.toString());
    this.time = date;
    this.logger.debug('Called when the current minute is 1 ');
    // this.sseCron();
    return 'Called when the current minute is 15';
  }

  @Cron('10 * * * * *')
  sseCron(): Observable<any> {
    // const date = new Date().toString();
    const cronTime = this.time;
    this.logger.debug('Called when the current second is 3 ');

    return of({ data: { cronTime } });
  }
}
