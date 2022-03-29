import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ClientOptionsService } from './client-options.service';

describe('ClientOptionsService', () => {
  let service: ClientOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ClientOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
