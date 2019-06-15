import { Module,HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerformanceService } from './services/performance/performance.service';
import { PerfomanceController } from './controllers/perfomance/perfomance.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PerfomanceController],
  providers: [AppService, PerformanceService],
})
export class AppModule {}
