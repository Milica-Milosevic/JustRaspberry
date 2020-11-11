import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private router: Router, private service: PostsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  title: string;
  subtitle: string;
  body: string;

  addPost(){
    this.service.addPost(this.title,this.subtitle,this.body).subscribe();
    this.openSnackBar("Post added!");
    this.router.navigate(['/view']);
  }

  openSnackBar(message) {
    this._snackBar.open(message, "", {
      duration: 10000,
    });
  }
}
