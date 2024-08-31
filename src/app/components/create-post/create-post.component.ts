import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PostResultModalComponent } from '../post-result-modal/post-result-modal.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  title: string = '';
  content: string = '';

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  createPost() {
    const postData = { title: this.title, content: this.content };
    
    this.apiService.createPost(postData).subscribe(
      (response) => {
        // Open the success modal
        this.dialog.open(PostResultModalComponent, {
          data: {
            title: 'Success',
            message: 'Post successfully made!',
          }
        });
      },
      (error) => {
        // Open the error modal
        this.dialog.open(PostResultModalComponent, {
          data: {
            title: 'Error',
            message: 'There was a problem making the post.',
          }
        });
      }
    );
  }
}
