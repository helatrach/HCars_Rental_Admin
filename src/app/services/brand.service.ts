import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private brandUrl = `${environment.api_brands}`
  GetAllBrands

  constructor(private http : HttpClient) { }

  getBrands(): Observable<Brand[]>{

    return this.http.get<Brand[]>(this.brandUrl+"GetAllBrands")

  }
}
