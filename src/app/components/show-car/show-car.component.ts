import { HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { environment } from 'src/environments/environment';

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
  baseUrlImage = environment.api_show ;
  uploadProgress = 0;

  file : File;
  constructor(private carService : CarService, private fileService : FileUploadService) { }

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

  uploadImage(event){
    return new Promise(
      (resolve, reject) =>{
       switch (event.type) {
         case HttpEventType.Sent:
           break;
         case HttpEventType.UploadProgress:
             this.uploadProgress = Math.round(event.loaded / event.total * 100);
             if(this.uploadProgress = 100 ){
               resolve(true);
             }
             break;
         case HttpEventType.Response:
          console.log(event.body);
          setTimeout(() => {
            this.uploadProgress = 0
          }, 1500);
       }
      }
    )


 }


  handleFinish(event){
    if(event.car){
      if(this.selectedCar){
        this.updateCarToApi(event)
      }else{
        this.addCarToApi(event)
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
         this.fileService.deleteFile(this.carToBeDeleted.imageUrl).subscribe(

          (data)=> {
            console.log(data)
          },
          (error) => {
            console.log("error" + error);
          }
        )


        }
      },
      (error) => {console.log("error", error);}
    );
  }


  addCarToApi(event){
    this.carService.addcar(event.car).subscribe(
      (data : Car) => {
        if(data){
          if(event.file){
            this.fileService.uploadImage(event.file, data.id).subscribe(
              (data)=> {
              },
              (error) => {
                console.log("error" + error);

              }
            )
          }
          this.cars.push(data);
        }
      },
      (error) => {console.log("error", error);}
    );
  }

  updateCarToApi(event){

    event.car.id = this.selectedCar.id;
    this.carService.updateCar(event.car).subscribe(
      (data : Car) => {
        if(data){
          if(event.file){
            this.fileService.uploadImage(event.file, this.selectedCar.id).subscribe(
              (data)=> {
              },
              (error) => {
                console.log("error" + error);
              }
            )
            this.fileService.deleteFile(event.car.oldImageUrl).subscribe(

              (data)=> {
                console.log(data)
              },
              (error) => {
                console.log("error" + error);
              }
            )

          }
          let index = this.cars.findIndex(c => c.id == event.car.id);
          this.cars = [
            ...this.cars.slice(0,index),
            data,
            ...this.cars.slice(index+1)
          ]
        }
      },
      (error) => {console.log("error", error);}
    );
  }

}
