import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  private content = new Subject<any>();
  public share = this.content.asObservable();
  constructor() { }

  updateData(num: Number) {
    this.content.next(num);
  }
}
