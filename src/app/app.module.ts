import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component"
import { AppRoutingModule } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
