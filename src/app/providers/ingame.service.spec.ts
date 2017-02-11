/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IngameService } from './ingame.service';

describe('IngameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngameService]
    });
  });

  it('should ...', inject([IngameService], (service: IngameService) => {
    expect(service).toBeTruthy();
  }));
});
