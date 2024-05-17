import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlBase="http://localhost:8080/producto/v1/";

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any> {
    let url = this.urlBase + 'listarProductos';
    return this.http.get<any>(url);
  }
  public saveProduct(producto: Producto) {
    let url = this.urlBase + 'agregarProducto';
    return this.http.post(url, producto);
  }

  public updateProduct(idProducto: number, producto: Producto) {
    let url = this.urlBase + 'modificarProducto/' + idProducto;
    this.http.put(url, producto)
    .subscribe( 
        (response) => {
          console.log("Se modifico el producto: " + response)
        },
        (error) => {
          console.log("Ocurrio un error: " + error)
        }
      );
  }
  public deleteProduct(idProducto: number) {
    let url = this.urlBase + 'borrarProducto/' + idProducto;
    this.http.delete(url)
    .subscribe( 
        (response) => {
          console.log("Se Elimino el producto: " + response)
        },
        (error) => {
          console.log("Ocurrio un error: " + error)
        }
      );
  }
  public getProduct(idProducto: number): Observable<any> {
    let url = this.urlBase + 'obtenerProducto/' + idProducto;
    return this.http.get<any>(url);
  }
}
