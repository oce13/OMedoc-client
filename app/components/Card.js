import React from 'react';
import { StyleSheet, Text, ScrollView, AsyncStorage, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Keyboard, Animated, View, Dimensions } from 'react-native';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.cardBox}>

                <Image source={require('../img/phara.jpg')} style={styles.photoBox} resizeMode='cover' />

                <Text style={styles.name}>Pharmacie Test</Text>
                <View style={styles.moreInfo}>
                    <Text style={styles.price}>5€</Text>
                    <Text> - </Text>
                    <Text>Catégorie, catégorie</Text>
                </View>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardBox: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.25,
        // borderWidth: 1,
        // borderColor: '#545BA8',
        marginBottom: Dimensions.get('window').width * 0.04,
    },
    photoBox: {
        flex: 0.95,
        height: undefined, width: undefined,
        marginBottom: 10,
        borderRadius: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#545BA8',
    },
    moreInfo: {
        flexDirection: 'row',
    },
    price:{
        fontWeight: 'bold',
    }
});