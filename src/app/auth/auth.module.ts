import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { AuthRoutingModule } from "src/app/auth/auth-routing.module";
import { authReducer } from "src/app/auth/store/reducers";

import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { LoginComponent } from "src/app/auth/components/login/login.component";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature("auth", authReducer)
  ],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthModule {}
