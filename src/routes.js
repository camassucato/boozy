/**
 * IMPORTS
 */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Boozy from './pages/Boozy';
import DrinkSearch from './pages/DrinkSearch';
import DrinkDetails from './pages/DrinkDetails';
import DrinksCategory from './pages/DrinksCategory';
import DrinkCategoryList from './pages/DrinkCategoryList';

/**
 * APP USING STACK NAVIGATOR
 */
const Routes = createAppContainer(
  createStackNavigator({
    Boozy,
    DrinkSearch,
    DrinkDetails,
    DrinksCategory,
    DrinkCategoryList,
  })
);

export default Routes;
