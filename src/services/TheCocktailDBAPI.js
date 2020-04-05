/**
 * AXIOS IMPLEMENTATION FOR
 * THE COCKTAIL DB API
 * https://www.thecocktaildb.com
 */
import axios from 'axios';

const TheCocktailDBAPI = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

export default TheCocktailDBAPI;
