import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts:Post;
  post_id: string;

  constructor(public rest:RestService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    // this.posts = [];
    // data: {}
    this.rest.getPosts().subscribe((posts: Post) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  openDetail(post: Post){
    this.post_id = "/detail/"+post._id;
    // console.log(post._id)
  }

}
