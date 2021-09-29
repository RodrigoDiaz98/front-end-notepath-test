import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Linking from 'expo-linking';

import MainRoutes from './main-routes';
import AuthRoutes from './auth-routes';

const prefix = Linking.makeUrl("/");

const RootStack = createStackNavigator();

const RootNavigation = () => {
    const linking = {
        prefixes: [prefix],
        config: {
            screens: {
                Main: {
                    screens: {
                        Inicio: {
                            initialRouteName: "Home"
                        }
                    }
                },
            }
        },
    };
    
    return (
      <NavigationContainer linking={linking}>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen
            name="Main"
            options={{ headerShown: false }}
            component={MainRoutes}
          />
          <RootStack.Screen
            name="Auth"
            options={{ headerShown: false }}
            component={AuthRoutes}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );        
}

export default RootNavigation;