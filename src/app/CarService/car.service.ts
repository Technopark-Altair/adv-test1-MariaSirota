import { Injectable } from '@angular/core';
import { Car } from '../model/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  carlist: Array<Car> = [
    {id: 0, brandName: 'Mercedes-Benz', modelName: 'Mercedes-AMG A 35 4MATIC', priceInRub: 7560000},
    {id: 1, brandName: 'BMW', modelName: 'BMW 4 серии Cabrio. сил', priceInRub: 3960000},
    {id: 2, brandName: 'Tesla', modelName: '4WD Model 3', priceInRub: 5450000}
  ];

  constructor() { }

  getCars(){
    return this.carlist;
  }

  getPagecar(id: number){
    return this.carlist.find((el) => el.id === id);
  }
}



