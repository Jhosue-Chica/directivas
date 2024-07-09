import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-atributos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atributos.component.html',
  styleUrl: './atributos.component.css'
})
export class AtributosComponent {
  //ngClass
  //Ejer 1
  isClassActive = 'listo';

  //Ejer 2
  buttonStatus: string = 'activo';

  chageButtonStatus(newStatus: string) {
    this.buttonStatus = newStatus;
  }

  //ngStyle
  //Ejer 1
  bgColor = 'blue';
  color = 'white';

  //Ejer 2
  fontSize: String = '16px';
  colorF: String = 'black';
  backgroundColor: String = 'white';

  changeFontSize(event: Event) {
    const target = event.target as HTMLSelectElement;
    const fontSize = target.value + 'px';
    this.fontSize = fontSize;
  }

  changeColor(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.colorF = target.value;
  }

  changeBackgroundColor(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.backgroundColor = target.value;
  }

  resetStyles() {
    this.fontSize = '16px';
    this.colorF = 'black';
    this.backgroundColor = 'white';
  }

}
