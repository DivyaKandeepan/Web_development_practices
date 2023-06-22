import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: any = {};
  contacts: Contact[] = [];
  message: string;
  isContactAdded: boolean;
  searchText: string = '';
  formSubmitted: boolean; // Added formSubmitted property

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllContacts().subscribe(
      data => {
        this.contacts = data;
      }
    );
  }

  onSubmit() {
    const existingContact = this.contacts.find(contact => contact.mobile === this.form.mobile);

    if (existingContact) {
      this.isContactAdded = false;
      this.message = 'Contact already exists';
    } else {
      this.userService.addContact(this.form).subscribe(
        data => {
          this.contacts.push(data);
          this.isContactAdded = true;
          this.message = 'Contact added';
          this.formSubmitted = true; // Set formSubmitted to true on successful contact addition
        },
        error => {
          this.isContactAdded = false;
          this.message = 'Failed to add Contact';
          this.formSubmitted = true; // Set formSubmitted to true on failed contact addition
        }
      );
    }
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
