import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars;
  carSub;


  constructor(private carService : CarService) { }

  ngOnInit(): void {
    this.carSub = this.carService.getCars().subscribe(
      (data : Car[]) => {
        this.cars = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
