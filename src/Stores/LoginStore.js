/**
 *  Login Screen Mobx Store Component
 * @author Laveena Chaturvedi
 * @description Global store of the applicaion
 * @flow
 */
import {observable, action, decorate} from 'mobx';
import axios from 'axios';
import CONSTANTS from '../Utilities/Constants';
class LoginStore {
  phoneNumber = '';
  loader = false;

  setLoader = value => {
    this.loader = value;
  };

  setPhoneNumber = value => {
    this.phoneNumber = value;
  };

  //reset data
  resetAllData = () => {
    this.phoneNumber = '';
  };
  //API
  login = async mobileNumber => {
    this.setLoader(true);
    const data = {
      country_code: '91',
      phone: mobileNumber,
    };
    console.log(data, 'data::::::::::::::::::::: in otp ');
    let response = await axios
      .post('Http://tnt.vkreate.in/api/get-otp', data)
      .catch(err => {
        this.setLoader(false);
        alert(err);
      });
    // console.log(response,'response::::')
    // console.log(response.data,'response::::data')
    return response.data;
  };
}
// another way to decorate variables with observable
decorate(LoginStore, {
  phoneNumber: observable,
  loader: observable,

  setPhoneNumber: action,
  setLoader: action,
  resetAllData: action,
});
export default new LoginStore();
