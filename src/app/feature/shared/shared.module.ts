import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './user/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { FloatLabelModule } from "primeng/floatlabel";
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule ,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    MenubarModule,
    AvatarModule,
    FloatLabelModule,
    CardModule

  ],
  exports : [
    ReactiveFormsModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    MenubarModule,
    AvatarModule,
    FloatLabelModule,
    CardModule

  ]
})
export class SharedModule { }
