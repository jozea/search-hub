import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path : '', component : SearchComponent},
  {path : 'user/:id', component : UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SearchubRoutingModule { }
