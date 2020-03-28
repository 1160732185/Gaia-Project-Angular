import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GaiamapComponent } from './gaiamap/gaiamap.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginformComponent } from './loginform/loginform.component';
import {FormsModule} from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { TextngzorroComponent } from './textngzorro/textngzorro.component';
import { LeftControlComponent } from './left-control/left-control.component';
import { RaceinfoComponent } from './raceinfo/raceinfo.component';
import { CreategameComponent } from './creategame/creategame.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileComponent } from './file/file.component';
import { MainpageMobileComponent } from './mainpage-mobile/mainpage-mobile.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { GaiamapmobileComponent } from './gaiamapmobile/gaiamapmobile.component';
import { PendinggameComponent } from './pendinggame/pendinggame.component';
import { LeagueComponent } from './league/league.component';
import { PlayerComponent } from './player/player.component';
registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    GaiamapComponent,
    LoginformComponent,
    MainpageComponent,
    TextngzorroComponent,
    LeftControlComponent,
    RaceinfoComponent,
    CreategameComponent,
    FileComponent,
    MainpageMobileComponent,
    GaiamapmobileComponent,
    PendinggameComponent,
    LeagueComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgZorroAntdMobileModule
  ],
  providers   : [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
