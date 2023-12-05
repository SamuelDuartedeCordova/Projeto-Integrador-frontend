import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDropdownComponent } from './usuario-dropdown.component';

describe('UsuarioDropdownComponent', () => {
  let component: UsuarioDropdownComponent;
  let fixture: ComponentFixture<UsuarioDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
