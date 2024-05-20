import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerUploadProductComponent } from './seller-upload-product.component';

describe('SellerUploadProductComponent', () => {
  let component: SellerUploadProductComponent;
  let fixture: ComponentFixture<SellerUploadProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerUploadProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerUploadProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
