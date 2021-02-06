import { Component, OnInit } from '@angular/core';
import { BridgeService } from 'src/app/share/bridge.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  // num: Number = 0;
  updatedVal: any = 0;
  findData: any;
  constructor(private bServ: BridgeService) { }
  setReset(k:any) {
    this.findData = k;
  }
  updateVal(data: any) {
    if(this.updatedVal <= 0) {
      this.findData = data;
    }
    this.findData = parseInt(this.findData) + 1;
    this.bServ.updateData(this.findData);
  }

  ngOnInit(): void {
  }

}
