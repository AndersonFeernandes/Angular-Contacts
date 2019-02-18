import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactComponent } from './contact.component';
import {
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { DialogContactComponent } from './dialog-contact/dialog-contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    FilterPipe,
    ContactComponent,
    DialogDeleteComponent,
    DialogContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [DialogDeleteComponent, DialogContactComponent],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ]
})
export class ContactModule {}
