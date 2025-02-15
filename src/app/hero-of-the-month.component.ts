import { InjectionToken } from '@angular/core';

export const TITLE = new InjectionToken<string>('title');

import { Component, Inject } from '@angular/core';

import { DateLoggerService } from './date-logger.service';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { LoggerService } from './logger.service';
import { MinimalLogger } from './minimal-logger.service';
import { RUNNERS_UP,
         runnersUpFactory } from './runners-up';
import { NgFor } from '@angular/common';

const someHero = new Hero(42, 'Magma', 'Had a great month!', '555-555-5555');

@Component({
  standalone: true,
  selector: 'app-hero-of-the-month',
  templateUrl: './hero-of-the-month.component.html',
  providers: [
    { provide: Hero,          useValue:    someHero },
    { provide: TITLE,         useValue:   'Hero of the Month' },
    { provide: HeroService,   useClass:    HeroService },
    { provide: LoggerService, useClass:    DateLoggerService },
    { provide: MinimalLogger, useExisting: LoggerService },
    { provide: RUNNERS_UP,    useFactory:  runnersUpFactory(2), deps: [Hero, HeroService] }
  ],
  imports: [NgFor]
})
export class HeroOfTheMonthComponent {
  logs: string[] = [];

  constructor(
      logger: MinimalLogger,
      public heroOfTheMonth: Hero,
      @Inject(RUNNERS_UP) public runnersUp: string,
      @Inject(TITLE) public title: string)
  {
    this.logs = logger.logs;
    logger.logInfo('starting up');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/