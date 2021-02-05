import { Component, OnInit } from '@angular/core';
import { BridgeService } from 'src/app/share/bridge.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  num: Number = 0;
  constructor(private bServ: BridgeService) { }
  updateVal(data:any) {
    this.num = parseInt(data) + 1;
    this.bServ.updateData(this.num);
  }

  ngOnInit(): void {
  }

}
