import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit.service';
import {Produit} from '../shared/produit.model';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits :Produit[];

  produitForm :FormGroup;

  operation :string ='add';

  selectedProduit : Produit;

  constructor(private produitService: ProduitService, private fb:FormBuilder, private route: ActivatedRoute ) {
    this.createForm();
   }

   createForm(){
       this.produitForm=this.fb.group({
       ref :['', Validators.required],
       quantite :'',
       prixUnitaire :''
     });

   }

  ngOnInit() {
    this.initProduit();
    this.produits=this.route.snapshot.data.produits;
    this.IsSizeNull();
    //this.loadProduits();
    //this.produits = this.produitService.getProduits();
  }

  IsSizeNull(){
    if(this.produits.length==0){
      return true;
    }
      return false;
  }

  initProduit(){
    this.selectedProduit = new Produit();
    this.createForm();
  }


  loadProduits(){
   this.produitService.getProduits().subscribe(
     data => {this.produits = data;
       console.log("response",data)},
     error => {console.log('an error was occured')},
     () => {
       this.IsSizeNull();
       console.log('loading produits was done')}
   );
  }

  addProduit(){
    const p= this.produitForm.value;
    this.produitService.addProduct(p).subscribe(
      resultat =>{
        this.initProduit();
        this.loadProduits();
      }
    );
  }


  updateProduit(){
    this.produitService.updateProduct(this.selectedProduit).subscribe(
    resultat =>{
      this.initProduit();
      this.loadProduits();
       }
     );
  }

  deleteProduit(){
    this.produitService.deleteProduct(this.selectedProduit.id).subscribe(
    resultat =>{
      this.selectedProduit = new Produit();
      this.loadProduits();
       }
     );
  }



}
