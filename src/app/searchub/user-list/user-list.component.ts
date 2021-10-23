import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/search.service';

// import { SearchService } from '../../search.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  dataSource : any = [];
  maxall : any;
  name : any;

  displayedColumns: string[] = ['id'];
  limit = 10;
  page = 1;
  allUsers: any;
  repoUrl: any


  constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let name = this.activatedRoute.snapshot.paramMap.get('id')
    this.name = name
    this.findUsers(this.limit, this.page)
  }

  async findUsers(limit: any, page: any) {
    const users = await this.searchService.findUsers(limit, page, this.name)
    this.allUsers = await users.items
    this.dataSource = await new MatTableDataSource(this.allUsers)
    this.maxall = users.total_count
  }

  onPageFired(event: any) {
    this.findUsers(event.pageSize, event.pageIndex + 1)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async getUserDetails(url:string) {
    location.href = url
  }

}
