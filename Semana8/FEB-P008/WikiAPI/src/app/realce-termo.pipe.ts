import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realceTermo'
})
export class RealceTermoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
