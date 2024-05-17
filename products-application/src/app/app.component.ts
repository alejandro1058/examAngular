import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { Producto } from './producto.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  productos: Producto[] = [];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
  }
 
  sendData(data: any) {
    console.log("manda la informacion", data);
    this.api.saveProduct(data).subscribe( response => console.log("datos enviados", response))
  }

}
