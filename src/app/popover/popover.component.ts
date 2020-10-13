import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {}

  syncData() {
    this.loadingController.create({
      duration: 5000,
      message: 'Please wait syncing...'
    }).then((load) => {
      load.present();
      load.onDidDismiss();
      this.router.navigate(['/home']);
    })
  }

}
