import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-login',
  imports:[ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
constructor(private fb:FormBuilder,private render: Renderer2){}
loginForm = this.fb.group({
  email:['',[Validators.required,Validators.pattern(/\w+@(gmail|mail|outlook).(com|net|org)$/i)]],
  password:['',[Validators.required,Validators.pattern(/^\w{4,15}$/i)]]
})
get email(){
  return this.loginForm.controls.email
}
get password(){

  return this.loginForm.controls.password
}
ngOnInit(): void {
  // this.password.valueChanges.subscribe(_ => {
  //   console.log("invalid?", this.password?.invalid);
  //   console.log("touched?", this.password?.touched);
  //   console.log("Errors:", this.password?.errors);
  // });
}

@ViewChild("btneye1") btn: ElementRef
@ViewChild('passwordInput') passwordInput: ElementRef;
appear(){
  const passwordField = this.passwordInput.nativeElement;
  const eyeIcon = this.btn.nativeElement;
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    this.render.addClass(eyeIcon, 'bi-eye-slash-fill');
    this.render.removeClass(eyeIcon, 'bi-eye-fill');
  } else {
    passwordField.type = 'password';
    this.render.addClass(eyeIcon, 'bi-eye-fill');
    this.render.removeClass(eyeIcon, 'bi-eye-slash-fill');
  }
}
sumbit(){

}
}

