import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {
  order:number = 0;
  counts:number = 0;
  orders = [];
  workInterval:any;

  constructor() { }

  ngOnInit(): void {
  }

  addOrder() {
    this.order = this.counts + 1;
    this.orders.push(this.order);
    this.counts++;
  }


  onStartWorkday() {
    this.workInterval = setInterval(() => {this.addOrder()}, 2000);

  }

  onEndWorkday() {
    clearInterval(this.workInterval);

  }

}
