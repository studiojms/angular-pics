import { PipeTransform, Pipe } from '@angular/core';

import { IPhoto } from '../photo/photo';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescriptionPipe implements PipeTransform {
  transform(value: IPhoto[], filterQuery: string) {
    const filterText = filterQuery.trim().toLowerCase();

    let filteredData = value;

    if (filterText) {
      filteredData = value.filter(photo => photo.description.toLowerCase().includes(filterText));
    }

    return filteredData;
  }
}
