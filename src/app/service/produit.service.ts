import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Observable, of } from 'rxjs';
import {Produit} from '../shared/produit.model';

import { API_URLS } from '../config/api.url.config';


@Injectable()
export class ProduitService{

  constructor(private http:HttpClient){}

  getProduits(): Observable<any>{
    console.log(API_URLS.PRODUITS_URL)
   return this.http.get(API_URLS.PRODUITS_URL);
  }

  addProduct(produit: Produit): Observable<any>{
    console.log(API_URLS.PRODUITS_URL+'/add', produit)
  return this.http.post(API_URLS.PRODUITS_URL+'/add', produit);
  }

  updateProduct(produit: Produit): Observable<any>{
    console.log(API_URLS.PRODUITS_URL+'/update', produit)
  return this.http.put(API_URLS.PRODUITS_URL+'/update', produit);
  }

  deleteProduct(id: number): Observable<any>{
    console.log(API_URLS.PRODUITS_URL+'/delete/'+id)
  return this.http.delete(API_URLS.PRODUITS_URL+'/delete/'+id);
  }
}
