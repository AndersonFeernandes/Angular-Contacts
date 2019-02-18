import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<Contact>, searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    console.log(items);

    searchText = searchText.toLowerCase();
    return items.filter(({ name }) => {
      if (!name) { return false; }
      return name.toLowerCase().includes(searchText);
    });
  }
}
