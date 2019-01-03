import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardDemoFirstComponent } from './dash-board-demo-first/dash-board-demo-first.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { Ng6O2ChartModule } from 'ng6-o2-chart';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardDemoFirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    Ng6O2ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
