import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  allUsers: any[]=[]
  name: any='';
  maxall: any;
  limit = 10;
  page = 1;
  isLoadingResults: boolean = false;

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    this.clear()
  }

  async findUsers() {
    try {
      const users = await this.searchService.findUsers(this.limit, this.page, this.name)
      this.allUsers = await users.items
      this.maxall = users.total_count
      this.router.navigate(['/user', this.name])

    }catch(err: any) {
      console.log(err)
      alert(err.message);
    }
  }

  onEnter(value: string) { 
    if (this.name != '') {
      this.isLoadingResults = true
      this.name = value; 
      this.findUsers()
    }
  }

  clear() {
    this.name = ''
  }

}
