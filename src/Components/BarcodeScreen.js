import React, {Component} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import {
  PermissionsAndroid,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  BackHandler,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {inject, observer} from 'mobx-react';

@inject('OtpStore')
@observer
class BarcodeScreen extends Component {
  constructor(props) {
    super(props);
    this.backHandler = BackHandler.addEventListener(
        'hardwareBackPressLogin',
        this.backButtonHandler,
    );
  }
  backButtonHandler = () => {
    BackHandler.exitApp();
    return true;
  };
  // async componentDidMount() {
  //   const {setLatitude = {}, setLongitude = {}} = this.props.OtpStore;
  //
  //   await Geolocation.getCurrentPosition(
  //     info => {
  //       console.log(info, 'info:::::::::::::::::::');
  //       setLatitude(info.coords.latitude);
  //       setLongitude(info.coords.longitude);
  //
  //       if (
  //         info.coords.latitude !== undefined &&
  //         info.coords.longitude !== undefined
  //       ) {
  //         Geocoder.init('AIzaSyDkYcFk5rZMvW2Sf0JnCZm9YGvG-Zwgb2U', {
  //           language: 'en',
  //         });
  //         Geocoder.from(info.coords.latitude, info.coords.longitude)
  //           .then(json => {
  //             let addressComponent = json.results[0].formatted_address;
  //             this.setState({address: addressComponent});
  //           })
  //           .catch(error => {
  //             // console.warn(error,'error::::::::::')
  //           });
  //       }
  //     },
  //     async error => {
  //       console.log(error, 'error:::::::::::');
  //       if (error.PERMISSION_DENIED === 1) {
  //         console.log('inside permission');
  //         await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
  //           title: 'Location Request',
  //               message: 'App needs access to your location to proceed further',
  //        }
  //         );
  //         // this.backButtonHandler()
  //       }
  //     },
  //     {forceRequestLocation: true},
  //   );
  //   // }
  // }
  onSuccess = e => {
    console.log(e,'e::::::::::::::')
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
    this.props.navigation.navigate('WebView', {url: e.data});
  };
  render() {
    return (
      <View>
        <QRCodeScanner
          onRead={e => this.onSuccess(e)}
          // flashMode={RNCamera.Constants.FlashMode.torch}
          // reactivate={true}
          checkAndroid6Permissions={true}
          // permissionDialogTitle=" App needs access to your camera to proceed further"
          // permissionDialogMessage="Need camera permission"
          // ref={(node) => { this.scanner = node }}
         // containerStyle={{margin:0,padding:0}}
          cameraStyle={{height:1920}}

        />
      </View>
    );
  }
}

export default BarcodeScreen;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: 'red',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
    backgroundColor: 'black',
  },
});
