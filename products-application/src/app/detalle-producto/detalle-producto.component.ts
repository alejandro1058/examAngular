import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto.model';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  idProducto: number;
  producto: Producto;
  constructor ( private apiservice: ApiService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.idProducto = this.route.snapshot.params.idProducto;
     this.apiservice.getProduct(this.idProducto).subscribe(
      (response) => {
        this.producto = response
      },
      (error) => {
        console.log("ocurrio un error", error)
      }
     );
  }
  goBack() {
    this.router.navigate(['./']);
  }
  

}
