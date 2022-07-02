import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AuthRoutingModule } from "src/app/auth/auth-routing.module";

import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { LoginComponent } from "src/app/auth/components/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthModule {}
