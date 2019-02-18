import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { DialogContactComponent } from './dialog-contact/dialog-contact.component';
import { ContactService } from './contact.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contacts: Contact[];

  constructor(
    public dialog: MatDialog,
    private contactService: ContactService
  ) {
    this.contactService
      .getAll()
      .subscribe(contacts => (this.contacts = contacts));
  }

  openDeleteDialog(contact) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: contact
    });

    dialogRef.afterClosed().subscribe(deletedContact => {
      if (deletedContact) {
        const index = this.contacts.findIndex(
          ({ id }) => id === deletedContact.id
        );
        this.contacts.splice(index, 1);
      }
    });
  }

  openContactDialog(contact = {}) {
    const dialogRef = this.dialog.open(DialogContactComponent, {
      data: contact
    });

    dialogRef.afterClosed().subscribe(newContact => {
      if (newContact) {
        const index = this.contacts.findIndex(({ id }) => id === newContact.id);
        if (index > 0) {
          this.contacts[index] = newContact;
        } else {
          this.contacts.push(newContact);
        }
      }
    });
  }
  ngOnInit() {}
}
