import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Otp from '../screens/Otp';
import Barcode from '../screens/Barcode';
import CONSTANTS from '../Utilities/Constants';
import COLORS from '../Utilities/Colors';
import Splash from '../Components/Splash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import imagePath from '../Utilities/ImagePath';
import Icon from 'react-native-vector-icons/FontAwesome';
// import ComplainDetail from "../Components/ComplainDetail";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
let userRole = {userType: global['role']};

function PublicRouter() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        title: '',
        headerBackTitleVisible: false,
        gestureEnabled: false,
        headerShown: true,
      })}
      initialRouteName={CONSTANTS.SCREENS.SPLASH}>
      <Stack.Screen
        name={CONSTANTS.SCREENS.SPLASH}
        component={Splash}
        options={(navProps) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={CONSTANTS.SCREENS.LOGIN}
        component={Login}
        options={(navProps) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={CONSTANTS.SCREENS.OTP}
        component={Otp}
        options={(navProps) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
export default PublicRouter;
