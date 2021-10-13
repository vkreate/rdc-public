/**
 *  Login Screen Mobx Store Component
 * @author Laveena Chaturvedi
 * @description Global store of the applicaion
 * @flow
 */
import {observable, action, decorate} from 'mobx';
import axios from 'axios';
import {SaveItem, ReadItem} from '../Utilities/helpers/AsyncStorage';
import { Alert } from 'react-native';
import {
  PermissionsAndroid,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  BackHandler,
  ToastAndroid
} from 'react-native';
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
  getProductDetail = async (productDetailURL, latitude, longitude,scan_id) => {
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
      scan_id
    };
    let response = await axios.post(productDetailURL, data).catch(err => {
      this.setLoader(false);
      // alert(err);
      ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT)
    });
    console.log("data11",response)
    this.setLoader(false);
    // console.warn("ProductDetailscanned",response.data.product)
      //console.log("ProductDetailscanned",response.data.product)
    if (response && response.data && response.data.product) {
      console.warn("ProductDetailscanned",response.data.product)
      console.log("ProductDetailscanned",response.data.product)
      this.product = response.data.product;
      return response.data.success;
    } else {
      return false;
    }
  };

  resetError = async () => {
    console.log('test');
  };
  uploadProductReport = async data => {
    this.setLoader(true);
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
      },
    };
    let response = await axios
      .post('https://rdc-estampillage.com/api/report', data, config).then(res=>{
       // console.warn("res",res.response.data.message)
        this.setLoader(false);
        //Alert.alert("")
        return true;
        
      })
      .catch(err => {
        this.setLoader(false);
        alert(err.response.data.message);
        console.log("error",err.response.data.message)
        console.log("error1",err)

       return false
      });
    // this.product = response.data;
  /*   if (response && response.data.success) {
      this.setLoader(false);
      return response.data;
    } */
    return response;
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
