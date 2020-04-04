import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TheCocktailDBAPI from '../../services/TheCocktailDBAPI';
import { clrPrimary, clrFntDark, clrFntOpac } from '../../constants/colors';
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

export default class DrinkSearch extends Component {
  static navigationOptions = {
    title: 'Search Drinks',
    headerStyle: {
      backgroundColor: `${clrPrimary}`,
    },
    headerTintColor: `${clrFntDark}`,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      newDrinkSearch: '',
      drinks: [],
      loadIcon: false,
    };
  }

  async componentDidMount() {
    const drinks = await AsyncStorage.getItem('drinks');
    if (drinks) {
      this.setState({ drinks: JSON.parse(drinks) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { drinks } = this.state;
    if (prevState.drinks !== drinks) {
      AsyncStorage.setItem('drinks', JSON.stringify(drinks));
    }
  }

  handleNavigate = (drink) => {
    const { navigation } = this.props;
    navigation.navigate('DrinkDetails', { drink });
  };

  handleDoClear = () => {
    this.setState({
      drinks: [],
      newDrinkSearch: '',
      loadIcon: false,
    });
  };

  handleDoSearch = async () => {
    this.setState({ loadIcon: true });
    const { newDrinkSearch } = this.state;
    await TheCocktailDBAPI.get(`/search.php?s=${newDrinkSearch}`)
      .then((response) => {
        const data = response.data.drinks.map((drink) => {
          return {
            id: drink.idDrink,
            name: drink.strDrink,
            category: drink.strCategory,
            image: drink.strDrinkThumb,
            instructions: drink.strInstructions,
          };
        });

        this.setState({
          drinks: data,
          newDrinkSearch: '',
          loadIcon: false,
        });
      })
      .catch((error) => {
        const { data } = error.response;
        console.tron.log(data);
      });

    Keyboard.dismiss();
  };

  render() {
    const { newDrinkSearch, drinks, loadIcon } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Search Drinks"
            placeholderTextColor={clrFntOpac}
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

DrinkSearch.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
