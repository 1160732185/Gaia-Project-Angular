import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GaiamapComponent} from './gaiamap/gaiamap.component';
import {LoginformComponent} from './loginform/loginform.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import {TextngzorroComponent} from './textngzorro/textngzorro.component';
import {RaceinfoComponent} from './raceinfo/raceinfo.component';
import {CreategameComponent} from './creategame/creategame.component';
import {FileComponent} from './file/file.component';
import {MainpageMobileComponent} from './mainpage-mobile/mainpage-mobile.component';
import {PendinggameComponent} from './pendinggame/pendinggame.component';
import {LeagueComponent} from './league/league.component';
import {PlayerComponent} from './player/player.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'map', component: GaiamapComponent },
  { path: 'login', component: LoginformComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'ngz', component: TextngzorroComponent },
  { path: 'race', component: RaceinfoComponent },
  { path: 'creategame', component: CreategameComponent },
  { path: 'pendinggame', component: PendinggameComponent },
  { path: 'game/:gameid', component: GaiamapComponent },
  { path: 'player/:userid', component: PlayerComponent },
  { path: 'league/:leagueid', component: LeagueComponent },
  { path: 'file', component: FileComponent },
  { path: 'mainpagemobile', component: MainpageMobileComponent},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
