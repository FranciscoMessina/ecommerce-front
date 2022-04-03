import { atom } from 'recoil';

interface ICart {
  total: {
    price: number;
    quantity: number;
  };
  items: {
    productId: number;
    quantity: number;
    price: number;
  }[];
}

export const cartState = atom<ICart>({
  key: 'cartState',
  default: {
    total: {
      price: 0,
      quantity: 0,
    },
    items: [],
  },
});
