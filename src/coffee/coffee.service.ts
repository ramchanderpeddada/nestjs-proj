import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from 'src/entities/coffee.entity';

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwerek Rost',
      brand: 'Buddy Bew',
      flavors: ['chocolate', 'vanila', 'mocha'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const prodcuct = this.coffees.find((item) => item.id === +id);
    if (!prodcuct) {
      throw new HttpException(`Coffee ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return prodcuct;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existing = this.findOne(id);
    // if (existing) {
    // }
  }

  delete(id: string) {
    const index = this.coffees.findIndex((item) => item.id === +id);
    if (index >= 0) {
      this.coffees.splice(index, 1);
    }
  }
}
