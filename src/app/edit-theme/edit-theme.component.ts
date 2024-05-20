import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-theme.component.html',
  styleUrl: './edit-theme.component.css'
})
export class EditThemeComponent {
  public selectedColor:string = "#000000";
  public selectedFont:string= "";
  public selectedLogo:string="";
  public saving:boolean = false;

}
