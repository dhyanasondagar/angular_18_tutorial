import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
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
  isIndian: boolean = false;
  currentDate: Date = new Date();
  propertyclass: string = "bg-success p-3 text-white fw-bold"
  stateCity: string = "Banglore";
  nameofStudent: string = "Reena";
  firstName = signal("Rakesh");
bgClass = signal("bg-danger text-white p-3 mb-3")

constructor(){}


showAlert(message: string){
  alert(message);
}


changeCourseName(){
this.courseName = "React ";
}


chnageFirstName(){
  this.firstName.set("Reena");
}


}
