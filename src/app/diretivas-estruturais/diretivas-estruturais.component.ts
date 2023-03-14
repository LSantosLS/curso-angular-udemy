import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{nome: string, idade: number}> = [
    {nome: "Luis Santos", idade: 26},
    {nome: "Bruna Santos", idade: 25},
    {nome: "Pedro Santos", idade: 23},
  ];

  public nome: string = "luis";

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition;
    }, 1000);
  }

  public onClick() {
    this.conditionClick = !this.conditionClick;
  }

  public onClickAddList() {
    this.list.push({nome: "Daniel Ferreira", idade: 31});
  }

  public onClickEventList(event: number){
    this.list.splice(event, 1);
  }
}
