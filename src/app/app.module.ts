import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GuesthouseComponent } from './guesthouse/guesthouse.component';

import { OurThemeComponent } from './our-theme/our-theme.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { OurVideoComponent } from './our-video/our-video.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { OurChoiseComponent } from './our-choise/our-choise.component';

import { OurTeamComponent } from './our-team/our-team.component';
import { OurThemeChildComponent } from './our-theme-child/our-theme-child.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './service/data.service';
import { OurChoiseDesertComponent } from './our-choise-desert/our-choise-desert.component';
import { OurMenuChildDesertChoiseComponent } from './our-menu-child-desert-choise/our-menu-child-desert-choise.component';
import { AddToThemeComponent } from './add-to-theme/add-to-theme.component';
import { AddToDesertComponent } from './add-to-desert/add-to-desert.component';

import { AdminComponent } from './admin/admin.component';
import { AddToMenuComponent } from './add-to-menu/add-to-menu.component';
import { PositionSiteComponent } from './position-site/position-site.component';
import { AddToPositionSiteComponent } from './add-to-position-site/add-to-position-site.component';
import { PositionSiteChildComponent } from './position-site-child/position-site-child.component';
import { EditThemeComponent } from './edit-theme/edit-theme.component';
import { EditOptionComponent } from './edit-option/edit-option.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { DisplayThemeComponent } from './display-theme/display-theme.component';
import { DisplayOptionComponent } from './display-option/display-option.component';
import { DisplayMenuComponent } from './display-menu/display-menu.component';
import { AddToTeamComponent } from './add-to-team/add-to-team.component';
import { OurTeamsComponent } from './our-teams/our-teams.component';
import { SearchComponent } from './search/search.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    //YouTubePlayerModule,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    GuesthouseComponent,
 
    
    OurThemeComponent,
    OurHistoryComponent,
    OurVideoComponent,
    OurMenuComponent,
    OurChoiseComponent,
   
    OurTeamComponent,
    OurThemeChildComponent,
    HomeSectionComponent,
    OurChoiseDesertComponent,
    OurMenuChildDesertChoiseComponent,
    AddToThemeComponent,
    AddToDesertComponent,
   
    AdminComponent,
   
    AddToMenuComponent,
   
    PositionSiteComponent,
   
    AddToPositionSiteComponent,
   
    PositionSiteChildComponent,
   
    EditThemeComponent,
   
    EditOptionComponent,
   
    EditMenuComponent,
   
    DisplayThemeComponent,
   
    DisplayOptionComponent,
   
    DisplayMenuComponent,
   
    AddToTeamComponent,
   
    OurTeamsComponent,
   
    SearchComponent,
   
    ReservationComponent,
   
  ],
  imports: [
    BrowserModule,
    //InMemoryWebApiModule.forRoot(DataService),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //YouTubePlayerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
