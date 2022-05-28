import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirowOutputComponent } from './unirow-output.component';

describe('UnirowOutputComponent', () => {
  let component: UnirowOutputComponent;
  let fixture: ComponentFixture<UnirowOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnirowOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnirowOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
