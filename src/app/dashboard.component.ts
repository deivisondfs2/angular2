import { Component, OnInit } from '@angular/core';
import { Hero } from './domain/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']

})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  heroes: Hero[];

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroesReturn => this.heroes = heroesReturn.slice(1, 5));
   }

  title = "My Dashboard";

}
