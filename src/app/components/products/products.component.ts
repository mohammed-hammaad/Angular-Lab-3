import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { CreditCardPipe } from '../../pipes/credit-card.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule,ProductCardDirective,CreditCardPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  clientName: string = 'Mohammed Hammad';
  products: Iproduct[];
  filteredProduct: Iproduct[] = [];

  togglePurchase(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (product) {
      product.isPurchased = !product.isPurchased;
      product.quantity -= 1;
    }
  }
  @Output() addChildEvent: EventEmitter<Iproduct> =
    new EventEmitter<Iproduct>();
  constructor() {
    this.products = [
      {
        id: 1,
        title: 'Toffy',
        price: 20,
        CategoryID: 'Category A',
        isPurchased: false,
        quantity: 2,
        image: '../../../assets/1.jpeg',
        productInCart: 1,
        cardNumber: '123456789123456',
        purchaseDate: new Date(),
      },
      {
        id: 2,
        title: 'Choclet pops',
        price: 85,
        CategoryID: 'Category B',
        isPurchased: false,
        quantity: 1,
        image: '../../../assets/2.jpeg',
        productInCart: 1,
        cardNumber: '123456789123456',
        purchaseDate: new Date(),
      },
      {
        id: 3,
        title: 'Toffy',
        price: 30,
        CategoryID: 'Category C',
        isPurchased: false,
        quantity: 3,
        image: '../../../assets/3.jpeg',
        productInCart: 1,
        cardNumber: '123456789123456',
        purchaseDate: new Date(),
      },
      {
        id: 4,
        title: 'Gummy candy',
        price: 25,
        CategoryID: 'Category D',
        isPurchased: false,
        quantity: 6,
        image: '../../../assets/4.jpg',
        productInCart: 1,
        cardNumber: '123456789123456',
        purchaseDate: new Date(),
      },
      {
        id: 5,
        title: 'Hard Candy',
        price: 75,
        CategoryID: 'Category A',
        isPurchased: false,
        quantity: 5,
        image: '../../../assets/5.jpg',
        productInCart: 1,
        cardNumber: '123456789123456',
        purchaseDate: new Date(),
      },
      {
        id: 6,
        title: 'Lollipops',
        price: 35,
        CategoryID: 'Category B',
        isPurchased: false,
        quantity: 0,
        image: '../../../assets/6.jpg',
        productInCart: 1,
        cardNumber: '123456789123456',
        purchaseDate: new Date(),
      },
      {
        id: 7,
        title: 'Lollipops',
        price: 42,
        CategoryID: 'Category C',
        isPurchased: false,
        quantity: 1,
        image: '../../../assets/7.webp',
        productInCart: 1,
        cardNumber: '123456789123456',
        purchaseDate: new Date(),
      },
      {
        id: 8,
        title: 'Hard Candy ',
        price: 19,
        CategoryID: 'Category D',
        isPurchased: false,
        quantity: 2,
        image: '../../../assets/8.jpg',
        productInCart: 1,
        cardNumber: '123456789123456',
        purchaseDate: new Date(),
      },
      {
        id: 9,
        title: 'Choclete',
        price: 17,
        CategoryID: 'Category D',
        isPurchased: false,
        quantity: 3,
        image: '../../../assets/9.jpg',
        productInCart: 1,
        cardNumber: '123456789123456',
        purchaseDate: new Date(),
      },
      {
        id: 10,
        title: 'Choclete',
        price: 49,
        CategoryID: 'Category A',
        isPurchased: false,
        quantity: 4,
        image: '../../../assets/Gluten-Free-Candy-Bars.jpg',
        productInCart: 1,
        cardNumber: '123456789123456',
        purchaseDate: new Date(),
      },
    ];
    this.filteredProduct = this.products;
  }
  @Input() set filteredProducts(value: string) {
    this.filteredProduct = this.filterSelectedProduct(value);
  }
  filterSelectedProduct(value: string) {
    if (value === 'all') {
      return this.products;
    } else {
      return this.products.filter(
        (product: Iproduct) => product.CategoryID === value
      );
    }
  }

  addToCart(product: Iproduct) {
    this.addChildEvent.emit(product);
  }
}
