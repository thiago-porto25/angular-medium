import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import {
  isLoggedInSelector,
  currentUserSelector,
  isAnonymousSelector
} from "src/app/auth/store/selectors";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html"
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = this.store.pipe(
    select(isLoggedInSelector)
  );
  isAnonymous$: Observable<boolean> = this.store.pipe(
    select(isAnonymousSelector)
  );
  currentUser$: Observable<CurrentUserInterface | null> = this.store.pipe(
    select(currentUserSelector)
  );

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
