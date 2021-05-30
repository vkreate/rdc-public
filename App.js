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
import ErrorBoundary from 'react-native-error-boundary';
import AppRouter from './src/Routes/AppRouter';
import {Provider, observer} from 'mobx-react';
import stores from './src/Stores/Stores';
import COLORS from './src/Utilities/Colors';
import {NavigationContainer} from '@react-navigation/native';
import { ReadItem } from "./src/Utilities/helpers/AsyncStorage";


console.disableYellowBox = true;

@observer
class App extends React.Component {

  componentDidMount(){
    this.userTypeCheck()
  }
  userTypeCheck=async ()=>{
    const data=await ReadItem('role')
    global['role']=data
  }

  render() {
    return (
        <Provider {...stores}>
          <NavigationContainer>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={COLORS.SECONDARY_COLOR}
            />
            <ErrorBoundary FallbackComponent={CustomErrorFallback}>
              <AppRouter />
            </ErrorBoundary>
          </NavigationContainer>
        </Provider>
    );
  }
}

export default App;
