import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AuthRoutingModule } from "src/app/auth/auth-routing.module";
import { BackendErrorMessagesModule } from "src/app/shared/modules/backend-error-messages/backend-error-messages.module";

import { AuthService } from "src/app/auth/services/auth.service";
import { PersistanceService } from "../shared/services/persistance.service";

import { authReducer } from "src/app/auth/store/reducers";
import { RegisterEffect } from "src/app/auth/store/effects/register.effect";
import { LoginEffect } from "src/app/auth/store/effects/login.effect";

import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { LoginComponent } from "src/app/auth/components/login/login.component";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature("auth", authReducer),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrorMessagesModule
  ],
  providers: [AuthService, PersistanceService],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthModule {}
