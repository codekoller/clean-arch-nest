import { EnvironmentConfigService } from '../../../../infra/config/environment-config/environment-config.service';
import { CreateMockEnvironmentConfig } from './mocks/create-mock-environment-config';

describe('EnvironmentConfigService', () => {
  let service: EnvironmentConfigService;

  beforeEach(async () => {
    const module = await CreateMockEnvironmentConfig();

    service = module.service;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be get database uri', () => {
    const result = service.getDatabaseConfig();
    jest.spyOn(service, 'getDatabaseConfig').mockImplementation(() => result);

    expect(service.getDatabaseConfig()).toBe(result);
  });
});
