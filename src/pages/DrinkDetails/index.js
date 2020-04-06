/**
 * IMPORTS
 */
import React, { Component } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import { TheCocktailDBAPI } from '../../services/TheCocktailDBAPI';
import { clrPrimary, clrFntDark } from '../../constants/colorPalette';
import {
  ContainerScroll,
  Drink,
  DrinkInfo,
  DrinkDetailImg,
  DrinkName,
  DrinkCategory,
  DrinkInstructions,
  DrinkIngredients,
} from './styles';

/**
 * CLASS
 */
export default class DrinkDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('drink').name,
    headerStyle: {
      backgroundColor: `${clrPrimary}`,
    },
    headerBackTitleVisible: false,
    headerTintColor: `${clrFntDark}`,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  /**
   * CONSTRUCTOR
   */
  constructor(props) {
    super(props);
    this.state = {
      drinkDetails: [],
    };
  }

  /**
   * DID MOUNT
   */
  async componentDidMount() {
    const { navigation } = this.props;
    if (navigation) {
      const idDrink = navigation.getParam('drink').id;
      this.handleDoDrinkDetails(idDrink);
    } else {
      const drinkDetails = await AsyncStorage.getItem('drinkDetails');
      if (drinkDetails) {
        this.setState({ drinkDetails: JSON.parse(drinkDetails) });
      }
    }
  }

  /**
   * DID UPDATE
   */
  componentDidUpdate(_, prevState) {
    const { drinkDetails } = this.state;
    if (prevState.drinkDetails !== drinkDetails) {
      AsyncStorage.setItem('drinkDetails', JSON.stringify(drinkDetails));
    }
  }

  /**
   * DRINK DETAILS
   */
  handleDoDrinkDetails = async (idDrink) => {
    await TheCocktailDBAPI.get(`/lookup.php?i=${idDrink}`)
      .then((response) => {
        const { drinks } = response.data;
        if (!drinks) {
          Alert.alert('Drink Details not found!');
        }

        const data = response.data.drinks.map((drink) => {
          const ingredients = [
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
            drink.strIngredient5,
            drink.strIngredient6,
            drink.strIngredient7,
            drink.strIngredient8,
            drink.strIngredient9,
            drink.strIngredient10,
            drink.strIngredient11,
            drink.strIngredient12,
            drink.strIngredient13,
            drink.strIngredient14,
            drink.strIngredient15,
          ];

          const filteredIngredients = ingredients.filter((el) => {
            return el != null;
          });

          return {
            id: drink.idDrink,
            name: drink.strDrink,
            category: drink.strCategory,
            image: drink.strDrinkThumb,
            instructions: drink.strInstructions,
            ingredients: filteredIngredients.join(', '),
          };
        });

        this.setState({
          drinkDetails: data,
        });
      })
      .catch(() => {
        Alert.alert('API ERROR!');
      });
  };

  /**
   * RENDER
   */
  render() {
    const { drinkDetails } = this.state;
    const objDrinkDetails = drinkDetails.reduce(
      (id, value) => Object.assign(id, value),
      {}
    );

    return (
      <ContainerScroll>
        <Drink>
          <DrinkDetailImg source={{ uri: objDrinkDetails.image }} />
          <DrinkName>{objDrinkDetails.name}</DrinkName>
          <DrinkCategory>Category: {objDrinkDetails.category}</DrinkCategory>
          <DrinkInstructions>{objDrinkDetails.instructions}</DrinkInstructions>
        </Drink>
        <DrinkInfo>
          <DrinkIngredients>
            Ingredients: {objDrinkDetails.ingredients}
          </DrinkIngredients>
        </DrinkInfo>
      </ContainerScroll>
    );
  }
}

/**
 * PROPS
 */
DrinkDetails.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
