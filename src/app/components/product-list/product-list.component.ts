import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {PagedResponse} from '../../models/paged-response.model';
import {Product} from '../../models/product.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [
    NgForOf
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  productPage!: PagedResponse<Product>;

  ngOnInit(): void {
    this.productService.getAllProductsPaged(0, 10).subscribe((response) => {
      console.log(response);
      this.productPage = response;
    });
  }

}
