import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    return 'Hello World!';
  }

  @Cron('0 */15 * * * *')
  handleCron() {
    this.logger.debug('Called when the current minute is 15');
    return 'Called when the current minute is 15';
  }
}
