import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";

import { environment } from "../environments/environment";

import { PersistanceService } from "./shared/services/persistance.service";
import { AuthInterceptorService } from "./shared/services/auth-interceptor.service";

import { AuthModule } from "src/app/auth/auth.module";
import { TopBarModule } from "src/app/shared/modules/top-bar/top-bar.module";
import { AppRoutingModule } from "src/app/app-routing.module";

import { AppComponent } from "src/app/app.component";

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
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
