import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import {ReadItem} from '../Utilities/helpers/AsyncStorage';
import {CommonActions} from '@react-navigation/native';
import CONSTANTS from '../Utilities/Constants';
import BackgroundImage1 from '../Assets/logo_bg.jpg';
import CText from '../ReusableComponents/CText';
import COLORS from '../Utilities/Colors';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    // SplashScreen.hide()
    setTimeout(function(){
      SplashScreen.hide()
    }, 3000);
    // setTimeout(SplashScreen.hide(), 3000);
    let token = await ReadItem('token');
    const data = await ReadItem('role');
    global.role = data;
    if (token === null) {
      this.props.navigation.navigate('Login');
    } else {
      // this.props.navigation.navigate('AppHome');
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: CONSTANTS.SCREENS.BARCODE,
              params: {
                transition: 'horizontal',
                //   userType: data,
              },
            },
          ],
        }),
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={BackgroundImage1}
          style={styles.backgroundImage}>
          <View style={{flex:1,justifyContent:"center"}}>
          <CText
            style={{
              color: COLORS.SECONDARY_COLOR,
              textAlign: 'center',
              fontFamily: 'Quicksand-Regular',
              fontSize: 32,
              fontWeight:'bold'
            }}>
            Track & Trace
          </CText>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Splash;
const styles = StyleSheet.create({
  backgroundImage: {flex: 1, width: null, height: null},
  container: {
    flex: 1,
  },
  appLogo: {
    width: 190,
    height: 190,
    resizeMode: 'contain',
  },
});
