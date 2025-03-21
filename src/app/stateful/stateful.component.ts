import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core'; // Importa los módulos necesarios de Angular.
import { Product } from '../interface/product'; // Importa la interfaz Product que define la estructura de un producto.
import { Shop } from '../models/shop.model'; // Importa el modelo Shop que puede manejar la lógica relacionada con la tienda.
import { ConfirmComponent } from '../confirm/confirm.component';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-stateful', // Define el selector que se utilizará para este componente en el HTML.
  templateUrl: './stateful.component.html', // Especifica la plantilla HTML que se usará para el componente.
  styleUrls: ['./stateful.component.css'] // Especifica los estilos CSS que se aplicarán a este componente.
})
export class StatefulComponent implements OnInit, OnDestroy { // Define la clase del componente, que implementa OnInit.

  @ViewChild(ConfirmComponent, {static:false}) 
  confirmChild!:ConfirmComponent;
  errorHttp!:boolean;
  shopModel: any; // Crea una instancia del modelo Shop, que puede contener información sobre la tienda.
  boughtItems!: Array<Product>; // Declara un arreglo de productos comprados, inicializado más tarde.

  private shopSubscription!: Subscription;

  constructor(private http: HttpClient) {
    this.boughtItems = []; // Inicializa el arreglo de productos comprados como un arreglo vacío.
    this.shopModel = {shopItems:[]}
  }

  ngOnInit(): void {
    this.shopSubscription = this.http.get('assets/cursos.json').subscribe({
      next: (respuesta: any) =>{this.shopModel.shopItems = respuesta;},
      error: (respuesta: Response) =>{this.errorHttp = true;}
  });
  console.log("json importado");
  } // Método del ciclo de vida de Angular que se llama después de que se inicializa el componente. Actualmente está vacío.

  ngOnDestroy(): void {
      this.shopSubscription.unsubscribe();
  }
  
  clickItem(_curso: Product) { // Método que recibe un objeto Product como argumento.
    this.boughtItems.push(_curso); // Agrega el producto recibido al arreglo de productos comprados.
    const total = this.finalPrice(); // Llama a finalPrice para obtener el precio total.
    console.log('Precio total: ', total); // Opcional: muestra el precio total en la consola para depuración.
  }

  cursoMatriculado(_event: Product) { // Método que se llama cuando un curso ha sido matriculado.
    this.clickItem(_event); // Llama a clickItem con el producto recibido para agregarlo a la lista de comprados.
    this.confirmChild.isDisabled = false;
  }

  finalPrice():number {
    // Calcula el precio total sumando los precios de todos los productos comprados.
    return this.boughtItems.reduce((total, item) => total + item.price, 0);

  }
}