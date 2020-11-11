import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  constructor(private router: Router, private service: PostsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.post = JSON.parse(sessionStorage.getItem('post'));
    this.service.getPosts().subscribe(p=>{
      this.posts = JSON.parse(JSON.stringify(p));
      this.title = this.posts.find(po=> po.id == this.post).title;
      this.subtitle = this.posts.find(po=> po.id == this.post).subtitle;
      this.body = this.posts.find(po=> po.id == this.post).body;
    })
  }

  post: number;
  title: string;
  subtitle: string;
  body:string
  posts: Post[];

  updatePost(){
    this.service.updatePost(this.post,this.title,this.subtitle,this.body).subscribe();
    this.openSnackBar("Post updated!");
    this.router.navigate(['/view']);
  }

  openSnackBar(message) {
    this._snackBar.open(message, "", {
      duration: 10000,
    });
  }

}
