/**
 * AXIOS IMPLEMENTATION FOR
 * THE COCKTAIL DB API
 * https://www.thecocktaildb.com
 */
import axios from 'axios';

/**
 * API SEARCH
 */
export const TheCocktailDBAPI = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

/**
 * API LIST COCKTAIL'S CATEGORIES
 */
export const TheCocktailDBAPICategories = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
});
