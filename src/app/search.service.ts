import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  allUsers: any = []
  constructor() {
  }

  async findUsers(limit: number, page: number, name: string) {
    const users = await (await fetch(`https://api.github.com/search/repositories?q=${name}&limit=${limit}&page=${page}`)).json();
    return users
  }
}
