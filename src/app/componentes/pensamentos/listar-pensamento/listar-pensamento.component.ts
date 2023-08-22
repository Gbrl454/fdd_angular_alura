import { Component } from "@angular/core";
import { Pensamento } from "../Pensamento";

@Component({
  selector: "app-listar-pensamento",
  templateUrl: "./listar-pensamento.component.html",
  styleUrls: ["./listar-pensamento.component.css"],
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [];
}
