import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { SoftwareComponent } from './categories/software/software.component';
import { HardwareComponent } from './categories/hardware/hardware.component';
import { ElectricalComponent } from './categories/electrical/electrical.component';
import { QuantumComponent } from './categories/quantum/quantum.component';
import { IndustrialComponent } from './categories/industrial/industrial.component';
import { HydraulicComponent } from './categories/hydraulic/hydraulic.component';
import { RoboticComponent } from './categories/robotic/robotic.component';
import { BiotechnologyComponent } from './categories/biotechnology/biotechnology.component';
import { EmergingComponent } from './categories/emerging/emerging.component';
import { OtherComponent } from './categories/other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SoftwareComponent,
    HardwareComponent,
    ElectricalComponent,
    QuantumComponent,
    IndustrialComponent,
    HydraulicComponent,
    RoboticComponent,
    BiotechnologyComponent,
    EmergingComponent,
    OtherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
