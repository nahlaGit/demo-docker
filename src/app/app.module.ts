import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestServiceService} from './service/request-service.service';
import { ListFilmComponent } from './components/list-film/list-film.component'
@NgModule({
  declarations: [
    AppComponent,
    ListFilmComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [RequestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
