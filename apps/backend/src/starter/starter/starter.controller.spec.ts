import { Test, TestingModule } from '@nestjs/testing';
import { StarterController } from './starter.controller';

describe('StarterController', () => {
  let controller: StarterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StarterController],
    }).compile();

    controller = module.get<StarterController>(StarterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
