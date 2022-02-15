import { InjectionToken } from '@angular/core';
import { AppwriteConfig } from '@bencehornyak/interfaces';

export const APPWRITECONFIG: InjectionToken<AppwriteConfig> =
  new InjectionToken('AppwriteConfig token');
