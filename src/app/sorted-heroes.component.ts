import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { NgFor } from '@angular/common';

/////// HeroesBaseComponent /////
@Component({
  standalone: true,
  selector: 'app-unsorted-heroes',
  template: '<div *ngFor="let hero of heroes">{{hero.name}}</div>',
  providers: [HeroService],
  imports: [NgFor]
})
export class HeroesBaseComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  heroes: Hero[] = [];

  ngOnInit() {
    this.heroes = this.heroService.getAllHeroes();
    this.afterGetHeroes();
  }

  // Post-process heroes in derived class override.
  protected afterGetHeroes() {}

}

/////// SortedHeroesComponent /////
@Component({
  standalone: true,
  selector: 'app-sorted-heroes',
  template: '<div *ngFor="let hero of heroes">{{hero.name}}</div>',
  providers: [HeroService],
  imports: [NgFor]
})
export class SortedHeroesComponent extends HeroesBaseComponent {
  constructor(heroService: HeroService) {
    super(heroService);
  }

  protected override afterGetHeroes() {
    this.heroes = this.heroes.sort((h1, h2) => h1.name < h2.name ? -1 :
            (h1.name > h2.name ? 1 : 0));
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/