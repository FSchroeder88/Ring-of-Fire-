import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import { AppPlayerMobileComponent } from './app-player-mobile/app-player-mobile.component';


const routes: Routes = [
  {path: '', component: StartScreenComponent},
  {path: 'game/:id', component: GameComponent},    // Diese Route verfügt über eine Variable (/:id)
  {path: '', component: AppPlayerMobileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
