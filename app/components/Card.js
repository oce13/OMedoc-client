import React from 'react';
import { StyleSheet, Text, ScrollView, AsyncStorage, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Keyboard, Animated, View, Dimensions } from 'react-native';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            address:this.props.address,
            photo:this.props.photo,
            cat:this.props.categories,
        };


    }

    render() {
        return (
            <View style={styles.cardBox}>

                <Image source= {{uri: this.props.photo}}
                style={styles.photoBox}
                 />

                <Text style={styles.name}>{this.state.name}</Text>
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
        marginBottom: Dimensions.get('window').width * 0.04,
    },
    photoBox: {
        flex: 1,
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').width * 0.9,
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
    price: {
        fontWeight: 'bold',
    }
});