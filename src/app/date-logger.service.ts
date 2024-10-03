import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DateLoggerService extends LoggerService
{
  override logInfo(msg: any)  { super.logInfo(stamp(msg)); }
  override logDebug(msg: any) { super.logInfo(stamp(msg)); }
  override logError(msg: any) { super.logError(stamp(msg)); }
}

function stamp(msg: any) { return msg + ' at ' + new Date(); }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/