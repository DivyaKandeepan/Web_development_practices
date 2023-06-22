import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Contact } from './models/Contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contacts: Contact[] = [];
  searchText: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllContacts().subscribe(
      data => {
        this.contacts = data;
      },
      error => {
        console.log('Failed to fetch contacts:', error);
      }
    );
  }

  // Function to filter contacts based on search text
  filterContacts() {
    if (!this.searchText) {
      // If search text is empty, show all contacts
      return this.contacts;
    }

    // Filter contacts based on search text
    const filteredContacts = this.contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        contact.mobile.toString().includes(this.searchText)
      );
    });

    return filteredContacts;
  }
}
