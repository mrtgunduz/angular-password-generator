import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSymbols:boolean = false;
  length: number = 0;

  modifyLength(event: Event) {
    const filtervalue = (event.target as HTMLInputElement).value;
    const parsedValue = parseInt(filtervalue);
    
    if(!isNaN(parsedValue))
     {
      debugger;
this.length = parsedValue;
     }



  }

  modifyNumbers() {
 this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }


  modifyLetters() {
this.includeLetters = !this.includeLetters;
// console.log(this.includeLetters);
  }

  buttonClick() {
    console.log(`Değerlerim;
    Letters : ${this.includeLetters}
    Numbers : ${this.includeNumbers}
    Symbols : ${this.includeSymbols}
    `);
  }
}
