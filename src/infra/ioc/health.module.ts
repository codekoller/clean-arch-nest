import { Module } from '@nestjs/common';
import { HealthController } from 'src/presentation/health/health.controller';

@Module({
  controllers: [HealthController],
})
export class HealthModule {}
