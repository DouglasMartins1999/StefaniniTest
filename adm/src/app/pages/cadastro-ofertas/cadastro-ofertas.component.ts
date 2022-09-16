import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-ofertas',
  templateUrl: './cadastro-ofertas.component.html',
  styleUrls: ['./cadastro-ofertas.component.scss']
})
export class CadastroOfertasComponent {
  private dataSource: any[];

  public id: number;
  public isEditing: boolean;
  public oferta: any;

  lojas = [
    { id: 1, nome: 'Epic' },
    { id: 2, nome: 'Origin' },
    { id: 3, nome: 'Steam' },
  ];

  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.carregarDados();
    this.id = parseInt(route.snapshot.params.id);

    this.isEditing = !!this.id;
    console.log(this.dataSource)
    this.oferta = this.dataSource.find(o => o.id === this.id) ?? {};
  }

  carregarDados() {
    this.dataSource = JSON.parse(window.localStorage.getItem("ofertas-game-tracker"));
  }

  persistirOferta() {
    this.carregarDados();

    if (this.isEditing) {
      const indOferta = this.dataSource.findIndex(o => o.id === this.id);
      this.dataSource[indOferta] = this.oferta;
    } 
    else {
      this.dataSource.push(this.oferta);
    }

    localStorage.setItem("ofertas-game-tracker", JSON.stringify(this.dataSource));
    this.router.navigate([ "/nossasofertas" ]);
  }
}
