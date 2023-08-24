import { Component, Input } from "@angular/core";
import { Pensamento } from "../Pensamento";
import { PensamentoService } from "../pensamento.service";

@Component({
  selector: "app-pensamento",
  templateUrl: "./pensamento.component.html",
  styleUrls: ["./pensamento.component.css"],
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo: "",
    favorito: false,
  };

  constructor(private service: PensamentoService) {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) return "pensamento-g";
    return "pensamento-p";
  }

  mudarIconeFavorito(): string {
    return this.pensamento.favorito ? "ativo" : "inativo";
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe();
  }
}
