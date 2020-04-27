import { Component } from '@angular/core';
import { getLocaleWeekEndRange } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public rnd(max){
    return Math.floor(Math.random() * Math.floor(max));
  }

  public intGetal = this.rnd(1000);

  title = 'RaadHetGetal';
  antwoord = "";
  teller = 0;

  reset(){
    this.teller = 0;
    this.antwoord = "";
    this.intGetal = Math.floor(Math.random() * Math.floor(1000));
  }

  raad(gok){
    if(gok < this.intGetal){
      this.antwoord = "HOGER"
    }
    else if (gok > this.intGetal){
      this.antwoord = "LAGER"
    }
    else if (gok == this.intGetal){
      this.antwoord = "goe geraden, het getal is " + gok;
    }
    else {this.antwoord = "seg slimmeke, ge mut wel een getal ingeven he :p";}
    this.teller++;
  }
}
