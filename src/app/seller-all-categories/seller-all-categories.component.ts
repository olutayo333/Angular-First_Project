import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerprofileComponent } from '../sellerprofile/sellerprofile.component';

@Component({
  selector: 'app-seller-all-categories',
  standalone: true,
  imports: [FormsModule, SellerprofileComponent],
  templateUrl: './seller-all-categories.component.html',
  styleUrl: './seller-all-categories.component.css'
})
export class SellerAllCategoriesComponent {
  public name:string ="";
  public description:string =""
}
