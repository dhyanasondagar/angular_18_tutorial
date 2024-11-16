import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {


  courseName: string = "Angular 18";
  inputType = "checkbox";
  rollNo: number = 1123;
  isIndian: boolean = true;
  currentDate: Date = new Date();
  propertyclass: string = "bg-success p-3 text-white fw-bold"


constructor(){}


showAlert(message: string){
  alert(message);
}


changeCourseName(){
this.courseName = "React ";
}





}
