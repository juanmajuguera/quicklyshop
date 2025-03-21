import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-status-cart',
  templateUrl: './status-cart.component.html',
  styleUrls: ['./status-cart.component.css']
})
export class StatusCartComponent implements OnInit, OnChanges {

  @Input() price!:number;
  @Input() shopModel!:Array<Product>;
  @Output() add: EventEmitter<null> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
      
  }
  /* El método onChanges puede ser sustituido por doCheck. Este último realiza comprobaciones
  en todo el DOM, tiene un alto coste en memoria y no se recomienda */
  
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }

  confirm(){
    this.add.emit();
  }

}
