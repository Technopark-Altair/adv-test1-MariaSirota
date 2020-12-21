import { Injectable } from '@angular/core';
import { Car } from '../title/title.component';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  [x: string]: any;


  CarDes: Array<Car> = [
    {id: 0, brandName: 'BMW',  modelName: 'BMW 4 серия', priceInRub: 5200000},
    {id: 1, brandName: 'BMW2',  modelName: 'BMW 42 серия', priceInRub: 7200000},
    {id: 2, brandName: 'BMW3',  modelName: 'BMW 43 серия', priceInRub: 8200000},
  ]


  constructor() { }
}
