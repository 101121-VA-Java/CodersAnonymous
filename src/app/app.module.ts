import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { PriceBannerComponent } from './components/price-banner/price-banner.component';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { NegativeParensPipe } from './pipes/negative-parens.pipe';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './login/login.component';
// for currency exchange -- //
import { CurrencyExchangeComponent } from './components/currency-exchange/currency-exchange.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// end currency exchange -- //
import { ToplistComponent } from './components/toplist/toplist.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { ErrorMsgComponent } from './components/dialogs/error-msg/error-msg.component';
import { SuccessMsgComponent } from './components/dialogs/success-msg/success-msg.component';
import { NgxCaptchaModule } from 'ngx-captcha';


@NgModule({
  declarations: [
    AppComponent,
    PriceBannerComponent,
    UserStatsComponent,
    NegativeParensPipe,
    SignupComponent,
    LoginComponent,
    CurrencyExchangeComponent,
    ToplistComponent,
    UserInfoComponent,  
    LogoutComponent,
    ChatroomComponent,
    ErrorMsgComponent,
    SuccessMsgComponent  


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
