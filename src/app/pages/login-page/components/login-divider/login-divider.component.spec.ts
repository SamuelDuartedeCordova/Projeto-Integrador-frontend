import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDividerComponent } from './login-divider.component';

describe('LoginDividerComponent', () => {
  let component: LoginDividerComponent;
  let fixture: ComponentFixture<LoginDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginDividerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
