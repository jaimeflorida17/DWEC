import { Component, OnInit, NgZone } from '@angular/core';
import { UsuariosServicioService } from './../services/usuarios-servicio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-altausuarios',
  templateUrl: './altausuarios.component.html',
  styleUrls: ['./altausuarios.component.css'],
  
})
export class AltausuariosComponent implements OnInit {

  usuariosForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private usuariosService: UsuariosServicioService
  ) {
    this.usuariosForm = this.formBuilder.group({

      username: '',
      password: '',
 
    });
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.usuariosForm.value);
    this.usuariosService.create(this.usuariosForm.value).subscribe(() => {
      console.log('Usuario creado');
      this.ngZone.run(() => this.router.navigateByUrl('usuarios'));
    })

  }

}
