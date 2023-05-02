import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ImageProcessingService } from 'src/app/services/image-processing.service';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageNumber = 0;
  productDetails: Product[] = [];
  showLoadButton = false;

  constructor(
    private productService: ProductService,
    private imageProcessingService: ImageProcessingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  searchByKeyword(searchkeyword: string) {
    console.log(searchkeyword);
    this.pageNumber = 0;
    this.productDetails = [];
    this.getAllProducts(searchkeyword);
  }

  getAllProducts(searchKey = '') {
    this.productService
      .getAllProducts(this.pageNumber, searchKey)
      .pipe(
        map((products: Product[]) =>
          products.map((product: Product) =>
            this.imageProcessingService.createImages(product)
          )
        )
      )
      .subscribe(
        (products: Product[]) => {
          console.log(products);
          this.productDetails.push(...products);
          if (products.length === 12) {
            this.showLoadButton = true;
          } else {
            this.showLoadButton = false;
          }
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }

  loadMoreProduct() {
    this.pageNumber++;
    this.getAllProducts();
  }

  showProductDetails(productId: any) {
    this.router.navigate(['/productViewDetails', { productId: productId }]);
  }
}




