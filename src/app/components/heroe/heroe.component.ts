import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Heroe, HeroesService } from "src/app/services/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;
  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.heroe = this.heroesService.getHeroe(params["id" ]);
    });
  }
}
