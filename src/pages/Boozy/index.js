/**
 * IMPORTS
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';
import {
  Container,
  SearchButton,
  CategoryButton,
  GoButtonText,
} from './styles';
import { clrPrimary, clrFntDark } from '../../constants/colors';

/**
 * BACKGROUND IMAGE
 */
const bgImg = require('../../assets/bg.jpg');

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
      backgroundColor: `${clrPrimary}`,
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
    const resizeMode = 'center';

    return (
      <ImageBackground
        style={{
          flex: 1,
          resizeMode,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={bgImg}
      >
        <Container>
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
      </ImageBackground>
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
