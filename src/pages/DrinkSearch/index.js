/**
 * IMPORTS
 */
import React, { Component } from 'react';
import { Alert, Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TheCocktailDBAPI } from '../../services/TheCocktailDBAPI';
import { clrMainBG, clrFntDark } from '../../constants/colorPalette';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  ClearButton,
  DrinkList,
  Drink,
  DrinkImg,
  DrinkName,
  DrinkCategory,
  DrinkDetailsButton,
  DrinkDetailsButtonText,
} from './styles';

/**
 * CLASS
 */
export default class DrinkSearch extends Component {
  static navigationOptions = {
    title: 'Search Drinks',
    headerStyle: {
      backgroundColor: `${clrMainBG}`,
    },
    headerBackTitleVisible: false,
    headerTintColor: `${clrFntDark}`,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  /**
   * CONSTRUCTOR
   */
  constructor(props) {
    super(props);
    this.state = {
      newDrinkSearch: '',
      drinks: [],
      loadIcon: false,
    };
  }

  /**
   * DID MOUNT
   */
  async componentDidMount() {
    const drinks = await AsyncStorage.getItem('drinks');
    if (drinks) {
      this.setState({ drinks: JSON.parse(drinks) });
    }
  }

  /**
   * DID UPDATE
   */
  componentDidUpdate(_, prevState) {
    const { drinks } = this.state;
    if (prevState.drinks !== drinks) {
      AsyncStorage.setItem('drinks', JSON.stringify(drinks));
    }
  }

  /**
   * NAVIGATE TO DRINK DETAILS
   */
  handleNavigate = (drink) => {
    const { navigation } = this.props;
    navigation.navigate('DrinkDetails', { drink });
  };

  /**
   * CLEAR SEARCH
   */
  handleDoClear = () => {
    this.setState({
      drinks: [],
      newDrinkSearch: '',
      loadIcon: false,
    });
  };

  /**
   * SEARCH
   */
  handleDoSearch = async () => {
    this.setState({ loadIcon: true });
    const { newDrinkSearch } = this.state;
    await TheCocktailDBAPI.get(`/search.php?s=${newDrinkSearch}`)
      .then((response) => {
        const { drinks } = response.data;
        if (drinks) {
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
              ingredients: filteredIngredients,
            };
          });

          this.setState({
            drinks: data,
            newDrinkSearch: '',
            loadIcon: false,
          });
        } else {
          Alert.alert('Drink not found!');
          this.setState({
            newDrinkSearch: '',
            loadIcon: false,
          });
        }
      })
      .catch(() => {
        Alert.alert('API ERROR!');
        this.setState({
          newDrinkSearch: '',
          loadIcon: false,
        });
      });

    Keyboard.dismiss();
  };

  /**
   * RENDER
   */
  render() {
    const { newDrinkSearch, drinks, loadIcon } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Search Drinks"
            placeholderTextColor={clrFntDark}
            value={newDrinkSearch}
            onChangeText={(search) => this.setState({ newDrinkSearch: search })}
            returnKeyType="send"
            onSubmitEditing={this.handleDoSearch}
          />
          <SubmitButton loading={loadIcon} onPress={this.handleDoSearch}>
            {loadIcon ? (
              <ActivityIndicator color={clrFntDark} />
            ) : (
              <Icon name="search" size={30} color={clrFntDark} />
            )}
          </SubmitButton>
          <ClearButton onPress={this.handleDoClear}>
            <Icon name="clear-all" size={30} color={clrFntDark} />
          </ClearButton>
        </Form>
        <DrinkList
          data={drinks}
          renderItem={({ item }) => (
            <Drink>
              <DrinkImg source={{ uri: item.image }} />
              <DrinkName>{item.name}</DrinkName>
              <DrinkCategory>{item.category}</DrinkCategory>
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
        />
      </Container>
    );
  }
}

/**
 * PROPS
 */
DrinkSearch.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
