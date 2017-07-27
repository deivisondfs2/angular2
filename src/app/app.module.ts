import { AppRoutingModule } from './add.routing-module';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule ],
  declarations: [ AppComponent,
                  HeroesComponent,
                  HeroDetailComponent,
                  DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService ]
})
export class AppModule {



}
