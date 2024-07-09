import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstructuralesComponent } from './estructurales/estructurales.component';
import { AtributosComponent } from './atributos/atributos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EstructuralesComponent,AtributosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directivas';

}
