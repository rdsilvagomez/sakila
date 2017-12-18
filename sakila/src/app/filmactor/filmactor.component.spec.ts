import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmactorComponent } from './filmactor.component';

describe('FilmactorComponent', () => {
  let component: FilmactorComponent;
  let fixture: ComponentFixture<FilmactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
