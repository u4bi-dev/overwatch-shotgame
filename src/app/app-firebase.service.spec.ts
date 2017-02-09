/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppFirebaseService } from './app-firebase.service';

describe('AppFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppFirebaseService]
    });
  });

  it('should ...', inject([AppFirebaseService], (service: AppFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
