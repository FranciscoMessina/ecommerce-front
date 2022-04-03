import { Category, IProduct } from '../types/types';

const products: IProduct[] = [
  {
    title: 'Markus Suede Boots',
    id: 1,
    category: 'Footwear',
    description: `Suede Chelsea boots. They amp up any look. Meet Markus. High-ankle shape. With a slight pointed toe. And elastic gusset.`,
    price: 165,
    images: [
      '/images/markus1.jpg',
      '/images/markus2.jpg',
      '/images/markus3.jpg',
      '/images/markus4.jpg',
    ],
    createdAt: Date.now(),
    ratings: {
      amount: 4,
      average: 4.5,
    },
    freeShipping: true,
    safe: true,
    stock: 4,
  },
  {
    title: 'Langley Leather Boots',
    id: 7,
    category: 'Footwear',
    description: `Timeless silhouette. These are the Langley Boots. Crafted from leather, with a side zip - they are your perfect everyday boots.`,
    price: 175,
    images: [
      '/images/boots1.jpg',
      '/images/boots2.jpg',
      '/images/boots3.jpg',
      '/images/boots4.jpg',
    ],
    createdAt: Date.now(),
    ratings: {
      amount: 4,
      average: 4.5,
    },
    reviews: [
      {
        user: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 4,
      },
    ],
    freeShipping: true,
    safe: true,
    stock: 4,
  },
  {
    title: 'Sheer Low Top Leather Trainers',
    id: 2,
    category: 'Footwear',
    description: `The Sheer Trainers. Crafted from leather with a touch of distressing. They're a little bit retro.`,
    price: 180,
    images: [
      '/images/sneakers1.jpg',
      '/images/sneakers2.jpg',
      '/images/sneakers3.jpg',
      '/images/sneakers4.jpg',
    ],
    createdAt: Date.now(),
    ratings: {
      amount: 4,
      average: 4.5,
    },
    reviews: [
      {
        user: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 4,
      },
    ],
    freeShipping: true,
    safe: true,
    stock: 4,
  },
  {
    title: 'Bergen Suede Bomber Jacket',
    id: 3,
    category: 'Outerwear',
    description: `New classics - introducing the Bergen Bomber Jacket. Crafted from suede, it's been given a two-tone finish. Multiple zip pockets promise an authentic touch.`,
    price: 420,
    images: [
      '/images/jacket1.jpg',
      '/images/jacket2.jpg',
      '/images/jacket3.jpg',
      '/images/jacket4.jpg',
    ],
    createdAt: Date.now() - 15000,
    ratings: {
      amount: 4,
      average: 4.5,
    },
    reviews: [
      {
        user: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 4,
      },
      {
        user: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 4,
      },
    ],
    freeShipping: true,
    safe: false,
    stock: 10,
  },
  {
    title: 'Ormside Denim Jacket',
    id: 4,
    category: 'Outerwear',
    description: `Keep it simple. The Ormside Denim Jacket. It's a classic trucker style. With a corduroy collar. There's subtle damages to toughen it up.`,
    price: 150,
    images: [
      '/images/denim1.jpg',
      '/images/denim2.jpg',
      '/images/denim3.jpg',
      '/images/denim4.jpg',
    ],
    createdAt: Date.now() - 15000,
    ratings: {
      amount: 4,
      average: 4.5,
    },
    reviews: [
      {
        user: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 4,
      },
      {
        user: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 4,
      },
    ],
    freeShipping: true,
    safe: false,
    stock: 10,
  },
  {
    title: 'Eli Studded Leather Belt',
    id: 5,
    category: 'Accessories',
    description:
      'Hey stud. Crafted from leather, the Eli Belt features two rows of flat studs placed all the way around. Finished with a large buckle and fully adjustable.',
    price: 60,
    images: ['/images/belt1.jpg', '/images/belt2.jpg', '/images/belt3.jpg', '/images/belt4.jpg'],
    createdAt: Date.now() - 15000,
    ratings: {
      amount: 4,
      average: 4.5,
    },
    reviews: [
      {
        user: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 4,
      },
      {
        user: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 4,
      },
    ],
    freeShipping: true,
    safe: false,
    stock: 10,
  },

  {
    title: 'I.D Toggle Sterling Silver Bracelet',
    id: 6,
    category: 'Accessories',
    description:
      'Crafted from sterling silver, a slim chain bracelet with toggle closure. The vintage inpired I.D tag is completed with our AllSaints signature.',
    price: 85,
    images: [
      '/images/bracelet1.jpg',
      '/images/bracelet2.jpg',
      '/images/bracelet3.jpg',
      '/images/bracelet4.jpg',
    ],
    createdAt: Date.now() - 15000,
    ratings: {
      amount: 4,
      average: 3.5,
    },
    reviews: [
      {
        user: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 4,
      },
      {
        user: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 4,
      },
    ],
    freeShipping: true,
    safe: false,
    stock: 10,
  },

  {
    title: 'Andromeda Space Print Shirt',
    id: 8,
    category: 'Shirts',
    description:
      "Time to take flight. The Andromeda Shirt features our new print, it has an old-school vibe. Cut from a lightweight sustainable fabric and shaped to a relaxed fit, you'll wear it again and again.",
    price: 99,
    images: [
      '/images/shirt1.jpg',
      '/images/shirt2.jpg',
      '/images/shirt3.jpg',
      '/images/shirt4.jpg',
    ],
    createdAt: Date.now() - 15000,
    ratings: {
      amount: 4,
      average: 5,
    },
    reviews: [
      {
        user: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 4,
      },
      {
        user: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 4,
      },
    ],
    freeShipping: false,
    safe: true,
    stock: 1,
  },
  {
    title: 'Remodel Mixed Print Shirt',
    id: 9,
    category: 'Shirts',
    description:
      'Introducing: Elegantly Wasted, our new and ongoing sustainable initiative. This is the Remodel Shirt, crafted from excess shirting fabrics and off-cuts from old production runs. Each piece of fabric has been patchworked together to create this unique and limited shirt.',
    price: 125,
    images: [
      '/images/redshirt1.jpg',
      '/images/redshirt2.jpg',
      '/images/redshirt3.jpg',
      '/images/redshirt4.jpg',
    ],
    createdAt: Date.now() - 15000,
    ratings: {
      amount: 5,
      average: 4,
    },
    reviews: [
      {
        user: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 4,
      },
      {
        user: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 4,
      },
    ],
    freeShipping: true,
    safe: false,
    stock: 10,
  },
];

export const categoryData: Category[] = ['Accessories', 'Shirts', 'Footwear', 'Outerwear'];

export function getProducts() {
  return products;
}

export function getProduct(id: number) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategories(categories?: string[]) {
  if (!categoryData.some((value) => categories?.includes(value))) return products;
  return products.filter((product) => categories?.includes(product.category));
}
