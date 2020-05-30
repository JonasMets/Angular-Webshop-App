import { Component, OnInit } from '@angular/core';
import { ProductCatalogService } from 'src/app/services/product-catalog.service';

@Component({
  selector: 'app-product-catalog-view',
  templateUrl: './product-catalog-view.component.html',
  styleUrls: ['./product-catalog-view.component.css']
})
export class ProductCatalogViewComponent implements OnInit {

  constructor(private productCatalogService: ProductCatalogService) { }

  ngOnInit(): void {
    this.productCatalogService.clear()
    this.productCatalogService.get()
  }

}
