import { Inject, Injectable } from '@angular/core';
import { AppwriteConfig } from '@bencehornyak/interfaces';
import { Appwrite } from 'appwrite';
import { APPWRITECONFIG } from '..';

@Injectable({
  providedIn: 'root',
})
export class AppwriteService {
  private sdk = new Appwrite();

  constructor(@Inject(APPWRITECONFIG) appwriteConfig: AppwriteConfig) {
    this.sdk.setEndpoint(appwriteConfig.endpoint);
    this.sdk.setProject(appwriteConfig.projectId);
  }

  register() {
    return this.sdk.account.get();
  }
}
