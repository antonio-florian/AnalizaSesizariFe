import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any = {};
  comments: any[] = [];
  newComment: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const postId = +this.route.snapshot.paramMap.get('id')!;  // <-- Getting the ID from the route
    this.apiService.getPostById(postId).subscribe(data => {
      this.post = data;
    });

    this.apiService.getPostComments(postId).subscribe(data => {
      this.comments = data;
    });
  }

  addComment() {
    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.addComment(postId, { content: this.newComment }).subscribe(response => {
      this.comments.push({ content: this.newComment, sentiment: response.sentiment });
      this.newComment = '';
    });
  }
}
