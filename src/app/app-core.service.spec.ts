/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppCoreService } from './app-core.service';

describe('AppCoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppCoreService]
    });
  });

  it('should ...', inject([AppCoreService], (service: AppCoreService) => {
    expect(service).toBeTruthy();
  }));
});
