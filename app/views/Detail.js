import React from 'react';
import { StyleSheet, Text, ScrollView, AsyncStorage, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Keyboard, Animated, View, Dimensions, FlatList } from 'react-native';
import Header from '../components/Header.js';
import Card from '../components/Card.js';
import Pharma from '../data/pharma.js';

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.navigation.state.params.id,
            name: this.props.navigation.state.params.name,
            address: this.props.navigation.state.params.address,
            photo: this.props.navigation.state.params.photo,
            cat: this.props.navigation.state.params.cat,
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Image source= {{uri: this.props.navigation.state.params.photo}}
                style={styles.photoBox}
                 />
                 <View>
                    <Text style={styles.name}>{this.state.name}</Text>
                    <Text>{this.state.cat}</Text>
                 </View>
                 
                
                </View>
                

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //paddingLeft: 40,
        //paddingRight: 40,
        //paddingTop: 20,
        marginBottom: 20,
    },
    photoBox: {
        //flex: 1,
        height: Dimensions.get('window').height*0.35,
        width: Dimensions.get('window').width,
        marginBottom: 10,
        //borderRadius: 5,
    },
    info: {
        alignItems: 'flex-start',
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#545BA8',
        paddingLeft: 10,
    },
});