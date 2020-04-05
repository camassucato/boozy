/**
 * IMPORTS
 */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Boozy from './pages/Boozy';
import DrinkSearch from './pages/DrinkSearch';
import DrinksCategory from './pages/DrinksCategory';
import DrinkDetails from './pages/DrinkDetails';

/**
 * APP USING STACK NAVIGATOR
 */
const Routes = createAppContainer(
  createStackNavigator({
    Boozy,
    DrinkSearch,
    DrinksCategory,
    DrinkDetails,
  })
);

export default Routes;
