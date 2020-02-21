import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import SearchBar from '../views/SearchBar';
import Home from '../views/Home';
import Detail from '../views/Detail';

const sndNavigation = createStackNavigator({
    SearchBar: {
        screen: SearchBar,
        navigationOptions: {
            headerShown: false,
        }
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            headerShown: false,
        }
    },
},{
    //initialRouteName: 'Home',
});

const homeNav = createStackNavigator({
    Home: {
        screen: Home,
    },
    SearchBar: {
        screen: SearchBar,
    },
    Detail: {
        screen: Detail,
    }
})



export default createAppContainer(sndNavigation);

