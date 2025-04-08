import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {PagedResponse} from '../../models/paged-response.model';
import {Product} from '../../models/product.model';
import {NgForOf} from '@angular/common';
import {Paginator, PaginatorState} from 'primeng/paginator';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [
    NgForOf,
    Paginator
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  totalRecords: number = 0;
  rows: number = 10;
  first: number = 0;
  page: number = 0;
  productPage!: PagedResponse<Product>;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const page = +(params.get('page') || '0');
      const rows = +(params.get('rows') || '10');

      this.page = page
      this.first = page * rows;
      this.rows = rows;

      this.getPage();
    });
  }

  getPage() {
    console.log("First :"+this.page,"Rows :"+this.rows);
    this.productService.getAllProductsPaged(this.page, this.rows).subscribe((response) => {
      console.log(response);
      this.productPage = response;
      this.totalRecords = response.totalElements;
    });
  }

  myOnPageChange($event: PaginatorState) {
    if ($event.first != null) {
      this.first = $event.first;
    }
    if ($event.rows != null) {
      this.rows = $event.rows;
    }

    const page = $event.page


    this.router.navigate(['app/products/page', page, 'rows', this.rows]);

    this.getPage()
  }
}
