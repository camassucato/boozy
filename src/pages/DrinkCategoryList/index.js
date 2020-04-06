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
  Container,
  DrinkList,
  Drink,
  DrinkImg,
  DrinkName,
  DrinkDetailsButton,
  DrinkDetailsButtonText,
} from './styles';

/**
 * CLASS
 */
export default class DrinkCategoryList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('category'),
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
      drinksByCategory: [],
    };
  }

  /**
   * DID MOUNT
   */
  async componentDidMount() {
    const { navigation } = this.props;
    if (navigation) {
      const category = navigation.getParam('category');
      this.handleDoList(category);
    } else {
      const drinksByCategory = await AsyncStorage.getItem('drinksByCategory');
      if (drinksByCategory) {
        this.setState({ drinksByCategory: JSON.parse(drinksByCategory) });
      }
    }
  }

  /**
   * DID UPDATE
   */
  componentDidUpdate(_, prevState) {
    const { drinksByCategory } = this.state;
    if (prevState.drinksByCategory !== drinksByCategory) {
      AsyncStorage.setItem(
        'drinksByCategory',
        JSON.stringify(drinksByCategory)
      );
    }
  }

  /**
   * LIST
   */
  handleDoList = async (category) => {
    await TheCocktailDBAPI.get(`/filter.php?c=${category}`)
      .then((response) => {
        const { drinks } = response.data;
        if (!drinks) {
          Alert.alert('Drink List not found!');
        }

        const data = response.data.drinks.map((drink) => {
          return {
            id: drink.idDrink,
            name: drink.strDrink,
            image: drink.strDrinkThumb,
          };
        });

        this.setState({
          drinksByCategory: data,
        });
      })
      .catch(() => {
        Alert.alert('API ERROR!');
      });
  };

  /**
   * NAVIGATE TO DRINK DETAILS
   */
  handleNavigate = (drink) => {
    const { navigation } = this.props;
    navigation.navigate('DrinkDetails', { drink });
  };

  /**
   * RENDER
   */
  render() {
    const { drinksByCategory } = this.state;

    return (
      <Container>
        <DrinkList
          data={drinksByCategory}
          renderItem={({ item }) => (
            <Drink>
              <DrinkImg source={{ uri: item.image }} />
              <DrinkName>{item.name}</DrinkName>
              <DrinkDetailsButton
                onPress={() => {
                  this.handleNavigate(item);
                }}
              >
                <DrinkDetailsButtonText>
                  Cocktail Details
                </DrinkDetailsButtonText>
              </DrinkDetailsButton>
            </Drink>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Container>
    );
  }
}

/**
 * PROPS
 */
DrinkCategoryList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
