import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Barcode from '../screens/Barcode';
import WebViewScreen from '../Components/webViewScreen';
import CONSTANTS from '../Utilities/Constants';
import COLORS from '../Utilities/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Button } from "react-native";
import DrawerContent from '../Components/DrawerContent';
const HomeStack = createStackNavigator();
const ScanListStack = createStackNavigator();
// import ComplainDetail from "../Components/ComplainDetail";
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
let userRole = {userType: global['role']};
function ScanListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={ () => ({
    title: '',
    headerBackTitleVisible: false,
    gestureEnabled: false,
    headerShown: true,
  })}>
    <HomeStack.Screen name={CONSTANTS.SCREENS.BARCODE} component={Barcode} options={{ 
      headerShown: true,
      title: 'TRACESCI',
      headerTintColor: 'white',
      headerTitleStyle: { alignSelf: 'center' },
      headerStyle: {
        backgroundColor: COLORS.SECONDARY_COLOR
      },
      headerLeft: ()  => 
          <Icon name="bars" onPress={() => navigation.openDrawer()} style={{marginLeft: 8}} size={30} color="#fff" />
        
    }} />
  </HomeStack.Navigator>
);

const ScanListScreenStack = ({navigation}) => (
  <ScanListStack.Navigator screenOptions={ () => ({
    title: '',
    headerBackTitleVisible: false,
    gestureEnabled: false,
    headerShown: true,
  })}>
    <ScanListStack.Screen name={CONSTANTS.SCREENS.BARCODE} component={ScanListScreen} options={{ 
      headerShown: true,
      title: 'TRACESCI',
      headerTintColor: 'white',
      headerTitleStyle: { alignSelf: 'center' },
      headerStyle: {
        backgroundColor: COLORS.SECONDARY_COLOR
      },
      headerLeft: ()  => 
          <Icon name="bars" onPress={() => navigation.openDrawer()} style={{marginLeft: 8}} size={30} color="#fff" />
        
    }} />
  </ScanListStack.Navigator>
);

function AppRouter() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}  initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="ScanList" component={ScanListScreenStack} />
      </Drawer.Navigator>
  );
}
export default AppRouter;
