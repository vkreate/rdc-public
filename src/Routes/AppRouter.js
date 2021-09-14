import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Barcode from '../screens/Barcode';
import Home from '../screens/Home';
import Information from '../screens/Information';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductReportScreen from '../screens/ProductReportScreen';
import ScanHistoryScreen from '../screens/ScanHistoryScreen';
import CONSTANTS from '../Utilities/Constants';
import COLORS from '../Utilities/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerContent from '../Components/DrawerContent';
const HomeStack = createStackNavigator();
const InformationStack = createStackNavigator();
const ScanStack = createStackNavigator();
const ScanListStack = createStackNavigator();
const productDetailStack = createStackNavigator();
const productReportStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const InformationStackScreen = ({navigation}) => (
  <InformationStack.Navigator
    screenOptions={() => ({
      title: '',
      headerBackTitleVisible: false,
      gestureEnabled: false,
      headerShown: true,
    })}>
    <InformationStack.Screen
      name={CONSTANTS.SCREENS.BARCODE}
      component={Information}
      options={{
        headerShown: true,
        title: CONSTANTS.APP_HEADER_TITLE,
        headerTintColor: 'white',
        headerTitleStyle: {flex: 1, textAlign: 'center', marginRight: 38},
        headerStyle: {
          backgroundColor: COLORS.SECONDARY_COLOR,
        },
        headerLeft: () => (
          <Icon
            name="bars"
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 8}}
            size={30}
            color="#fff"
          />
        ),
      }}
    />
  </InformationStack.Navigator>
);

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={() => ({
      title: '',
      headerBackTitleVisible: false,
      gestureEnabled: false,
      headerShown: true,
    })}>
    <HomeStack.Screen
      name={CONSTANTS.SCREENS.BARCODE}
      component={Home}
      options={{
        headerShown: true,
        title: CONSTANTS.APP_HEADER_TITLE,
        headerTintColor: 'white',
        headerTitleStyle: {flex: 1, textAlign: 'center', marginRight: 38},
        headerStyle: {
          backgroundColor: COLORS.SECONDARY_COLOR,
        },
        headerLeft: () => (
          <Icon
            name="bars"
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 8}}
            size={30}
            color="#fff"
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const ScanStackScreen = ({navigation}) => (
<ScanStack.Navigator
    screenOptions={() => ({
      title: '',
      headerBackTitleVisible: false,
      gestureEnabled: false,
      headerShown: true,
    })}>
    <ScanStack.Screen
      name={CONSTANTS.SCREENS.BARCODE}
      component={Barcode}
      options={{
        headerShown: true,
        title: CONSTANTS.APP_HEADER_TITLE,
        headerTintColor: 'white',
        headerTitleStyle: {flex: 1, textAlign: 'center', marginRight: 38},
        headerStyle: {
          backgroundColor: COLORS.SECONDARY_COLOR,
        },
        headerLeft: () => (
          <Icon
            name="bars"
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 8}}
            size={30}
            color="#fff"
          />
        ),
      }}
    />
  </ScanStack.Navigator>
);

const ScanListScreenStack = ({navigation}) => (
  <ScanListStack.Navigator
    screenOptions={() => ({
      title: '',
      headerBackTitleVisible: false,
      gestureEnabled: false,
      headerShown: true,
    })}>
    <ScanListStack.Screen
      name={CONSTANTS.SCREENS.BARCODE}
      component={ScanHistoryScreen}
      options={{
        headerShown: true,
        title: CONSTANTS.APP_HEADER_TITLE,
        headerTintColor: 'white',
        headerTitleStyle: {flex: 1, textAlign: 'center', marginRight: 38},
        headerStyle: {
          backgroundColor: COLORS.SECONDARY_COLOR,
        },
        headerLeft: () => (
          <Icon
            name="bars"
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 8}}
            size={30}
            color="#fff"
          />
        ),
      }}
    />
  </ScanListStack.Navigator>
);

const ProductDetailScreenStack = ({navigation}) => (
  <productDetailStack.Navigator
    screenOptions={() => ({
      title: '',
      headerBackTitleVisible: false,
      gestureEnabled: false,
      headerShown: true,
    })}>
    <productDetailStack.Screen
      name={CONSTANTS.SCREENS.PRODUCT_DETAIL}
      component={ProductDetailScreen}
      options={{
        headerShown: true,
        title: CONSTANTS.APP_HEADER_TITLE,
        headerTintColor: 'white',
        headerTitleStyle: {flex: 1, textAlign: 'center', marginRight: 38},
        headerStyle: {
          backgroundColor: COLORS.SECONDARY_COLOR,
        },
        headerLeft: () => (
          <Icon
            name="bars"
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 8}}
            size={30}
            color="#fff"
          />
        ),
      }}
    />
  </productDetailStack.Navigator>
);

const ProductReportScreenStack = ({navigation}) => (
  <productReportStack.Navigator
    screenOptions={() => ({
      title: '',
      headerBackTitleVisible: false,
      gestureEnabled: false,
      headerShown: true,
    })}>
    <productReportStack.Screen
      name={CONSTANTS.SCREENS.PRODUCT_REPORT}
      component={ProductReportScreen}
      options={{
        headerShown: true,
        title: CONSTANTS.APP_HEADER_TITLE,
        headerTintColor: 'white',
        headerTitleStyle: {flex: 1, textAlign: 'center', marginRight: 38},
        headerStyle: {
          backgroundColor: COLORS.SECONDARY_COLOR,
        },
        headerLeft: () => (
          <Icon
            name="bars"
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 8}}
            size={30}
            color="#fff"
          />
        ),
      }}
    />
  </productReportStack.Navigator>
);

function AppRouter() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Home">
      <Drawer.Screen name="Information" component={InformationStackScreen} />
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Scan" component={ScanStackScreen} />
      <Drawer.Screen name="ScanList" component={ScanListScreenStack} />
      <Drawer.Screen
        name="ProductDetail"
        component={ProductDetailScreenStack}
      />
      <Drawer.Screen
        name="ProductReport"
        component={ProductReportScreenStack}
      />
    </Drawer.Navigator>
  );
}
export default AppRouter;
