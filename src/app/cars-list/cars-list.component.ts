import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from '../CarService/car.service';
import { Car} from '../model/car.model';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})

export class CarsListComponent implements OnInit {

 constructor(private titleService: CarServiceService) { }

  carlist?: Array<Car>; 

  ngOnInit(): void {
    this.carlist = this.titleService.getCars();
  }

}