import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudPageComponent } from './stud-page.component';

describe('StudPageComponent', () => {
  let component: StudPageComponent;
  let fixture: ComponentFixture<StudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
