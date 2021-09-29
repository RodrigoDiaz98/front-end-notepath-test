import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { HomeIcon, CommunityIcon, GoalsIcon } from '../../assets/icons/IconsIndex'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// stacks navigation
import HomeRouter from './home-router';
import GoalsRouter from './goals-router';
import CommunityRouter from './community-router';
import {Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const MainRoutes = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: () => {
                    if (route.name === 'Home') {
                        return <HomeIcon style={{ width: hp('3%'), height: hp('3%'), fill: '#1A0E2E' }} />
                    }
                    if (route.name === 'Goals') {
                        return (
                          <Icon
                            name="playlist-check"
                            type="material-community"
                            size={32}
                            color="#1A0E2E"
                          ></Icon>
                        );
                        //<GoalsIcon style={{ width: hp('3%'), height: hp('3%'), fill: '#1A0E2E' }} />;
                    }
                    if (route.name === 'Community') {
                        return <CommunityIcon style={{ width:hp('3%'), height: hp('3%'), fill: '#1A0E2E' }} />;
                    }
                },
            })}
        >
            <Tab.Screen name="Goals" component={GoalsRouter} />
            <Tab.Screen name="Home" component={HomeRouter} />
            <Tab.Screen name="Community" component={CommunityRouter} />
        </Tab.Navigator>
    )
}

export default MainRoutes;