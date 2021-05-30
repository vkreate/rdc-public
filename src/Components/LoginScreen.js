/**
 * @author Laveena Chaturvedi
 * @description Login Screen
 * @flow
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  BackHandler,
  TouchableOpacity,
  PermissionsAndroid,
  Text,
} from 'react-native';
import COLORS from '../Utilities/Colors';
import {observer, inject} from 'mobx-react';
import SplashScreen from 'react-native-splash-screen';
import CLoader from '../ReusableComponents/CLoader';
import BackgroundImage1 from '../../src/Assets/logo_bg.jpg';
import CONSTANTS from '../Utilities/Constants';
import {mobileNumber} from '../Utilities/APi/validation';
import CText from '../ReusableComponents/CText';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

@inject('LoginStore', 'OtpStore')
@observer
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      modelVisible: false,
    };
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPressLogin',
      this.backButtonHandler,
    );
  }
  backButtonHandler = () => {
    BackHandler.exitApp();
    return true;
  };
  async componentDidMount() {
    console.log(this.props.LoginStore.loader, 'this.props.LoginStore.loader');
    SplashScreen.hide();
    // setTimeout(SplashScreen.hide(), 3000);
    // setTimeout(SplashScreen.hide(), 3000);
    this.props.LoginStore.resetAllData();
    const {setLatitude = {}, setLongitude = {}} = this.props.OtpStore;

    await Geolocation.getCurrentPosition(
      info => {
        console.log(info, 'info:::::::::::::::::::');
        setLatitude(info.coords.latitude);
        setLongitude(info.coords.longitude);

        if (
          info.coords.latitude !== undefined &&
          info.coords.longitude !== undefined
        ) {
          Geocoder.init('AIzaSyDkYcFk5rZMvW2Sf0JnCZm9YGvG-Zwgb2U', {
            language: 'en',
          });
          Geocoder.from(info.coords.latitude, info.coords.longitude)
            .then(json => {
              let addressComponent = json.results[0].formatted_address;
              this.setState({address: addressComponent});
            })
            .catch(error => {
              // console.warn(error,'error::::::::::')
            });
        }
      },
      async error => {
        if (error.PERMISSION_DENIED === 1) {
          console.log('inside permission');
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Request',
              message: 'App needs access to your location to proceed further',
            },
          );
        }
      },
      {forceRequestLocation: true},
    );
    // }
  }
  login = async () => {
    const {phoneNumber} = this.props.LoginStore;
    const {login = {}, setLoader = {}} = this.props.LoginStore;
    let isValid = mobileNumber(phoneNumber);
    if (phoneNumber !== '' && isValid) {
      let response = await login(phoneNumber);
      console.log(response, 'response::::::::::::::::: in screen');
      if (response.success === true) {
        setLoader(false);
        this.props.navigation.navigate(CONSTANTS.SCREENS.OTP, {
          phoneNumber: phoneNumber,
          otp: response.otp,
        });
      } else {
        setLoader(false);
        this.setState({
          error: 'Please Enter Valid Mobile Number',
          modelVisible: true,
        });
      }
    } else {
      setLoader(false);
      this.setState({
        error: 'Please Enter Valid Mobile Number',
        modelVisible: true,
      });
    }
  };

  render() {
    const {phoneNumber, setPhoneNumber = {}} = this.props.LoginStore;

    return (
      <ImageBackground source={BackgroundImage1} style={styles.backgroundImage}>
        <View style={{flex: 1}}>
          <CText
            style={{
              color: COLORS.SECONDARY_COLOR,
              textAlign: 'center',
              fontFamily: 'Quicksand-Regular',
              fontSize: 32,
              marginTop: '30%',
              fontWeight: 'bold',
            }}>
            Track & Trace
          </CText>
          <View style={{marginTop: '30%', justifyContent: 'center'}}>
            <CText style={styles.signInText}>Sign In</CText>
            <View style={{alignItems: 'center'}}>
              <View style={styles.section}>
                <TextInput
                  placeholder=" Enter Mobile Number "
                  placeholderTextColor="black"
                  style={styles.textInput}
                  keyboardType="numeric"
                  maxLength={10}
                  onChangeText={value => {
                    const newVal = value.replace(/[^0-9]/g, '');
                    setPhoneNumber(newVal);
                  }}
                  value={phoneNumber}
                />
              </View>
              <TouchableOpacity style={styles.ButtonStyle} onPress={this.login}>
                <View>
                  <CText style={styles.Button}>GET OTP</CText>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {this.state.modelVisible === true && (
            <TouchableOpacity
              onPress={() => this.setState({modelVisible: false})}
              style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: 'white',
                padding: 10,
                width: '100%',
              }}>
              <View>
                <Text>{this.state.error}</Text>
              </View>
            </TouchableOpacity>
          )}
          {this.props.LoginStore.loader && <CLoader />}
        </View>
      </ImageBackground>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  signInText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 30,
  },
  backgroundImage: {flex: 1, width: null, height: null},
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 15,
    fontSize: 18,
    marginLeft: 5,
  },
  section: {
    height: 50,
    marginVertical: 40,
    backgroundColor: 'white',
    borderRadius: 15,
    width: '84%',
  },
  textStyle: {
    color: COLORS.SECONDARY_COLOR,
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  ButtonStyle: {
    width: '84%',
    height: 50,
    backgroundColor: COLORS.BLUE_THEME,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    color: COLORS.SECONDARY_COLOR,
    fontSize: 18,
    textAlign: 'center',
  },
});
