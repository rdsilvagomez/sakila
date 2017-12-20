import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFilmComponent } from './custom-film.component';

describe('CustomFilmComponent', () => {
  let component: CustomFilmComponent;
  let fixture: ComponentFixture<CustomFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
