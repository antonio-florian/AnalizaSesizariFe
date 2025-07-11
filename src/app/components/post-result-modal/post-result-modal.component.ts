import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-post-result-modal',
  templateUrl: './post-result-modal.component.html',
})
export class PostResultModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
