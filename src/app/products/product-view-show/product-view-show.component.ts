import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-view-show',
  templateUrl: './product-view-show.component.html',
  styleUrls: ['./product-view-show.component.css']
})
export class ProductViewShowComponent implements OnInit {

  private product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    // Récupération de l'id depuis l'URL
    const id = this.route.snapshot.paramMap.get('id');

    // Utilisation du service pour récupérer le produit de l'API et l'attribuer à notre produit de Component
    this.productService.showProduct(id).subscribe(
      (productAPI) => {
        console.log('Réception du produit');
        if (productAPI) {
          this.product = productAPI;
        } else {
          // Redirection vers la page 404
          this.router.navigate(['/error-404']);
        }
      }
    );
  }

}
