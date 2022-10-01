import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
  }
}
