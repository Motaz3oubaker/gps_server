import { TestBed } from '@angular/core/testing';

import { DeletePositionsService } from './delete-positions.service';

describe('DeletePositionsService', () => {
  let service: DeletePositionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletePositionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
