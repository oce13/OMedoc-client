import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from '../views/Login';
import SignUp from '../views/Signup';
import Home from '../views/Home';
import Welcome from '../views/Welcome';
import TabNav from './tabNavigation';

const AppNavigator = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            headerShown: false,
        }
    },
    HomeLog: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        }
    },
    SignUp :{
        screen: SignUp,
        navigationOptions: {
            headerShown: false,
        }
    },
    Home: {
        screen: TabNav,
        navigationOptions: {
            headerShown: false,
        }
    }
},{
    initialRouteName: 'Welcome',
});



export default createAppContainer(AppNavigator);
