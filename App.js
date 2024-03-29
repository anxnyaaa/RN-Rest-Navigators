import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

import WelcomeScreen from './screens/WelcomeScreen'
import UserScreen from './screens/UserScreen'

export default function App() {
  return <NavigationContainer>
    <Drawer.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#3c0a6b'},
      headerTintColor: 'white',
      drawerActiveTintColor: '#3c0a6b',
    }}>
      <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{
        drawerLabel: 'Welcome Screen',
        drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size}/>
      }}/>
      <Drawer.Screen name="User" component={UserScreen} options={{
        drawerLabel: 'User Screen',
        drawerIcon: ({color, size}) => <Ionicons name='person' color={color} size={size}/>
      }}/>
    </Drawer.Navigator>
  </NavigationContainer>;
}