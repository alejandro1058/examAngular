import { Component, OnInit, Input} from '@angular/core';
import { Producto } from '../producto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [];
  constructor ( private apiservice: ApiService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.apiservice.getProducts().subscribe( data =>  {
      this.productos = data
    });
  }
  addProduct() {
    this.router.navigate(['./agregar']);
  }

}
