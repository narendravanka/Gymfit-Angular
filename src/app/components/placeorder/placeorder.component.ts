import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { gymSchema } from 'src/app/models/gymSchema';
import { DataService } from 'src/app/services/data.service';
import { GymService } from 'src/app/services/gym.service';
@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss'],
})
export class PlaceorderComponent implements OnInit {
  constructor(
    public dataService: DataService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private gymService: GymService
  ) {}
  product?: gymSchema;
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.gymService
      .getProductById(id!)
      .subscribe((data) => (this.product = data));
    console.log('item placed ready to buy ', this.product);
  }

  proceedToBuy() {
    if (
      this.dataService.loginInfo.email &&
      this.dataService.loginInfo.email != ''
    ) {
      console.log('order booked successful');
      alert('success');
    } else {
      this.router.navigate(['login'], {
        queryParams: { redirect: '/placeorder/' + this.product?.id },
      });
    }
  }
}

@Component({
  selector: 'order-success',
  template: `<h1>
      {{ product?.name }} Order placed successfull.
      <span>will be delivered soon</span>
    </h1>
    <img [src]="product?.iconUrl" alt="logo" />`,
})
export class OrderSuccess implements OnInit {
  product?: gymSchema;
  constructor(
    private gymService: GymService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.gymService.getProductById(id!).subscribe((product) => {
      this.product = product;
    });
  }
}
