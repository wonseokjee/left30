import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Observable, of } from 'rxjs';

class Users {
  date: string;
}

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  //date String test
  getHello(): string {
    const date = new Date().toLocaleString();
    return date;
  }

  //sse로 데이터 뿌려주기
  @Cron('0 */15 * * * *')
  checkCron() {
    const date = new Date();
    // console.log(date.toString());
    this.logger.debug('Called when the current minute is 15 ');
    return 'Called when the current minute is 15';
  }

  @Cron('0 */1 * * * *')
  sseCron(): Observable<any> {
    const date = new Date().toString();

    this.logger.debug('Called when the current minute is 10 ');
    console.log(`Called ${date}`);
    console.log(of({ data: { date } }));

    return of({ data: { date } });
  }
}
