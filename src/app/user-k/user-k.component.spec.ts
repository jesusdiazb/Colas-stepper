import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserKComponent } from './user-k.component';

describe('KClientesComponent', () => {
  let component: UserKComponent;
  let fixture: ComponentFixture<UserKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
