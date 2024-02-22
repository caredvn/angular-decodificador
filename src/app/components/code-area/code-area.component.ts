import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-area',
  templateUrl: './code-area.component.html',
  styleUrls: ['./code-area.component.css']
})

export class CodeAreaComponent implements OnInit {
  text: string = "";
  textLetters: string[] = [];
  letter: any[] = [];
  encryptedLetter: any[] = []

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
    for (let key of map.keys()) {
      this.letter.push(key)
    }
    for (let value of map.values()) {
      this.encryptedLetter.push(value)
    }
  }

  code(): void {
    for(let i = 0; i < this.text.length; i++) {
      this.textLetters.push(this.text.charAt(i))
    }
    if(this.letter)
    console.log(this.textLetters)
    console.log(this.letter)
  }
  //   code(): void {
  //     for(var i = 0; i < this.text.length; i++) {
  //       this.letters.push(this.text.charAt(i))
  //     }

  //     for(var i = 0; i < this.words.length; i++){
  //       this.words[i][0] = this.letter
  //       // if(this.letter == this.letters.values()) {
  //       //   console.log()
  //       // }
  //     }
  //     console.log(this.letters)
  //   }


  // text: string = "";
  // letter: string = "";
  // letters: string[] = []
  // wordCounting: number = 0;
  // encriptedLetter: string = "";



  // words: string[][] = [
  //   ["i", "imes"],
  //   ["e", "enter"],
  //   ["a", "ai"],
  //   ["o", "ober"],
  //   ["u", "ufat"],
  // ]


  ngOnInit(): void {
  }

}
