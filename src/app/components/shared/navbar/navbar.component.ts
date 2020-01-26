import { Component, OnInit } from "@angular/core";
import { HeroesService } from "src/app/services/heroes.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
  constructor(private heroesService: HeroesService) {}

  ngOnInit() {}

  buscarHeroe(termino: string) {
    console.log(this.heroesService.buscarHeroes(termino));
  }
}
