import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { FerrariComponent } from './components/newCars/ferrari/ferrari.component';
import { PorscheComponent } from './components/newCars/porsche/porsche.component';
import { LamborghiniComponent } from './components/newCars/lamborghini/lamborghini.component';
import { IndexComponent } from './components/index/index.component';
import { OldFerrariComponent } from './components/oldcars/old-ferrari/old-ferrari.component';
import { OldPorscheComponent } from './components/oldcars/old-porsche/old-porsche.component';
import { OldLamborghiniComponent } from './components/oldcars/old-lamborghini/old-lamborghini.component';
import { NewLamborghiniComponent } from './components/videos/new-lamborghini/new-lamborghini.component';
import { NewFerrariComponent } from './components/videos/new-ferrari/new-ferrari.component';
import { NewPorscheComponent } from './components/videos/new-porsche/new-porsche.component';
import { OldVideosLamborghiniComponent } from './components/videos/old-videos-lamborghini/old-videos-lamborghini.component';
import { OldVideosFerrariComponent } from './components/videos/old-videos-ferrari/old-videos-ferrari.component';
import { OldVideosPorscheComponent } from './components/videos/old-videos-porsche/old-videos-porsche.component';
import { HistoriaComponent } from './components/historia/historia/historia.component';
import { HistoriaFerrariComponent } from './components/historia/historia-ferrari/historia-ferrari.component';
import { HistoriaPorscheComponent } from './components/historia/historia-porsche/historia-porsche.component';
import { HistoriaLamborghiniComponent } from './components/historia/historia-lamborghini/historia-lamborghini.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FerrariComponent,
    PorscheComponent,
    LamborghiniComponent,
    IndexComponent,
    OldFerrariComponent,
    OldPorscheComponent,
    OldLamborghiniComponent,
    NewLamborghiniComponent,
    NewFerrariComponent,
    NewPorscheComponent,
    OldVideosLamborghiniComponent,
    OldVideosFerrariComponent,
    OldVideosPorscheComponent,
    HistoriaComponent,
    HistoriaFerrariComponent,
    HistoriaPorscheComponent,
    HistoriaLamborghiniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
