import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NavBarComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
