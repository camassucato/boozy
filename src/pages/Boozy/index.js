import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';
import {
  Container,
  SearchButton,
  CategoryButton,
  GoButtonText,
} from './styles';
import { clrPrimary, clrFntDark } from '../../constants/colors';

const bgImg = require('../../assets/bg.jpg');

export default class Boozy extends React.Component {
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

  constructor(props) {
    super(props);
    this.state = {
      // newDrinkSearch: '',
      // drinks: [],
    };
  }

  handleGoSearch = () => {
    const { navigation } = this.props;
    navigation.navigate('DrinkSearch');
  };

  handleGoCategory = () => {
    const { navigation } = this.props;
    navigation.navigate('DrinkSearch');
  };

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
        // source={require('../../assets/img/bg.jpg')}
        // source={{
        //   uri:
        //     'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        //     'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        // }}
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

Boozy.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
