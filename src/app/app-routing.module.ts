import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  {path: '', component: StartScreenComponent},
  {path: 'game/:id', component: GameComponent}    // Diese Route verfügt über eine Variable (/:id)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
