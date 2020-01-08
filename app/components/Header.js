import React from 'react';
import { StyleSheet, Text, ScrollView, AsyncStorage, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Keyboard, Animated, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "Lieu actuel",
        }

    }

    render() {
        return (

            <View style={styles.headerBox}>
                <TouchableOpacity style={styles.place}>
                    <Image source={require('../img/logo2.png')} style={{ width: 60, height: 60, marginRight: 20 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>{this.state.address}</Text>
                        <Ionicons name="ios-arrow-down" size={25} style={{ paddingLeft: 10 }} color='#545BA8' />
                    </View>
                </TouchableOpacity>
                <View style={styles.searchBox}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Rechercher"
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <Text>salut</Text>
                </View>

            </View>

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
    textInput: {
        width: Dimensions.get('window').width * 0.8,
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#f1f1f1',
        borderRadius: 17,
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
        paddingBottom: 10,
        paddingTop: 10,
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
    searchBox: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingTop: 10,
        alignItems: 'center',
    }
});