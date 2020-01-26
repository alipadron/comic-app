import { Component, OnInit } from "@angular/core";
import { HeroesService, Heroe } from "src/app/services/heroes.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html"
})
export class SearchResultsComponent implements OnInit {
  heroes: Heroe[] = [];
  terminoDeBusqueda: string = "";

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.terminoDeBusqueda = params["termino"];
      this.heroes = this.heroesService.buscarHeroes(this.terminoDeBusqueda);
    });
  }
}
