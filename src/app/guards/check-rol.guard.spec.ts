import { TestBed, async, inject } from '@angular/core/testing';

import { CheckRolGuard } from './check-rol.guard';

describe('CheckRolGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckRolGuard]
    });
  });

  it('should ...', inject([CheckRolGuard], (guard: CheckRolGuard) => {
    expect(guard).toBeTruthy();
  }));
});
