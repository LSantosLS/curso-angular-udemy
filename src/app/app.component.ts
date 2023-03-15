import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- 
    <app-diretivas-estruturais></app-diretivas-estruturais> 
    
    <app-diretivas-atributos>
      <h1>Aulas de Diretivas e Atributos</h1>
      <hr>
    </app-diretivas-atributos>

    <app-diretivas-atributos>
      <h1>Teste</h1>
      <h3>Este é um grande teste</h3>
    </app-diretivas-atributos>
    
    <app-diretivas-atributos></app-diretivas-atributos>
    
    <app-new-component></app-new-component>
    
    <app-input [contador]="addValue"></app-input>
    <br>
    <button (click)="add()"> Add </button>

    -->

    <app-output></app-output>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {

  public addValue: number = 10;

  constructor() { }

  ngOnInit(): void { }

  public add() {
    this.addValue += 1;
  }

}
