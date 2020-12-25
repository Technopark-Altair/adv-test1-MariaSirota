import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from '../CarService/car.service';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-pagecar',
  templateUrl: './pagecar.component.html',
  styleUrls: ['./pagecar.component.css']
})
export class PagecarComponent implements OnInit {
  pagecar?: Car;
  //определяет где мы находимся сейчас - ActivatedRoute.
  constructor(private route: ActivatedRoute, private pageService: CarServiceService) { }

  ngOnInit(): void {
    let id: number;
    this.route.params.subscribe(
      (data) => {
        //"+" преобразуем строку в число.
        id = +data.id;
        this.pagecar = this.pageService.getPagecar(id);
      }
    );   
  }  
}
