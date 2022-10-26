import { Module } from '@nestjs/common';
import { HealthModule } from './infra/ioc/health.module';

@Module({
  imports: [HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
