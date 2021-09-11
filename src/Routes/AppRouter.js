import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Barcode from '../screens/Barcode';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductReportScreen from '../screens/ProductReportScreen';
import ScanHistoryScreen from '../screens/ScanHistoryScreen';
import CONSTANTS from '../Utilities/Constants';
import COLORS from '../Utilities/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerContent from '../Components/DrawerContent';
const HomeStack = createStackNavigator();
const ScanListStack = createStackNavigator();
const productDetailStack = createStackNavigator();
const productReportStack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
      component={Barcode}
      options={{
        headerShown: true,
        title: 'RDC Estampillage',
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
        title: 'RDC Estampillage',
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
        title: 'RDC Estampillage',
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
        title: 'RDC Estampillage',
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
      <Drawer.Screen name="Home" component={HomeStackScreen} />
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
