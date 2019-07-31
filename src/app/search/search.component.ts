import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GithubService } from '../github/github.service';
import {ChartComponent} from '../chart/chart.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, AfterViewInit {

  public name: string = "TheFunnyPapa";

  constructor(public githubService: GithubService) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.githubService.getUser(this.name);
  }

  click() {
    this.githubService.getUser(this.name);
  }

}
