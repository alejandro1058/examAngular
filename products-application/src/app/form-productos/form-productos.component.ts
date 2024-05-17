import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent implements OnInit {

  idproducto: number;
  nombre: string;
  precio: string;

  constructor ( private apiservice: ApiService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    
  }
  onSaveProduct() {
    console.log("entro")
    const newProduct = new Producto(this.idproducto, this.nombre, this.precio);
    this.apiservice.saveProduct(newProduct).subscribe(
      (response) => {
        this.router.navigate(['./']);

      },
      (error) => {
        console.log("errro", error)
      }

    );
  }
}
