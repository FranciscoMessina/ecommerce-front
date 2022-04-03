export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  images: [string, string, string, string];
  freeShipping: boolean;
  safe: boolean;
  stock: number;
  createdAt: number;
  ratings: {
    amount: number;
    average: number;
  };
  category: Category;
  reviews?: {
    user: string;
    comment: string;
    rating: number;
  }[];
}

export type Category = 'Footwear' | 'Shirts' | 'Accessories' | 'Outerwear';
