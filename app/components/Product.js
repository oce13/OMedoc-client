import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';
import list from '../data/products';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,

        };
        this.name = "";
        this.description = "";
        this.price = "";
        this.photo = "";
        this.retrieveData = this.retrieveData.bind(this);
    }

    retrieveData() {
        var data = Object.values(list);
        data.map((item, index) => {
            if (index === this.state.id) {

                this.name = item.name;
                this.description = item.Description;
                this.price = item.prix;
                this.photo = item.photo;
            } else {
                //do nothing
            }

        });
    }

    render() {
        this.retrieveData();
        return (
            <TouchableOpacity
                onPress={() => { console.log('touché'); }}
            >
                <View style={styles.container}>
                    <View style={styles.info}>
                        <Text style={styles.name}>{this.name}</Text>
                        <Text>{this.price}€</Text>
                    </View>

                    <Image source={{ uri: this.photo }} style={styles.photo} />
                </View>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginLeft: 15,
        paddingRight: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.2,
        borderColor: 'darkgrey',
        paddingTop: 10,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#f1f1f1',
    },
    info: {
        paddingLeft: 5,
    },
    name: {
        fontSize: 15,
    }
});