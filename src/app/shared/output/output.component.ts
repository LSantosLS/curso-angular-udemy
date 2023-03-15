import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    {nome: "Luis", idade: 26},
    {nome: "Gabriel", idade: 25},
    {nome: "Pedro", idade: 23},
  ];

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }

}
