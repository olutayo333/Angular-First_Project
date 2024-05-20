import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerprofileComponent } from '../sellerprofile/sellerprofile.component';

@Component({
  selector: 'app-seller-upload-product',
  standalone: true,
  imports: [FormsModule, SellerprofileComponent],
  templateUrl: './seller-upload-product.component.html',
  styleUrl: './seller-upload-product.component.css'
})
export class SellerUploadProductComponent {
  public selectedCategory:string = "";
  public productName:string ="";
  public productDescription:any="";
  public productPrice:number=0;
}
