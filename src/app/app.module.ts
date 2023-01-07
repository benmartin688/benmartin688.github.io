import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgParticlesModule } from 'ng-particles';
import { HelloPageComponent } from './home/hello-page/hello-page.component';
import { AboutPageComponent } from './home/about-page/about-page.component';
import { EducationPageComponent } from './home/education-page/education-page.component';
import { IvyCarouselModule } from 'carousel-angular';
import { ExperiencePageComponent } from './home/experience-page/experience-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloPageComponent,
    AboutPageComponent,
    EducationPageComponent,
    ExperiencePageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    IvyCarouselModule,
  ],
})
export class AppModule {}
