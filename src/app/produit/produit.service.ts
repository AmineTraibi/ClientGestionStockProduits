import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Observable, of } from 'rxjs';
import {Produit} from '../shared/produit.model';

import { API_URLS } from '../config/api.url.config';


@Injectable()
export class ProduitService{

  constructor(private http:HttpClient){}

  getProduits(): Observable<any>{
   return this.http.get(API_URLS.PRODUITS_URL);
  }

  addProduct(produit: Produit): Observable<any>{
  return this.http.post(API_URLS.PRODUITS_URL+'/add', produit);
  }

  updateProduct(produit: Produit): Observable<any>{
  return this.http.put(API_URLS.PRODUITS_URL+'/update', produit);
  }

  deleteProduct(ref: string): Observable<any>{
    console.log(API_URLS.PRODUITS_URL+'/delete/'+ref)
  return this.http.delete(API_URLS.PRODUITS_URL+'/delete/'+ref);
  }
}
