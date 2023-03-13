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

  constructor() {}

}
