import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/service.index';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  usuario: Usuario;

  constructor(
    public _sidebar: SidebarService,
    public _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
  }

}
