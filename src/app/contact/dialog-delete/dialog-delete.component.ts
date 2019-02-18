import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public contact: Contact,
    private contactService: ContactService
  ) {}

  ngOnInit() {}

  close(): void {
    this.dialogRef.close();
  }

  async delete() {
    try {
      await this.contactService.delete(this.contact).subscribe();
      this.dialogRef.close(this.contact);
    } catch (e) {
      console.log(e);
    }
  }
}
