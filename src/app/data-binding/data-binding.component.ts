import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  public nome: string = "Luis";
  public idade: number = 26;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbUx_Hkoe_NmAlbi_tkITeMxl9XJT8lEg3g&usqp=CAU";
  public imgTitle: string = "Property Binding - Angular";

  constructor() {}

}
