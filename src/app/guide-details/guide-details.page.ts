import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guide-details',
  templateUrl: './guide-details.page.html',
  styleUrls: ['./guide-details.page.scss'],
})
export class GuideDetailsPage implements OnInit {
  id: any;
  title: any;
  description: any;
  urlImage: any;

  constructor(
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.title = this.actRoute.snapshot.paramMap.get('title');
    this.description = this.actRoute.snapshot.paramMap.get('description');
    this.urlImage = this.actRoute.snapshot.paramMap.get('urlImage');
  }

}
