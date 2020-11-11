import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  constructor(private service: PostsService) { }

  ngOnInit(): void {
  }

}
