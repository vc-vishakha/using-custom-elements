import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Cart, CartItems, DeliveryAddressData, OrderConfirmationData, SendOrderData  } from './cart.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  imagePath = environment.imagePath;
  @Input() productDetail: CartItems;

  cartQty = 1;
  cartPrice: any = 0;

  productId: string;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.productId = this.productDetail.vivancoProductId;
  }

  addToCart() {
    // console.log(` 'productId': ${this.productId} , 'cart qty': ${this.cartQty}`);
    // console.log(this.productDetail);
    this.productDetail.quantity = this.cartQty;
    let newCartItems = [];
    let sendOrderDataArray: SendOrderData;
    let orderConfirmationArray: OrderConfirmationData;
    let deliveryAddress: DeliveryAddressData[];

    // Save cart data into localStorage and navigate to cart with that data
    // Check if already data in cart, then update
    if ( localStorage.getItem('vivancoCartItem') !== undefined && localStorage.getItem('vivancoCartItem') !== null ) {
        const localData: Cart = JSON.parse(localStorage.getItem('vivancoCartItem'));
        const oldItems = localData.cartItems;
        const oldItemIndex = oldItems.findIndex((pro) => pro.vivancoProductId === this.productId);

        if ( oldItemIndex !== undefined && oldItemIndex !== -1 ) {

            this.productDetail.quantity = oldItems[oldItemIndex].quantity + this.cartQty;
            localData.cartItems.splice(oldItemIndex, 1);

        }
        newCartItems = localData.cartItems;
        sendOrderDataArray = localData.sendOrderData;
        orderConfirmationArray = localData.orderConfirmationData;
        deliveryAddress = localData.deliveryAddressData;
    } else {
        sendOrderDataArray = {
          discountCode: '',
          orderRemarks: '',
          orderSubTotal: `0 CHF`,
          orderVatAmount: '0 CHF',
          orderTotalAmount: `0 CHF`,
          orderDate: new Date(),
        };
        orderConfirmationArray = {
          orderStatus: 'Order is placed',
          orderStatusUpdatedAt: new Date(),
          orderReference: this.randomNumber(),
          deliveryDate:  this.addDays(10, new Date()),
        };
        deliveryAddress = [];
    }
    newCartItems.push(this.productDetail);

    const cartData = {
      deliveryAddressData: deliveryAddress,
      cartItems: newCartItems,
      sendOrderData: sendOrderDataArray,
      orderConfirmationData: orderConfirmationArray,
    };

    let subTotal = 0;
    newCartItems.forEach((element) => {
      const amount = parseFloat(element.productPrice) * parseFloat(element.quantity);
      subTotal = subTotal + amount;
    });
    subTotal = Number(subTotal.toFixed(2));
    cartData.sendOrderData.orderSubTotal = `${subTotal} CHF`;
    cartData.sendOrderData.orderTotalAmount = `${subTotal} CHF`;

    // console.log(cartData);
    localStorage.setItem('vivancoCartItem', JSON.stringify(cartData));
    this.router.navigate(['/cart']);
  }

  /**
   * Update cart quantity and its price
   * @param type Type i.e. add / remove number of quantity
   */
  updateCart(type: string): void {
    if (type === 'remove') {
      this.cartQty = this.cartQty !== 1 ? this.cartQty - 1 : 1;
    } else {
      this.cartQty = this.cartQty + 1;
    }
    this.cartPrice =
      this.cartQty !== 1
        ? this.cartQty * this.productDetail.productPrice
        : this.productDetail.productPrice * 1;
    this.cartPrice = parseFloat(this.cartPrice).toFixed(2);
  }

  /**
   * Generate random number
   * @returns string
   */
  randomNumber(): string {
    return Math.random().toString(36).slice(-8);
  }

  /**
   * Add Days to given date
   * @param noOfDay No of days to be added
   * @param date Date in which no of days to be added
   * @returns Date
   */
  addDays(noOfDay: number, date?: Date): Date {
    const selectedDate = date === undefined ? new Date() : date;
    if ( noOfDay !== undefined && noOfDay !== null ) {
      selectedDate.setDate(selectedDate.getDate() + noOfDay);
    } else {
      selectedDate.setDate(selectedDate.getDate() + 0);
    }
    return new Date(selectedDate);
  }
}
