/**
 *  Login Screen Mobx Store Component
 * @author Laveena Chaturvedi
 * @description Global store of the applicaion
 * @flow
 */
import {observable, action, decorate} from 'mobx';
import axios from 'axios';
import {SaveItem, ReadItem} from '../Utilities/helpers/AsyncStorage';
class ProductStore {
  productDetailURL = '';
  product = {};
  scanList = [];
  loader = false;

  setLoader = value => {
    this.loader = value;
  };

  setProductDetailURL = value => {
    this.productDetailURL = value;
  };

  setToken = async (token, phoneNumber) => {
    this.token = token;
    await SaveItem('token', token);
    await SaveItem('phoneNumber', phoneNumber);
  };

  //reset data
  resetAllData = () => {
    this.productDetailURL = '';
  };

  resetReportData = () => {
    this.product = {};
  };
  //API
  getScanedList = async () => {
    this.setLoader(true);
    this.scanList = [];
    const data = {
      token: (await ReadItem('token')) ? await ReadItem('token') : this.token,
    };
    let response = await axios
      .post('https://rdc-estampillage.com/api/scan-history', data)
      .catch(err => {
        this.setLoader(false);
        alert(err);
      });
    this.setLoader(false);
    this.scanList = response.data.scans;
    return response.data.success;
  };

  //API
  getProductDetail = async (productDetailURL, latitude, longitude) => {
    this.product = {};
    this.productDetailURL = productDetailURL;
    this.setLoader(true);
    let location = {
      lat: latitude,
      long: longitude,
    };
    const data = {
      token: (await ReadItem('token')) ? await ReadItem('token') : this.token,
      location,
    };
    let response = await axios.post(productDetailURL, data).catch(err => {
      this.setLoader(false);
      // alert(err);
    });
    this.setLoader(false);
    if (response && response.data && response.data.product) {
      this.product = response.data.product;
      return response.data.success;
    } else {
      return true;
    }
  };

  resetError = async () => {
    console.log('test');
  };
  uploadProductReport = async data => {
    this.setLoader(true);
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data; ',
      },
    };
    let response = await axios
      .post('https://rdc-estampillage.com/api/report', data, config)
      .catch(err => {
        this.setLoader(false);
        alert(err);
      });
    // this.product = response.data;
    if (response && response.data.success) {
      this.setLoader(false);
      return response.data;
    }
  };
}
// another way to decorate variables with observable
decorate(ProductStore, {
  productDetailURL: observable,
  product: observable,
  scanList: observable,
  loader: observable,
  resetReportData: action,
  setProductDetailURL: action,
  setLoader: action,
  resetAllData: action,
  signOut: action,
  resetError: action,
});
export default new ProductStore();
