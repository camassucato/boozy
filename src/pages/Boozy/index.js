import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
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

export default class Boozy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDrinkSearch: '',
      drinks: [],
    };
  }

  handleDoClear = () => {
    this.setState({
      drinks: [],
      newDrinkSearch: '',
    });
  };

  handleDoSearch = async () => {
    const { newDrinkSearch } = this.state;
    await api
      .get(`/search.php?s=${newDrinkSearch}`)
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
        });
      })
      .catch((error) => {
        const { data } = error.response;
        console.tron.log(data);
      });

    Keyboard.dismiss();
  };

  render() {
    const { newDrinkSearch, drinks } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Search Drinks"
            placeholderTextColor="#a4a4a4"
            value={newDrinkSearch}
            onChangeText={(search) => this.setState({ newDrinkSearch: search })}
            returnKeyType="send"
            onSubmitEditing={this.handleDoSearch}
          />
          <SubmitButton onPress={this.handleDoSearch}>
            <Icon name="search" size={30} color="#fff" />
          </SubmitButton>
          <ClearButton onPress={this.handleDoClear}>
            <Icon name="clear-all" size={30} color="#fff" />
          </ClearButton>
        </Form>

        <DrinkList
          data={drinks}
          renderItem={({ item }) => (
            <Drink>
              <DrinkImg source={{ uri: item.image }} />
              <DrinkName>{item.name}</DrinkName>
              <DrinkCategory>{item.category}</DrinkCategory>
              <DrinkDetailsButton onPress={() => {}}>
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
