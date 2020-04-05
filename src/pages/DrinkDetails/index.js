/**
 * IMPORTS
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
   * RENDER
   */
  render() {
    const { navigation } = this.props;

    const {
      name,
      category,
      image,
      instructions,
      ingredients,
    } = navigation.getParam('drink');

    const ingredientsStr = ingredients.join(', ');

    return (
      <ContainerScroll>
        <Drink>
          <DrinkDetailImg source={{ uri: image }} />
          <DrinkName>{name}</DrinkName>
          <DrinkCategory>Category: {category}</DrinkCategory>
          <DrinkInstructions>{instructions}</DrinkInstructions>
        </Drink>
        <DrinkInfo>
          <DrinkIngredients>Ingredients: {ingredientsStr}</DrinkIngredients>
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
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
