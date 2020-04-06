/**
 * IMPORTS
 */
import React, { Component } from 'react';
import Lottie from 'lottie-react-native';
import PropTypes from 'prop-types';
import letsDrink from '../../assets/letsdrink.json';
import {
  Container,
  SearchButton,
  CategoryButton,
  GoButtonText,
} from './styles';
import { clrMainBG, clrFntDark } from '../../constants/colorPalette';

/**
 * CLASS
 */
export default class Boozy extends Component {
  /**
   * NAVIGATION OPTIONS
   */
  static navigationOptions = {
    title: 'Boozy',
    headerStyle: {
      backgroundColor: `${clrMainBG}`,
    },
    headerTintColor: `${clrFntDark}`,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  /**
   * NAVIGATE TO SEARCH
   */
  handleGoSearch = () => {
    const { navigation } = this.props;
    navigation.navigate('DrinkSearch');
  };

  /**
   * NAVIGATE TO CATEGORY
   */
  handleGoCategory = () => {
    const { navigation } = this.props;
    navigation.navigate('DrinksCategory');
  };

  /**
   * RENDER
   */
  render() {
    return (
      <Container>
        <Lottie source={letsDrink} autoPlay loop />
        <SearchButton
          onPress={() => {
            this.handleGoSearch();
          }}
        >
          <GoButtonText>Search Drinks</GoButtonText>
        </SearchButton>
        <CategoryButton
          onPress={() => {
            this.handleGoCategory();
          }}
        >
          <GoButtonText>Search Drink&apos;s Categories</GoButtonText>
        </CategoryButton>
      </Container>
    );
  }
}

/**
 * PROPS
 */
Boozy.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
