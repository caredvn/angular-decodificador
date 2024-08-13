import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-code-area',
  templateUrl: './code-area.component.html',
  styleUrls: ['./code-area.component.css']
})

export class CodeAreaComponent implements OnInit {
  letters: string[] = [];
  @Input() textWritten: string = "";
  @Input() newText: string = "";
  @Output() newTextChange: EventEmitter<string> = new EventEmitter<string>();
  filteredLetters: string[] = [];
  encryptedLetters: string[] = [];
  encryptedFilteredLetter: string[] = [];
  capitalLetter: RegExp = /[A-Z]/;
  accentedLetter: RegExp = /[áàãâéèâíìóòôãúùç]/i;

  constructor() {
    let map = new Map([
      [
        "a", "ai"
      ],
      [
        "e", "enter"
      ],
      [
        "i", "imes"
      ],
      [
        "o", "ober"
      ],
      [
        "u","ufat"
      ]
    ])
    for (let entry of map.entries()) {
      this.letters.push(entry[0])
      this.encryptedLetters.push(entry[1])
    }
  }

  lettersLoop() {
    for (var i = 0; i < this.textWritten.length; i++) {
      var currentLetter = this.textWritten.charAt(i);
        var encryptedIndex = this.letters.indexOf(currentLetter);
        if (encryptedIndex !== -1) {
            this.encryptedFilteredLetter.push(this.encryptedLetters[encryptedIndex]);
            this.filteredLetters.push(this.letters[encryptedIndex])
        }
    }
    return this.encryptedFilteredLetter, this.filteredLetters;
  }

  verifyLetter(text: string): boolean {
    return this.accentedLetter.test(text) || this.capitalLetter.test(text)
  }

  replaceLetters(letterAray: string[], encryptedArray: string[]) {
    this.newText = this.textWritten.replace(new RegExp(letterAray.join('|'), 'g'), (match) => {
      const index = letterAray.indexOf(match);
      return encryptedArray[index];
    });
    return this.newText
  }

  code(): void {
    this.lettersLoop();
    if (this.verifyLetter(this.textWritten)) {
      alert('Por favor, insira apenas letras mínusculas e sem acento.')
    } else {
      this.replaceLetters(this.filteredLetters, this.encryptedFilteredLetter)

      this.newTextChange.emit(this.newText)
      this.textWritten = '';
    }
}

  decode(): void {
    this.lettersLoop();
    this.replaceLetters(this.encryptedFilteredLetter, this.filteredLetters)

    this.newTextChange.emit(this.newText)
    this.textWritten = '';
  }

  ngOnInit(): void {
  }

}
