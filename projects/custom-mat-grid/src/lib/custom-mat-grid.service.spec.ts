import { TestBed } from '@angular/core/testing';

import { CustomMatGridService } from './custom-mat-grid.service';

describe('CustomMatGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomMatGridService = TestBed.get(CustomMatGridService);
    expect(service).toBeTruthy();
  });
});
