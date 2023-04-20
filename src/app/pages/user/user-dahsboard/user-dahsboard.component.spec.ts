import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDahsboardComponent } from './user-dahsboard.component';

describe('UserDahsboardComponent', () => {
  let component: UserDahsboardComponent;
  let fixture: ComponentFixture<UserDahsboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDahsboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDahsboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
