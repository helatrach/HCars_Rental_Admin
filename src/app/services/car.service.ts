import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carUrl = `${environment.api_cars}`



  constructor(private http : HttpClient) { }

  getCars() : Observable<Car[]>{
    return this.http.get<Car[]>(this.carUrl + "GetAllCars");
  }

  addcar(car : Car) : Observable<any>{
    car.imageUrl = "url";
    car.locationId =1;
   return  this.http.post(this.carUrl +"AddCar",car);
  }
}
