import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderIcon',
})
export class GenderIconPipe implements PipeTransform {
  transform(gender: string): string {
    if (!gender) {
      return 'assets/genders/Unkowngender.png';
    }

    return `assets/genders/${gender}.png`;
  }
}
