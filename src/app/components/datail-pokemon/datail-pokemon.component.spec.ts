import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailPokemonComponent } from './datail-pokemon.component';

describe('DatailPokemonComponent', () => {
  let component: DatailPokemonComponent;
  let fixture: ComponentFixture<DatailPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatailPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
