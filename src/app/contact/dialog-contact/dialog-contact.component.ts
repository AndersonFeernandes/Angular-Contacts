import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-dialog-contact',
  templateUrl: './dialog-contact.component.html',
  styleUrls: ['./dialog-contact.component.scss']
})
export class DialogContactComponent implements OnInit {
  private dialogTitle: string;
  private isNew: boolean;
  private contact: Contact;

  constructor(
    public dialogRef: MatDialogRef<DialogContactComponent>,
    @Inject(MAT_DIALOG_DATA) public dataContact: Contact,
    private contactService: ContactService
  ) {
    this.dialogRef.disableClose = true;
    this.contact = { ...dataContact };
    this.isNew = !this.contact.hasOwnProperty('id');
    this.dialogTitle = this.isNew ? 'New contact' : 'Update contact';
  }

  ngOnInit() {}

  close(): void {
    this.dialogRef.close();
  }

  async save(e) {
    e.preventDefault();

    try {
      if (this.isNew) {
        await this.contactService.create(this.contact).subscribe();
      } else {
        await this.contactService.update(this.contact).subscribe();
      }
      this.dialogRef.close(this.contact);
    } catch (e) {
      console.log(e);
    }
  }
}
