import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductosServicioService } from './../services/productos-servicio.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];
  i: any;

  constructor(
    private httpClient: HttpClient,
    private ProductosServicioService: ProductosServicioService
    ) { }

  ngOnInit(): void {
    this.ProductosServicioService.readAll().subscribe(res => {
      console.log(res)
      this.productos=res;
    });

  }

  public delete(id:any, i:any) {

    if(window.confirm("Quieres elminar el producto?")){
      this.ProductosServicioService.delete(id).subscribe((res) =>{
        this.productos.splice(i,1);
      })
    }
  }

}
