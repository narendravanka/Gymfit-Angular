import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { gymSchema } from 'src/app/models/gymSchema';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product?: gymSchema;
  constructor(
    private activatedRoute: ActivatedRoute,
    private gymService: GymService
  ) {}
  ngOnInit(): void {
    // this.dataService.getGym().subscribe((data: any) => {
    //   this.gym = data as gymSchema;
    // });
    console.log(' heelo this is Product component');
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.gymService
      .getProductById(id!)
      .subscribe((product) => (this.product = product));
  }
  onBuyGym() {
    console.log('gym booked', this.product);
  }
}
