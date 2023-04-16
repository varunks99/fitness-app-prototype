import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FAQNavigator, HomeScreenNavigator, SettingsNavigator } from './components/StackNavigator/StackNavigator';
// import { CopilotProvider, CopilotStep, walkthroughable } from 'react-native-copilot';

const Tab = createMaterialBottomTabNavigator();
// const CopilotIcon = walkthroughable(MaterialCommunityIcons);

export default function App() {
  return (
    // <CopilotProvider overlay='svg' animated={true}>
    <NavigationContainer>
      <Tab.Navigator initialRouteName='HomeTab'>
        <Tab.Screen name="HomeTab" options={{
          tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
          component={HomeScreenNavigator} />
        <Tab.Screen name="FAQTab" options={{
          tabBarLabel: 'FAQ', tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="frequently-asked-questions" color={color} size={26} />
          ),
        }}
          component={FAQNavigator} />
        <Tab.Screen name="SettingsTab" options={{
          tabBarLabel: 'Privacy Settings', tabBarIcon: ({ color }) => (
            // <CopilotStep text="This is the settings tab" order={1} name="settings">
            <MaterialCommunityIcons name="eye-settings" color={color} size={26} />
            // </CopilotStep>

          ),
        }}
          component={SettingsNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
    // </CopilotProvider>
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
