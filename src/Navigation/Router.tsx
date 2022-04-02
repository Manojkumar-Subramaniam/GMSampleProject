import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GMHome from '../Screens/GMHome/Container/GMHome'
import CommitInfo from '../Screens/CommitInfo/Container/CommitInfo'

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GMHome"
          component={GMHome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="CommitInfo"
          component={CommitInfo}
          options={{
            title: 'CommitInfo'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer

