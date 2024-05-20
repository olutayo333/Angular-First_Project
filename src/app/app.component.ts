import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { last } from 'rxjs';

interface one{ firstname:string; lastname:string, email:string, age:number}
interface two{firstname:string; age:number}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignuppageComponent, DashboardComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'firstproject';
  public x:number | string = 30;
  private y = 25;
  public school:boolean|string|number=true;
 
  public objone:one={
      firstname:'Oyindamola',
      lastname:'owolabi',
      email:"olutayostephen@gmail.com",
      age:10
    }
  
public objtwo:{firstname:string, lastname:string } ={ firstname:"Olutayo", lastname:"Ayanrinde"}

  public age:number=33; public lastname:string="hello"

  ngOnInit (){
    
    console.log(this.y, this.x);
    this.school = "sqi"
  }

  //ARRAY
  public arrayNumber:(number|string)[]=[1,2,3,4,5,6,7, "olutayo"]
  public arrayString:string[]=["rice", "baens", "yam"]
  
  public arrayObject:two []= [
    {
      firstname:"Oyin",
      age:50
    }
  ]

  public arr2:{}[]= [{firstname:"Oyin"},
  {age:50}]

}
