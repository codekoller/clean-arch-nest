import { Module } from '@nestjs/common';
import { HealthModule } from './infra/ioc/health.module';
import { EnvironmentConfigModule } from './infra/config/environment-config/environment-config.module';
import { TypeOrmConfigModule } from './infra/db/typeorm/typeorm.module';
import { LoggerModule } from './infra/logger/logger.module';
import { ExceptionsModule } from './infra/exceptions/exceptions.module';

@Module({
  imports: [
    HealthModule,
    EnvironmentConfigModule,
    TypeOrmConfigModule,
    LoggerModule,
    ExceptionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
