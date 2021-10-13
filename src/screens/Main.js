/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View} from 'react-native';
import AppRouter from '../Routes/AppRouter';
import PublicRouter from '../Routes/PublicRouter';
import COLORS from '../Utilities/Colors';
import {inject, observer} from 'mobx-react';
import {ReadItem} from '../Utilities/helpers/AsyncStorage';
import {StatusBar, AppState} from 'react-native';
import CustomErrorFallback from '../Utilities/CustomErrorFallback';
import 'react-native-gesture-handler';
import ErrorBoundary from 'react-native-error-boundary';
import {NavigationContainer} from '@react-navigation/native';

@inject('OtpStore', 'LoginStore')
@observer
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
    };
  }

  componentDidMount() {
    this.props.LoginStore.tokenCheck();
  }
  render() {
    const {token} = this.props.LoginStore;
    return (
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={COLORS.SECONDARY_COLOR}
        />
        <ErrorBoundary FallbackComponent={CustomErrorFallback}>
          {token ? (
            <>
              <AppRouter />
            </>
          ) : (
            <PublicRouter />
          )}
        </ErrorBoundary>
      </NavigationContainer>
    );
  }
}

export default Main;
