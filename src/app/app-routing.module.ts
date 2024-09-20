import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/shared/user/login/login.component';
import { MainLayoutComponent } from './feature/shared/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
      path:"login",
      component: LoginComponent
  },
  {
    path: "admin",
    component:MainLayoutComponent,
    loadChildren: () =>
      import("./feature/admin/admin.module").then(
        (m) => m.AdminModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
