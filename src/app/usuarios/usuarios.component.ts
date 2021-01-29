import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuariosServicioService } from './../services/usuarios-servicio.service';

@Component({
  selector: 'app-Usuarios',
  templateUrl: './Usuarios.component.html',
  styleUrls: ['./Usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  Usuarios: any = [];
  i: any;

  constructor(
    private httpClient: HttpClient,
    private UsuariosServicioService: UsuariosServicioService
    ) { }

  ngOnInit(): void {
    this.UsuariosServicioService.readAll().subscribe(res => {
      console.log(res)
      this.Usuarios=res;
    });

  }

  public delete(id:any, i:any) {

    if(window.confirm("Quieres elminar el usuario?")){
      this.UsuariosServicioService.delete(id).subscribe((res) =>{
        this.Usuarios.splice(i,1);
      })
    }
  }

}
