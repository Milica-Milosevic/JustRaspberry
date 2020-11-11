import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/service/posts.service';
import { DeletePostComponent } from '../delete-post/delete-post.component';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  constructor(private router: Router, private service: PostsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getPosts();
  }
  
  posts: Post;

  getPosts(){
    this.service.getPosts().subscribe(p=>{
      console.log(p);
      this.posts = JSON.parse(JSON.stringify(p));
    })
  }

  updatePost(p){
    sessionStorage.setItem('post',p);
    localStorage.setItem('post',p);
    this.router.navigate(['/update']);
  }

  deletePost(id){
    this.service.deletePost(id).subscribe();
    this.openSnackBar("Post deleted!");
    this.getPosts();
    //window.location.reload();
  }

  durationInSeconds:number = 5;

  openSnackBar(message) {
    this._snackBar.open(message, "", {
      duration: 10000,
    });
  }

  name = 'Angular 4';
  
  message: string = 'Snack Bar opened.';
  actionButtonLabel: string = 'Retry';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  addExtraClass: boolean = false;
  

   open() {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    //config.extraClasses = this.addExtraClass ? ['test'] : undefined;
    this._snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
  }

}
