import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GaiamapComponent} from './gaiamap/gaiamap.component';
import {LoginformComponent} from './loginform/loginform.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import {TextngzorroComponent} from './textngzorro/textngzorro.component';
import {RaceinfoComponent} from './raceinfo/raceinfo.component';
import {CreategameComponent} from './creategame/creategame.component';


const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  { path: 'map', component: GaiamapComponent },
  { path: 'login', component: LoginformComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'ngz', component: TextngzorroComponent },
  { path: 'race', component: RaceinfoComponent },
  { path: 'creategame', component: CreategameComponent },
  { path: 'game/:gameid', component: GaiamapComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
