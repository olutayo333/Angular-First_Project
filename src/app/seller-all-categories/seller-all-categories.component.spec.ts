import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAllCategoriesComponent } from './seller-all-categories.component';

describe('SellerAllCategoriesComponent', () => {
  let component: SellerAllCategoriesComponent;
  let fixture: ComponentFixture<SellerAllCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerAllCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerAllCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
