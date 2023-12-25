import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, subscribeOn } from 'rxjs';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  StoreInfo: StoreData;
  isImageshown: boolean = true;
  private subscription!: Subscription;
  ///if the component will subscripe on many observers
  //private subscribitionList: Subscription[]=[];
  constructor(private promoAds: PromotionAdsService) {
    this.StoreInfo = new StoreData(
      'ITI Store',
      'https://source.unsplash.com/user/c_v_r/300x200',
      ['cairo', 'alex', 'fayoum', 'Qena']
    );
  }

  ngOnInit(): void {
    ////Subscribe on the Observer that you create
    let observer = {
      next: (data: string) => {
        console.log(data); ///this fn indicate what will happen in the next call
      },
      error: (error: string) => {
        console.log(error); ///this fn indicate what will happen in error case
      },
      complete: () => {
        console.log('Ads Finished'); ///this fn indicate what will happen finally
      },
    };
    //this.subscription = this.promoAds.getScheduleAds(3).subscribe(observer);

    // let addSubscribtion: Subscription = this.promoAds
    //   .getScheduleAds(3)
    //   .subscribe(observer);
    ///manaul call for the unsubscribe {this code is async so this code will make subscribe before the subscribe logic excute}
    //so the best place to but your unsubscribe code is in the ondestroy of the component
    // addSubscribtion.unsubscribe();
    ///////////////////////////////////////////////
    ///In case many observers
    ///this.subscribitionList.push(addSubscribtion);

    this.subscription = this.promoAds.getSerialAds().subscribe((ad) => {
      console.log(ad);
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();

    /////in case many subscriptions
    // for (let subscription of this.subscribitionList) {
    //   subscription.unsubscribe();
    // }
  }
  toggleImage(): void {
    this.isImageshown = !this.isImageshown;
    console.log(this.isImageshown);
  }
}
