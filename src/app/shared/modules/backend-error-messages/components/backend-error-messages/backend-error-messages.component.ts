import { Component, Input, OnInit } from "@angular/core";
import { RegisterErrorsInterface } from "src/app/auth/types/RegisterErrors.interface";

@Component({
  selector: "app-backend-error-messages",
  templateUrl: "./backend-error-messages.component.html"
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() errors: RegisterErrorsInterface | null = null;
  parsedErrors: string[] = [];

  ngOnInit() {
    if (this.errors !== null) {
      this.parsedErrors = Object.keys(this.errors).map((key) => {
        const messages = this.errors![key].join(" ");
        return `${key} ${messages}`;
      });
    }
  }
}
