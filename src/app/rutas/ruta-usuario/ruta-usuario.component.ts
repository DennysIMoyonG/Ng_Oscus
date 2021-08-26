import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {

  constructor(private readonly _activateRouterSnapshot: ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRouterSnapshot.params.subscribe((param: any) => {
      console.log("datos", param);
    });
  }

}
