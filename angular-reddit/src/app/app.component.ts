import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = new Array<string>();
  onClick(testo: HTMLInputElement, numero: HTMLInputElement) {
    let frase = testo.value;
    let num = Number(numero.value);
    //console.log(`dati ricevuti ${frase} - ${num} `);

    for (let index = 0; index < num; index++) {
     this.articles.push(frase);

    }

    return false
  }
}
