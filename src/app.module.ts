import { Module } from '@nestjs/common';
import { HealthModule } from './infra/ioc/health.module';
import { EnvironmentConfigModule } from './infra/config/environment-config/environment-config.module';
import { LoggerModule } from './infra/logger/logger.module';
import { ExceptionsModule } from './infra/exceptions/exceptions.module';
import { UserModule } from './infra/ioc/user.module';

@Module({
  imports: [
    HealthModule,
    EnvironmentConfigModule,
    LoggerModule,
    ExceptionsModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
