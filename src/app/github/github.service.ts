import { Injectable, } from '@angular/core';
import { Http } from '@angular/http';

export interface info {
  login: string;
  avatar_url: string;
  id: number;
  node_id: string;
}

@Injectable()
export class GithubService {

  public items: info[];

  data: info[] = [

  ]

  constructor(private http: Http) {
  }

  getUser(searchText) {
    const url = "https://api.github.com/search/users?q=" + searchText;
    this.http.get(url).subscribe(
      res => {
        const data = res.json();
        console.log(data);
        this.items = data.items;
      }
    )
  }
}
