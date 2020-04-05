/**
 * IMPORTS
 */
import React, { Component } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { TheCocktailDBAPICategories } from '../../services/TheCocktailDBAPI';
import { clrPrimary, clrFntDark } from '../../constants/colorPalette';
import {
  Container,
  CategoryList,
  Category,
  CategoryButton,
  CategoryButtonText,
} from './styles';

/**
 * CLASS
 */
export default class DrinksCategory extends Component {
  static navigationOptions = {
    title: "Drink's Categories",
    headerStyle: {
      backgroundColor: `${clrPrimary}`,
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
      categories: [],
    };
  }

  /**
   * DID MOUNT
   */
  async componentDidMount() {
    await TheCocktailDBAPICategories.get()
      .then((response) => {
        const { drinks } = response.data;
        if (drinks) {
          const data = response.data.drinks.map((category) => {
            return {
              category: category.strCategory,
            };
          });
          this.setState({
            categories: data,
          });
        } else {
          Alert.alert('Categories not found!');
        }
      })
      .catch(() => {
        Alert.alert('API ERROR!');
      });
  }

  /**
   * NAVIGATE TO CATEGORY'S LIST
   */
  handleNavigate = (category) => {
    const { navigation } = this.props;
    navigation.navigate('DrinkCategoryList', { category });
  };

  /**
   * RENDER
   */
  render() {
    const { categories } = this.state;

    return (
      <Container>
        <CategoryList
          data={categories}
          renderItem={({ item }) => (
            <Category>
              <CategoryButton
                onPress={() => {
                  this.handleNavigate(item.category);
                }}
              >
                <CategoryButtonText>{item.category}</CategoryButtonText>
              </CategoryButton>
            </Category>
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
DrinksCategory.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
