import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/domain/database/database-config.interface';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfig {
  constructor(private readonly config: ConfigService) {}
  getDatabaseConfig(): string {
    return this.config.get<string>('MONGODB_URI');
  }
}
