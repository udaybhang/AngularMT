import { Component, OnInit } from '@angular/core';
import { BridgeService } from 'src/app/share/bridge.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  num: any;
  constructor(private bServ: BridgeService) { }

  ngOnInit(): void {
    this.bServ.share.subscribe(x => {
      this.num = !isNaN(x) ?  x : ''
      // this.num = x;
    })
  }

}
