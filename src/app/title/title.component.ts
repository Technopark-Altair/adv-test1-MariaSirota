import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../service/car-service.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private titleService: CarServiceService) { }

getCars(){
    return this.CarDes;
  }

userStricts: boolean = false;

CarDes: Array<Car>;

tableNames: Array<string> = [
  'Красиный', 'Синий', 'Желтый'
]

  ngOnInit(): void {
    this.CarDes = this.titleService.getCars();
  }

  userStrict(){
    this.userStricts =! this.userStricts;
  }

}

export interface Car{
  id: number;
  brandName: string;
  modelName: string;
  priceInRub: number;
}


