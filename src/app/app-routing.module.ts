import { NgModule } from '@angular/core';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';
import { DatailPokemonComponent } from './components/datail-pokemon/datail-pokemon.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListPokemonsComponent },
  { path: 'datail/:name', component: DatailPokemonComponent },
  { path: '**', component: ListPokemonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
