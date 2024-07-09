import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-estructurales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estructurales.component.html',
  styleUrl: './estructurales.component.css'
})
export class EstructuralesComponent {
  //*ngIf
  //1er Ejemplo
  isVisible: boolean = false;

  //2do Ejemplo
  isAuthenticated: boolean = false;

  toggleAuth() {
    this.isAuthenticated = !this.isAuthenticated;
  }

  //*ngFor
  //1er Ejemplo
  items = ['Juan', 'Pedro', 'Diego', 'Carlos'];

  //2do Ejemplo
  tasks: Task[] = [
    { id: 1, name: 'Tarea 1', completed: false },
    { id: 2, name: 'Tarea 2', completed: true },
    { id: 3, name: 'Tarea 3', completed: false },
    { id: 4, name: 'Tarea 4', completed: true }
  ];

  toggleCompletion(task: Task) {
    task.completed = !task.completed;
  }

  //*ngSwitch
  //1er Ejemplo
  color: string = 'green';

  //2do Ejemplo
  role: string = 'guest';

  changeRole(newRole: string) {
    this.role = newRole;
  }

  gerRole() {
    return this.role;
  }
    

}
