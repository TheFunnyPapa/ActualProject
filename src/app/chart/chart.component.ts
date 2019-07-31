import { Component, OnInit } from '@angular/core';
import { GithubService, info } from '../github/github.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public information: string[] = [];
  public username: string = "";
  public nodeId: string = "";
  public id: number;
  public avatar: string = "";

  constructor(public githubService: GithubService) { }

  ngOnInit() {

  }
  onSave() {
    this.username = this.username;
    this.nodeId = this.nodeId;
    this.id = this.id;
    this.avatar = this.avatar;
  
    var i:info = { 
      login : this.username,
      node_id : this.nodeId,
      id : this.id,
      avatar_url : this.avatar
    };

    this.githubService.items.unshift(i);
  }
}



