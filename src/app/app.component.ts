import { HeroService } from './hero.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './domain/hero';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>

             <h2>My Heroes</h2>
             <ul class="heroes">
              <li *ngFor= "let hero of heroes"
                [class.selected]="hero === selectedHero"
                (click) =  onSelect(hero)>
                <span class="badge">{{hero.id}}</span> {{hero.name}}
              </li>
             </ul>
             <hero-detail [hero]="selectedHero" ></hero-detail>
              `,
})
export class AppComponent implements OnInit {

  name = 'Angular';

  heroes: Hero[];

  title = 'Tour of Heroes';

  providers: [HeroService];

  constructor(private heroService:HeroService) {}

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

}

