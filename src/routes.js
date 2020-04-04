import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Boozy from './pages/Boozy';
import DrinksCategory from './pages/DrinksCategory';
import Drink from './pages/Drink';
import DrinkDetails from './pages/DrinkDetails';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Boozy,
      DrinksCategory,
      Drink,
      DrinkDetails,
    },
    {
      headerTitleAlign: 'center',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#43A047',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
