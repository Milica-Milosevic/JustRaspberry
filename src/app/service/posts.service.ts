import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(`https://angular.justraspberry.com/api/posts/get`,{
      headers: new HttpHeaders({
        'candidatuuid':  '93fdac91-7249-4e90-b95e-d20a489a74ee'
      })
    });
  }

  addPost(title,sub,body){
    const data = {
      title: title,
      subtitle: sub,
      body: body
    }
    return this.http.post(`https://angular.justraspberry.com/api/post/create`, data, {
      headers: new HttpHeaders({
        'candidatuuid':  '93fdac91-7249-4e90-b95e-d20a489a74ee'
      })
    });
  }

  updatePost(id,title,subtitle,body){
    const data = {
      id: id,
      title: title,
      subtitle: subtitle,
      body: body
    }
    return this.http.post('https://angular.justraspberry.com/api/post/update', data, {
      headers: new HttpHeaders({
        'candidatuuid':  '93fdac91-7249-4e90-b95e-d20a489a74ee'
      })
    })
  }

  deletePost(id){
    return this.http.delete('https://angular.justraspberry.com/api/post/delete/' + id,{
      headers: new HttpHeaders({
        'candidatuuid':  '93fdac91-7249-4e90-b95e-d20a489a74ee'
      })
    });
  }
}
