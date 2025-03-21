import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'; // Importa módulos y decoradores necesarios de Angular.
import { Product } from '../interface/product'; // Importa la interfaz Product que define la estructura de un producto.

@Component({
  selector: 'app-stateless', // Define el selector que se utilizará para este componente en el HTML.
  templateUrl: './stateless.component.html', // Especifica la plantilla HTML que se usará para el componente.
  styleUrls: ['./stateless.component.css'], // Especifica los estilos CSS que se aplicarán a este componente.
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class StatelessComponent implements OnInit { // Define la clase del componente, que implementa OnInit.

  @Output() cursomatriculado: EventEmitter<Product> = new EventEmitter(); // Crea un EventEmitter para emitir el evento de matriculación de un curso.
  @Input() curso!: Product; // Declara una propiedad de entrada que recibe un objeto Product desde un componente padre.
  public matricula!: string; // Declara una propiedad para almacenar el texto del botón de matriculación.
  private disable!: boolean; // Declara una propiedad para manejar el estado de habilitación del botón.

  constructor() {} // Constructor del componente, no se utiliza actualmente.

  ngOnInit(): void { // Método del ciclo de vida de Angular que se llama después de que se inicializa el componente.
    this.matricula = 'Matricularse'; // Inicializa el texto del botón de matriculación.
  }

  matricularse() { // Método que se llama cuando el usuario hace clic en el botón de matriculación.
    this.disable = true; // Cambia el estado de disable a true, deshabilitando el botón.
    this.matricula = '¡Matriculado!'; // Cambia el texto del botón para indicar que el curso ha sido matriculado.
    this.cursomatriculado.emit(this.curso); // Emite el evento cursomatriculado con el curso actual, notificando al componente padre.
  }

  isDisabled() { // Método que retorna el estado de habilitación del botón.
    console.log(this.curso.title);
    return !!this.disable; // Convierte el valor de disable en un booleano (true o false).
  }
}