import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-decode-area',
  templateUrl: './decode-area.component.html',
  styleUrls: ['./decode-area.component.css']
})
export class DecodeAreaComponent implements OnInit {
  @Input() newText: string = "";
  @Input() textWritten: string = "";
  @Output() newTextWrittenChange: EventEmitter<string> = new EventEmitter<string>();

  constructor( private clipboard: Clipboard ) { }

  copy(value: string) {
    this.clipboard.copy(value)
    this.newText = '';
  }

  ngOnInit(): void {
  }



}
