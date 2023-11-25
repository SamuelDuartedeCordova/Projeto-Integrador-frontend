import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { AppRoutingModule } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
