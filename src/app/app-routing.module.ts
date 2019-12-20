import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { BiotechnologyComponent } from './categories/biotechnology/biotechnology.component';
import { ElectricalComponent } from './categories/electrical/electrical.component';
import { EmergingComponent } from './categories/emerging/emerging.component';
import { HardwareComponent } from './categories/hardware/hardware.component';
import { HydraulicComponent } from './categories/hydraulic/hydraulic.component';
import { IndustrialComponent } from './categories/industrial/industrial.component';
import { OtherComponent } from './categories/other/other.component';
import { QuantumComponent } from './categories/quantum/quantum.component';
import { RoboticComponent } from './categories/robotic/robotic.component';
import { SoftwareComponent } from './categories/software/software.component';
import { ShowpostComponent } from './showpost/showpost.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchUserComponent } from './search-user/search-user.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent,}, //canActivate: [AuthGuard]},
  { path: 'bio', component: BiotechnologyComponent },
  { path: 'electrical', component: ElectricalComponent},
  { path: 'emerging', component: EmergingComponent},
  { path: 'hardware', component: HardwareComponent},
  { path: 'hydraulic', component: HydraulicComponent},
  { path: 'industrial', component: IndustrialComponent},
  { path: 'other', component: OtherComponent},
  { path: 'quantum', component: QuantumComponent},
  { path: 'robotic', component: RoboticComponent},
  { path: 'software', component: SoftwareComponent},
  { path: 'showpost', component: ShowpostComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'messages', component: SearchUserComponent},
  { path: '**', pathMatch:'full', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
