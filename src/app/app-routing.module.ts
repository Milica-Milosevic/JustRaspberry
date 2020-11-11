import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { DeletePostComponent } from './components/delete-post/delete-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';


const routes: Routes = [
  {path: "view", component: ViewPostComponent},
  {path: "add", component: AddPostComponent},
  {path: "update", component: UpdatePostComponent},
  {path: "delete", component: DeletePostComponent},
  {path: "", component: ViewPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
