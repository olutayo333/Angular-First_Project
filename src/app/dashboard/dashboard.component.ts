import { Component } from '@angular/core';
import { SellerprofileComponent } from '../sellerprofile/sellerprofile.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SellerprofileComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
