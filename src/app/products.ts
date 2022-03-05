export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  cols: number;
  rows: number;
  color: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    cols: 1, 
    rows: 1, 
    color: 'lightblue'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    cols: 1, 
    rows: 1, 
    color: 'lightgreen'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'This Phone is normaly and  de more cool',
    cols: 1, 
    rows: 1, 
    color: 'lightblue'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/