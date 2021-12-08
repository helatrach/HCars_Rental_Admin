import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrls: ['./show-car.component.css']
})
export class ShowCarComponent implements OnInit {

  @Input() cars : Car[]
  carModalOpen = false;
  selectedCar : Car;
  constructor(private carService : CarService) { }

  ngOnInit(): void {
  }

  onEdit(car) : void{
    this.carModalOpen = true;
    this.selectedCar = car;

  }

  onDelete(car) : void{

  }

  addCar() : void {
    this.carModalOpen = true;
  }

  handleFinish(car){
    if(car){

      if(this.selectedCar){

      }else{
        console.log(car);

        this.carService.addcar(car).subscribe(
          (data) => {
            console.log(data);

          },
          (error) => {
            console.log("error", error);

          }
        );
      }
    }

    this.carModalOpen = false;
  }

}
