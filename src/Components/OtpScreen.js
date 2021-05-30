/**
 * @author Laveena Chaturvedi
 * @description OTP Screen
 * @flow
 */
import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, BackHandler, Text} from 'react-native';
import COLORS from '../Utilities/Colors';
import {observer, inject} from 'mobx-react';
import CodeInput from 'react-native-confirmation-code-input';
import CText from '../ReusableComponents/CText';
import CLoader from '../ReusableComponents/CLoader';
import BackgroundImage1 from '../Assets/logo_bg.jpg';
import {CButton} from '../ReusableComponents/CButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {mobileNumber} from '../Utilities/APi/validation';
import CONSTANTS from '../Utilities/Constants';

@inject('OtpStore', 'LoginStore')
@observer
class OtpScreen extends Component {
  constructor(props) {
    super(props);
    this.backHandler = BackHandler.addEventListener(
        'hardwareBackPressLogin',
        this.backButtonHandler,
    );
    this.state = {
      error: '',
      modelVisible: false,
    };
  }
  backButtonHandler = () => {
    this.props.navigation.navigate(CONSTANTS.SCREENS.LOGIN);
    return true;
  };
  resendOtp = async () => {
    let phoneNumber = this.props.route.params.phoneNumber;
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
        this.setState({
          error: 'Otp Send Successfully',
          modelVisible: true,
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

  _onFinishCheckingCode2 = async (data, code) => {
    this.props.OtpStore.setOtp(data);
    // const {otpInput = {}, otp, setErrorText = {}} = this.props.OtpStore;

    // if (otp !== '') {
    //   let phoneNumber = this.props.route.params.phoneNumber;
    //   let response = await otpInput(phoneNumber, otp);
    //   console.log(response, 'response:::: in otp screem');
    //   if (response.success === true) {
    //     this.props.navigation.navigate('Barcode');
    //   } else {
    //     setErrorText(response.message);
    //   }
    // }
  };
  submit = async () => {
    const {otpInput = {}, otp, setErrorText = {}} = this.props.OtpStore;

    if (otp !== '') {
      let phoneNumber = this.props.route.params.phoneNumber;
      let response = await otpInput(phoneNumber, otp);
      console.log(response, 'response:::: in otp screem');
      if (response.success === true) {
        this.props.navigation.navigate('Barcode');
      } else {
        console.log('inside else')
        this.setState({
          error: 'Please Enter Valid Otp',
          modelVisible: true,
        });
      }
    }else{
        this.setState({
            error: 'Please Enter Valid Otp',
            modelVisible: true,
        });
    }
  };
  componentDidMount() {
    const {reset = {}} = this.props.OtpStore;
    reset();
  }

  render() {
    return (
      <ImageBackground source={BackgroundImage1} style={styles.backgroundImage}>
        <View style={{flex:1}}>
        <CText
            style={{
              color: COLORS.SECONDARY_COLOR,
              textAlign: 'center',
              fontFamily: 'Quicksand-Regular',
              fontSize:32,
              marginTop:'30%',
              fontWeight:'bold'
            }}>
          Track & Trace
        </CText>
        <View style={{justifyContent:'center',marginTop:'30%'}}>

          <CText
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: 'white',
              marginLeft: 30,
              marginBottom: 20,
            }}>
            Enter OTP
          </CText>

          <CodeInput
            ref="codeInputRef2"
            secureTextEntry
            activeColor="black"
            inactiveColor="black"
            autoFocus={false}
            ignoreCase={true}
            codeLength={4}
            ClassNames="border-l-r"
            inputPosition="center"
            size={70}
            onFulfill={(isValid, code) => {
              this._onFinishCheckingCode2(isValid, code);
            }}
            containerStyle={{
              marginHorizontal: 30,
              // marginTop: 30,
              marginBottom: 20,
              justifyContent: 'space-between',
              // paddingBottom:0
              // height:0,
              flex:.05,
            }}
            codeInputStyle={{
              borderWidth: 1.5,
              borderRadius: 15,
              backgroundColor: 'white',
              height: 50,
            }}
          />

          <TouchableOpacity style={styles.ButtonStyle} onPress={this.submit}>
            <View>
              <CText style={styles.Button}>SUBMIT</CText>
            </View>
          </TouchableOpacity>

            <View style={{flexDirection:'row',marginHorizontal: 30,justifyContent:'center',alignItems:'center'}}>
              <CText
                  style={{
                    color: 'white',
                    marginTop: 40,
                    fontSize: 16,
                    textAlign: 'center',
                  }}>
                Didn't Receive OTP?
              </CText>
              <TouchableOpacity onPress={this.resendOtp}>
              <CText
                  style={{
                    color: 'white',
                    marginTop: 40,
                    fontSize: 16,
                    textAlign: 'center',
                    fontWeight:'bold',
                    marginLeft:3
                  }}>
                Resend OTP
              </CText>
              </TouchableOpacity>
            </View>




          {this.props.OtpStore.loader||this.props.LoginStore.loader && <CLoader />}
        </View>

        </View>
          {this.state.modelVisible === true && (
              <TouchableOpacity onPress={()=>this.setState({modelVisible: false})}
                                style={{justifyContent:'flex-end',backgroundColor:'white',padding:10,width:'100%'}}>
                  <View >
                      <Text>{this.state.error}</Text>
                  </View>
              </TouchableOpacity>

          )}
      </ImageBackground>
    );
  }
}

export default OtpScreen;

const styles = StyleSheet.create({
  backgroundImage: {flex: 1, width: null, height: null},
  ButtonStyle: {
    marginHorizontal: 30,
    width: '84%',
    // alignItems:'center',
    // paddingHorizontal: 25,
    height: 50,
    // paddingHorizontal: 70,
    backgroundColor: COLORS.BLUE_THEME,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  Button: {
    color: COLORS.SECONDARY_COLOR,
    fontSize: 18,
    textAlign: 'center',
  },
});
