import { Test } from '@nestjs/testing';
import { LoggerService } from '../../../../infra/logger/logger.service';

export const createLoggerMockService = async () => {
  const moduleRef = await Test.createTestingModule({
    providers: [LoggerService],
  }).compile();

  return {
    service: moduleRef.get<LoggerService>(LoggerService),
  };
};
