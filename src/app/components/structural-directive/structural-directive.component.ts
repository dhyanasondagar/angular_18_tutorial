import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  isVisible: boolean = true;
  items: string[] = ['Apple', 'Banana', 'Orange', 'Mango'];
  bgColor: string = '';


  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }


}
