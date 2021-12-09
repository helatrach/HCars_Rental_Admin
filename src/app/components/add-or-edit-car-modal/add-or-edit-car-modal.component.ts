import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-add-or-edit-car-modal',
  templateUrl: './add-or-edit-car-modal.component.html',
  styleUrls: ['./add-or-edit-car-modal.component.css']
})
export class AddOrEditCarModalComponent implements OnInit ,OnChanges ,OnDestroy{

  @Input() car : Car;
  @Output() finish = new EventEmitter();

  carForm : FormGroup;
  brands : Brand[];
  brandSub : Subscription;
  idBrand :number = 1;
  file : File;


  constructor(private fb: FormBuilder, private brandService : BrandService) {

    this.carForm = fb.group({
      carInfos : fb.group({
        year: ['', Validators.required],
        model : ['', Validators.required],
        pricePerDay : ['', Validators.required],
        color : ['', Validators.required],
        mileage : ['', Validators.required],
        power : ['', Validators.required]
      })
    })
  }
  ngOnChanges(): void {
    if(this.car){
      this.updateForm(this.car)
    }
  }


  updateForm(car : Car){
    this.carForm.patchValue({
      carInfos : {
        year : car.year,
        model: car.model,
        pricePerDay : car.pricePerDay,
        color : car.color,
        mileage : car.mileage,
        power : car.power
      }

    });

     this.selectBrand(car.brandId);
  }

  selectBrand(id:number){
    this.idBrand = id;
  }


  get isCarInfoInvalid(): boolean{
    return this.carForm.get('carInfos').invalid;
  }

  handleCancel(){
    this.finish.emit();
    this.close();
  }

  handleFinish(){
    const car = {
      ...this.carForm.get('carInfos').value,
      brandId : this.idBrand
    }

    this.finish.emit(car);
    this.close();
  }

  close(){
    this.carForm.reset();
    this.idBrand = 1;
  }



  ngOnDestroy(): void {
    this.brandSub.unsubscribe();
  }

  ngOnInit(): void {
    this.brandSub = this.brandService.getBrands().subscribe(
      (data : Brand[]) => {
        this.brands = data;
      }
    )
  }



}
