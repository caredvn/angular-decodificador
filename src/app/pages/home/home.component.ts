import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:string = "Desencriptador";
  textWritten: string = "";
  newText: string = "";

  constructor() { }

  onNewTextChange(newTextValue: string): void {
    this.newText = newTextValue;
  }

  onTextWrittenChange(textWrittenValue: string): void {
    this.textWritten = textWrittenValue;
  }

  ngOnInit(): void {
  }

}
