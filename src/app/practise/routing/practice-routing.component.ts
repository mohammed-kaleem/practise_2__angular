import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'practice-routing',
  templateUrl: './practice-routing.component.html',
  styleUrls: ['./practice-routing.component.css']
})
export class PracticeRoutingComponent {
  @ViewChild('f') signUpForm: NgForm;
  genders = ['male', 'female']
  onSubmit(){
    console.log(this.signUpForm);    
  }
  
  // onSubmit(form: NgForm){
  //   console.log(form);    
  // }
  
}
