import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signuppage',
  standalone: true,
  imports: [],
  templateUrl: './signuppage.component.html',
  styleUrl: './signuppage.component.css'
})
export class SignuppageComponent {
  constructor(public router:Router){}
  nextPage(){
    console.log(56);
    
    this.router.navigate(['dashboard'])
  }
}
