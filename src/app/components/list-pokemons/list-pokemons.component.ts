import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, Subscription } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent {

  loading: boolean = false;

  apiError: boolean = false;

  showLoadMore: boolean = true;

  subscriptions: Subscription[] = [];

  constructor(private pokemonService: PokemonService) { }

  get pokemons(): any[] {
    return this.pokemonService.pokemons;
  }

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    if (!this.pokemons.length) {
      this.loadMore();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription ? subscription.unsubscribe() : 0);
  }

  loadMore(): void {
    this.loading = true;
    this.subscription = this.pokemonService.getNext().subscribe(response => {
      this.pokemonService.next = response.next;
      const details = response.results.map((i: any) => this.pokemonService.get(i.name));
      this.subscription = concat(...details).subscribe((response: any) => {
        this.pokemonService.pokemons.push(response);
        this.showLoadMore = true;
      });
    }, error => {
      console.log('Error has occurred:', error);
      this.apiError = true;
    }, () => this.loading = false) 
  }

  getType(pokemon: any): string {
    return this.pokemonService.getType(pokemon);
  }

  search(value: any){
    if(value == ""){
      this.pokemonService.reset()
      this.loadMore();
    }else{
      this.pokemonService.filter(value);
    }
    if(this.pokemonService.pokemons.length == 0){
      this.showLoadMore = false
    }else{
      this.showLoadMore = true
    }
  }

  resetAll(){
    this.pokemonService.reset()
    this.loadMore();
  }
  
}
