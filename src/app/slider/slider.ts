export class SliderFakeDb {
  public static data = [
    {
      productName: 'Product - 1',
      productImage: 'assets/images/slider-item-1.png',
      productPrice: '51,52',
      productItemNumber: '1',
      productEAN: '12'
    },
    {
      productName: 'Product - 2',
      productImage: 'assets/images/slider-item-2.png',
      productPrice: '21,52',
      productItemNumber: '2',
      productEAN: '23'
    },
    {
      productName: 'Product - 3',
      productImage: 'assets/images/slider-item-3.png',
      productPrice: '51,52',
      productItemNumber: '3',
      productEAN: '34'
    },
    {
      productName: 'Product - 4',
      productImage: 'assets/images/slider-item-4.png',
      productPrice: '31,52',
      productItemNumber: '4',
      productEAN: '45'
    },
    {
      productName: 'Product - 5',
      productImage: 'assets/images/slider-item-1.png',
      productPrice: '30,42',
      productItemNumber: '5',
      productEAN: '56'
    },
    {
      productName: 'Product - 6',
      productImage: 'assets/images/slider-item-2.png',
      productPrice: '35,52',
      productItemNumber: '6',
      productEAN: '67'
    },
    {
      productName: 'Product - 7',
      productImage: 'assets/images/slider-item-3.png',
      productPrice: '35,02',
      productItemNumber: '7',
      productEAN: '78'
    },
    {
      productName: 'Product - 8',
      productImage: 'assets/images/slider-item-4.png',
      productPrice: '40,52',
      productItemNumber: '8',
      productEAN: '89'
    }
  ];
}

export interface Product {
  productId: number;
  productName: string;
  productImage: string;
  productPrice: string;
  productItemNumber: number;
  productEAN: number;
}
