import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts:any = [];

  constructor(public rest:RestService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.posts = [];
    this.rest.getPosts().subscribe((data: {}) => {
      console.log(data);
      this.posts = data;
    });
  }

}
