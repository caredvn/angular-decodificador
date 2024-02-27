import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs';

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

  code(): void {
    const currentTextWritten = this.textWritten;
    for (var i = 0; i < this.textWritten.length; i++) {
        var currentLetter = this.textWritten.charAt(i);
        var encryptedIndex = this.letters.indexOf(currentLetter);
        if (encryptedIndex !== -1) {
            this.encryptedFilteredLetter.push(this.encryptedLetters[encryptedIndex]);
            this.filteredLetters.push(this.letters[encryptedIndex])
        }
    }
    this.newText = this.textWritten.replace(new RegExp(this.filteredLetters.join('|'), 'g'), (match) => {
      const index = this.filteredLetters.indexOf(match);
      return this.encryptedFilteredLetter[index];
  });
    this.newTextChange.emit(this.newText)
    this.textWritten = '';
}

decode(): void {
    this.newText = this.textWritten.replace(new RegExp(this.encryptedFilteredLetter.join('|'), 'g'), (match) => {
    const index = this.encryptedFilteredLetter.indexOf(match);
    return this.filteredLetters[index];
    })
  this.newTextChange.emit(this.newText)
  this.textWritten = '';
}

  ngOnInit(): void {
  }

}
