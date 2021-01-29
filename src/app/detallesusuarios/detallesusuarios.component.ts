import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { UsuariosServicioService } from './../services/usuarios-servicio.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detallesusuarios',
  templateUrl: './detallesusuarios.component.html',
  styleUrls: ['./detallesusuarios.component.css']
})
export class DetallesusuariosComponent implements OnInit {

  usuarios: any = [];
  getId: any = [];
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private ngZone: NgZone,
    private usuariosServicioService: UsuariosServicioService,
    private ActivatedRoute: ActivatedRoute
  ) { 
    this.getId = this.ActivatedRoute.snapshot.paramMap.get('id');
    console.log(this.getId);
  }

  ngOnInit(): void {
    this.usuariosServicioService.readAll().subscribe(res => {
      console.log(res)
      this.usuarios=res;
    });
  }

  public delete(id:any, i:any) {

    if(window.confirm("Quieres eliminar el usuario?")){
      this.usuariosServicioService.delete(id).subscribe((res) =>{
        this.usuarios.splice(i,1);
      })
    }
  }

}
