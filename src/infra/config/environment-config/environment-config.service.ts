import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/domain/config/database-config.interface';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfig {
  constructor(private readonly config: ConfigService) {}
  getDatabaseHost(): string {
    return this.config.get<string>('DATABASE_HOST');
  }
  getDatabasePort(): number {
    return this.config.get<number>('DATABASE_PORT');
  }
  getDatabaseUser(): string {
    return this.config.get<string>('DATABASE_USER');
  }
  getDatabasePassword(): string {
    return this.config.get<string>('DATABASE_PASSWORD');
  }
  getDatabaseName(): string {
    return this.config.get<string>('DATABASE_NAME');
  }
  getDatabaseSchema(): string {
    return this.config.get<string>('DATABASE_SCHEMA');
  }
  getDatabaseSync(): boolean {
    return this.config.get<boolean>('DATABASE_SYNCHRONIZE');
  }
}
