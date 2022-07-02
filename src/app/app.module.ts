import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";

import { AuthModule } from "src/app/auth/auth.module";

import { AppRoutingModule } from "src/app/app-routing.module";
import { AppComponent } from "src/app/app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
