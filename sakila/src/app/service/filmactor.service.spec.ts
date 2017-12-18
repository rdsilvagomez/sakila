import { TestBed, inject } from '@angular/core/testing';

import { FilmactorService } from './filmactor.service';

describe('FilmactorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmactorService]
    });
  });

  it('should be created', inject([FilmactorService], (service: FilmactorService) => {
    expect(service).toBeTruthy();
  }));
});
