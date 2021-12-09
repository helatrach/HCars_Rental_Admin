import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-delete-car-modal',
  templateUrl: './delete-car-modal.component.html',
  styleUrls: ['./delete-car-modal.component.css']
})
export class DeleteCarModalComponent implements OnInit {

  @Input() car : Car;
  @Output() cancel = new EventEmitter();
  @Output() confirm = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  cancelDelete(){
     this.cancel.emit();
  }

  confirmDelete(){
     this.confirm.emit();
  }

}
