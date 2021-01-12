import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  users=<any>[

  ];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(
      response => {

        this.users=response;

        console.log(this.users);
        
      }
    )
  }

}
