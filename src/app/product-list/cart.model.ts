export interface Cart {
  deliveryAddressData: DeliveryAddressData[];
  cartItems: CartItems[];
  sendOrderData: SendOrderData;
  orderConfirmationData: OrderConfirmationData;
}

export interface CartItems {
  productName: string;
  productDescription: string;
  itemNumber: string;
  chf: string;
  productPrice: number;
  productEAN: string;
  productART: string;
  productImage: string;
  vivancoProductId: string;
  categoryId: string;
  stock: {
    available: boolean;
    deliveryDate: string;
    ordered: number;
  };
  topSeller: boolean;
  productColor: string;
  productCount: string;
  quantity: number;
  productNotes: string;
  packagingNote: string;
  selectedLength: string;
  availableFromDate: string;
}

export interface DeliveryAddressData {
  company: string;
  companySupplement: string;
  country: string;
  firstName: string;
  lastName: string;
  postCodeCity: string;
  salutation: string;
  streetNo: string;
  defaultAddress: boolean;
}

export interface SendOrderData {
  discountCode: string;
  orderRemarks: string;
  orderSubTotal: string;
  orderVatAmount: string;
  orderTotalAmount: string;
  orderDate: Date;
}

export interface OrderConfirmationData {
  orderStatus: string;
  orderStatusUpdatedAt: Date;
  orderReference: string | number;
  deliveryDate: Date;
}
