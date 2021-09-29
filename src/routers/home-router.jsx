import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import PathScreen from "../screens/PathScreen";
import GoalsScreen from "../screens/GoalsScreen";
import RatingScreen from "../screens/RatingScreen";

const Stack = createStackNavigator();

const HomeRouter = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "NotePath",
            headerTitleAlign: "center",
            headerStyle: {
                    backgroundColor: '#533D8F',
                },
                headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Path"
          component={PathScreen}
          options={{
            title: "Mi camino",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Goals"
          component={GoalsScreen}
          options={{
            title: "Mis objetivos",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    );
};

export default HomeRouter;
