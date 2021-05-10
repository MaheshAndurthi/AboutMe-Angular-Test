import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeModule } from './aboutMe/aboutMe.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,RoutingComponent
  ],
  imports: [
    BrowserModule,
    AboutMeModule, RouterModule,AppRoutingModule, HttpClientModule, BrowserAnimationsModule,  MatCardModule,MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
