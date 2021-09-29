import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import PostsScreen from "../screens/CommunityScreens/PostsScreen";

const Stack = createStackNavigator();

const CommunityRouter = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false
            }}
        >
        <Stack.Screen
            name="Posts"
            component={PostsScreen}
            options={{
                title: "Comunidad",
                headerTitleAlign: "center"
            }}
        />
        </Stack.Navigator>
    );
};

export default CommunityRouter;