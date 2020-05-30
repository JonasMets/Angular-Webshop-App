import { TestBed } from '@angular/core/testing';

import { ApprouteguardGuard } from './approuteguard.guard';

describe('ApprouteguardGuard', () => {
  let guard: ApprouteguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApprouteguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
