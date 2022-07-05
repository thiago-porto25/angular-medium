import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AuthRoutingModule } from "src/app/auth/auth-routing.module";

import { authReducer } from "src/app/auth/store/reducers";
import { AuthService } from "src/app/auth/services/auth.service";
import { RegisterEffect } from "./store/effects/register.effect";

import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { LoginComponent } from "src/app/auth/components/login/login.component";

import { BackendErrorMessagesModule } from "src/app/shared/modules/backend-error-messages/backend-error-messages.module";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature("auth", authReducer),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule
  ],
  providers: [AuthService],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthModule {}
