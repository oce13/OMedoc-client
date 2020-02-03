import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import SearchBar from '../views/SearchBar';
import Home from '../views/Home';
import Search from '../views/Search';
import Orders from '../views/Orders';
import Settings from '../views/Settings';

const sndNavigation = createStackNavigator({
    SearchBar: {
        screen: SearchBar,
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
})



export default createAppContainer(sndNavigation);

