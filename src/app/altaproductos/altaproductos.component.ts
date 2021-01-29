import { Component, OnInit, NgZone } from '@angular/core';
import { ProductosServicioService } from './../services/productos-servicio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-altaproductos',
  templateUrl: './altaproductos.component.html',
  styleUrls: ['./altaproductos.component.css'],
  
})
export class AltaproductosComponent implements OnInit {

  productosForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private ProductosService: ProductosServicioService
  ) {
    this.productosForm = this.formBuilder.group({
      name: '',
      description: '',
      precio: '',
      imagen: '',
      categorias: '',
      type:''
    });
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.productosForm.value);
    this.ProductosService.create(this.productosForm.value).subscribe(() => {
      console.log('Producto creado');
      this.ngZone.run(() => this.router.navigateByUrl('productos'));
    })

  }

}
