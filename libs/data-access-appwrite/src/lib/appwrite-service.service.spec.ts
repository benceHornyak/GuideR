import { TestBed } from '@angular/core/testing';

import { AppwriteService } from './appwrite-service.service';

describe('AppwriteServiceService', () => {
  let service: AppwriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppwriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
