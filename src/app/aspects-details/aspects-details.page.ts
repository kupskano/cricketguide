import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aspects-details',
  templateUrl: './aspects-details.page.html',
  styleUrls: ['./aspects-details.page.scss'],
})
export class AspectsDetailsPage implements OnInit {

  id: any;
  title: any;
  description: any;
  icon: any;

  constructor(
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.title = this.actRoute.snapshot.paramMap.get('title');
    this.description = this.actRoute.snapshot.paramMap.get('description');
    this.icon = this.actRoute.snapshot.paramMap.get('icon');
  }

}
