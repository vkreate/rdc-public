/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StatusBar} from 'react-native';
import CustomErrorFallback from './src/Utilities/CustomErrorFallback';
import 'react-native-gesture-handler';
import ErrorBoundary from 'react-native-error-boundary';
import AppRouter from './src/Routes/AppRouter';
import PublicRouter from './src/Routes/PublicRouter';
import {inject, observer, Provider} from 'mobx-react';
import stores from './src/Stores/Stores';
import COLORS from './src/Utilities/Colors';
import {NavigationContainer} from '@react-navigation/native';
import {ReadItem} from './src/Utilities/helpers/AsyncStorage';
import Main from './src/screens/Main';
// console.disableYellowBox = true;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    };
  }
  componentDidMount() {
    this.userTypeCheck();
    this.tokenCheck();
  }
  userTypeCheck = async () => {
    const data = await ReadItem('role');
    global['role'] = data;
  };

  tokenCheck = async () => {
    const token = await ReadItem('token');
    this.setState({token});
  };

  render() {
    return (
      <Provider {...stores}>
        <Main />
      </Provider>
    );
  }
}

export default App;
