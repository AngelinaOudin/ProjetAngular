import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PickListModule } from 'primeng/picklist';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PonyDetailsComponent } from './pony-details/pony-details.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RacesComponent } from './races/races.component';
import { PonyFormComponent } from './pony-form/pony-form.component';
import { RaceFormComponent } from './race-form/race-form.component';
import { PonyReactiveFormComponent } from './pony-reactive-form/pony-reactive-form.component';
import { RaceReactiveFormComponent } from './race-reactive-form/race-reactive-form.component';
import { PonyComponent } from './pony/pony.component';
import { DeletePonyComponent } from './delete-pony/delete-pony.component';
import { ConnectionReactiveFormComponent } from './connection-reactive-form/connection-reactive-form.component';
import { RaceComponent } from './race/race.component';
import { PonyTransformPipe } from './pony-transform.pipe';

const routes: Routes = [
  { path: '', component: RacesComponent },
  { path: 'Ponies', component: PoniesComponent },
  { path: 'AddPonies', component: PonyReactiveFormComponent },
  { path: 'UpdatePony/:id', component: PonyReactiveFormComponent },
  { path: 'AddRaces', component: RaceReactiveFormComponent },
  { path: 'UpdateRace/:id', component: RaceReactiveFormComponent },
  { path: 'Pony/:id', component: PonyComponent }, // Permet d'afficher un poney selon l'id
  { path: 'DeletePony/:id', component: DeletePonyComponent },
  { path: 'Connecting', component: ConnectionReactiveFormComponent},
  { path: 'Race/:id', component: RaceComponent}
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
    PonyReactiveFormComponent,
    RaceReactiveFormComponent,
    PonyComponent,
    DeletePonyComponent,
    ConnectionReactiveFormComponent,
    RaceComponent,
    PonyTransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule,
    PickListModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
