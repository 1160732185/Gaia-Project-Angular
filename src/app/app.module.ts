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
import { MainContentComponent } from './mainpage/main-content/main-content.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { TextngzorroComponent } from './textngzorro/textngzorro.component';
registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    GaiamapComponent,
    LoginformComponent,
    MainpageComponent,
    MainContentComponent,
    TextngzorroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  providers   : [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
