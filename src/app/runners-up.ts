import { InjectionToken } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

export const RUNNERS_UP = new InjectionToken<string>('RunnersUp');

export function runnersUpFactory(take: number) {
  return (winner: Hero, heroService: HeroService): string =>
    /* ... */
    heroService
        .getAllHeroes()
        .filter((hero) => hero.name !== winner.name)
        .map(hero => hero.name)
        .slice(0, Math.max(0, take))
        .join(', ');
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/