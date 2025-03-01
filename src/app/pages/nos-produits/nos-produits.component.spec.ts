import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosProduitsComponent } from './nos-produits.component';

describe('NosProduitsComponent', () => {
  let component: NosProduitsComponent;
  let fixture: ComponentFixture<NosProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosProduitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
