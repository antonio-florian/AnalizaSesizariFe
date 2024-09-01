import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any;
  comments: any[] = [];
  newComment: string = '';
  currentUser: any;
  isOwner: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.apiService.getPostById(Number(postId)).subscribe(
      data => {
        this.post = data;
        this.checkOwnership();
      },
      error => {
        console.error('Error fetching post data:', error);
        // Handle the error (e.g., show an error message)
      }
    );
    

    this.apiService.getPostComments(Number(postId)).subscribe(data => {
      this.comments = data;
    });

    this.currentUser = this.authService.getCurrentUser();
  }

  checkOwnership(): void {
    if (this.currentUser && this.post && this.currentUser.id === this.post.authorId) {
      this.isOwner = true;
    } else {
      this.isOwner = false;
    }
  }

  addComment(): void {
    const postId = +this.route.snapshot.paramMap.get('id')!;
    if (this.newComment.trim()) {
      this.apiService.addComment(postId, { content: this.newComment }).subscribe(response => {
        // Assuming the response includes sentiment information
        this.comments.push({ content: this.newComment, sentiment: response.sentiment });
        this.newComment = ''; // Clear the input after adding the comment
      });
    }
  }
  

  deletePost(postId: number): void {
    if (this.isOwner) {
      this.apiService.deletePost(postId).subscribe(() => {
        // Navigate back to the post list or another page after deletion
        this.router.navigate(['/posts']);
      });
    }
  }

  deleteComment(commentId: number): void {
    if (this.isOwner) {
      this.apiService.deleteComment(this.post.id, commentId).subscribe(() => {
        this.comments = this.comments.filter(comment => comment.id !== commentId);
      });
    }
  }
}
