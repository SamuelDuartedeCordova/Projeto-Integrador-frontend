import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCardItemComponent } from './produto-card-item.component';

describe('ProdutoCardItemComponent', () => {
  let component: ProdutoCardItemComponent;
  let fixture: ComponentFixture<ProdutoCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoCardItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutoCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
