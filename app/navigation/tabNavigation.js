import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator} from 'react-navigation-stack';
import Home from '../views/Home';
import Search from '../views/Search';
import Orders from '../views/Orders';
import Settings from '../views/Settings';
import SndNaviagation from './sndNavigation';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from '../views/SearchBar';

const homeNav = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
        }
    },
    SearchBar: {
        screen: SearchBar,
        navigationOptions: {
            headerShown: false,
        }
    },
});

const tabNavigator = createBottomTabNavigator({
    Home: {
        screen: homeNav,
        navigationOptions: {
            tabBarIcon: ({ focused, tintcolor }) => {
                return <Ionicons name="ios-home" size={25} color={focused ? '#545BA8' : 'darkgrey'} />
            }
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarIcon: ({ focused, tintcolor }) => {
                return <Ionicons name="ios-search" size={25} color={focused ? '#545BA8' : 'darkgrey'} />
            }
        }
    },
    Orders: {
        screen: Orders,
        navigationOptions: {
            tabBarIcon: ({ focused, tintcolor }) => {
                return <Ionicons name="ios-folder" size={25} color={focused ? '#545BA8' : 'darkgrey'} />
            }
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarIcon: ({ focused, tintcolor }) => {
                return <Ionicons name="ios-settings" size={25} color={focused ? '#545BA8' : 'darkgrey'} />
            }
        }
    }
}, {
    initialRouteName: 'Home',
    tabBarOptions: { showLabel: false},
});



export default createAppContainer(tabNavigator);
