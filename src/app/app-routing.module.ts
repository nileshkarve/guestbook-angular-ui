import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookentryComponent } from './bookentry/bookentry.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/authguard.service';

const routes: Routes = [
  { path: 'bookentry', component: BookentryComponent, canActivate: [AuthGaurdService] },
  { path: 'addEntry', component: AddEntryComponent, canActivate: [AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
