import { Component } from '@angular/core';

@Component({
  selector: 'app-randomgeneratedpassword',
  templateUrl: './randomgeneratedpassword.component.html',
  styleUrls: ['./randomgeneratedpassword.component.scss'],
})
export class RandomgeneratedpasswordComponent {
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length: number = 0;
  password = '';
  modifyLength(event: Event) {
    const filtervalue = (event.target as HTMLInputElement).value;
    const parsedValue = parseInt(filtervalue);

    if (!isNaN(parsedValue)) {
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
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
