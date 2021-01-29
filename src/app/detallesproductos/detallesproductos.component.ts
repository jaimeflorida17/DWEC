import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { ProductosServicioService } from './../services/productos-servicio.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detallesproductos',
  templateUrl: './detallesproductos.component.html',
  styleUrls: ['./detallesproductos.component.css']
})
export class DetallesproductosComponent implements OnInit {

  productos: any = [];
  getId: any = [];
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private ngZone: NgZone,
    private ProductosServicioService: ProductosServicioService,
    private ActivatedRoute: ActivatedRoute
  ) { 
    this.getId = this.ActivatedRoute.snapshot.paramMap.get('id');
    console.log(this.getId);
  }

  ngOnInit(): void {
    this.ProductosServicioService.readAll().subscribe(res => {
      console.log(res)
      this.productos=res;
    });
  }

  public delete(id:any, i:any) {

    if(window.confirm("Quieres eliminar el producto?")){
      this.ProductosServicioService.delete(id).subscribe((res) =>{
        this.productos.splice(i,1);
      })
    }
  }

}
