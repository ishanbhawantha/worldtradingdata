import { Test, TestingModule } from '@nestjs/testing';
import { PerfomanceController } from './perfomance.controller';

describe('Perfomance Controller', () => {
  let controller: PerfomanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfomanceController],
    }).compile();

    controller = module.get<PerfomanceController>(PerfomanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
