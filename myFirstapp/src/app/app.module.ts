import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule} from 'angular2-moment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LanesComponent } from './lanes/lanes.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    LanesComponent,
    HomeComponent,
    HelpComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    MomentModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
