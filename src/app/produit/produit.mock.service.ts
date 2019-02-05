import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit.model';


@Injectable()
export class ProduitMockService {

  private PRODUITS: Produit[] = [];

  constructor(){
    let p1: Produit = new Produit(1,'Livre', 50, 20);
    let p2: Produit = new Produit(2,'Cahier', 200, 5.25);
    let p3: Produit = new Produit(3,'Stylo', 500, 10.25);
    let p4: Produit = new Produit(4,'Stylo2', 600, 2.30);
    let p5: Produit = new Produit(5,'Stylo3', 150, 2.10);
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
    this.PRODUITS.push(p4);
    this.PRODUITS.push(p5);

  }

  public getProduits():Produit []{
    return this.PRODUITS;
  }


}
