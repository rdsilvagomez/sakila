import { TestBed, inject } from '@angular/core/testing';

import { FilmActorService } from './film-actor.service';

describe('FilmActorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmActorService]
    });
  });

  it('should be created', inject([FilmActorService], (service: FilmActorService) => {
    expect(service).toBeTruthy();
  }));
});
