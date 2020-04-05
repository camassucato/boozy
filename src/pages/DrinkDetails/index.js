/**
 * IMPORTS
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { clrPrimary, clrFntDark } from '../../constants/colors';
import {
  ContainerScroll,
  Drink,
  DrinkDetailImg,
  DrinkName,
  DrinkCategory,
  DrinkInstructions,
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

    const { name, category, image, instructions } = navigation.getParam(
      'drink'
    );

    return (
      <ContainerScroll>
        <Drink>
          <DrinkDetailImg source={{ uri: image }} />
          <DrinkName>{name}</DrinkName>
          <DrinkCategory>Category: {category}</DrinkCategory>
          <DrinkInstructions>{instructions}</DrinkInstructions>
        </Drink>
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
