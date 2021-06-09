import { Pipe, PipeTransform } from '@angular/core';
import { projects, technologies } from '../app.data';
import { Technology } from '../interfaces';

@Pipe({
  name: 'tech'
})

export class TechnologyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): Technology {
    return technologies.find((technology) => technology._id === value);
  }

}
