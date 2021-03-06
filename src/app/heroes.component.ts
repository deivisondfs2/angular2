import { Router } from '@angular/router';
import { HeroService } from './hero.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './domain/hero';


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css']

})

export class HeroesComponent implements OnInit {

  name = 'Angular';

  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService:HeroService

    ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(returnHeroes => this.heroes = returnHeroes);
  }


  selectedHero: Hero;

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

}

