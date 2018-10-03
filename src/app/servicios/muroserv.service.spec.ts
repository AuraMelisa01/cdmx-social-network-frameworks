import { TestBed } from '@angular/core/testing';

import { MuroservService } from './muroserv.service';

describe('MuroservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuroservService = TestBed.get(MuroservService);
    expect(service).toBeTruthy();
  });
});
