import { Controller, Get, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs/internal/Observable';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  checkCron(): string {
    return this.appService.checkCron();
  }

  @Sse('/test/all')
  sseCron(): Observable<any> {
    console.log('sseController');
    return this.appService.sseCron();
    // return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
  }
}
