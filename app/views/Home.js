import React from 'react';
import { StyleSheet, Text, ScrollView, AsyncStorage, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Keyboard, Animated, View, Dimensions } from 'react-native';
import Header from '../components/Header.js';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "Lieu actuel",
        }

    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View>
                    <Header navigation={this.props.navigation}/>
                </View>
                
                <ScrollView style={styles.container}>
                    <Text style={styles.gros}>SALUT</Text>
                    <Text style={styles.gros}>SALUT</Text>
                    <Text style={styles.gros}>SALUT</Text>
                    <Text style={styles.gros}>SALUT</Text>
                    <Text style={styles.gros}>SALUT</Text>
                    <Text style={styles.gros}>SALUT</Text>
                    <Text style={styles.gros}>SALUT</Text>
                    <Text style={styles.gros}>SALUT</Text>
                    <Text style={styles.gros}>SALUT</Text>
                    <Text style={styles.gros}>SALUT</Text>
                    <Text style={styles.gros}>SALUT</Text>
                </ScrollView>
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
        //justifyContent: 'center',
        paddingLeft: 40,
        paddingRight: 40,
    },
    Moto: {
        fontSize: '18',
        fontWeight: 'bold',
        paddingBottom: 20,
        textAlign: 'center',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#00B0F0',
        borderRadius: 20,
    },
    buttonExt: {
        backgroundColor: '#fff',
        borderColor: '#00B0F0',
        borderRadius: 20,
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 16,
        marginBottom: 20,
        borderWidth: 2,
    },
    textBtn: {
        color: '#fff',
        fontWeight: 'bold',

    },
    textBtnWhite: {
        color: '#00B0F0',
        fontWeight: 'bold',
    },
    headerBox: {
        position: 'fixed',
        width: Dimensions.get('window').width,
        paddingBottom: 15,
        paddingTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'darkgrey',
    },
    place: {
        flexDirection: 'row',
        paddingLeft: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    gros:{
        fontSize: 70,
        fontWeight: 'bold',
    }
});