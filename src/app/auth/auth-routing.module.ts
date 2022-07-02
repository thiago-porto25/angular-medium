import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { LoginComponent } from "src/app/auth/components/login/login.component";

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
