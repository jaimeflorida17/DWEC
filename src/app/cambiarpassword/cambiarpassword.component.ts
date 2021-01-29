import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosServicioService } from './../services/usuarios-servicio.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-cambiarpassword',
  templateUrl: './cambiarpassword.component.html',
  styleUrls: ['./cambiarpassword.component.css']
})

export class CambiarpasswordComponent  {
  getId: any;
  getPassword: any;
  getOldPassword: any;
  getPasswordConfirm: any;
  updateForm: FormGroup;

constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private usuariosservicioService: UsuariosServicioService
  ) { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.usuariosservicioService.read(this.getId).subscribe(res => {
      this.updateForm.setValue({
        username: res['nombre'],
        contrasenya: res['contrasenya'],
        oldPassword: '',
        passwordConfirm: ''
      });
    });
    this.updateForm = this.formBuilder.group({
      username: [''],
      oldPassword: [''],
      contrasenya: [''],
      passwordConfirm: ['']
    });
  }
}
