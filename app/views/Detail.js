import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Image, View, Dimensions, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

    categories() {
        var a = "";
        console.log(a);
        this.state.cat.map((item, index) => {
            if (index === this.state.cat.length - 1) {
                a += item;
            } else {
                a += item + "・";
            }

        });
        return (a);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Image source={{ uri: this.props.navigation.state.params.photo }}
                        style={styles.photoBox}
                    />
                    <View style={styles.nameBox}>
                        <Text style={styles.name}>{this.state.name}</Text>
                        <Text style={styles.greyText}>{this.categories()}</Text>
                        <View style={styles.address}>
                            <Ionicons name="ios-pin" size={25} color='darkgrey' />
                            <Text style={styles.greyText}>  {this.state.address}</Text>
                        </View>
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
    nameBox: {
        alignItems: 'flex-start',
        //backgroundColor: 'black',
        alignSelf: 'stretch',
        paddingLeft: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.2,
        borderBottomColor: 'darkgrey',

    },
    photoBox: {
        //flex: 1,
        height: Dimensions.get('window').height * 0.35,
        width: Dimensions.get('window').width,
        marginBottom: 10,
        //borderRadius: 5,
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#545BA8',
        paddingBottom: 10,

    },
    greyText: {
        color: 'darkgrey',
        //fontWeight: 'bold',
    }
});