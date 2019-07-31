import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { GithubService } from './github/github.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './chart/chart.component';
import { MatButtonModule, MatCheckboxModule, MatGridListModule } from '@angular/material';
import {enableProdMode} from '@angular/core';
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }

