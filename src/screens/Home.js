import React from 'react';
import {
  AppState,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import imagePath from '../Utilities/ImagePath';
import CText from '../ReusableComponents/CText';
import HomeCopyRight from '../ReusableComponents/HomeCopyRight';
import {productDetailStyle} from '../Styles/productDetail';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPressLogin',
      this.backButtonHandler,
    );
    this.state = {
      appState: AppState.currentState,
    };
  }

  backButtonHandler = () => {
    BackHandler.exitApp();
    return true;
  };

  ScanHandler = () => {
    this.props.navigation.navigate('Scan');
  };

  render() {
    return (
      <View style={styles.homeContainer}>
        <Image source={imagePath.HOME_LOGO} style={styles.headerImage} />
        <View style={styles.contentContainer}>
          <View style={styles.topTextContainer}>
            <CText style={styles.textStyle}>You are seconds away </CText>
            <CText style={styles.textStyle}>from finding out if the </CText>
            <CText style={styles.textStyle}>product you are holding is </CText>
            <CText style={styles.textStyle}>genuine or not.</CText>
          </View>
          <View style={styles.buttonContainerStyle}>
            <View style={productDetailStyle.ButtonStyle}>
              <TouchableOpacity onPress={this.ScanHandler}>
                <View style={productDetailStyle.ButtonContainer}>
                  <CText style={productDetailStyle.ButtonText}>Scan Now</CText>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomTextContainer}>
            <CText style={styles.bottomTextStyle}>
              Zala Mayele, Tala Na Bopeke!
            </CText>
            <CText style={styles.bottomTextStyle}>Is part of the</CText>
            <CText style={styles.bottomTextStyle}>
              Digital Tax Stamp Program,
            </CText>
            <CText style={styles.bottomTextStyle}>implemented by the</CText>
            <CText style={styles.bottomBoldTextStyle}>
              Ministry of Industry
            </CText>
          </View>
        </View>
        <HomeCopyRight />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  buttonContainerStyle: {
    marginTop: 20,
    marginBottom: 20,
  },
  topTextContainer: {
    marginTop: 10,
  },
  bottomTextContainer: {
    marginTop: 25,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
  bottomTextStyle: {
    textAlign: 'center',
    fontSize: 22,
  },
  bottomBoldTextStyle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerImage: {
    justifyContent: 'center',
    width: '60%',
    height: 100,
    marginTop: 10,
  },
});
