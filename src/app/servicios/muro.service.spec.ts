import { TestBed } from '@angular/core/testing';

import { MuroService } from './muro.service';

describe('MuroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuroService = TestBed.get(MuroService);
    expect(service).toBeTruthy();
  });
});
