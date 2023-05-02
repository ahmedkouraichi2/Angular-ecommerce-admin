import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public createTransaction(amount:any){
     return this.httpClient.get("http://localhost:9090/createTransaction/"+amount)
  }

  public markAsDelivered(orderId:any){
    return this.httpClient.get("http://localhost:9090/markOrderAsDelivered/"+orderId)

  }

  public addProduct(product: FormData) {
    return this.httpClient.post<Product>("http://localhost:9090/addNewProduct", product);
  }

  public deleteCartItem(cartId:any) {
    return this.httpClient.delete("http://localhost:9090/deleteCartItem/"+cartId);
  }
 

  public getAllProducts(pageNumber:any, searchKeyword: string = "") {
    return this.httpClient.get<Product[]>("http://localhost:9090/getAllProducts?pageNumber="+pageNumber+"&searchKey="+searchKeyword);
  }

  public getProductDetailsById(productId:any) {
    return this.httpClient.get<Product>("http://localhost:9090/getProductDetailsById/"+productId);
  }
 
}
