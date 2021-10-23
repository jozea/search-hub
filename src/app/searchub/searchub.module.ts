import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

import { SearchubRoutingModule } from './searchub-routing.module';
import { SearchComponent } from './search/search.component';
import { UserListComponent } from './user-list/user-list.component';
import { ImagePipe } from '../image.pipe';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    SearchComponent,
    UserListComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    SearchubRoutingModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatChipsModule
  ],
  providers: [
    ImagePipe
  ]
})
export class SearchubModule { }
