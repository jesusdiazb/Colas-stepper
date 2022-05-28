import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniRowComponent } from './unirow.component';

describe('UniRowComponent', () => {
  let component: UniRowComponent;
  let fixture: ComponentFixture<UniRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
