import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMResultComponent } from './user-m-result.component';

describe('UserMResultComponent', () => {
  let component: UserMResultComponent;
  let fixture: ComponentFixture<UserMResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
