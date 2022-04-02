export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  images: [string, string, string, string];
  freeShipping: boolean;
  protected: boolean;
  stock: number;
  createdAt: number;
  ratings: {
    amount: number;
    average: number;
  };
  category: Category;
  reviews: {
    user: string;
    comment: string;
    rating: number;
  }[];
}

export type Category = 'Shoes' | 'Bags' | 'Accessories' | 'Clothing';
