import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';

@Module({
  controllers: [CoffeeController],
  providers: [CoffeeService],
  imports: [],
})
export class CoffeeModule {}
