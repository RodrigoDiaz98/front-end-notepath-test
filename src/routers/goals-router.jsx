import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import GoalsScreen from "../screens/GoalsScreen";
import PathScreen from "../screens/PathScreen";
import DetallesScreen from "../screens/DetallesScreen";
import RatingScreen from "../screens/RatingScreen";

const Stack = createStackNavigator();

const GoalsRouter = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false
            }}
        >
        <Stack.Screen
            name="Goals"
            component={GoalsScreen}
            options={{
                title: "Mis objetivos",
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: '#533D8F',
                },
                headerTintColor: '#fff',
            }}
        />
        <Stack.Screen name="Path" component={PathScreen} options={{
                title: "Mi camino",
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: '#FFE66B',
                },
                headerTintColor: '#fff',
            }}/>
        <Stack.Screen
            name="Detalles"
            component={DetallesScreen}
            options={{
                headerStyle: {
                    backgroundColor: '#FF6B6B',
                },
                headerTintColor: '#fff',
            }}
        />
        <Stack.Screen
            name="Rating"
            component={RatingScreen}
            options={{
                headerStyle: {
                    backgroundColor: '#FF6B6B',
                },
                headerTintColor: '#fff',
            }}
        />
        </Stack.Navigator>
    );
};

export default GoalsRouter;