import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Components/LoginScreen';
import OtpScreen from '../Components/OtpScreen';
import BarcodeScreen from '../Components/BarcodeScreen';
import WebViewScreen from '../Components/webViewScreen';
import CONSTANTS from '../Utilities/Constants';
import COLORS from '../Utilities/Colors';
import Splash from '../Components/Splash';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import imagePath from '../Utilities/ImagePath';
// import ComplainDetail from "../Components/ComplainDetail";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const userRole= global['role'];
let userRole = {userType: global['role']};

function AppRouter() {
  // console.log(global['role'],'userRole')
  // console.log(userRole,'userRole')
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
        component={LoginScreen}
        options={(navProps) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={CONSTANTS.SCREENS.OTP}
        component={OtpScreen}
        options={(navProps) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={CONSTANTS.SCREENS.BARCODE}
        component={BarcodeScreen}
        options={navProps => ({
          headerShown: false,
        })}
      />
        <Stack.Screen
            name={CONSTANTS.SCREENS.WEBVIEW}
            component={WebViewScreen}
            options={navProps => ({
                headerShown: false,
            })}
        />

      {/*<Stack.Screen*/}
      {/*  name={CONSTANTS.SCREENS.APPHOME}*/}
      {/*  component={TabScreen}*/}
      {/*  options={(navProps) => ({*/}
      {/*    headerShown: false,*/}
      {/*  })}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
}
// const TabScreen = (props) => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         headerBackTitleVisible: true,
//         gestureEnabled: false,
//         headerTitleAlign: 'Center',
//         headerTitle: 'headerTitle',
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;
//           if (route.name === 'Add Complaint') {
//               {props.route.params.userType !== 'FieldUser' ?
//               iconName = focused ? imagePath.HOME : imagePath.HOME:null}
//             } else if (route.name === 'My complaints') {
//             iconName = focused ? imagePath.COMPLAIN : imagePath.COMPLAIN;
//           } else if (route.name === 'Profile') {
//             iconName = focused ? imagePath.PROFILE : imagePath.PROFILE;
//           }
//           if (focused) {
//             return (
//               <Image
//                 source={iconName}
//                 style={{tintColor: COLORS.BLUE_THEME, height: 25, width: 25}}
//               />
//             );
//           } else {
//             return (
//               <Image
//                 source={iconName}
//                 style={{tintColor: 'gray', height: 25, width: 25}}
//               />
//             );
//           }
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: COLORS.BLUE_THEME,
//         inactiveTintColor: 'gray',
//         style: {
//           height: 70
//         },
//         showIcon: true,
//         labelStyle: {
//           marginBottom: 15,
//         }
//       }}
//       initialRouteName="Home">
//       {props.route.params.userType==='FieldUser'?
//         <>
//           <Tab.Screen name={'My complaints'} component={ComplainScreen} />
//       <Tab.Screen name={'Profile'} component={ProfileScreen} />
//       </>:
//         <>
//         <Tab.Screen name={'Add Complaint'} component={HomeScreen} />
//         <Tab.Screen name={'My complaints'} component={ComplainScreen} />
//         <Tab.Screen name={'Profile'} component={ProfileScreen} /></>
//         }
//     </Tab.Navigator>
//   );
// };

export default AppRouter;
