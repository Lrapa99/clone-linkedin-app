import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedComponent } from './components/feed/feed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OtherInfoComponent } from './components/other-info/other-info.component';

import { FormsModule } from '@angular/forms';

// angular material


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    FeedComponent,
    OtherInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
