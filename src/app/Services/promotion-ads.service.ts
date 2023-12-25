import { Injectable } from '@angular/core';
import { Observable, count, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionAdsService {
  private adsList: string[];
  constructor() {
    this.adsList = [
      'Big Discounts',
      'Sale up to 50%',
      'Check our white friday offers',
      '',
      'Special white friday offera up to 70%',
    ];
  }
  getScheduleAds(intervalInSeconds: number): Observable<string> {
    /////create observable
    return new Observable<string>((observer) => {
      // observer.next();
      // observer.error();
      // observer.complete();
      let counter = 0;
      let adsTimer = setInterval(() => {
        console.log('In interval');
        if (counter == this.adsList.length) observer.complete();
        if (this.adsList[counter] == '') observer.error('Error : Empty Ad'); /// will terminate the observer
        observer.next(this.adsList[counter]);
        counter++;
      }, intervalInSeconds * 1000);
      return {
        unsubscribe() {
          ///Stop the interval
          ///unsubscribe fn  has been called in 3 cases
          ///1) Error happen
          ///2) complete
          ///3) manual unsubscripe()
          clearInterval(adsTimer);
          console.log('In obs unsubscribe');
        },
      };
    });
  }
  getSerialAds(): Observable<string> {
    /////example for observable operators for craeting observables
    //return of('ad1', 'ad2', 'ad3');
    ////return observable
    return from(this.adsList);
  }
}
