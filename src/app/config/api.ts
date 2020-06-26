import { environment } from 'src/environments/environment';

export const base = environment.production ? '' : 'http://localhost:3000' ;
export const productsUrl = base + '/productsList';
export const cartUrl = base + '/cart';
export const favoritesUrl = base + '/favorite';
