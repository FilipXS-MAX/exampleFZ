import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyFirstWords'
})
export class OnlyFirstWordsPipe implements PipeTransform {

  transform(firstName: string, lastName: string): string {

    return `${firstName[0]}${lastName[0]}`;
  }

}
