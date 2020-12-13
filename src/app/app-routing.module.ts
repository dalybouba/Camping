import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToDesertComponent } from './add-to-desert/add-to-desert.component';
import { AddToMenuComponent } from './add-to-menu/add-to-menu.component';
import { AddToPositionSiteComponent } from './add-to-position-site/add-to-position-site.component';
import { AddToTeamComponent } from './add-to-team/add-to-team.component';

import { AddToThemeComponent } from './add-to-theme/add-to-theme.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { DisplayMenuComponent } from './display-menu/display-menu.component';
import { DisplayOptionComponent } from './display-option/display-option.component';
import { DisplayThemeComponent } from './display-theme/display-theme.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { EditOptionComponent } from './edit-option/edit-option.component';
import { EditThemeComponent } from './edit-theme/edit-theme.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { OurChoiseComponent } from './our-choise/our-choise.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { PositionSiteComponent } from './position-site/position-site.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-choice/:category', component: OurChoiseComponent },
  { path: 'our-menu/:category/:sousCategory', component: OurMenuComponent },
  { path: 'our-menu/:category/:sousCategory/:location', component: OurMenuComponent },


  { path: 'add-to-theme', component: AddToThemeComponent },
  { path: 'add-to-desert', component: AddToDesertComponent },
  { path: 'add-to-menu', component: AddToMenuComponent },
  { path: 'add-to-position-site', component: AddToPositionSiteComponent },
  { path: 'add-to-team', component: AddToTeamComponent },

  { path: 'edit-theme/:id', component: EditThemeComponent },
  { path: 'display-theme/:id', component: DisplayThemeComponent },
  { path: 'edit-option/:id', component: EditOptionComponent },
  { path: 'display-option/:id', component: DisplayOptionComponent },
  { path: 'edit-menu/:id', component: EditMenuComponent },
  { path: 'display-menu/:id', component: DisplayMenuComponent },

  { path: 'admin', component: AdminComponent },
  { path: 'position-site', component: PositionSiteComponent },


  { path: 'signup', component: SignupComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
