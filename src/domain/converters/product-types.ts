import { products_3 } from '../graphql-types';
import { Product } from '../models';

function descriptionLegible(p: products_3) {
  if (p.licensesMax === 1) {
    return `1 user`;
  } else {
    return `${p.licensesMin}-${p.licensesMax} users`;
  }
}

export function productFromProduct_3(p: products_3): Product {
  return {
    id: p.id,
    name: p.name,
    description: descriptionLegible(p),
    licensesMin: p.licensesMin,
    licensesMax: p.licensesMax,
    pricereg: p.pricereg,
    pricesale: p.pricesale
  };
}
