import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(contacts: any, searchText: any): any {
    if (!searchText) {
      return contacts;
    }

    searchText = searchText.toLowerCase();

    return contacts.filter(contact => {
      const nameMatch = contact.name.toLowerCase().includes(searchText);
      const mobileMatch = contact.mobile.toString().includes(searchText);

      return nameMatch || mobileMatch;
    });
  }
}
