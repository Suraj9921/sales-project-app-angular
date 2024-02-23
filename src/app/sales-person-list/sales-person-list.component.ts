import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {
  salesPersonList : SalesPerson[] = [
    new SalesPerson("Suraj","S","suraj@gmail.com",50000),
    new SalesPerson("Milan","Joseph","milan@gmail.com",60000),
    new SalesPerson("John","Dao","rahul@gmail.com",30000),
    new SalesPerson("Bob","Samual","bob@gmail.com",90000)
  ];
}
