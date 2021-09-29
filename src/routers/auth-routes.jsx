import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import LoginScreen from "../screens/UserScreens/LoginScreen";
import SignUpScreen from "../screens/UserScreens/SignUpScreen";
import UserTypeScreen from "../screens/UserScreens/UserTypeScreen";
import UserInstrumentScreen from "../screens/UserScreens/UserInstrumentScreen";
import UserGenreScreen from "../screens/UserScreens/UserGenreScreen";
import UserReadyScreen from "../screens/UserScreens/UserReadyScreen";
import UserLevelScreen from "../screens/UserScreens/UserLevelScreen";

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name="UserType"
        options={{ headerShown: false }}
        component={UserTypeScreen}
      />
      <Stack.Screen
        name="UserInstrument"
        options={{ headerShown: false }}
        component={UserInstrumentScreen}
      />
      <Stack.Screen
        name="UserGenre"
        options={{ headerShown: false }}
        component={UserGenreScreen}
      />
      <Stack.Screen
        name="UserLevel"
        options={{ headerShown: false }}
        component={UserLevelScreen}
      />
      <Stack.Screen
        name="UserReady"
        options={{ headerShown: false }}
        component={UserReadyScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;