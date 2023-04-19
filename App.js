import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AccountNavigator, FAQNavigator, HomeScreenNavigator, SettingsNavigator, SharingNavigator } from './components/StackNavigator/StackNavigator';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='HomeTab' activeColor='#8454ac'>
          <Tab.Screen name="HomeTab" options={{
            tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
            component={HomeScreenNavigator} />
          <Tab.Screen name="SharingTab" options={{
            tabBarLabel: 'Sharing', tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={26} />
            ),
          }}
            component={SharingNavigator} />
          <Tab.Screen name="FAQTab" options={{
            tabBarLabel: 'FAQ', tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="frequently-asked-questions" color={color} size={26} />
            ),
          }}
            component={FAQNavigator} />
          <Tab.Screen name="SettingsTab" options={{
            tabBarLabel: 'Privacy Settings', tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="eye-settings" color={color} size={26} />
            ),
          }}
            component={SettingsNavigator} />
          <Tab.Screen name="AccountsTab" options={{
            tabBarLabel: 'Account', tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
            component={AccountNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
