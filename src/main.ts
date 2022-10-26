import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './infra/common/filter/all-exception.filter';
import { ResponseInterceptor } from './infra/common/interceptors/response.interceptor';
import { LoggerService } from './infra/logger/logger.service';

declare const module: any;

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));

  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(3003, () => logger.log(`Server listening`));

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
