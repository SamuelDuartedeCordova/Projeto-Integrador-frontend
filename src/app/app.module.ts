import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./pages/login/login.component";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
