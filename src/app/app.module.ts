import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";

import { environment } from "../environments/environment";

import { AuthModule } from "src/app/auth/auth.module";

import { AppRoutingModule } from "src/app/app-routing.module";
import { AppComponent } from "src/app/app.component";
import { TopBarModule } from "src/app/shared/modules/top-bar/top-bar.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    AuthModule,
    TopBarModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
