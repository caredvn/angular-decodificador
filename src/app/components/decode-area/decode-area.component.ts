import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-decode-area',
  templateUrl: './decode-area.component.html',
  styleUrls: ['./decode-area.component.css']
})
export class DecodeAreaComponent implements OnInit {
  @Input() newText: string = "";
  @Input() textWritten: string = "";
  @Output() newTextWrittenChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    // private clipboardApi: ClipboardService
  ) { }

  copyText() {
    // this.clipboardApi.copyFromContent(this.textWritten)
  }

  ngOnInit(): void {
  }



}
