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
  deleteCarModalOpen = false;
  carToBeDeleted : Car;
  selectedCar : Car;
  constructor(private carService : CarService) { }

  ngOnInit(): void {
  }

  onEdit(car : Car) : void{
    this.carModalOpen = true;
    this.selectedCar = car;
  }

  onDelete(car : Car) : void{
    this.deleteCarModalOpen = true;
    this.carToBeDeleted = car;
  }

  addCar() : void {
    this.selectedCar = undefined;
    this.carModalOpen = true;
  }

  handleFinish(car){
    if(car){

      if(this.selectedCar){

        car.id = this.selectedCar.id;
        this.carService.updateCar(car).subscribe(
          (data : Car) => {
            if(data){
              let index = this.cars.findIndex(c => c.id == car.id);
              this.cars = [
                ...this.cars.slice(0,index),
                data,
                ...this.cars.slice(index+1)
              ]
            }
          },
          (error) => {console.log("error", error);}
        );

      }else{
        this.carService.addcar(car).subscribe(
          (data : Car) => {
            if(data){
              this.cars.push(data);
            }
          },
          (error) => {console.log("error", error);}
        );
      }
    }

    this.carModalOpen = false;
  }


  HandleCancelDelete(){
    this.deleteCarModalOpen = false;
    this.carToBeDeleted = undefined;
  }
  HandleConfirmDelete(){
    this.carService.deleteCar(this.carToBeDeleted).subscribe(
      (data ) => {
        if(data){
         let index = this.cars.findIndex(c=>c.id == this.carToBeDeleted.id);
         this.cars.splice(index,1);
         this.deleteCarModalOpen = false;
        }
      },
      (error) => {console.log("error", error);}
    );
  }


}
