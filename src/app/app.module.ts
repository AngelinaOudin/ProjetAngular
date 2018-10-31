import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PonyDetailsComponent } from './pony-details/pony-details.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RacesComponent } from './races/races.component';
import { PonyFormComponent } from './pony-form/pony-form.component';
import { RaceFormComponent } from './race-form/race-form.component';
import { RunnersFormComponent } from './runners-form/runners-form.component';

const routes: Routes = [
  {path: '', component: RacesComponent},
  {path: 'Ponies', component: PoniesComponent},
  {path: 'AddPonies', component: PonyFormComponent},
  {path: 'AddRaces', component: RaceFormComponent},
  {path: 'AddRunners', component: RunnersFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PonyDetailsComponent,
    PoniesComponent,
    RaceDetailsComponent,
    RacesComponent,
    PonyFormComponent,
    RaceFormComponent,
    RunnersFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
