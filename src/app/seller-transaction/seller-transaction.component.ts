import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerprofileComponent } from '../sellerprofile/sellerprofile.component';

@Component({
  selector: 'app-seller-transaction',
  standalone: true,
  imports: [FormsModule, SellerprofileComponent],
  templateUrl: './seller-transaction.component.html',
  styleUrl: './seller-transaction.component.css'
})
export class SellerTransactionComponent {
  public filterType:string="";
  public filterValue:string=""
}
