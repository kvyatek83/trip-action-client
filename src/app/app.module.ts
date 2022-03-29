import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ClientOptionsModule } from './client-options/client-options.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { GenderIconPipe } from './pipes/gender-icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    GenderIconPipe,
    ScrollToTopComponent,
    UserListComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClientOptionsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
