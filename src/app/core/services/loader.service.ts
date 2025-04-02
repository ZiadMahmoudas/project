import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isloading = new BehaviorSubject(false);


  show() {
    this.isloading.next(true);
  }

  hide() {
    this.isloading.next(false);
  }
}
