import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FerrariComponent } from './components/newCars/ferrari/ferrari.component';
import { PorscheComponent } from './components/newCars/porsche/porsche.component';
import { LamborghiniComponent } from './components/newCars/lamborghini/lamborghini.component';
import { IndexComponent } from './components/index/index.component';
import { OldFerrariComponent } from './components/oldcars/old-ferrari/old-ferrari.component';
import { OldPorscheComponent } from './components/oldcars/old-porsche/old-porsche.component';
import { OldLamborghiniComponent } from './components/oldcars/old-lamborghini/old-lamborghini.component';
import { NewFerrariComponent } from './components/videos/new-ferrari/new-ferrari.component';
import { NewPorscheComponent } from './components/videos/new-porsche/new-porsche.component';
import { NewLamborghiniComponent } from './components/videos/new-lamborghini/new-lamborghini.component';
import { OldVideosFerrariComponent } from './components/videos/old-videos-ferrari/old-videos-ferrari.component';
import { OldVideosPorscheComponent } from './components/videos/old-videos-porsche/old-videos-porsche.component';
import { OldVideosLamborghiniComponent } from './components/videos/old-videos-lamborghini/old-videos-lamborghini.component';
import { HistoriaComponent } from './components/historia/historia/historia.component';
import { HistoriaFerrariComponent } from './components/historia/historia-ferrari/historia-ferrari.component';
import { HistoriaPorscheComponent } from './components/historia/historia-porsche/historia-porsche.component';
import { HistoriaLamborghiniComponent } from './components/historia/historia-lamborghini/historia-lamborghini.component';


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component: IndexComponent},
 
  //FOTOS
  {path:"ferrari", component: FerrariComponent},
  {path:"porsche", component: PorscheComponent},
  {path:"lamborghini", component: LamborghiniComponent},

  //OLD FOTOS
  {path:"classicos_ferrari", component: OldFerrariComponent},
  {path:"classicos_porsche", component: OldPorscheComponent},
  {path:"classicos_lamborghini", component: OldLamborghiniComponent},

  //VIDEOS
  {path:"videos_ferrari", component: NewFerrariComponent},
  {path:"videos_porsche", component: NewPorscheComponent},
  {path:"videos_lamborghini", component: NewLamborghiniComponent},

  //OLD VIDEOS  
  {path:"videos_ferrari_classicos", component:OldVideosFerrariComponent },
  {path:"videos_porsche_classicos", component: OldVideosPorscheComponent},
  {path:"videos_lamborghini_classicos", component: OldVideosLamborghiniComponent},

  //HISTÓRIA
  {path:"historia", component:HistoriaComponent },
  {path:"historia_ferrari", component: HistoriaFerrariComponent},
  {path:"historia_porsche", component: HistoriaPorscheComponent},
  {path:"historia_lamborghini", component: HistoriaLamborghiniComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
